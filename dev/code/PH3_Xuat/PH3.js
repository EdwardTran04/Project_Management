'use strict';

let STATE = {
  tab: 'all',
  query: '',
  page: 1,
  pageSize: 10
};

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderList();
});

function renderStats() {
  const summary = MOCK.getOutboundSummaryHN01();
  document.getElementById('stat-total').textContent = summary.total;
  document.getElementById('stat-volume').textContent = summary.totalVolume + ' m³ hàng hóa';
  document.getElementById('stat-pending').textContent = summary.pending;
  document.getElementById('stat-processing').textContent = summary.processing;
  document.getElementById('stat-done').textContent = summary.done + '/' + summary.total;

  document.getElementById('tab-count-all').textContent = summary.total;
  document.getElementById('tab-count-pending').textContent = summary.pending;
  document.getElementById('tab-count-processing').textContent = summary.processing;
  document.getElementById('tab-count-done').textContent = summary.done + '/' + summary.total;
}

function getFilteredList() {
  let list = [...MOCK.outboundOrders];

  // Tab filter
  if (STATE.tab === 'pending') {
    list = list.filter(o => o.status === 'pending');
  } else if (STATE.tab === 'processing') {
    list = list.filter(o => ['processing', 'loading', 'packaged', 'voffice', 'archive'].includes(o.status));
  } else if (STATE.tab === 'done') {
    list = list.filter(o => o.status === 'done');
  }

  // Search query
  const q = STATE.query.trim().toLowerCase();
  if (q) {
    list = list.filter(o => 
      o.id.toLowerCase().includes(q) ||
      o.refCode.toLowerCase().includes(q) ||
      o.customer.toLowerCase().includes(q) ||
      o.statusLabel.toLowerCase().includes(q)
    );
  }

  return list;
}

function renderList() {
  const list = getFilteredList();
  const total = list.length;
  const pages = Math.ceil(total / STATE.pageSize) || 1;
  if (STATE.page > pages) STATE.page = pages;

  const start = (STATE.page - 1) * STATE.pageSize;
  const slice = list.slice(start, start + STATE.pageSize);

  const tbody = document.getElementById('outbound-tbody');
  tbody.innerHTML = '';

  if (slice.length === 0) {
    tbody.innerHTML = `<tr><td colspan="11" style="text-align:center; padding:48px; color:var(--slate-400);">Không tìm thấy lệnh xuất kho nào.</td></tr>`;
    document.getElementById('table-results-label').textContent = 'Hiển thị 0-0 / 0 lệnh';
    renderPagination(0, 1);
    return;
  }

  slice.forEach(o => {
    const tr = document.createElement('tr');

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
    else if (o.status === 'error' || o.statusLabel.includes('Lỗi')) statusCls = 'badge-danger';
    else if (['Đang lấy hàng', 'Đang tải xe', 'Đã đóng gói', 'Chờ ký VOffice', 'Chờ duyệt phân công'].includes(o.statusLabel)) statusCls = 'badge-info';

    // SLA Badge class
    let slaCls = 'sla-ok';
    if (o.slaRemaining && (o.slaRemaining.includes('p') || o.slaRemaining.includes('30p'))) slaCls = 'sla-warning';
    if (o.slaRemaining && o.slaRemaining.includes('Quá hạn')) slaCls = 'sla-danger';

    let slaText = o.slaRemaining || '—';
    let slaIconHtml = o.slaRemaining ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` : '';

    // Assignee circular avatar
    let assigneeHtml = '';
    if (o.assigneeName && o.assigneeName !== '—') {
      const initials = getInitials(o.assigneeName);
      assigneeHtml = `
        <div class="assignee-cell">
          <div class="assignee-avatar">${esc(initials)}</div>
          <span style="font-weight:500;">${esc(o.assigneeName)}</span>
        </div>
      `;
    } else {
      assigneeHtml = '<span style="color:var(--slate-400);">—</span>';
    }

    // Action cell buttons
    let actionsHtml = '';
    if (o.status === 'pending') {
      actionsHtml += `
        <button class="btn btn-danger-sm" onclick="confirmOrder('${o.id}')">
          Xác nhận
        </button>
      `;
    }
    actionsHtml += `
      <button class="btn btn-view" onclick="viewDetail('${o.id}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        Xem
      </button>
    `;

    const catCleanLabel = o.categoryLabel.includes(' – ') ? o.categoryLabel.split(' – ')[0] : o.categoryLabel.split(' - ')[0];

    tr.innerHTML = `

      <td>
        <div class="order-code-wrap">
          <div style="display:flex; align-items:center;">
            <span class="order-id" onclick="viewDetail('${o.id}')">${esc(o.id)}</span>
            <span class="type-badge type-${o.type.toLowerCase()}">${esc(o.type)}</span>
          </div>
          <span class="order-ref">${esc(o.refCode)}</span>
        </div>
      </td>
      <td>
        <span class="cat-pill cat-${o.category.toLowerCase()}">
          <span class="cat-dot"></span>
          ${esc(catCleanLabel)}
        </span>
      </td>
      <td style="font-weight:600; color:var(--slate-900);">${esc(o.customer)}</td>
      <td style="font-family:monospace; font-weight:600; color:var(--slate-600);">${esc(o.warehouse)}</td>
      <td>${taskCell}</td>
      <td><span class="badge ${statusCls}">${esc(o.statusLabel)}</span></td>
      <td>
        <div class="sla-badge ${slaCls}">
          ${slaIconHtml}
          <span>${esc(slaText)}</span>
        </div>
      </td>
      <td style="color:var(--slate-500); font-family:monospace;">${esc(o.outboundDate)}</td>
      <td>${assigneeHtml}</td>
      <td>
        <div class="action-cell" style="justify-content:center;">
          ${actionsHtml}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('table-results-label').textContent = `Hiển thị ${start + 1}–${Math.min(start + STATE.pageSize, total)} / ${total} lệnh`;
  renderPagination(total, pages);
}

function renderPagination(total, pages) {
  const container = document.getElementById('pagination-container');
  container.innerHTML = '';

  if (pages <= 1) return;

  // Prev Button
  const prevBtn = document.createElement('button');
  prevBtn.className = `page-btn ${STATE.page === 1 ? 'disabled' : ''}`;
  prevBtn.innerHTML = '&lt;';
  prevBtn.onclick = () => {
    if (STATE.page > 1) {
      STATE.page--;
      renderList();
    }
  };
  container.appendChild(prevBtn);

  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement('button');
    btn.className = `page-btn ${STATE.page === i ? 'active' : ''}`;
    btn.textContent = i;
    btn.onclick = () => {
      STATE.page = i;
      renderList();
    };
    container.appendChild(btn);
  }

  // Next Button
  const nextBtn = document.createElement('button');
  nextBtn.className = `page-btn ${STATE.page === pages ? 'disabled' : ''}`;
  nextBtn.innerHTML = '&gt;';
  nextBtn.onclick = () => {
    if (STATE.page < pages) {
      STATE.page++;
      renderList();
    }
  };
  container.appendChild(nextBtn);
}

function switchTab(tabName) {
  STATE.tab = tabName;
  STATE.page = 1;
  
  document.querySelectorAll('.tab-item').forEach(btn => {
    const name = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
    btn.classList.toggle('active', name === tabName);
  });

  renderList();
}

function handleSearch(val) {
  STATE.query = val;
  STATE.page = 1;
  renderList();
}

function toggleAll(checked) {
  document.querySelectorAll('#outbound-tbody input[type="checkbox"]').forEach(chk => {
    chk.checked = checked;
  });
}

function confirmOrder(orderId) {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: 'loadDetail', url: `PH3_Xuat/outbound_confirm.html?id=${orderId}` }, '*');
  } else {
    window.location.href = `outbound_confirm.html?id=${orderId}`;
  }
}

function viewDetail(orderId) {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: 'loadDetail', url: `PH3_Xuat/outbound_detail.html?id=${orderId}` }, '*');
  } else {
    window.location.href = `outbound_detail.html?id=${orderId}`;
  }
}

function exportExcel() {
  alert('Đang xuất danh sách lệnh xuất ra tệp Excel...');
}

function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name[0].toUpperCase();
}

function esc(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
