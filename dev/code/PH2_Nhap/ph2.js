/**
 * Viettel WMS — PH2 Nhập kho (DO Pool)
 * ph2.js — Logic trang Danh sách Order Nhập kho (đồng bộ phong cách PH3.js)
 */
'use strict';

let STATE = {
  tab: 'all',       // all | pending | processing | done
  query: '',
  page: 1,
  pageSize: 10,
  sortField: null,
  sortAsc: true
};

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  applyFilter();
  bindEvents();
});

/* ============================================================
   STATS CARDS
   ============================================================ */
function renderStats() {
  const summary = MOCK.getInboundSummaryHN01();

  document.getElementById('stat-total').textContent = summary.total;
  document.getElementById('stat-volume').textContent = summary.totalVolume + ' m³ hàng hóa';
  document.getElementById('stat-pending').textContent = summary.pending;
  document.getElementById('stat-processing').textContent = summary.processing;
  document.getElementById('stat-done').textContent = summary.done + '/' + summary.doneThisYear;

  document.getElementById('tab-count-all').textContent = summary.total;
  document.getElementById('tab-count-pending').textContent = summary.pending;
  document.getElementById('tab-count-processing').textContent = summary.processing;
  document.getElementById('tab-count-done').textContent = summary.done + '/' + summary.total;
}

/* ============================================================
   FILTER + SEARCH + SORT
   ============================================================ */
function applyFilter() {
  const orders = MOCK.getInboundByWarehouse('HN01');
  let list = [...orders];

  // Tab filter
  if (STATE.tab === 'pending') {
    list = list.filter(o => o.status === 'pending');
  } else if (STATE.tab === 'processing') {
    list = list.filter(o => ['processing', 'confirmed', 'error'].includes(o.status));
  } else if (STATE.tab === 'done') {
    list = list.filter(o => o.status === 'done');
  }

  // Search query
  const q = STATE.query.trim().toLowerCase();
  if (q) {
    list = list.filter(o =>
      o.id.toLowerCase().includes(q) ||
      (o.refCode || '').toLowerCase().includes(q) ||
      (o.supplierName || '').toLowerCase().includes(q) ||
      o.categoryLabel.toLowerCase().includes(q)
    );
  }

  // Sort
  if (STATE.sortField) {
    list.sort((a, b) => {
      let va = a[STATE.sortField] || '';
      let vb = b[STATE.sortField] || '';
      if (typeof va === 'string') va = va.toLowerCase();
      if (typeof vb === 'string') vb = vb.toLowerCase();
      if (va < vb) return STATE.sortAsc ? -1 : 1;
      if (va > vb) return STATE.sortAsc ? 1 : -1;
      return 0;
    });
  }

  STATE.filteredOrders = list;
  renderTable();
  updateTabCounts();
}

/* ============================================================
   TAB COUNTS
   ============================================================ */
function updateTabCounts() {
  const orders = MOCK.getInboundByWarehouse('HN01');
  const all = orders.length;
  const pending = orders.filter(o => o.status === 'pending').length;
  const proc = orders.filter(o => ['processing', 'confirmed', 'error'].includes(o.status)).length;
  const done = orders.filter(o => o.status === 'done').length;

  document.getElementById('tab-count-all').textContent = all;
  document.getElementById('tab-count-pending').textContent = pending;
  document.getElementById('tab-count-processing').textContent = proc;
  document.getElementById('tab-count-done').textContent = done + '/' + all;
}

/* ============================================================
   RENDER TABLE
   ============================================================ */
function renderTable() {
  const tbody = document.getElementById('ph2-tbody');
  if (!tbody) return;

  const list = STATE.filteredOrders || [];
  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / STATE.pageSize));
  if (STATE.page > pages) STATE.page = pages;

  const start = (STATE.page - 1) * STATE.pageSize;
  const slice = list.slice(start, start + STATE.pageSize);

  if (slice.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:48px; color:var(--slate-400);">Không tìm thấy lệnh nhập kho nào.</td></tr>`;
    document.getElementById('result-count-footer').textContent = 'Hiển thị 0-0 / 0 lệnh';
    renderPagination(0, 1);
    return;
  }

  tbody.innerHTML = slice.map(o => renderRow(o)).join('');
  renderPagination(total, pages);
  document.getElementById('result-count-footer').textContent = `Hiển thị ${start + 1}–${Math.min(start + STATE.pageSize, total)} / ${total} lệnh`;
}

/* ============================================================
   RENDER ROW
   ============================================================ */
function renderRow(o) {
  // Task progress cell
  let taskCell = '';
  if (o.totalTasks) {
    const pct = Math.round((o.doneTasks / o.totalTasks) * 100);
    taskCell = `
      <div class="task-progress-cell">
        <span class="task-text">${o.doneTasks}/${o.totalTasks}</span>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${pct}%;"></div>
        </div>
      </div>
    `;
  } else {
    taskCell = '<span style="color:var(--slate-400);">—</span>';
  }

  // Status Badge class
  let statusCls = 'badge-slate';
  if (o.status === 'done') statusCls = 'badge-success';
  else if (o.status === 'pending') statusCls = 'badge-warning';
  else if (o.status === 'error' || o.statusLabel.includes('Lỗi') || o.statusLabel.includes('Từ chối')) statusCls = 'badge-danger';
  else if (['Đang xử lý', 'Đang nhập', 'Đang phân rã', 'Đã phân rã'].includes(o.statusLabel)) statusCls = 'badge-info';

  const statusHtml = `<span class="badge ${statusCls}">${escHtml(o.statusLabel)}</span>`;

  // SLA Badge class
  let slaCls = 'sla-ok';
  if (o.slaRemaining && (o.slaRemaining.includes('p') || o.slaRemaining.includes('30p'))) slaCls = 'sla-warning';
  if (o.slaRemaining && o.slaRemaining.includes('Quá hạn')) slaCls = 'sla-danger';

  let slaText = o.slaRemaining || '—';
  let slaIconHtml = o.slaRemaining ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` : '';
  const slaHtml = o.slaRemaining ? `
    <div class="sla-badge ${slaCls}">
      ${slaIconHtml}
      <span>${escHtml(slaText)}</span>
    </div>
  ` : '<span style="color:var(--slate-400);">—</span>';

  // Assignee avatar
  let assigneeHtml = '';
  if (o.assigneeName && o.assigneeName !== '—') {
    const initials = getInitials(o.assigneeName);
    assigneeHtml = `
      <div class="assignee-cell">
        <div class="assignee-avatar">${escHtml(initials)}</div>
        <span style="font-weight:500;">${escHtml(o.assigneeName)}</span>
      </div>
    `;
  } else {
    assigneeHtml = '<span style="color:var(--slate-400);">—</span>';
  }

  // Category
  const catClass = {
    'INB-NCC': 'cat-inb-ncc',
    'INB-TRF': 'cat-inb-trf',
    'INB-OTH': 'cat-inb-oth',
  }[o.category] || '';
  const catHtml = `<span class="cat-pill ${catClass}"><span class="cat-dot"></span>${escHtml(o.categoryLabel)}</span>`;

  // Action
  const actionHtml = renderActions(o);

  return `
    <tr data-id="${o.id}">
      <td>
        <div class="order-code-wrap">
          <div style="display:flex; align-items:center;">
            <span class="order-id" onclick="openDetail('${o.id}')">${escHtml(o.id)}</span>
            <span class="type-badge type-xe">${escHtml(o.type)}</span>
          </div>
          <span class="order-ref">${escHtml(o.refCode || '')}</span>
        </div>
      </td>
      <td>${catHtml}</td>
      <td style="font-size:12px;color:var(--slate-700);white-space:nowrap;">${escHtml(o.supplierName || '—')}</td>
      <td>
        <span style="font-family:monospace;font-size:12px;font-weight:600;color:var(--slate-800);">${escHtml(o.warehouse)}</span>
      </td>
      <td>${taskCell}</td>
      <td>${statusHtml}</td>
      <td>${slaHtml}</td>
      <td style="font-size:12.5px;color:var(--slate-700);white-space:nowrap;">${escHtml(o.inboundDate || '—')}</td>
      <td>${assigneeHtml}</td>
      <td>
        <div class="action-cell">
          ${actionHtml}
        </div>
      </td>
    </tr>
  `;
}

/* ============================================================
   ACTION BUTTONS
   ============================================================ */
function renderActions(o) {
  let btns = '';

  if (o.status === 'pending') {
    btns += `
      <button class="btn btn-danger-sm" onclick="confirmOrder('${o.id}')">
        Xác nhận
      </button>
    `;
  }

  btns += `
    <button class="btn btn-view" onclick="openDetail('${o.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      Xem
    </button>
  `;

  return btns;
}

/* ============================================================
   PAGINATION
   ============================================================ */
function renderPagination(total, pages) {
  const el = document.getElementById('pagination');
  if (!el) return;
  if (pages <= 1) { el.innerHTML = ''; return; }

  let html = '';
  html += `<button class="page-btn ${STATE.page === 1 ? 'disabled' : ''}" onclick="goPage(${STATE.page - 1})" ${STATE.page === 1 ? 'disabled' : ''}>‹</button>`;
  for (let i = 1; i <= pages; i++) {
    html += `<button class="page-btn ${i === STATE.page ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn ${STATE.page === pages ? 'disabled' : ''}" onclick="goPage(${STATE.page + 1})" ${STATE.page === pages ? 'disabled' : ''}>›</button>`;
  el.innerHTML = html;
}

function goPage(p) {
  const pages = Math.ceil(STATE.filteredOrders.length / STATE.pageSize);
  if (p < 1 || p > pages) return;
  STATE.page = p;
  renderTable();
}

/* ============================================================
   TABS
   ============================================================ */
function switchTab(tab) {
  STATE.tab = tab;
  document.querySelectorAll('.tab-item').forEach(el => {
    el.classList.toggle('active', el.id === `tab-${tab}`);
  });
  STATE.page = 1;
  applyFilter();
}

/* ============================================================
   SEARCH
   ============================================================ */
function handleSearch(val) {
  STATE.query = val;
  STATE.page = 1;
  applyFilter();
}

/* ============================================================
   SORT
   ============================================================ */
function sortBy(field) {
  if (STATE.sortField === field) {
    STATE.sortAsc = !STATE.sortAsc;
  } else {
    STATE.sortField = field;
    STATE.sortAsc = true;
  }
  applyFilter();
}

/* ============================================================
   CONFIRM ORDER
   ============================================================ */
function confirmOrder(id) {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: 'loadDetail', url: `PH2_Nhap/inbound_confirm.html?id=${id}` }, '*');
  } else {
    window.location.href = `inbound_confirm.html?id=${id}`;
  }
}

/* ============================================================
   DETAIL VIEW
   ============================================================ */
function openDetail(id) {
  const detUrl = `PH2_Nhap/inbound_detail.html?id=${id}`;

  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: 'loadDetail', url: detUrl }, '*');
  } else {
    window.location.href = `inbound_detail.html?id=${id}`;
  }
}

/* ============================================================
   EXPORT EXCEL
   ============================================================ */
function exportExcel() {
  alert('Đang xuất danh sách lệnh nhập ra tệp Excel...');
}

/* ============================================================
   BIND EVENTS
   ============================================================ */
function bindEvents() {
  // Sort icons toggling can be added here if needed
}

/* ============================================================
   UTILS
   ============================================================ */
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name[0].toUpperCase();
}
