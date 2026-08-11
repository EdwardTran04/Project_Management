/**
 * ViettelAIWS — Cấu hình Đơn vị quản lý
 * orgunit.js — Logic quản lý và cập nhật Thủ kho phụ trách cho Đơn vị quản lý
 */
'use strict';

// 1. DỮ LIỆU ĐƠN VỊ QUẢN LÝ MẪU (MOCK DATA)
const DEFAULT_ORG_UNITS_DATA = [
  { id: 'OU-001', name: 'Vận hành miền Bắc - Tổ Nhập HN01', plant: 'HN01', sloc: 'ZONE-NHAP', keeperId: 'USR-002' },
  { id: 'OU-002', name: 'Vận hành miền Bắc - Tổ Bãi xe HN01', plant: 'HN01', sloc: 'ZONE-XE', keeperId: '' },
  { id: 'OU-003', name: 'Vận hành miền Bắc - Tổ Lưu kho A', plant: 'HN01', sloc: 'ZONE-LUUKHO-A', keeperId: 'USR-002' },
  { id: 'OU-004', name: 'Vận hành miền Bắc - Tổ Lưu kho B', plant: 'HN01', sloc: 'ZONE-LUUKHO-B', keeperId: '' },
  { id: 'OU-005', name: 'Vận hành miền Bắc - Tổ Xuất HN01', plant: 'HN01', sloc: 'ZONE-XUAT', keeperId: 'USR-002' },
  { id: 'OU-006', name: 'KCS miền Bắc - Tổ Kiểm định', plant: 'HN01', sloc: 'ZONE-QC', keeperId: '' },
  { id: 'OU-007', name: 'Vận hành miền Nam - Tổ Nhập HCM01', plant: 'HCM01', sloc: 'ZONE-NHAP', keeperId: 'USR-005' },
  { id: 'OU-008', name: 'Vận hành miền Nam - Tổ Bãi xe HCM01', plant: 'HCM01', sloc: 'ZONE-XE', keeperId: '' },
  { id: 'OU-009', name: 'Vận hành miền Nam - Tổ Lưu kho HCM01', plant: 'HCM01', sloc: 'ZONE-LUUKHO-A', keeperId: 'USR-005' },
  { id: 'OU-010', name: 'Vận hành miền Nam - Tổ Xuất HCM01', plant: 'HCM01', sloc: 'ZONE-XUAT', keeperId: 'USR-005' },
  { id: 'OU-011', name: 'Vận hành miền Trung - Tổ Nhập DN01', plant: 'DN01', sloc: 'ZONE-NHAP', keeperId: 'USR-007' },
  { id: 'OU-012', name: 'Vận hành miền Trung - Tổ Lưu kho DN01', plant: 'DN01', sloc: 'ZONE-LUUKHO-A', keeperId: 'USR-007' },
  { id: 'OU-013', name: 'Vận hành miền Trung - Tổ Xuất DN01', plant: 'DN01', sloc: 'ZONE-XUAT', keeperId: 'USR-007' }
];

// 2. BIẾN TRẠNG THÁI TOÀN CỤC
let orgData = [];
let tempData = []; // Lưu trữ dữ liệu đang chỉnh sửa tạm thời
let isEditMode = false;

// 3. KHỞI TẠO KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderTable();
});

// Khởi tạo dữ liệu từ localStorage hoặc dùng mặc định
function initData() {
  const saved = localStorage.getItem('viettel_org_units_configs');
  if (saved) {
    try {
      orgData = JSON.parse(saved);
    } catch (e) {
      console.error('Lỗi phân tích dữ liệu lưu trữ, khởi tạo lại...', e);
      orgData = [...DEFAULT_ORG_UNITS_DATA];
    }
  } else {
    orgData = [...DEFAULT_ORG_UNITS_DATA];
    localStorage.setItem('viettel_org_units_configs', JSON.stringify(orgData));
  }
}

// Lấy danh sách Thủ kho từ Mock data toàn hệ thống
function getKeepersList() {
  const users = (window.MOCK && window.MOCK.users) ? window.MOCK.users : [];
  // Lọc ra các người dùng có thể là thủ kho hoặc nhân viên
  return users.filter(u => u.active);
}

// 4. RENDER BẢNG DỮ LIỆU
function renderTable() {
  const tbody = document.getElementById('orgunit-tbody');
  tbody.innerHTML = '';

  const filtered = getFilteredData();
  const keepers = getKeepersList();

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: var(--text3); padding: 30px;">
          Không tìm thấy Đơn vị quản lý nào phù hợp.
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach((item, idx) => {
    const tr = document.createElement('tr');
    if (isEditMode) {
      tr.classList.add('edit-active');
    }

    // Xác định Thủ kho phụ trách hiện tại
    let currentKeeperId = item.keeperId;
    if (isEditMode) {
      const tempItem = tempData.find(t => t.id === item.id);
      if (tempItem) {
        currentKeeperId = tempItem.keeperId;
      }
    }

    const keeperObj = keepers.find(u => u.id === currentKeeperId);
    const keeperName = keeperObj ? `${keeperObj.name} (${keeperObj.role})` : '— Chưa gán —';

    // Cột Thủ kho (Cho phép sửa hoặc hiển thị text thường)
    let tdKeeper = '';
    if (isEditMode) {
      const options = keepers.map(k => `
        <option value="${k.id}" ${k.id === currentKeeperId ? 'selected' : ''}>${k.name} (${k.role})</option>
      `).join('');

      tdKeeper = `
        <td>
          <select id="select-keeper-${item.id}" 
                  class="form-control" 
                  style="padding: 4px 8px; font-size:13px; height: 32px;"
                  onchange="updateTempKeeper('${item.id}', this.value)">
            <option value="">-- Chưa gán --</option>
            ${options}
          </select>
        </td>
      `;
    } else {
      tdKeeper = `
        <td style="font-weight: 600; color: ${currentKeeperId ? 'var(--text)' : 'var(--text3)'};">
          ${keeperName}
        </td>
      `;
    }

    // Nút Thao tác (Cho phép kích hoạt Edit mode)
    let tdAction = '';
    if (isEditMode) {
      tdAction = `
        <td style="text-align: center;">
          <span style="font-size: 12px; color: var(--text3); font-style: italic;">Đang sửa...</span>
        </td>
      `;
    } else {
      tdAction = `
        <td style="text-align: center;">
          <button class="btn-action-icon btn-edit" title="Chỉnh sửa" onclick="editSingleRow('${item.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 13px; height: 13px;">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </td>
      `;
    }

    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td style="font-weight: 700; color: var(--text);">${esc(item.name)}</td>
      <td class="font-mono" style="font-weight: 600;">${esc(item.plant)}</td>
      <td class="font-mono">${esc(item.sloc)}</td>
      ${tdKeeper}
      ${tdAction}
    `;
    tbody.appendChild(tr);
  });
}

// 5. LỌC DỮ LIỆU THEO TÌM KIẾM VÀ BỘ LỌC
function getFilteredData() {
  const searchVal = document.getElementById('search-input').value.trim().toLowerCase();
  const plantVal = document.getElementById('filter-plant').value;

  return orgData.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(searchVal) || 
                        item.plant.toLowerCase().includes(searchVal) || 
                        item.sloc.toLowerCase().includes(searchVal);
    const matchPlant = !plantVal || item.plant === plantVal;
    return matchSearch && matchPlant;
  });
}

// Xử lý sự kiện tìm kiếm và thay đổi bộ lọc
function handleSearch() {
  renderTable();
}

// Xóa tất cả bộ lọc
function resetFilters() {
  document.getElementById('search-input').value = '';
  document.getElementById('filter-plant').value = '';
  renderTable();
  showToast('Đã xóa tất cả bộ lọc tìm kiếm.');
}

// 6. CHẾ ĐỘ SỬA ĐỒNG THỜI
function enterEditMode() {
  if (isEditMode) return;

  isEditMode = true;
  // Tạo bản sao lưu tạm thời từ orgData để chỉnh sửa
  tempData = JSON.parse(JSON.stringify(orgData));

  // Cập nhật giao diện các nút
  document.getElementById('btn-edit').style.display = 'none';
  document.getElementById('btn-template').style.display = 'none';
  document.getElementById('btn-import').style.display = 'none';
  document.getElementById('btn-save').style.display = 'inline-flex';
  document.getElementById('btn-cancel').style.display = 'inline-flex';

  renderTable();
  showToast('Đã mở chế độ chỉnh sửa Thủ kho đồng loạt.');
}

// Hủy bỏ chế độ sửa
function exitEditMode(confirmExit = false) {
  if (!isEditMode) return;

  isEditMode = false;
  tempData = [];

  // Khôi phục giao diện các nút ban đầu
  document.getElementById('btn-edit').style.display = 'inline-flex';
  document.getElementById('btn-template').style.display = 'inline-flex';
  document.getElementById('btn-import').style.display = 'inline-flex';
  document.getElementById('btn-save').style.display = 'none';
  document.getElementById('btn-cancel').style.display = 'none';

  renderTable();
  if (!confirmExit) {
    showToast('Đã hủy bỏ toàn bộ chỉnh sửa chưa lưu.', 'info');
  }
}

// Cập nhật giá trị tạm thời khi người dùng chọn thủ kho
function updateTempKeeper(itemId, val) {
  const item = tempData.find(t => t.id === itemId);
  if (item) {
    item.keeperId = val;
  }
}

// Hành động khi nhấn "Sửa" ở từng dòng đơn lẻ
function editSingleRow(itemId) {
  enterEditMode();
  // Focus trực tiếp vào select của dòng tương ứng
  setTimeout(() => {
    const selectEl = document.getElementById(`select-keeper-${itemId}`);
    if (selectEl) {
      selectEl.focus();
    }
  }, 50);
}

// 7. POPUP MODAL XÁC NHẬN LƯU
function openConfirmModal() {
  const modal = document.getElementById('confirm-modal');
  modal.classList.add('active');
}

function closeConfirmModal() {
  const modal = document.getElementById('confirm-modal');
  modal.classList.remove('active');
}

// Xác nhận lưu dữ liệu từ popup
function submitSave() {
  closeConfirmModal();

  // Cập nhật lại dữ liệu gốc từ tempData sang orgData
  orgData = JSON.parse(JSON.stringify(tempData));

  // Lưu trữ vào localStorage
  localStorage.setItem('viettel_org_units_configs', JSON.stringify(orgData));

  // Tắt chế độ chỉnh sửa và reload giao diện
  exitEditMode(true);

  // Hiển thị toast thành công
  showToast('Đã lưu cấu hình Thủ kho phụ trách mới thành công!', 'success');
}

// 8. TẢI FILE MẪU & IMPORT DANH SÁCH (MOCK)
function downloadTemplate() {
  // Tạo nội dung CSV mẫu
  let csv = 'Mã Đơn Vị,Tên Đơn Vị,Plant,Sloc,Mã Thủ Kho Phụ Trách\n';
  orgData.forEach(item => {
    csv += `${item.id},"${item.name}",${item.plant},${item.sloc},${item.keeperId}\n`;
  });

  // Tải xuống file CSV
  const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'viettel_management_units_template.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Đã tải xuống file mẫu viettel_management_units_template.csv', 'success');
}

function triggerImport() {
  document.getElementById('import-file-input').click();
}

function handleImport(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const text = e.target.result;
      const lines = text.split('\n');
      let successCount = 0;
      const keepers = getKeepersList();

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const cols = line.split(',');
        if (cols.length >= 5) {
          const id = cols[0].trim();
          const keeperId = cols[4].trim();

          const item = orgData.find(x => x.id === id);
          if (item) {
            // Kiểm tra mã người dùng có tồn tại trong danh sách không
            const validKeeper = !keeperId || keepers.some(k => k.id === keeperId);
            if (validKeeper) {
              item.keeperId = keeperId;
              successCount++;
            }
          }
        }
      }

      if (successCount > 0) {
        localStorage.setItem('viettel_org_units_configs', JSON.stringify(orgData));
        renderTable();
        showToast(`Import danh sách thành công! Đã cập nhật ${successCount} đơn vị quản lý.`, 'success');
      } else {
        showToast('Không tìm thấy dữ liệu hợp lệ hoặc mã đơn vị/thủ kho không khớp.', 'error');
      }
    };

    reader.readAsText(file);
    // Reset file input
    input.value = '';
  }
}

// 9. TOAST THÔNG BÁO TIỆN ÍCH
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;

  let icon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color: var(--success);">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  `;

  if (type === 'error') {
    icon = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="color: var(--danger);">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    `;
  } else if (type === 'info') {
    icon = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--info);">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    `;
  }

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  // Đợi để hoạt ảnh slide-in chạy
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Tự động xóa sau 3.5s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

function esc(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
