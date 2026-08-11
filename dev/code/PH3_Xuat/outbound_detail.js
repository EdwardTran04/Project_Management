'use strict';

let ORDER_ID = 'OUT-2026-00451';
let ORDER_DATA = null;

// Mock database corresponding to screenshots
const MOCK_TASKS = [
  { id: 'OTSK-5520', type: 'Duyệt lịch giao việc', user: 'Trần Đăng Khoa', start: '08:10', end: '08:22', sla: 'Hoàn thành', slaCls: 'badge-success', status: 'Hoàn thành', statusCls: 'badge-success' },
  { id: 'OTSK-5521', type: 'Lấy hàng ra khu đóng gói', user: 'Đỗ Minh Khôi', start: '09:05', end: '—', sla: 'Trong hạn - 30p còn', slaCls: 'badge-success', status: 'Đang xử lý', statusCls: 'badge-info' },
  { id: 'OTSK-5522', type: 'Đóng gói hàng', user: 'Phạm Thị Hằng', start: '—', end: '—', sla: 'Trong hạn —', slaCls: 'badge-success', status: 'Chưa bắt đầu', statusCls: 'badge-slate' },
  { id: 'OTSK-5523', type: 'Đưa sang khu chờ xuất', user: 'Bùi Quốc Việt', start: '—', end: '—', sla: 'Trong hạn —', slaCls: 'badge-success', status: 'Chưa bắt đầu', statusCls: 'badge-slate' },
  { id: 'OTSK-5524', type: 'Kiểm hàng - Bàn giao', user: 'Nguyễn Hữu An', start: '—', end: '—', sla: 'Trong hạn —', slaCls: 'badge-success', status: 'Chưa bắt đầu', statusCls: 'badge-slate' },
  { id: 'OTSK-5525', type: 'Tải hàng lên xe', user: 'Bùi Quốc Việt', start: '—', end: '—', sla: 'Trong hạn —', slaCls: 'badge-success', status: 'Chưa bắt đầu', statusCls: 'badge-slate' },
  { id: 'OTSK-5526', type: 'Ký Voffice', user: 'Giám đốc kho', start: '—', end: '—', sla: 'Trong hạn —', slaCls: 'badge-success', status: 'Chưa bắt đầu', statusCls: 'badge-slate' },
  { id: 'OTSK-5527', type: 'Giám sát lệnh', user: 'Trần Văn Kho', start: '07:00', end: '—', sla: 'Trong hạn —', slaCls: 'badge-success', status: 'Đang xử lý', statusCls: 'badge-info' },
  { id: 'OTSK-5528', type: 'Giám sát an ninh', user: '—', start: '07:00', end: '—', sla: 'Trong hạn —', slaCls: 'badge-success', status: 'Chờ phân công', statusCls: 'badge-warning' }
];

const MOCK_TRIPS = [
  { id: 'VT-3019', provider: 'Vận tải Thành Đạt', plateReg: '30A-552.18', plateReal: '—', driver: 'Trần Văn Mạnh<br><span style="font-size:11px;color:var(--slate-500);">0904 112 887</span>', eta: '2026-05-18 13:30', dock: 'DK-05', gateIn: '—', dockIn: '—', dockOut: '—', gateOut: '—', status: 'Quá ETA', statusCls: 'badge-danger', ps: 1 }
];

const MOCK_DOCS = [
  { type: 'Phiếu xuất T-AGI', info: '—', status: 'Chờ API3', statusCls: 'badge-slate', time: '—', action: '—' },
  { type: 'BBBG bàn giao', info: '—', status: 'Chưa ký', statusCls: 'badge-slate', time: '—', action: '—' },
  { type: 'VOffice', info: '—', status: 'Chờ ký', statusCls: 'badge-slate', time: '—', action: '—' },
  { type: 'Đơn xuất gốc', info: 'SO-2026-1188', status: 'Đã có', statusCls: 'badge-success', time: '—', action: 'Xem &rarr;' }
];

const MOCK_HISTORY = [
  { time: '08:15', author: 'Nguyễn Văn A', action: 'Xác nhận tiếp nhận lệnh', detail: 'Trạng thái: WAIT_CONFIRM &rarr; ACCEPTED' },
  { time: '08:31', author: 'AIWS', action: 'Sinh task tự động', detail: 'Tạo task TSK-001, TSK-002' },
  { time: '09:05', author: 'Trần Văn B', action: 'Cập nhật task dỡ hàng', detail: 'Trạng thái: IN_PROGRESS &rarr; COMPLETED' },
  { time: '09:10', author: 'Trần Văn B', action: 'Upload ảnh bằng chứng', detail: 'Thêm 2 file ảnh' }
];

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('id')) {
    ORDER_ID = urlParams.get('id');
  }

  ORDER_DATA = MOCK.outboundOrders.find(o => o.id === ORDER_ID);
  if (!ORDER_DATA) {
    alert('Không tìm thấy dữ liệu lệnh xuất: ' + ORDER_ID);
    return;
  }

  // Header & Breadcrumb
  document.getElementById('breadcrumb-id').textContent = ORDER_DATA.id;
  document.getElementById('header-order-id').textContent = ORDER_DATA.id;
  
  const wh = MOCK.getWarehouseById(ORDER_DATA.warehouse);
  const whName = wh ? `${wh.id} - ${wh.name}` : ORDER_DATA.warehouse;


  // General Info
  document.getElementById('inf-receiver').textContent = ORDER_DATA.customer;
  document.getElementById('inf-company').textContent = ORDER_DATA.customer;
  document.getElementById('inf-decision-no').textContent = ORDER_DATA.sapDocNo;
  document.getElementById('inf-contract-no').textContent = ORDER_DATA.contractNo;
  document.getElementById('inf-wh-name').textContent = whName;
  document.getElementById('inf-reason').textContent = ORDER_DATA.reason;
  document.getElementById('inf-desc').textContent = ORDER_DATA.desc;

  // Render all tabs
  renderGoodsTable();
  renderTaskTab();
  renderTransportTab();
  renderDocsTab();
  renderHistoryTab();
});

function renderGoodsTable() {
  const tbody = document.getElementById('goods-tbody');
  tbody.innerHTML = '';

  let items = ORDER_DATA.goods;
  if (!items || items.length === 0) {
    items = [
      { code: 'ANT-4G-2T', name: 'Anten 4G 2T2R', unit: 'Bộ', doc: 12, actual: 12, diff: 0, loc: 'G02-T01-B03', hu: 'HU-OUT-201' },
      { code: 'BBU-3900', name: 'Baseband Unit BBU 3900', unit: 'Bộ', doc: 8, actual: 6, diff: -2, loc: 'G02-T01-B04', hu: 'HU-OUT-202' },
      { code: 'CAB-PWR-10', name: 'Cáp nguồn 10m', unit: 'Cuộn', doc: 80, actual: 80, diff: 0, loc: 'I02-T02-B05', hu: '' }
    ];
  }

  items.forEach(g => {
    const tr = document.createElement('tr');
    
    let diffTd = '<td class="diff-none" style="text-align:right;">0</td>';
    if (g.diff < 0) {
      diffTd = `<td class="diff-negative" style="text-align:right;">${g.diff}</td>`;
    } else if (g.diff > 0) {
      diffTd = `<td style="text-align:right; font-weight:700; color:var(--success);">+${g.diff}</td>`;
    }

    const huText = g.hu ? `<span style="font-family:monospace; font-weight:600; color:var(--info);">${esc(g.hu)}</span>` : '<span style="color:var(--slate-400);">—</span>';
    const locText = g.loc ? `<span class="badge badge-slate" style="font-family:monospace;">${esc(g.loc)}</span>` : '<span style="color:var(--slate-400);">—</span>';

    tr.innerHTML = `
      <td><span style="font-family:monospace; font-weight:600; color:var(--slate-800);">${esc(g.code)}</span></td>
      <td style="font-weight:500; color:var(--slate-900);">${esc(g.name)}</td>
      <td style="color:var(--slate-500);">${esc(g.unit)}</td>
      <td style="text-align:right; font-weight:600;">${g.doc}</td>
      <td style="text-align:right; font-weight:700; color:var(--slate-800);">${g.actual}</td>
      ${diffTd}
      <td>${locText}</td>
      <td>${huText}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderTaskTab() {
  const tbody = document.getElementById('task-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  MOCK_TASKS.forEach(t => {
    const tr = document.createElement('tr');
    const userInitials = t.user !== '—' ? getInitials(t.user) : '—';
    const userHtml = t.user !== '—' ? `
      <div class="assignee-badge-table">
        <div class="assignee-avatar-table">${esc(userInitials)}</div>
        <span style="font-weight:500;">${esc(t.user)}</span>
      </div>
    ` : '<span style="color:var(--slate-400);">—</span>';

    tr.innerHTML = `
      <td><span class="code-link" onclick="alert('Xem chi tiết Task ${t.id}')">${esc(t.id)}</span></td>
      <td style="font-weight:500; color:var(--slate-900);">${esc(t.type)}</td>
      <td>${userHtml}</td>
      <td style="font-family:monospace; color:var(--slate-600);">${esc(t.start)}</td>
      <td style="font-family:monospace; color:var(--slate-600);">${esc(t.end)}</td>
      <td><span class="badge ${t.slaCls}">${esc(t.sla)}</span></td>
      <td><span class="badge ${t.statusCls}">${esc(t.status)}</span></td>
      <td style="text-align:center;">
        <button class="btn btn-view" onclick="updateProgress('${t.id}')" style="color:var(--primary); font-weight:600; border-color:var(--primary-glow);">Cập nhật tiến độ</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateProgress(taskId) {
  alert('Cập nhật tiến độ cho task: ' + taskId + '. Giao diện cập nhật tiến độ chi tiết sẽ được cập nhật sau.');
}

function renderTransportTab() {
  const tbody = document.getElementById('transport-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  MOCK_TRIPS.forEach(t => {
    const tr = document.createElement('tr');
    const psHtml = t.ps ? `<span style="color:var(--primary); font-weight:700; display:inline-flex; align-items:center; gap:2px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:12px; height:12px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${t.ps}</span>` : '—';

    tr.innerHTML = `
      <td>
        <span class="code-link" style="display:inline-flex; align-items:center; gap:4px;" onclick="alert('Xem chi tiết chuyến ${t.id}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:12px; height:12px; transform:rotate(90deg);"><polyline points="9 18 15 12 9 6"/></svg>
          ${esc(t.id)}
        </span>
      </td>
      <td style="font-weight:600; color:var(--slate-900);">${esc(t.provider)}</td>
      <td style="font-family:monospace; font-weight:600;">${esc(t.plateReg)}</td>
      <td style="font-family:monospace; color:var(--slate-400);">${esc(t.plateReal)}</td>
      <td>${t.driver}</td>
      <td style="font-family:monospace; color:var(--slate-600);">${esc(t.eta)}</td>
      <td><span class="badge badge-slate" style="font-family:monospace;">${esc(t.dock)}</span></td>
      <td style="color:var(--slate-400);">—</td>
      <td style="color:var(--slate-400);">—</td>
      <td style="color:var(--slate-400);">—</td>
      <td style="color:var(--slate-400);">—</td>
      <td><span class="badge ${t.statusCls}">${esc(t.status)}</span></td>
      <td style="text-align:center;">${psHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderDocsTab() {
  const tbody = document.getElementById('docs-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  MOCK_DOCS.forEach(d => {
    const tr = document.createElement('tr');
    
    let actHtml = '<span style="color:var(--slate-400);">—</span>';
    if (d.action !== '—') {
      actHtml = `<span class="code-link" onclick="alert('Đang mở file ${d.info}')">${esc(d.action)}</span>`;
    }

    const infoHtml = d.info !== '—' ? `<span style="font-family:monospace; font-weight:600;">${esc(d.info)}</span>` : '<span style="color:var(--slate-400);">—</span>';

    tr.innerHTML = `
      <td style="font-weight:600; color:var(--slate-900);">${esc(d.type)}</td>
      <td>${infoHtml}</td>
      <td><span class="badge ${d.statusCls}">${esc(d.status)}</span></td>
      <td style="font-family:monospace; color:var(--slate-600);">${esc(d.time)}</td>
      <td>${actHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderHistoryTab() {
  const tbody = document.getElementById('history-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  MOCK_HISTORY.forEach(h => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-family:monospace; color:var(--slate-600);">${esc(h.time)}</td>
      <td style="font-weight:600; color:var(--slate-900);">${esc(h.author)}</td>
      <td style="font-weight:500;">${esc(h.action)}</td>
      <td style="font-family:monospace; font-size:12px; color:var(--slate-600);">${h.detail}</td>
    `;
    tbody.appendChild(tr);
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const tab = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
    btn.classList.toggle('active', tab === tabId);
  });

  document.querySelectorAll('.tab-pane').forEach(pane => {
    const id = pane.getAttribute('id');
    pane.classList.toggle('active', id === 'pane-' + tabId);
  });
}

function viewTaskList() {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: 'navigate', view: 'tasks-list' }, '*');
  } else {
    window.location.href = '../PH6_Task/PH6.html';
  }
}

function goBack() {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: 'navigate', view: 'outbound-issue' }, '*');
  } else {
    window.location.href = 'PH3.html';
  }
}

function getInitials(name) {
  if (!name || name === '—') return '?';
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name[0].toUpperCase();
}

function esc(s) {
  if (s === null || s === undefined) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
