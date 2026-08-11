/**
 * ViettelAIWS — PH4 Cấu hình (Cấu hình chân ký tài liệu)
 * signature.js — Logic quản lý danh sách & cấu hình luồng ký
 */
'use strict';

// Available mock documents list
const DOCUMENTS_LIST = [
  { code: 'DOC-INB-RECEIPT', name: 'Phiếu nhập kho vật tư' },
  { code: 'DOC-OUTB-ISSUE', name: 'Phiếu xuất kho vật tư' },
  { code: 'DOC-KCS-REPORT', name: 'Biên bản bàn giao kiểm định KCS' },
  { code: 'DOC-STOCK-ADJ', name: 'Biên bản điều chỉnh tồn kho' },
  { code: 'DOC-TRANSFER', name: 'Phiếu xuất kho kiêm vận chuyển nội bộ' },
  { code: 'DOC-INVENTORY', name: 'Biên bản kiểm kê kho' }
];

// Available mock management units
const DEPARTMENTS_LIST = [
  'Vận hành miền Bắc - Ban Giám Đốc',
  'Vận hành miền Bắc - Tổ Nhập HN01',
  'Vận hành miền Bắc - Tổ Xuất HN01',
  'Vận hành miền Bắc - Tổ Lưu kho A',
  'Vận hành miền Bắc - Tổ Lưu kho B',
  'Vận hành miền Nam - Tổ Nhập HCM01',
  'Vận hành miền Nam - Tổ Xuất HCM01',
  'Vận hành miền Trung - Tổ Nhập DN01',
  'Phòng Tài Chính Kho',
  'Ban Công Nghệ'
];

let SIGNATURE_STATE = {
  list: [],
  filtered: [],
  page: 1,
  pageSize: 5,
  currentId: null,
  filters: {
    query: '',
    docType: ''
  }
};

/* ── INIT ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initData();
  applyFilters();
  bindEvents();
});

/* ── SEED INITIAL DATA ──────────────────────── */
function initData() {
  SIGNATURE_STATE.list = [
    {
      id: 'CK-001',
      docCode: 'DOC-INB-RECEIPT',
      docName: 'Phiếu nhập kho vật tư',
      orgUnit: 'Vận hành miền Bắc - Tổ Nhập HN01',
      steps: [
        { group: 'Nhóm 1', userId: 'USR-004', name: 'Nguyễn Hữu An', roleDept: 'Nhân viên kho - Vận hành miền Bắc - Tổ Nhập HN01', showSignature: true },
        { group: 'Nhóm 2', userId: 'USR-003', name: 'Phạm Thị Hằng', roleDept: 'Kế toán kho - Phòng Tài Chính Kho', showSignature: true },
        { group: 'Nhóm 3', userId: 'USR-002', name: 'Trần Văn Kho', roleDept: 'Thủ kho - Vận hành miền Bắc', showSignature: true }
      ]
    },
    {
      id: 'CK-002',
      docCode: 'DOC-OUTB-ISSUE',
      docName: 'Phiếu xuất kho vật tư',
      orgUnit: 'Vận hành miền Nam - Tổ Xuất HCM01',
      steps: [
        { group: 'Nhóm 1', userId: 'USR-006', name: 'Vũ Thanh Hải', roleDept: 'Nhân viên kho - Vận hành miền Nam', showSignature: true },
        { group: 'Nhóm 2', userId: 'USR-005', name: 'Lê Minh Tuấn', roleDept: 'Trưởng ca - Vận hành miền Nam', showSignature: true }
      ]
    },
    {
      id: 'CK-003',
      docCode: 'DOC-KCS-REPORT',
      docName: 'Biên bản bàn giao kiểm định KCS',
      orgUnit: 'KCS miền Bắc - Tổ Kiểm định',
      steps: [
        { group: 'Nhóm 1', userId: 'USR-004', name: 'Nguyễn Hữu An', roleDept: 'Nhân viên kho - Vận hành miền Bắc - Tổ Nhập HN01', showSignature: true },
        { group: 'Nhóm 1', userId: 'USR-006', name: 'Vũ Thanh Hải', roleDept: 'Nhân viên kho - Vận hành miền Nam', showSignature: false },
        { group: 'Nhóm 2', userId: 'USR-002', name: 'Trần Văn Kho', roleDept: 'Thủ kho - Vận hành miền Bắc', showSignature: true },
        { group: 'Nhóm 3', userId: 'USR-001', name: 'Nguyễn Admin', roleDept: 'Administrator - Ban Công Nghệ', showSignature: true }
      ]
    }
  ];
}

/* ── FILTERS & DATA TABLE RENDERING ─────────── */
function applyFilters() {
  let list = [...SIGNATURE_STATE.list];

  // Search input query
  const q = SIGNATURE_STATE.filters.query.trim().toLowerCase();
  if (q) {
    list = list.filter(item =>
      item.id.toLowerCase().includes(q) ||
      item.docCode.toLowerCase().includes(q) ||
      item.docName.toLowerCase().includes(q) ||
      item.orgUnit.toLowerCase().includes(q)
    );
  }

  // Document Type filter
  if (SIGNATURE_STATE.filters.docType) {
    list = list.filter(item => item.docCode === SIGNATURE_STATE.filters.docType);
  }

  SIGNATURE_STATE.filtered = list;
  SIGNATURE_STATE.page = 1;
  renderTable();
}

function renderTable() {
  const tbody = document.getElementById('signature-tbody');
  if (!tbody) return;

  const total = SIGNATURE_STATE.filtered.length;
  const startIdx = (SIGNATURE_STATE.page - 1) * SIGNATURE_STATE.pageSize;
  const endIdx = Math.min(startIdx + SIGNATURE_STATE.pageSize, total);
  const pageItems = SIGNATURE_STATE.filtered.slice(startIdx, endIdx);

  document.getElementById('table-info').textContent = `Hiển thị ${total ? startIdx + 1 : 0}-${endIdx} trong tổng số ${total} cấu hình`;

  const pages = Math.ceil(total / SIGNATURE_STATE.pageSize);

  if (pageItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding: 32px; color: var(--text3);">
          Không tìm thấy cấu hình chân ký nào phù hợp
        </td>
      </tr>
    `;
    renderPagination(total, pages);
    return;
  }

  tbody.innerHTML = pageItems.map((item, idx) => {
    const stt = startIdx + idx + 1;
    return `
      <tr>
        <td>${stt}</td>
        <td class="font-mono" style="font-weight: 700; color: var(--primary);">${esc(item.id)}</td>
        <td class="font-mono">${esc(item.docCode)}</td>
        <td style="font-weight: 600;">${esc(item.docName)}</td>
        <td>${esc(item.orgUnit)}</td>
        <td>
          <div class="action-cell" style="justify-content: center;">
            <button class="btn-action-icon btn-view" title="Xem chi tiết" onclick="viewSignature('${item.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            <button class="btn-action-icon btn-edit" title="Chỉnh sửa" onclick="editSignature('${item.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button class="btn-action-icon btn-delete" title="Xóa cấu hình" onclick="deleteSignature('${item.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                <line x1="10" y1="11" x2="10" y2="17"/>
                <line x1="14" y1="11" x2="14" y2="17"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  renderPagination(total, pages);
}

function renderPagination(total, pages) {
  const el = document.getElementById('table-pagination');
  if (!el) return;
  if (pages <= 1) { el.innerHTML = ''; return; }

  let html = `<button class="pg-btn" onclick="goPage(${SIGNATURE_STATE.page - 1})" ${SIGNATURE_STATE.page === 1 ? 'disabled' : ''}>‹</button>`;
  const start = Math.max(1, SIGNATURE_STATE.page - 2);
  const end = Math.min(pages, start + 4);
  for (let i = start; i <= end; i++) {
    html += `<button class="pg-btn ${i === SIGNATURE_STATE.page ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="pg-btn" onclick="goPage(${SIGNATURE_STATE.page + 1})" ${SIGNATURE_STATE.page === pages ? 'disabled' : ''}>›</button>`;
  el.innerHTML = html;
}

function goPage(p) {
  const pages = Math.ceil(SIGNATURE_STATE.filtered.length / SIGNATURE_STATE.pageSize);
  if (p < 1 || p > pages) return;
  SIGNATURE_STATE.page = p;
  renderTable();
}

function resetFilters() {
  document.getElementById('search-input').value = '';
  document.getElementById('filter-doc-type').value = '';
  SIGNATURE_STATE.filters = { query: '', docType: '' };
  applyFilters();
}

/* ── VIEW ROUTING ───────────────────────────── */
function showPanel(panelId) {
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(panelId).classList.add('active');
}

function showListView() {
  showPanel('view-list');
  applyFilters();
}

/* ── VIEW DETAIL OPERATIONS ──────────────────── */
function viewSignature(id) {
  const item = SIGNATURE_STATE.list.find(x => x.id === id);
  if (!item) return;
  SIGNATURE_STATE.currentId = id;

  document.getElementById('detail-title').textContent = `Chi tiết cấu hình: ${item.id}`;
  document.getElementById('det-sig-code').textContent = item.id;
  document.getElementById('det-doc-code').textContent = item.docCode;
  document.getElementById('det-doc-name').textContent = item.docName;
  document.getElementById('det-org-unit').textContent = item.orgUnit;

  // Render static signer steps list
  const tbody = document.getElementById('det-steps-tbody');
  if (tbody) {
    if (item.steps && item.steps.length) {
      tbody.innerHTML = item.steps.map((s, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td style="font-weight: 600; color: var(--text2);">${esc(s.group)}</td>
          <td style="font-weight: 700; color: var(--text);">${esc(s.name)}</td>
          <td>${esc(s.roleDept)}</td>
          <td>
            <span class="badge ${s.showSignature ? 'badge-green' : 'badge-red'}" style="background: ${s.showSignature ? 'rgba(5, 150, 105, 0.08)' : 'rgba(220, 38, 38, 0.08)'}; color: ${s.showSignature ? 'var(--success)' : 'var(--danger)'}; padding: 3px 8px; font-size: 11px; font-weight: 700; border-radius: 20px;">
              ${s.showSignature ? 'Có hiển thị' : 'Không hiển thị'}
            </span>
          </td>
        </tr>
      `).join('');
    } else {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text3); padding:16px;">Chưa cấu hình bước ký duyệt</td></tr>`;
    }
  }

  showPanel('view-detail');
}

function editCurrentSignature() {
  if (SIGNATURE_STATE.currentId) {
    editSignature(SIGNATURE_STATE.currentId);
  }
}

/* ── CREATE & EDIT OPERATIONS ────────────────── */
function showCreateForm() {
  SIGNATURE_STATE.currentId = null;

  document.getElementById('form-title').textContent = 'Thêm mới cấu hình chân ký';
  
  // Set random code for new signature config
  const nextNum = SIGNATURE_STATE.list.length + 1;
  const sigCode = 'CK-' + String(nextNum).padStart(3, '0');
  document.getElementById('input-sig-code').value = sigCode;
  
  // Reset values
  document.getElementById('input-doc-code').value = '';
  document.getElementById('input-doc-code').disabled = false;
  document.getElementById('input-org-unit').value = '';

  // Clear signer rows and add one empty row
  const tbody = document.getElementById('form-signer-tbody');
  if (tbody) tbody.innerHTML = '';
  addSignerRow();

  showPanel('view-form');
}

function editSignature(id) {
  const item = SIGNATURE_STATE.list.find(x => x.id === id);
  if (!item) return;
  SIGNATURE_STATE.currentId = id;

  document.getElementById('form-title').textContent = `Sửa cấu hình chân ký: ${item.id}`;
  document.getElementById('input-sig-code').value = item.id;
  document.getElementById('input-doc-code').value = item.docCode;
  document.getElementById('input-doc-code').disabled = true; // Lock document code during edit
  document.getElementById('input-org-unit').value = item.orgUnit;

  // Clear and populate steps
  const tbody = document.getElementById('form-signer-tbody');
  if (tbody) tbody.innerHTML = '';

  if (item.steps && item.steps.length) {
    item.steps.forEach(s => addSignerRow(s));
  } else {
    addSignerRow();
  }

  showPanel('view-form');
}

// Get all Chức danh - Đơn vị combinations for a user
function getUserRoleDeptOptions(userId) {
  const users = (window.MOCK && window.MOCK.users) ? window.MOCK.users : [];
  const u = users.find(x => x.id === userId);
  if (!u) return [];

  // Define warehouse names
  const whNames = {
    'HN01': 'Vận hành miền Bắc',
    'HCM01': 'Vận hành miền Nam',
    'DN01': 'Vận hành miền Trung'
  };
  const baseDept = whNames[u.warehouse] || 'Phòng Vận Hành';

  // Gather all roles: primary role + any additional roles
  const roles = [u.role];
  if (u.role === 'Thủ kho') {
    roles.push('Nhân viên kho');
  } else if (u.role === 'Administrator') {
    roles.push('Giám đốc kho');
  }

  // Gather all departments: base department + any specific org units from warehouses/slocs
  const depts = [baseDept];
  if (u.warehouse === 'HN01') {
    depts.push('Vận hành miền Bắc - Tổ Nhập HN01');
    depts.push('Vận hành miền Bắc - Tổ Xuất HN01');
  } else if (u.warehouse === 'HCM01') {
    depts.push('Vận hành miền Nam - Tổ Nhập HCM01');
    depts.push('Vận hành miền Nam - Tổ Xuất HCM01');
  } else if (u.warehouse === 'DN01') {
    depts.push('Vận hành miền Trung - Tổ Nhập DN01');
  }

  if (u.role === 'Administrator') {
    depts.push('Ban Công Nghệ');
  } else if (u.role === 'Kế toán kho') {
    depts.push('Phòng Tài Chính Kho');
  }

  // Generate all combinations formatted as: "Chức danh - Đơn vị"
  const options = [];
  roles.forEach(role => {
    depts.forEach(dept => {
      options.push(`${role} - ${dept}`);
    });
  });

  return [...new Set(options)];
}

// Add interactive signer row to form table
function addSignerRow(data = { group: 'Nhóm 1', userId: '', roleDept: '', showSignature: true }) {
  const tbody = document.getElementById('form-signer-tbody');
  if (!tbody) return;

  const rowCount = tbody.querySelectorAll('tr').length;
  const stt = rowCount + 1;

  const tr = document.createElement('tr');
  tr.className = 'signer-row';

  // Get users list from window.MOCK
  const users = (window.MOCK && window.MOCK.users) ? window.MOCK.users : [];
  const userOptions = users.map(u => `
    <option value="${u.id}" ${u.id === data.userId ? 'selected' : ''}>${esc(u.name)} (${esc(u.role)})</option>
  `).join('');

  // Dropdown for Nhóm ký song song
  const groups = ['Nhóm 1', 'Nhóm 2', 'Nhóm 3', 'Nhóm 4', 'Nhóm 5'];
  const groupOptions = groups.map(g => `
    <option value="${g}" ${g === data.group ? 'selected' : ''}>${g}</option>
  `).join('');

  // Dropdown options for Chức danh - Đơn vị
  let roleDeptOptions = '<option value="">-- Chọn Chức danh - Đơn vị --</option>';
  let isDisabled = 'disabled';
  if (data.userId) {
    const listOptions = getUserRoleDeptOptions(data.userId);
    roleDeptOptions += listOptions.map(opt => `
      <option value="${opt}" ${opt === data.roleDept ? 'selected' : ''}>${esc(opt)}</option>
    `).join('');
    isDisabled = '';
  }

  tr.innerHTML = `
    <td style="text-align:center;" class="row-stt">${stt}</td>
    <td>
      <select class="form-control row-group" style="padding: 6px 8px; font-size:13px; font-family: var(--font);" required>
        ${groupOptions}
      </select>
    </td>
    <td>
      <select class="form-control row-user" onchange="handleRowUserChange(this)" style="padding: 6px 8px; font-size:13px; font-family: var(--font);" required>
        <option value="">-- Chọn người ký --</option>
        ${userOptions}
      </select>
    </td>
    <td>
      <select class="form-control row-role-dept" ${isDisabled} style="padding: 6px 8px; font-size:13px; font-family: var(--font);" required>
        ${roleDeptOptions}
      </select>
    </td>
    <td style="text-align:center;">
      <label class="checkbox-row" style="justify-content: center; margin: 0;">
        <input type="checkbox" class="row-show-sig" ${data.showSignature ? 'checked' : ''} style="width: 16px; height: 16px;">
      </label>
    </td>
    <td style="text-align:center;">
      <button type="button" class="btn-action-icon btn-delete" onclick="removeSignerRow(this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:13px;height:13px;">
          <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
        </svg>
      </button>
    </td>
  `;

  tbody.appendChild(tr);
}

function handleRowUserChange(select) {
  const tr = select.closest('tr');
  const roleDeptSel = tr.querySelector('.row-role-dept');
  const userId = select.value;

  if (!userId) {
    roleDeptSel.innerHTML = '<option value="">-- Chọn Chức danh - Đơn vị --</option>';
    roleDeptSel.disabled = true;
    return;
  }

  const listOptions = getUserRoleDeptOptions(userId);
  roleDeptSel.innerHTML = '<option value="" disabled selected>-- Chọn Chức danh - Đơn vị --</option>' + 
    listOptions.map(opt => `<option value="${opt}">${esc(opt)}</option>`).join('');
  roleDeptSel.disabled = false;
}

function removeSignerRow(btn) {
  const tr = btn.closest('tr');
  const tbody = tr.parentNode;

  // Don't allow deleting the only step row
  if (tbody.querySelectorAll('tr').length <= 1) {
    showToast('Phải cấu hình ít nhất 1 người ký duyệt!', 'error');
    return;
  }

  tr.remove();

  // Re-number STT row numbers
  tbody.querySelectorAll('tr').forEach((r, idx) => {
    r.querySelector('.row-stt').textContent = idx + 1;
  });
}

// Confirmation modal triggers
function openConfirmModal() {
  const sigCode = document.getElementById('input-sig-code').value.trim();
  const docCode = document.getElementById('input-doc-code').value;
  const orgUnit = document.getElementById('input-org-unit').value;

  if (!sigCode || !docCode || !orgUnit) {
    showToast('Vui lòng điền đầy đủ các thông tin cấu hình (*)', 'error');
    return;
  }

  // Validate signer steps table
  let validSteps = true;
  const rows = document.querySelectorAll('#form-signer-tbody tr.signer-row');
  rows.forEach(tr => {
    const userId = tr.querySelector('.row-user').value;
    const roleDept = tr.querySelector('.row-role-dept').value;
    if (!userId || !roleDept) validSteps = false;
  });

  if (!validSteps) {
    showToast('Vui lòng chọn đầy đủ người ký và Chức danh - Đơn vị trong bảng!', 'error');
    return;
  }

  document.getElementById('confirm-modal').style.display = 'flex';
}

function closeConfirmModal() {
  document.getElementById('confirm-modal').style.display = 'none';
}

function submitSave() {
  closeConfirmModal();

  const sigCode = document.getElementById('input-sig-code').value.trim();
  const docCode = document.getElementById('input-doc-code').value;
  const orgUnit = document.getElementById('input-org-unit').value;

  const foundDoc = DOCUMENTS_LIST.find(d => d.code === docCode);
  const docName = foundDoc ? foundDoc.name : 'Tài liệu nghiệp vụ';

  // Read table rows to compile steps
  const steps = [];
  const rows = document.querySelectorAll('#form-signer-tbody tr.signer-row');
  const users = (window.MOCK && window.MOCK.users) ? window.MOCK.users : [];

  rows.forEach(tr => {
    const group = tr.querySelector('.row-group').value;
    const userId = tr.querySelector('.row-user').value;
    const roleDept = tr.querySelector('.row-role-dept').value;
    const showSignature = tr.querySelector('.row-show-sig').checked;

    const foundUser = users.find(u => u.id === userId);
    if (foundUser) {
      steps.push({
        group: group,
        userId: userId,
        name: foundUser.name,
        roleDept: roleDept,
        showSignature: showSignature
      });
    }
  });

  const configData = {
    id: sigCode,
    docCode: docCode,
    docName: docName,
    orgUnit: orgUnit,
    steps: steps
  };

  const isEdit = SIGNATURE_STATE.currentId !== null;
  if (isEdit) {
    const idx = SIGNATURE_STATE.list.findIndex(x => x.id === SIGNATURE_STATE.currentId);
    if (idx >= 0) {
      SIGNATURE_STATE.list[idx] = configData;
    }
    showToast(`Đã lưu cập nhật cấu hình ${sigCode} thành công!`);
  } else {
    // Check if configuration already exists for this document and orgUnit
    const duplicate = SIGNATURE_STATE.list.find(x => x.docCode === docCode && x.orgUnit === orgUnit);
    if (duplicate) {
      showToast(`Tài liệu này đã được cấu hình chân ký cho đơn vị ${orgUnit}!`, 'error');
      return;
    }
    SIGNATURE_STATE.list.unshift(configData);
    showToast(`Đã thêm mới cấu hình chân ký ${sigCode} thành công!`);
  }

  showListView();
}

function cancelForm() {
  const isEdit = SIGNATURE_STATE.currentId !== null;
  if (confirm(isEdit ? 'Bạn có muốn hủy các thay đổi đang chỉnh sửa?' : 'Bạn có muốn hủy bỏ việc tạo cấu hình mới?')) {
    showListView();
  }
}

function deleteSignature(id) {
  if (confirm(`Bạn có chắc chắn muốn xóa cấu hình chân ký ${id} không?`)) {
    SIGNATURE_STATE.list = SIGNATURE_STATE.list.filter(x => x.id !== id);
    showToast(`Đã xóa thành công cấu hình chân ký ${id}`);
    applyFilters();
  }
}

/* ── EVENT BINDING ──────────────────────────── */
function bindEvents() {
  // Global search input
  const searchEl = document.getElementById('search-input');
  if (searchEl) {
    searchEl.addEventListener('input', (e) => {
      SIGNATURE_STATE.filters.query = e.target.value;
      applyFilters();
    });
  }

  // Doc Type filter dropdown
  const filterDocTypeEl = document.getElementById('filter-doc-type');
  if (filterDocTypeEl) {
    // Populate filter dropdown
    filterDocTypeEl.innerHTML = '<option value="">Tất cả loại tài liệu</option>' + 
      DOCUMENTS_LIST.map(d => `<option value="${d.code}">${esc(d.name)}</option>`).join('');

    filterDocTypeEl.addEventListener('change', (e) => {
      SIGNATURE_STATE.filters.docType = e.target.value;
      applyFilters();
    });
  }

  // Populate form dropdown for document types
  const inputDocCodeEl = document.getElementById('input-doc-code');
  if (inputDocCodeEl) {
    inputDocCodeEl.innerHTML = '<option value="" disabled selected>-- Chọn loại tài liệu --</option>' + 
      DOCUMENTS_LIST.map(d => `<option value="${d.code}">${esc(d.code)} (${esc(d.name)})</option>`).join('');
  }

  // Populate form dropdown for management units
  const inputOrgUnitEl = document.getElementById('input-org-unit');
  if (inputOrgUnitEl) {
    inputOrgUnitEl.innerHTML = '<option value="" disabled selected>-- Chọn đơn vị quản lý --</option>' + 
      DEPARTMENTS_LIST.map(dept => `<option value="${dept}">${esc(dept)}</option>`).join('');
  }
}

/* ── UTILITY FUNCTIONS ───────────────────────── */
function esc(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : 'toast-error'}`;
  
  // Custom toast icon styling matching the Viettel design system
  const icon = type === 'success' ? 
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>` :
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;

  toast.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${type === 'success' ? 'rgba(5, 150, 105, 0.95)' : 'rgba(220, 38, 38, 0.95)'};
    color: #fff;
    padding: 10px 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-size: 13px;
    font-weight: 600;
    margin-top: 8px;
    animation: slideInRight 0.25s ease forwards;
  `;

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove toast
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.25s ease forwards';
    setTimeout(() => { toast.remove(); }, 250);
  }, 3000);
}
