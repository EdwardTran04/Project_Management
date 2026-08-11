/**
 * ViettelAIWS — Cấu hình KPI (Lead time)
 * kpi.js — Logic quản lý và cập nhật cấu hình KPI
 */

// 1. DỮ LIỆU KPI MẪU (MOCK DATA)
const DEFAULT_KPI_DATA = [
  { id: 'TSK-IN-01', seq: 1, name: 'Tiếp nhận xe tải', process: 'Nhập kho', role: 'Bảo vệ cổng', leadTime: 15, predecessor: 'Không có' },
  { id: 'TSK-IN-02', seq: 2, name: 'Kiểm tra chứng từ', process: 'Nhập kho', role: 'Thủ kho', leadTime: 20, predecessor: 'TSK-IN-01' },
  { id: 'TSK-IN-03', seq: 3, name: 'Dỡ hàng từ xe', process: 'Nhập kho', role: 'Nhân viên kho', leadTime: 45, predecessor: 'TSK-IN-02' },
  { id: 'TSK-IN-04', seq: 4, name: 'Kiểm đếm số lượng', process: 'Nhập kho', role: 'Thủ kho', leadTime: 30, predecessor: 'TSK-IN-03' },
  { id: 'TSK-IN-05', seq: 5, name: 'Kiểm tra chất lượng QC', process: 'Nhập kho', role: 'KT chất lượng', leadTime: 60, predecessor: 'TSK-IN-04' },
  { id: 'TSK-IN-06', seq: 6, name: 'Xếp hàng vào kệ', process: 'Nhập kho', role: 'Nhân viên bốc xếp', leadTime: 40, predecessor: 'TSK-IN-05' },
  { id: 'TSK-IN-07', seq: 7, name: 'Nhập hệ thống SAP & Ký đóng', process: 'Nhập kho', role: 'Kế toán kho', leadTime: 25, predecessor: 'TSK-IN-06' },
  { id: 'TSK-OUT-01', seq: 8, name: 'Xác nhận lệnh xuất', process: 'Xuất kho', role: 'Thủ kho', leadTime: 15, predecessor: 'Không có' },
  { id: 'TSK-OUT-02', seq: 9, name: 'Lấy hàng khỏi kệ', process: 'Xuất kho', role: 'Nhân viên kho', leadTime: 50, predecessor: 'TSK-OUT-01' },
  { id: 'TSK-OUT-03', seq: 10, name: 'Kiểm đếm & đóng gói', process: 'Xuất kho', role: 'Nhân viên bốc xếp', leadTime: 35, predecessor: 'TSK-OUT-02' },
  { id: 'TSK-OUT-04', seq: 11, name: 'Xuất SAP & Bàn giao xe', process: 'Xuất kho', role: 'Kế toán kho', leadTime: 20, predecessor: 'TSK-OUT-03' }
];

// 2. BIẾN TRẠNG THÁI TOÀN CỤC
let kpiData = [];
let tempData = []; // Lưu trữ dữ liệu đang chỉnh sửa tạm thời
let isEditMode = false;

// 3. KHỞI TẠO KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
  initData();
  renderTable();
});

// Khởi tạo dữ liệu từ localStorage hoặc dùng mặc định
function initData() {
  const saved = localStorage.getItem('viettel_kpi_configs');
  if (saved) {
    try {
      kpiData = JSON.parse(saved);
    } catch (e) {
      console.error('Lỗi phân tích dữ liệu lưu trữ, khởi tạo lại...', e);
      kpiData = [...DEFAULT_KPI_DATA];
    }
  } else {
    kpiData = [...DEFAULT_KPI_DATA];
    localStorage.setItem('viettel_kpi_configs', JSON.stringify(kpiData));
  }
}

// 4. RENDER BẢNG DỮ LIỆU
function renderTable() {
  const tbody = document.getElementById('kpi-tbody');
  tbody.innerHTML = '';

  const filtered = getFilteredData();

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; color: var(--text3); padding: 30px;">
          Không tìm thấy cấu hình Task nào phù hợp.
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach((task, idx) => {
    const tr = document.createElement('tr');
    if (isEditMode) {
      tr.classList.add('edit-active');
    }

    // Xác định giá trị leadtime hiển thị (từ tempData nếu đang sửa, từ kpiData nếu bình thường)
    let currentLeadTime = task.leadTime;
    if (isEditMode) {
      const tempTask = tempData.find(t => t.id === task.id);
      if (tempTask) {
        currentLeadTime = tempTask.leadTime;
      }
    }

    // Thiết kế Badge quy trình
    const processBadgeClass = task.process === 'Nhập kho' ? 'badge-blue' : 'badge-green';

    // Xây dựng các ô cột
    const tdSTT = `<td>${idx + 1}</td>`;
    const tdId = `<td class="font-mono" style="font-weight:600;">${task.id}</td>`;
    const tdName = `<td style="font-weight: 500;">${task.name}</td>`;
    const tdProcess = `<td><span class="badge ${processBadgeClass}">${task.process}</span></td>`;
    const tdRole = `<td>${task.role}</td>`;

    // Cột Lead Time (Cho phép sửa hoặc hiển thị text thường)
    let tdLeadTime = '';
    if (isEditMode) {
      tdLeadTime = `
        <td>
          <div class="leadtime-edit-container">
            <input type="number" 
                   id="input-leadtime-${task.id}"
                   class="leadtime-input" 
                   value="${currentLeadTime}" 
                   min="1" 
                   oninput="updateTempLeadTime('${task.id}', this.value)">
            <span style="font-weight:600; color:var(--text2); font-size:12px;">phút</span>
          </div>
        </td>
      `;
    } else {
      tdLeadTime = `
        <td style="font-weight: 700; color: var(--primary2);">
          ${currentLeadTime} phút
        </td>
      `;
    }

    const tdPredecessor = `<td class="font-mono">${task.predecessor}</td>`;



    tr.innerHTML = tdSTT + tdId + tdName + tdProcess + tdRole + tdLeadTime + tdPredecessor;
    tbody.appendChild(tr);
  });
}

// 5. LỌC DỮ LIỆU THEO TÌM KIẾM VÀ BỘ LỌC
function getFilteredData() {
  const searchVal = document.getElementById('search-input').value.trim().toLowerCase();
  const processVal = document.getElementById('filter-process').value;

  return kpiData.filter(task => {
    const matchSearch = task.id.toLowerCase().includes(searchVal) || task.name.toLowerCase().includes(searchVal);
    const matchProcess = !processVal || task.process === processVal;
    return matchSearch && matchProcess;
  });
}

// Xử lý sự kiện tìm kiếm và thay đổi bộ lọc
function handleSearch() {
  renderTable();
}

// Xóa tất cả bộ lọc
function resetFilters() {
  document.getElementById('search-input').value = '';
  document.getElementById('filter-process').value = '';
  renderTable();
  showToast('Đã xóa tất cả bộ lọc tìm kiếm.');
}

// 6. CHẾ ĐỘ SỬA ĐỒNG THỜI
function enterEditMode() {
  if (isEditMode) return;

  isEditMode = true;
  // Tạo bản sao lưu tạm thời từ kpiData để chỉnh sửa
  tempData = JSON.parse(JSON.stringify(kpiData));

  // Cập nhật giao diện các nút
  document.getElementById('btn-edit').style.display = 'none';
  document.getElementById('btn-save').style.display = 'inline-flex';
  document.getElementById('btn-cancel').style.display = 'inline-flex';

  renderTable();
  showToast('Đã mở chế độ chỉnh sửa Lead time đồng loạt.');
}

// Hủy bỏ chế độ sửa
function exitEditMode(confirmExit = false) {
  if (!isEditMode) return;

  isEditMode = false;
  tempData = [];

  // Khôi phục giao diện các nút ban đầu
  document.getElementById('btn-edit').style.display = 'inline-flex';
  document.getElementById('btn-save').style.display = 'none';
  document.getElementById('btn-cancel').style.display = 'none';

  renderTable();
  if (!confirmExit) {
    showToast('Đã hủy bỏ toàn bộ chỉnh sửa chưa lưu.', 'info');
  }
}

// Cập nhật giá trị tạm thời khi người dùng nhập số
function updateTempLeadTime(taskId, val) {
  const numVal = parseInt(val, 10);
  if (isNaN(numVal) || numVal < 1) return; // Bảo vệ giá trị hợp lệ

  const task = tempData.find(t => t.id === taskId);
  if (task) {
    task.leadTime = numVal;
  }
}

// Hành động khi nhấn "Sửa" ở từng dòng đơn lẻ
function editSingleRow(taskId) {
  enterEditMode();
  // Focus trực tiếp vào ô input của dòng tương ứng sau khi render xong
  setTimeout(() => {
    const inputEl = document.getElementById(`input-leadtime-${taskId}`);
    if (inputEl) {
      inputEl.focus();
      inputEl.select();
    }
  }, 50);
}

// 7. POPUP MODAL XÁC NHẬN LƯU
function openConfirmModal() {
  // Validate dữ liệu nhập vào trước khi mở popup
  let isValid = true;
  tempData.forEach(task => {
    if (!task.leadTime || task.leadTime < 1) {
      isValid = false;
    }
  });

  if (!isValid) {
    showToast('Vui lòng nhập giá trị Lead time hợp lệ (lớn hơn hoặc bằng 1 phút)!', 'error');
    return;
  }

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

  // Cập nhật lại dữ liệu gốc từ tempData sang kpiData
  kpiData = JSON.parse(JSON.stringify(tempData));

  // Lưu trữ vào localStorage
  localStorage.setItem('viettel_kpi_configs', JSON.stringify(kpiData));

  // Tắt chế độ chỉnh sửa và reload giao diện
  exitEditMode(true);

  // Hiển thị toast thành công
  showToast('Đã lưu cấu hình KPI Lead time mới thành công!', 'success');
}

// 8. TOAST THÔNG BÁO TIỆN ÍCH
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
