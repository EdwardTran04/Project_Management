/**
 * ViettelAIWS — PH4 Cấu hình (Quản lý Nhân sự Kho)
 * staff.js — Logic quản lý nhân viên & gán quyền
 */
'use strict';

// Org units database for auto displaying Management Unit
const ORG_UNITS = {
  'HN01': {
    'ZONE-NHAP': 'Vận hành miền Bắc - Tổ Nhập HN01',
    'ZONE-XE': 'Vận hành miền Bắc - Tổ Bãi xe HN01',
    'ZONE-LUUKHO-A': 'Vận hành miền Bắc - Tổ Lưu kho A',
    'ZONE-LUUKHO-B': 'Vận hành miền Bắc - Tổ Lưu kho B',
    'ZONE-XUAT': 'Vận hành miền Bắc - Tổ Xuất HN01',
    'ZONE-QC': 'KCS miền Bắc - Tổ Kiểm định'
  },
  'HCM01': {
    'ZONE-NHAP': 'Vận hành miền Nam - Tổ Nhập HCM01',
    'ZONE-XE': 'Vận hành miền Nam - Tổ Bãi xe HCM01',
    'ZONE-LUUKHO-A': 'Vận hành miền Nam - Tổ Lưu kho HCM01',
    'ZONE-XUAT': 'Vận hành miền Nam - Tổ Xuất HCM01'
  },
  'DN01': {
    'ZONE-NHAP': 'Vận hành miền Trung - Tổ Nhập DN01',
    'ZONE-LUUKHO-A': 'Vận hành miền Trung - Tổ Lưu kho DN01',
    'ZONE-XUAT': 'Vận hành miền Trung - Tổ Xuất DN01'
  }
};

// Plants & Slocs reference config for checkboxes/select rendering
const PLANTS_CONFIG = [
  {
    id: 'HN01',
    name: 'Kho Hà Nội 01 (HN01)',
    slocs: [
      { id: 'ZONE-NHAP', name: 'Khu nhập hàng (ZONE-NHAP)' },
      { id: 'ZONE-XE', name: 'Bãi xe (ZONE-XE)' },
      { id: 'ZONE-LUUKHO-A', name: 'Lưu kho A (ZONE-LUUKHO-A)' },
      { id: 'ZONE-LUUKHO-B', name: 'Lưu kho B (ZONE-LUUKHO-B)' },
      { id: 'ZONE-XUAT', name: 'Khu xuất hàng (ZONE-XUAT)' },
      { id: 'ZONE-QC', name: 'Khu kiểm QC (ZONE-QC)' }
    ]
  },
  {
    id: 'HCM01',
    name: 'Kho Hồ Chí Minh 01 (HCM01)',
    slocs: [
      { id: 'ZONE-NHAP', name: 'Khu nhập hàng (ZONE-NHAP)' },
      { id: 'ZONE-XE', name: 'Bãi xe (ZONE-XE)' },
      { id: 'ZONE-LUUKHO-A', name: 'Lưu kho A (ZONE-LUUKHO-A)' },
      { id: 'ZONE-XUAT', name: 'Khu xuất hàng (ZONE-XUAT)' }
    ]
  },
  {
    id: 'DN01',
    name: 'Kho Đà Nẵng 01 (DN01)',
    slocs: [
      { id: 'ZONE-NHAP', name: 'Khu nhập hàng (ZONE-NHAP)' },
      { id: 'ZONE-LUUKHO-A', name: 'Lưu kho A (ZONE-LUUKHO-A)' },
      { id: 'ZONE-XUAT', name: 'Khu xuất hàng (ZONE-XUAT)' }
    ]
  }
];

// Available roles list for checklist
const ROLES_LIST = [
  'Thủ kho',
  'Nhân viên kho',
  'Giám đốc kho',
  'Bảo vệ',
  'Lái xe'
];

let STAFF_STATE = {
  list: [],
  filtered: [],
  page: 1,
  pageSize: 10,
  currentId: null,
  filters: {
    query: '',
    plant: '',
    role: ''
  }
};

const DEFAULT_AVATAR = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23B5B5B5'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

/* ── INIT ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderRolesChecklistForm();
  applyFilters();
  bindEvents();
});

/* ── SEED INITIAL DATA ──────────────────────── */
function initData() {
  if (typeof MOCK === 'undefined' || !MOCK.users) {
    STAFF_STATE.list = [
      {
        id: 'USR-001',
        name: 'Nguyễn Admin',
        role: 'Giám đốc kho',
        email: 'admin@viettel.com.vn',
        phone: '0981000001',
        warehouse: 'HN01',
        active: 'active',
        birth: '1990-01-01',
        dept: 'Ban Giám Đốc',
        start: '2024-01-01',
        end: '',
        plants: ['HN01', 'HCM01'],
        additionalRoles: ['Thủ kho'],
        image: '',
        accessList: [
          { plant: 'HN01', sloc: 'ZONE-NHAP', dept: 'Vận hành miền Bắc - Tổ Nhập HN01' },
          { plant: 'HCM01', sloc: 'ZONE-LUUKHO-A', dept: 'Vận hành miền Nam - Tổ Lưu kho HCM01' }
        ]
      }
    ];
    return;
  }

  const deptMap = {
    'USR-001': 'Ban Công Nghệ',
    'USR-002': 'Vận hành miền Bắc',
    'USR-003': 'Phòng Tài Chính Kho',
    'USR-004': 'Vận hành miền Bắc',
    'USR-005': 'Vận hành miền Nam',
    'USR-006': 'Vận hành miền Nam',
    'USR-007': 'Vận hành miền Trung'
  };

  const birthMap = {
    'USR-001': '1988-10-14',
    'USR-002': '1990-05-24',
    'USR-003': '1993-11-02',
    'USR-004': '1995-02-18',
    'USR-005': '1987-07-30',
    'USR-006': '1992-04-12',
    'USR-007': '1991-09-05'
  };

  // Convert default main roles if they don't match the new roles config
  const roleConvert = {
    'Administrator': 'Giám đốc kho',
    'Thủ kho': 'Thủ kho',
    'Kế toán kho': 'Nhân viên kho',
    'Nhân viên kho': 'Nhân viên kho',
    'Trưởng ca': 'Thủ kho',
    'Giám sát kho': 'Giám đốc kho'
  };

  STAFF_STATE.list = MOCK.users.map(u => {
    const warehouseId = u.warehouse || 'HN01';
    const dept = deptMap[u.id] || 'Phòng Vận Hành';
    const mainRole = roleConvert[u.role] || 'Nhân viên kho';
    
    // Seed pre-defined access list with matching org units
    const accessList = [
      { plant: warehouseId, sloc: 'ZONE-NHAP', dept: ORG_UNITS[warehouseId]['ZONE-NHAP'] },
      { plant: warehouseId, sloc: 'ZONE-LUUKHO-A', dept: ORG_UNITS[warehouseId]['ZONE-LUUKHO-A'] },
      { plant: warehouseId, sloc: 'ZONE-XUAT', dept: ORG_UNITS[warehouseId]['ZONE-XUAT'] }
    ];

    return {
      id: u.id,
      name: u.name,
      role: mainRole,
      email: u.email,
      phone: u.phone,
      warehouse: warehouseId,
      active: u.active ? 'active' : 'inactive',
      birth: birthMap[u.id] || '1992-01-01',
      dept: dept,
      start: '2025-01-01',
      end: '',
      plants: [warehouseId],
      additionalRoles: mainRole === 'Thủ kho' ? ['Nhân viên kho'] : [],
      image: '',
      accessList: accessList
    };
  });
}

/* ── FORM RENDERERS ─────────────────────────── */
function renderRolesChecklistForm() {
  const container = document.getElementById('form-roles-checklist');
  if (!container) return;

  container.innerHTML = ROLES_LIST.map(role => `
    <label class="checkbox-row" style="margin-right: 12px;">
      <input type="checkbox" name="form-role-check" value="${role}">
      <span>${role}</span>
    </label>
  `).join('');
}

/* ── INTERACTIVE DYNAMIC TABLE FOR ACCESS ────── */
function addAccessRow(data = { plant: '', sloc: '', dept: '' }) {
  const tbody = document.getElementById('form-access-tbody');
  if (!tbody) return;

  const rowCount = tbody.querySelectorAll('tr').length;
  const stt = rowCount + 1;

  const tr = document.createElement('tr');
  tr.className = 'access-row';

  const plantOptions = PLANTS_CONFIG.map(p => `
    <option value="${p.id}" ${p.id === data.plant ? 'selected' : ''}>${p.name}</option>
  `).join('');

  let slocOptions = '<option value="">-- Chọn Sloc --</option>';
  if (data.plant) {
    const selectedPlant = PLANTS_CONFIG.find(p => p.id === data.plant);
    if (selectedPlant) {
      slocOptions += selectedPlant.slocs.map(s => `
        <option value="${s.id}" ${s.id === data.sloc ? 'selected' : ''}>${s.name}</option>
      `).join('');
    }
  }

  tr.innerHTML = `
    <td style="text-align:center;" class="row-stt">${stt}</td>
    <td>
      <select class="form-control row-plant" onchange="handleRowPlantChange(this)" required>
        <option value="">-- Chọn Plant --</option>
        ${plantOptions}
      </select>
    </td>
    <td>
      <select class="form-control row-sloc" onchange="handleRowSlocChange(this)" required>
        ${slocOptions}
      </select>
    </td>
    <td>
      <input type="text" class="form-control row-dept" placeholder="Đơn vị quản lý tự động hiển thị..." value="${esc(data.dept)}" readonly style="background:var(--bg4); cursor:not-allowed;">
    </td>
    <td style="text-align:center;">
      <button type="button" class="btn-action-icon btn-delete" onclick="removeAccessRow(this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:13px;height:13px;">
          <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
        </svg>
      </button>
    </td>
  `;

  tbody.appendChild(tr);
}

function handleRowPlantChange(select) {
  const tr = select.closest('tr');
  const slocSelect = tr.querySelector('.row-sloc');
  const deptInput = tr.querySelector('.row-dept');
  const plantId = select.value;

  deptInput.value = '';

  let slocOptions = '<option value="">-- Chọn Sloc --</option>';
  if (plantId) {
    const selectedPlant = PLANTS_CONFIG.find(p => p.id === plantId);
    if (selectedPlant) {
      slocOptions += selectedPlant.slocs.map(s => `
        <option value="${s.id}">${s.name}</option>
      `).join('');
    }
  }
  slocSelect.innerHTML = slocOptions;
}

function handleRowSlocChange(select) {
  const tr = select.closest('tr');
  const plantSelect = tr.querySelector('.row-plant');
  const deptInput = tr.querySelector('.row-dept');
  
  const plantId = plantSelect.value;
  const slocId = select.value;

  if (plantId && slocId && ORG_UNITS[plantId] && ORG_UNITS[plantId][slocId]) {
    deptInput.value = ORG_UNITS[plantId][slocId];
  } else {
    deptInput.value = '';
  }
}

function removeAccessRow(btn) {
  const tr = btn.closest('tr');
  const tbody = tr.parentNode;
  tr.remove();

  // Re-number STT row numbers
  tbody.querySelectorAll('tr').forEach((r, idx) => {
    r.querySelector('.row-stt').textContent = idx + 1;
  });
}

/* ── IMAGE UPLOAD HANDLING ──────────────────── */
function triggerFileInput() {
  document.getElementById('staff-image-file').click();
}

function handleImageUpload(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.getElementById('staff-image-preview');
      img.src = e.target.result;
      img.style.display = 'block';
      document.getElementById('staff-image-clear-btn').style.display = 'flex';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function clearImageUpload(e) {
  if (e) e.stopPropagation();
  const input = document.getElementById('staff-image-file');
  input.value = '';
  const img = document.getElementById('staff-image-preview');
  img.src = '';
  img.style.display = 'none';
  document.getElementById('staff-image-clear-btn').style.display = 'none';
}

/* ── FILTERS & DATA TABLE RENDERING ─────────── */
function applyFilters() {
  let list = [...STAFF_STATE.list];

  // Search input query
  const q = STAFF_STATE.filters.query.trim().toLowerCase();
  if (q) {
    list = list.filter(u =>
      u.id.toLowerCase().includes(q) ||
      u.name.toLowerCase().includes(q)
    );
  }

  // Plant filter
  if (STAFF_STATE.filters.plant) {
    list = list.filter(u => u.plants.includes(STAFF_STATE.filters.plant));
  }

  // Main role filter
  if (STAFF_STATE.filters.role) {
    list = list.filter(u => u.role === STAFF_STATE.filters.role);
  }

  STAFF_STATE.filtered = list;
  STAFF_STATE.page = 1;
  renderTable();
}

function renderTable() {
  const tbody = document.getElementById('staff-tbody');
  if (!tbody) return;

  const total = STAFF_STATE.filtered.length;
  const pages = Math.max(1, Math.ceil(total / STAFF_STATE.pageSize));
  if (STAFF_STATE.page > pages) STAFF_STATE.page = pages;

  const start = (STAFF_STATE.page - 1) * STAFF_STATE.pageSize;
  const slice = STAFF_STATE.filtered.slice(start, start + STAFF_STATE.pageSize);

  document.getElementById('table-info').textContent = total ? `Hiển thị ${start + 1}–${Math.min(start + STAFF_STATE.pageSize, total)} / ${total} nhân sự` : 'Hiển thị 0/0 nhân sự';

  if (!slice.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:32px; color:var(--text3);">Không tìm thấy nhân sự phù hợp.</td></tr>`;
    renderPagination(0, 0);
    return;
  }

  const statusMap = {
    active: { label: 'Đang làm việc', cls: 'sp-active' },
    probation: { label: 'Thử việc', cls: 'sp-probation' },
    inactive: { label: 'Đã nghỉ việc', cls: 'sp-inactive' }
  };

  tbody.innerHTML = slice.map((u, index) => {
    const stt = start + index + 1;
    const statusCfg = statusMap[u.active] || { label: u.active, cls: 'sp-inactive' };
    const plantsStr = u.plants.length ? u.plants.join(', ') : '—';

    return `
      <tr>
        <td>${stt}</td>
        <td class="td-bold td-mono">${esc(u.id)}</td>
        <td class="td-bold" style="color:var(--text);">${esc(u.name)}</td>
        <td>${esc(u.role)}</td>
        <td class="td-bold" style="color:var(--info);">${esc(plantsStr)}</td>
        <td><span class="status-pill ${statusCfg.cls}">${statusCfg.label}</span></td>
        <td style="text-align:center;">
          <div class="action-cell" style="justify-content:center;">
            <button class="btn-action-icon btn-view" title="Xem chi tiết" onclick="viewStaff('${u.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
            <button class="btn-action-icon btn-edit" title="Sửa thông tin" onclick="editStaff('${u.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button class="btn-action-icon btn-delete" title="Xóa nhân sự" onclick="deleteStaff('${u.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
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

  let html = `<button class="pg-btn" onclick="goPage(${STAFF_STATE.page - 1})" ${STAFF_STATE.page === 1 ? 'disabled' : ''}>‹</button>`;
  const start = Math.max(1, STAFF_STATE.page - 2);
  const end = Math.min(pages, start + 4);
  for (let i = start; i <= end; i++) {
    html += `<button class="pg-btn ${i === STAFF_STATE.page ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="pg-btn" onclick="goPage(${STAFF_STATE.page + 1})" ${STAFF_STATE.page === pages ? 'disabled' : ''}>›</button>`;
  el.innerHTML = html;
}

function goPage(p) {
  const pages = Math.ceil(STAFF_STATE.filtered.length / STAFF_STATE.pageSize);
  if (p < 1 || p > pages) return;
  STAFF_STATE.page = p;
  renderTable();
}

function resetFilters() {
  document.getElementById('search-input').value = '';
  document.getElementById('filter-plant').value = '';
  document.getElementById('filter-role').value = '';
  STAFF_STATE.filters = { query: '', plant: '', role: '' };
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
function viewStaff(id) {
  const u = STAFF_STATE.list.find(x => x.id === id);
  if (!u) return;
  STAFF_STATE.currentId = id;

  document.getElementById('detail-title').textContent = `${u.name} (${u.id})`;
  document.getElementById('det-code').textContent = u.id;
  document.getElementById('det-name').textContent = u.name;
  document.getElementById('det-birth').textContent = u.birth || '—';
  document.getElementById('det-phone').textContent = u.phone || '—';
  document.getElementById('det-email').textContent = u.email || '—';
  document.getElementById('det-dept').textContent = u.dept || '—';
  document.getElementById('det-start-date').textContent = u.start || '—';
  document.getElementById('det-end-date').textContent = u.end || '—';
  document.getElementById('det-main-role').textContent = u.role;

  const statusMap = {
    active: { label: 'Đang làm việc', cls: 'sp-active' },
    probation: { label: 'Thử việc', cls: 'sp-probation' },
    inactive: { label: 'Đã nghỉ việc', cls: 'sp-inactive' }
  };
  const statusCfg = statusMap[u.active] || { label: u.active, cls: 'sp-inactive' };
  document.getElementById('det-status').innerHTML = `<span class="status-pill ${statusCfg.cls}">${statusCfg.label}</span>`;

  // Render Image
  const detAvatar = document.getElementById('det-avatar');
  if (detAvatar) {
    detAvatar.src = u.image || DEFAULT_AVATAR;
  }

  // Render Access Control Section (Read-only Table)
  const tbody = document.getElementById('det-access-tbody');
  if (tbody) {
    if (!u.accessList || !u.accessList.length) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:16px; color:var(--text3);">Không có quyền truy cập Plant/Sloc nào được gán.</td></tr>`;
    } else {
      tbody.innerHTML = u.accessList.map((a, idx) => {
        const pObj = PLANTS_CONFIG.find(p => p.id === a.plant);
        const pName = pObj ? pObj.name : a.plant;
        const sObj = pObj ? pObj.slocs.find(s => s.id === a.sloc) : null;
        const sName = sObj ? sObj.name : a.sloc;

        return `
          <tr>
            <td style="text-align:center;">${idx + 1}</td>
            <td class="td-bold" style="color:var(--text);">${esc(pName)}</td>
            <td class="td-bold" style="color:var(--info);">${esc(sName)}</td>
            <td>${esc(a.dept || '—')}</td>
          </tr>
        `;
      }).join('');
    }
  }

  // Render Additional Roles Checklist (Read-only on 1 row)
  const rolesContainer = document.getElementById('det-roles-checklist');
  if (rolesContainer) {
    rolesContainer.innerHTML = ROLES_LIST.map(role => {
      const hasRole = u.additionalRoles.includes(role);
      return `
        <label class="checkbox-row" style="margin-right: 12px; opacity: 0.8; pointer-events: none;">
          <input type="checkbox" ${hasRole ? 'checked' : ''} disabled>
          <span>${role}</span>
        </label>
      `;
    }).join('');
  }

  showPanel('view-detail');
}

/* ── CREATE / EDIT OPERATIONS ────────────────── */
function showCreateForm() {
  STAFF_STATE.currentId = null;
  document.getElementById('form-title').textContent = 'Thêm nhân sự mới';
  document.getElementById('staff-form').reset();
  document.getElementById('form-staff-id').value = '';
  document.getElementById('input-code').disabled = false;

  // Clear Image
  clearImageUpload();

  // Clear role checkboxes
  document.querySelectorAll('input[name="form-role-check"]').forEach(cb => cb.checked = false);

  // Clear access table and add 1 empty default row
  const tbody = document.getElementById('form-access-tbody');
  if (tbody) tbody.innerHTML = '';
  addAccessRow();

  showPanel('view-form');
}

function editStaff(id) {
  const u = STAFF_STATE.list.find(x => x.id === id);
  if (!u) return;
  STAFF_STATE.currentId = id;

  document.getElementById('form-title').textContent = `Sửa thông tin: ${u.name}`;
  document.getElementById('form-staff-id').value = u.id;
  document.getElementById('input-code').value = u.id;
  document.getElementById('input-code').disabled = true; // Cannot edit staff code

  document.getElementById('input-name').value = u.name;
  document.getElementById('input-birth').value = u.birth || '';
  document.getElementById('input-phone').value = u.phone || '';
  document.getElementById('input-email').value = u.email || '';
  document.getElementById('input-dept').value = u.dept || '';
  document.getElementById('input-start-date').value = u.start || '';
  document.getElementById('input-end-date').value = u.end || '';
  document.getElementById('input-main-role').value = u.role;
  document.getElementById('input-active').value = u.active;

  // Populate Image
  clearImageUpload();
  if (u.image) {
    const img = document.getElementById('staff-image-preview');
    img.src = u.image;
    img.style.display = 'block';
    document.getElementById('staff-image-clear-btn').style.display = 'flex';
  }

  // Populate roles checkboxes
  document.querySelectorAll('input[name="form-role-check"]').forEach(cb => {
    cb.checked = u.additionalRoles.includes(cb.value);
  });

  // Populate access control table rows
  const tbody = document.getElementById('form-access-tbody');
  if (tbody) tbody.innerHTML = '';

  if (u.accessList && u.accessList.length) {
    u.accessList.forEach(a => addAccessRow(a));
  } else {
    addAccessRow();
  }

  showPanel('view-form');
}

function editCurrentStaff() {
  if (STAFF_STATE.currentId) {
    editStaff(STAFF_STATE.currentId);
  }
}

function saveStaffForm() {
  const code = document.getElementById('input-code').value.trim();
  const name = document.getElementById('input-name').value.trim();
  const phone = document.getElementById('input-phone').value.trim();
  const email = document.getElementById('input-email').value.trim();
  const mainRole = document.getElementById('input-main-role').value;

  // Validation
  if (!code || !name || !phone || !email || !mainRole) {
    showToast('Vui lòng nhập đầy đủ các trường bắt buộc (*)', 'error');
    return;
  }

  // Get selected additional roles
  const additionalRoles = [];
  document.querySelectorAll('input[name="form-role-check"]:checked').forEach(cb => {
    additionalRoles.push(cb.value);
  });

  // Scan access control table rows to compile access list and plants list
  const accessList = [];
  const plantsSet = new Set();
  const rows = document.querySelectorAll('#form-access-tbody tr.access-row');
  rows.forEach(tr => {
    const plant = tr.querySelector('.row-plant').value;
    const sloc = tr.querySelector('.row-sloc').value;
    const dept = tr.querySelector('.row-dept').value.trim();
    if (plant && sloc) {
      accessList.push({ plant, sloc, dept });
      plantsSet.add(plant);
    }
  });

  // Get image base64
  let imageBase64 = '';
  const imgPreview = document.getElementById('staff-image-preview');
  if (imgPreview && imgPreview.style.display !== 'none') {
    imageBase64 = imgPreview.src;
  }

  const staffData = {
    id: code,
    name: name,
    birth: document.getElementById('input-birth').value,
    phone: phone,
    email: email,
    dept: document.getElementById('input-dept').value.trim(),
    start: document.getElementById('input-start-date').value,
    end: document.getElementById('input-end-date').value,
    role: mainRole,
    active: document.getElementById('input-active').value,
    plants: Array.from(plantsSet),
    additionalRoles: additionalRoles,
    image: imageBase64,
    accessList: accessList
  };

  if (STAFF_STATE.currentId) {
    // Edit mode
    const idx = STAFF_STATE.list.findIndex(x => x.id === STAFF_STATE.currentId);
    if (idx !== -1) {
      STAFF_STATE.list[idx] = staffData;
      showToast(`Đã cập nhật thông tin nhân viên ${name} thành công`, 'success');
    }
  } else {
    // Create mode: check code existence
    const exists = STAFF_STATE.list.some(x => x.id.toLowerCase() === code.toLowerCase());
    if (exists) {
      showToast(`Mã nhân viên ${code} đã tồn tại trên hệ thống!`, 'error');
      return;
    }
    STAFF_STATE.list.unshift(staffData);
    showToast(`Đã thêm mới nhân viên ${name} thành công`, 'success');
  }

  showListView();
}

function deleteStaff(id) {
  const u = STAFF_STATE.list.find(x => x.id === id);
  if (!u) return;

  if (confirm(`Bạn có chắc chắn muốn xóa nhân viên ${u.name} (${u.id}) khỏi hệ thống?`)) {
    STAFF_STATE.list = STAFF_STATE.list.filter(x => x.id !== id);
    showToast(`Đã xóa nhân viên ${u.name} khỏi hệ thống`, 'success');
    applyFilters();
  }
}

/* ── EVENT BINDINGS ─────────────────────────── */
function bindEvents() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      STAFF_STATE.filters.query = e.target.value;
      applyFilters();
    });
  }

  const filterPlant = document.getElementById('filter-plant');
  if (filterPlant) {
    filterPlant.addEventListener('change', e => {
      STAFF_STATE.filters.plant = e.target.value;
      applyFilters();
    });
  }

  const filterRole = document.getElementById('filter-role');
  if (filterRole) {
    filterRole.addEventListener('change', e => {
      STAFF_STATE.filters.role = e.target.value;
      applyFilters();
    });
  }
}

/* ── TOAST & UTILS ──────────────────────────── */
function showToast(msg, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  };
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<span>${icons[type] || 'ℹ'}</span><span>${esc(msg)}</span>`;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function esc(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── IMPORT & EXPORT EXCEL/CSV TEMPLATE ─────── */
function downloadStaffTemplate() {
  const csvContent = "\uFEFF" + `"Ma nhan vien","Ho va ten","Ngay sinh (YYYY-MM-DD)","So dien thoai","Email","Phong ban","Ngay bat dau (YYYY-MM-DD)","Chuc danh (Thu kho/Nhan vien kho/Giam doc kho/Bao ve/Lai xe)","Trang thai (active/probation/inactive)"\n` +
    `"USR-009","Nguyễn Văn B","1992-06-20","0981999222","nvb@viettel.com.vn","Trung tâm Vận hành","2026-07-01","Nhân viên kho","active"\n` +
    `"USR-010","Lê Thị C","1994-08-15","0981999333","ltc@viettel.com.vn","Trung tâm Vận hành","2026-07-01","Thủ kho","active"`;
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "mau_danh_sach_nhan_su.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function triggerStaffImport() {
  document.getElementById('staff-import-file').click();
}

function handleStaffImport(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result;
      const lines = text.split('\n');
      let importedCount = 0;
      
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const cols = line.split(',').map(col => col.replace(/^"|"$/g, '').trim());
        if (cols.length >= 8) {
          const code = cols[0];
          const name = cols[1];
          if (!code || !name) continue;
          
          const exists = STAFF_STATE.list.some(x => x.id.toLowerCase() === code.toLowerCase());
          if (exists) continue;

          const defaultPlant = 'HN01';
          const defaultDept = cols[5] || 'Phòng Vận Hành';

          STAFF_STATE.list.unshift({
            id: code,
            name: name,
            birth: cols[2] || '1992-01-01',
            phone: cols[3] || '—',
            email: cols[4] || '—',
            dept: defaultDept,
            start: cols[6] || '2026-07-01',
            end: '',
            role: cols[7] || 'Nhân viên kho',
            active: cols[8] || 'active',
            plants: [defaultPlant],
            additionalRoles: [],
            image: '',
            accessList: [
              { plant: defaultPlant, sloc: 'ZONE-NHAP', dept: ORG_UNITS[defaultPlant]['ZONE-NHAP'] }
            ]
          });
          importedCount++;
        }
      }

      if (importedCount > 0) {
        showToast(`Đã import thành công ${importedCount} nhân sự mới!`, 'success');
        applyFilters();
      } else {
        showToast('Không tìm thấy bản ghi nhân sự mới hợp lệ hoặc định dạng sai.', 'error');
      }
      input.value = '';
    };
    reader.readAsText(file, 'UTF-8');
  }
}
