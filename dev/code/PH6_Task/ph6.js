/**
 * ViettelAIWS — PH6 Task Pool
 * ph6.js  v2  (columns match screenshot)
 */
'use strict';

/* ── STATE ─────────────────────────────────────── */
const PH6 = {
  search: '',
  filterType: '',
  filterStatus: '',
  filterOrder: '',
  filterLocation: '',
  filterSLA: '',
  filtered: [],
  page: 1,
  pageSize: 15,
  sortField: 'orderId',
  sortAsc: true,
};

/* ── STATUS CONFIG ──────────────────────────────── */
const STATUS_CFG = {
  done:           { label: 'Hoàn thành',     cls: 'sp-done',    slaCls: 'sla-done',    slaLabel: 'Hoàn thành' },
  doing:          { label: 'Đang làm',       cls: 'sp-doing',   slaCls: 'sla-continuous', slaLabel: 'Liên tục' },
  pending:        { label: 'Chưa bắt đầu',  cls: 'sp-pending', slaCls: 'sla-pending', slaLabel: 'Chưa bắt đầu' },
  waiting_assign: { label: 'Chờ phân công', cls: 'sp-wait',    slaCls: 'sla-wait',    slaLabel: 'Chờ phân công' },
  waiting_confirm:{ label: 'Chờ xác nhận',  cls: 'sp-pending', slaCls: 'sla-pending', slaLabel: 'Chờ xác nhận' },
};

/* ── INIT ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderKPI();
  populateOrderFilter();
  applyFilter();
  bindEvents();
});

/* ── KPI ────────────────────────────────────────── */
function renderKPI() {
  const t = MOCK.tasks;
  setEl('kpi-total',   t.length);
  setEl('kpi-done',    t.filter(x => x.status === 'done').length);
  setEl('kpi-pending', t.filter(x => x.status === 'pending').length);
  setEl('kpi-doing',   t.filter(x => x.status === 'doing').length);
  setEl('kpi-wait',    t.filter(x => x.status === 'waiting_assign').length);
  setEl('kpi-overdue', 0); // An toàn
}

/* ── POPULATE FILTER ────────────────────────────── */
function populateOrderFilter() {
  const sel = document.getElementById('filter-order');
  const ids = [...new Set(MOCK.tasks.map(t => t.orderId))].sort();
  ids.forEach(id => {
    const o = document.createElement('option');
    o.value = id;
    o.textContent = id;
    sel.appendChild(o);
  });
}

/* ── FILTER + SORT ──────────────────────────────── */
function applyFilter() {
  let list = [...MOCK.tasks];

  const q = PH6.search.trim().toLowerCase();
  if (q) {
    list = list.filter(t =>
      t.id.toLowerCase().includes(q) ||
      t.name.toLowerCase().includes(q) ||
      t.orderId.toLowerCase().includes(q) ||
      (MOCK.getUserById(t.assignee)?.name || '').toLowerCase().includes(q)
    );
  }

  if (PH6.filterType)     list = list.filter(t => t.type === PH6.filterType);
  if (PH6.filterStatus)   list = list.filter(t => t.status === PH6.filterStatus);
  if (PH6.filterOrder)    list = list.filter(t => t.orderId === PH6.filterOrder);
  if (PH6.filterLocation) list = list.filter(t => (t.location || '').toLowerCase().includes(PH6.filterLocation.toLowerCase()));
  if (PH6.filterSLA && PH6.filterSLA !== 'all') {
    if (PH6.filterSLA === 'expired') {
      list = list.filter(t => t.slaExpired || t.slaType === 'expired');
    } else if (PH6.filterSLA === 'at_risk') {
      list = list.filter(t => t.priority === 'high' && t.status !== 'done');
    } else if (PH6.filterSLA === 'safe') {
      list = list.filter(t => t.status === 'done' || t.priority !== 'high');
    }
  }

  list.sort((a, b) => {
    let va = String(a[PH6.sortField] || '').toLowerCase();
    let vb = String(b[PH6.sortField] || '').toLowerCase();
    if (va < vb) return PH6.sortAsc ? -1 : 1;
    if (va > vb) return PH6.sortAsc ? 1 : -1;
    return 0;
  });

  PH6.filtered = list;
  PH6.page = 1;
  renderTable();
}

/* ── RENDER TABLE ───────────────────────────────── */
function renderTable() {
  const tbody = document.getElementById('ph6-tbody');
  if (!tbody) return;

  const total = PH6.filtered.length;
  const pages = Math.max(1, Math.ceil(total / PH6.pageSize));
  if (PH6.page > pages) PH6.page = pages;

  const start = (PH6.page - 1) * PH6.pageSize;
  const slice = PH6.filtered.slice(start, start + PH6.pageSize);

  setEl('ph6-result-count', total ? `${start + 1}–${Math.min(start + PH6.pageSize, total)} / ${total}` : '');
  setEl('ph6-footer-info', `Hiển thị ${Math.min(slice.length, total)} / ${total} task`);

  if (!slice.length) {
    tbody.innerHTML = `
      <tr><td colspan="10">
        <div class="ph6-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <div class="ph6-empty-title">Không có task nào</div>
          <div class="ph6-empty-sub">Thay đổi bộ lọc để xem kết quả khác.</div>
        </div>
      </td></tr>`;
    renderPagination(0, 0);
    return;
  }

  tbody.innerHTML = slice.map(t => renderRow(t)).join('');
  renderPagination(total, pages);
}

/* ── RENDER ROW ─────────────────────────────────── */
function renderRow(t) {
  const user   = t.assignee ? MOCK.getUserById(t.assignee) : null;
  const cfg    = STATUS_CFG[t.status] || STATUS_CFG.pending;
  const avaIdx = user ? (MOCK.users.indexOf(user) % 5) : -1;

  /* --- Mã task --- */
  const idCell = `<span class="task-id" onclick="openDetail('${t.id}')">${esc(t.id)}</span>`;

  /* --- Order --- */
  const orderCell = `<span class="order-ref">${esc(t.orderId)}</span>`;

  /* --- Loại (bước) --- */
  const nameCell = `
    <div class="step-prefix">B${t.seq}. ${esc(t.type === 'INB' ? 'Nhập kho' : 'Xuất kho')}</div>
    <div class="step-name">${esc(t.name)}</div>`;

  /* --- Người phụ trách --- */
  const assigneeCell = user
    ? `<div class="assignee-cell">
         <div class="ava ava-${avaIdx}">${esc(user.initials)}</div>
         <span>${esc(user.name)}</span>
       </div>`
    : `<span class="unassigned-txt">Chưa phân công</span>`;

  /* --- Khu/Vị trí --- */
  const parts = (t.location || '').split('·');
  const locCell = parts.length > 1
    ? `<div class="location-cell">
         <div class="location-main">${esc(parts[0].trim())}</div>
         <div class="location-sub">${esc(parts[1].trim())}</div>
       </div>`
    : `<div class="location-cell"><div class="location-main">${esc(t.location || '—')}</div></div>`;

  /* --- Bắt đầu / Hoàn thành --- */
  const startCell = t.startTime
    ? `<span class="time-val">${esc(t.startTime)}</span>`
    : `<span class="time-dash">—</span>`;
  const endCell = t.endTime
    ? `<span class="time-val">${esc(t.endTime)}</span>`
    : `<span class="time-dash">—</span>`;

  /* --- SLA badge --- */
  const slaLabel = t.slaType === 'continuous' ? 'Liên tục' : cfg.slaLabel;
  const slaCell  = `<span class="sla-badge ${cfg.slaCls}">${esc(slaLabel)}</span>`;

  /* --- Trạng thái --- */
  const statusCell = `<span class="sp ${cfg.cls}">${esc(cfg.label)}</span>`;

  /* --- Thao tác (icon only) --- */
  const actionCell = renderActionIcons(t);

  return `
    <tr data-id="${t.id}">
      <td>${idCell}</td>
      <td>${orderCell}</td>
      <td>${nameCell}</td>
      <td>${assigneeCell}</td>
      <td>${locCell}</td>
      <td class="td-time">${startCell}</td>
      <td class="td-time">${endCell}</td>
      <td>${slaCell}</td>
      <td>${statusCell}</td>
      <td class="td-action">${actionCell}</td>
    </tr>`;
}

/* ── ACTION ICONS ───────────────────────────────── */
function renderActionIcons(t) {
  let html = '<div class="action-cell" style="display:flex;gap:6px;justify-content:center;">';

  if (t.status === 'waiting_assign') {
    html += `<button class="btn-icon" title="Phân công" onclick="assignTask('${t.id}')" style="background:rgba(147,51,234,.08);color:#9333EA;border-color:rgba(147,51,234,.25);">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:13px;height:13px;">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </button>`;
  } else if (t.status === 'pending') {
    html += `<button class="btn-icon btn-icon-success" title="Bắt đầu" onclick="startTask('${t.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:13px;height:13px;">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    </button>`;
  } else if (t.status === 'doing') {
    html += `<button class="btn-icon btn-icon-success" title="Hoàn tất" onclick="completeTask('${t.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:13px;height:13px;">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </button>`;
  }

  html += `<button class="btn-icon btn-icon-info" title="Cập nhật tiến độ" onclick="openDetail('${t.id}')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:13px;height:13px;">
      <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>`;

  html += '</div>';
  return html;
}

/* ── TASK ACTIONS ───────────────────────────────── */
function assignTask(id) {
  const t = MOCK.tasks.find(x => x.id === id);
  if (!t) return;
  t.assignee = 'USR-001';
  t.status   = 'pending';
  renderKPI(); applyFilter();
  showToast('Đã phân công task ' + id, 'info');
}

function startTask(id) {
  const t = MOCK.tasks.find(x => x.id === id);
  if (!t) return;
  t.status    = 'doing';
  t.startTime = new Date().toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'});
  renderKPI(); applyFilter();
  showToast('Bắt đầu task ' + id, 'info');
}

function completeTask(id) {
  const t = MOCK.tasks.find(x => x.id === id);
  if (!t) return;
  t.status  = 'done';
  t.endTime = new Date().toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit'});
  renderKPI(); applyFilter();
  showToast('Hoàn tất task ' + id + ' ✓', 'success');
}

function aiAssign() {
  showToast('AI đang phân công tự động...', 'info');
  setTimeout(() => {
    let count = 0;
    MOCK.tasks.forEach(t => {
      if (t.status === 'waiting_assign') {
        const users = ['USR-002','USR-003','USR-004'];
        t.assignee = users[count % users.length];
        t.status   = 'pending';
        count++;
      }
    });
    renderKPI(); applyFilter();
    showToast(`AI đã phân công ${count} task thành công ✓`, 'success');
  }, 1200);
}

/* ── DETAIL MODAL ───────────────────────────────── */
function openDetail(id) {
  const t = MOCK.tasks.find(x => x.id === id);
  if (!t) return;

  const user  = t.assignee ? MOCK.getUserById(t.assignee) : null;
  const order = MOCK.inboundOrders.find(o => o.id === t.orderId)
             || MOCK.outboundOrders.find(o => o.id === t.orderId);
  const allTasks = MOCK.tasks.filter(x => x.orderId === t.orderId).sort((a,b) => a.seq - b.seq);
  const cfg    = STATUS_CFG[t.status] || STATUS_CFG.pending;

  const tlHtml = allTasks.map(x => {
    const xcfg = STATUS_CFG[x.status] || STATUS_CFG.pending;
    const dotCls = x.status === 'done' ? 'tl-dot-done' : x.status === 'doing' ? 'tl-dot-doing' : x.status === 'waiting_assign' ? 'tl-dot-wait' : 'tl-dot-pending';
    const nameCls = x.status === 'done' ? 'done-name' : '';
    const xUser = x.assignee ? MOCK.getUserById(x.assignee) : null;
    const active = x.id === t.id ? 'style="background:rgba(238,0,51,.04);border-radius:5px;padding:3px 6px;margin:-3px -6px;"' : '';
    return `<div class="tl-item" ${active}>
      <div class="tl-dot ${dotCls}"></div>
      <div style="flex:1">
        <div class="tl-name ${nameCls}">B${x.seq}. ${esc(x.name)}</div>
        <div style="display:flex;gap:10px;margin-top:2px;">
          ${x.startTime ? `<span style="font-size:10px;color:var(--text3)">▶ ${esc(x.startTime)}</span>` : ''}
          ${x.endTime   ? `<span style="font-size:10px;color:var(--text3)">■ ${esc(x.endTime)}</span>` : ''}
          ${xUser ? `<span style="font-size:10px;color:var(--text2)">@${esc(xUser.name)}</span>` : ''}
        </div>
      </div>
      <span class="sp ${xcfg.cls}" style="font-size:10px;padding:2px 7px;">${xcfg.label}</span>
    </div>`;
  }).join('');

  showModal(`
    <div class="modal-hd">
      <div>
        <div class="modal-title">${esc(t.name)}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:3px;">
          ${esc(t.id)} &nbsp;·&nbsp; <span class="sp ${cfg.cls}" style="font-size:10px;padding:2px 7px;">${cfg.label}</span>
        </div>
      </div>
      <div class="modal-close" onclick="closeModal()">×</div>
    </div>
    <div class="modal-body">
      <div class="m-sec-title">Thông tin task</div>
      <div class="d-grid">
        <div class="d-field">
          <span class="d-label">Lệnh gốc</span>
          <span class="d-val mono">${esc(t.orderId)}</span>
        </div>
        <div class="d-field">
          <span class="d-label">Bước số</span>
          <span class="d-val">B${t.seq} / ${allTasks.length}</span>
        </div>
        <div class="d-field">
          <span class="d-label">Phụ trách</span>
          <span class="d-val">${user ? esc(user.name) : 'Chưa phân công'}</span>
        </div>
        <div class="d-field">
          <span class="d-label">Khu/Vị trí</span>
          <span class="d-val">${esc(t.location || '—')}</span>
        </div>
        <div class="d-field">
          <span class="d-label">Bắt đầu</span>
          <span class="d-val">${esc(t.startTime || '—')}</span>
        </div>
        <div class="d-field">
          <span class="d-label">Hoàn thành</span>
          <span class="d-val">${esc(t.endTime || '—')}</span>
        </div>
      </div>
      ${t.note ? `<div style="margin-top:10px;padding:8px 12px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.2);border-radius:6px;font-size:11px;color:var(--warn);">📝 ${esc(t.note)}</div>` : ''}

      <div class="m-sec-title">Timeline lệnh ${esc(t.orderId)}</div>
      ${tlHtml}

      <div class="modal-footer">
        ${t.status === 'pending' ? `<button class="btn btn-ai" style="padding:6px 14px;font-size:12px;" onclick="closeModal();startTask('${t.id}')">▶ Bắt đầu</button>` : ''}
        ${t.status === 'doing'   ? `<button class="btn btn-ai" style="padding:6px 14px;font-size:12px;" onclick="closeModal();completeTask('${t.id}')">✓ Hoàn tất</button>` : ''}
        <button class="btn btn-ghost" style="padding:6px 14px;font-size:12px;" onclick="closeModal()">Đóng</button>
      </div>
    </div>
  `);
}

function showModal(html) {
  closeModal();
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.id = 'ph6-overlay';
  ov.innerHTML = `<div class="modal">${html}</div>`;
  ov.addEventListener('click', e => { if (e.target === ov) closeModal(); });
  document.body.appendChild(ov);
}

function closeModal() {
  const el = document.getElementById('ph6-overlay');
  if (el) el.remove();
}

/* ── PAGINATION ─────────────────────────────────── */
function renderPagination(total, pages) {
  const el = document.getElementById('ph6-pagination');
  if (!el) return;
  if (pages <= 1) { el.innerHTML = ''; return; }
  let h = `<button class="pg-btn" onclick="goPage(${PH6.page-1})" ${PH6.page===1?'disabled':''}>‹</button>`;
  const start = Math.max(1, PH6.page - 2);
  const end   = Math.min(pages, start + 4);
  for (let i = start; i <= end; i++) {
    h += `<button class="pg-btn ${i===PH6.page?'active':''}" onclick="goPage(${i})">${i}</button>`;
  }
  h += `<button class="pg-btn" onclick="goPage(${PH6.page+1})" ${PH6.page===pages?'disabled':''}>›</button>`;
  el.innerHTML = h;
}

function goPage(p) {
  const pages = Math.ceil(PH6.filtered.length / PH6.pageSize);
  if (p < 1 || p > pages) return;
  PH6.page = p;
  renderTable();
}

/* ── SORT ────────────────────────────────────────── */
function sortBy(field) {
  if (PH6.sortField === field) PH6.sortAsc = !PH6.sortAsc;
  else { PH6.sortField = field; PH6.sortAsc = true; }
  applyFilter();
}

/* ── BIND EVENTS ─────────────────────────────────── */
function bindEvents() {
  const si = document.getElementById('ph6-search');
  if (si) si.addEventListener('input', e => { PH6.search = e.target.value; applyFilter(); });

  const ft = document.getElementById('filter-type');
  if (ft) ft.addEventListener('change', e => { PH6.filterType = e.target.value; applyFilter(); });

  const fs = document.getElementById('filter-status');
  if (fs) fs.addEventListener('change', e => { PH6.filterStatus = e.target.value; applyFilter(); });

  const fo = document.getElementById('filter-order');
  if (fo) fo.addEventListener('change', e => { PH6.filterOrder = e.target.value; applyFilter(); });

  const fl = document.getElementById('filter-location');
  if (fl) fl.addEventListener('change', e => { PH6.filterLocation = e.target.value; applyFilter(); });

  const fa = document.getElementById('filter-sla');
  if (fa) fa.addEventListener('change', e => { PH6.filterSLA = e.target.value; applyFilter(); });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ── EXPORT ──────────────────────────────────────── */
function exportExcel() {
  showToast('Đang xuất Excel...', 'info');
  setTimeout(() => showToast('Xuất Excel thành công! (demo)', 'success'), 1200);
}

/* ── TOAST ───────────────────────────────────────── */
function showToast(msg, type = 'info') {
  let box = document.getElementById('toast-box');
  if (!box) { box = document.createElement('div'); box.id = 'toast-box'; box.className = 'toast-box'; document.body.appendChild(box); }
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const el = document.createElement('div');
  el.className = `toast t-${type}`;
  el.innerHTML = `<span>${icons[type]||'ℹ'}</span><span>${esc(msg)}</span>`;
  box.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* ── UTILS ───────────────────────────────────────── */
function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
