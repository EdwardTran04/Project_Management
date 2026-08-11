/* ===================================================
   Viettel AIWS — PH4 Cấu hình (Quản lý Phương tiện vận chuyển)
   vehicle.js — Operations mapped to transportation layouts
   =================================================== */

// ==========================================
// 1. DATA & DATA STRUCTURES
// ==========================================
let vehicles = [
    {
        id: "V-001",
        code: "XE-001",
        name: "Xe tải nhẹ Hà Nội 1",
        type: "Xe tải nhẹ",
        boxType: "Thùng kín",
        maxPayload: 1500,
        payloadUnit: "kg",
        volume: 8,
        length: 320,
        width: 170,
        height: 180,
        image: "",
        note: "Xe chuyên chở linh kiện khu vực nội thành."
    },
    {
        id: "V-002",
        code: "XE-002",
        name: "Xe tải trung Bắc Nam 2",
        type: "Xe tải trung",
        boxType: "Thùng mui bạt",
        maxPayload: 5,
        payloadUnit: "tấn",
        volume: 22,
        length: 620,
        width: 220,
        height: 230,
        image: "",
        note: "Xe chạy liên tỉnh miền Bắc."
    },
    {
        id: "V-003",
        code: "XE-003",
        name: "Xe đông lạnh Hải Phòng 3",
        type: "Xe đông lạnh",
        boxType: "Đông lạnh",
        maxPayload: 3.5,
        payloadUnit: "tấn",
        volume: 15,
        length: 450,
        width: 200,
        height: 200,
        image: "",
        note: "Xe đông lạnh chở hàng tươi sống."
    },
    {
        id: "V-004",
        code: "XE-004",
        name: "Container Cát Lái 4",
        type: "Xe tải nặng",
        boxType: "Container",
        maxPayload: 20,
        payloadUnit: "tấn",
        volume: 60,
        length: 1200,
        width: 240,
        height: 260,
        image: "",
        note: "Vận chuyển hàng xuất khẩu cảng Cát Lái."
    },
    {
        id: "V-005",
        code: "XE-005",
        name: "Xe ben công trình 5",
        type: "Xe ben",
        boxType: "Ben",
        maxPayload: 10,
        payloadUnit: "tấn",
        volume: 12,
        length: 500,
        width: 230,
        height: 150,
        image: "",
        note: "Chở cát đá công trình xây dựng miền Trung."
    },
    {
        id: "V-006",
        code: "XE-006",
        name: "Xe cẩu Viettel tự hành 6",
        type: "Xe cẩu tự hành",
        boxType: "Xe cẩu",
        maxPayload: 8,
        payloadUnit: "tấn",
        volume: 10,
        length: 720,
        width: 230,
        height: 220,
        image: "",
        note: "Cẩu thiết bị nặng lắp đặt cột thu phát sóng Viettel."
    }
];

// ==========================================
// 2. STATE & PAGINATION
// ==========================================
let filteredVehicles = [];
let currentPage = 1;
let pageSize = 20; // Default 20 lines/page
let uploadedImageBase64 = "";

// ==========================================
// 3. TOAST & ALERTS ENGINE
// ==========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => { toast.classList.add('active'); }, 50);
    
    // Auto remove
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => { toast.remove(); }, 300);
    }, 3000);
}

// Confirmation overlay helpers
let confirmCallback = null;
function showConfirm(title, message, onConfirm) {
    document.getElementById('confirm-message').textContent = message;
    document.getElementById('confirm-modal').classList.add('active');
    confirmCallback = onConfirm;
}

function closeConfirmModal() {
    document.getElementById('confirm-modal').classList.remove('active');
    confirmCallback = null;
}

document.getElementById('confirm-ok-btn').addEventListener('click', () => {
    if (confirmCallback) confirmCallback();
    closeConfirmModal();
});

// ==========================================
// 4. VIEW CONTROLLERS & ROUTING
// ==========================================
function showListView() {
    document.querySelectorAll('.view-panel').forEach(v => v.classList.remove('active'));
    document.getElementById('view-list').classList.add('active');
    renderList();
}

function showFormView() {
    document.querySelectorAll('.view-panel').forEach(v => v.classList.remove('active'));
    document.getElementById('view-form').classList.add('active');
    document.getElementById('vehicle-form-title').textContent = "Thêm mới phương tiện vận chuyển";
    resetForm();
}

// ==========================================
// 5. VIEW 1: LIST & SEARCH
// ==========================================
function handleFilterChange() {
    currentPage = 1;
    renderList();
}

function renderList() {
    const q = document.getElementById('filter-search').value.trim().toLowerCase();

    // Filter vehicles only by name
    filteredVehicles = vehicles.filter(v => {
        if (q && !v.name.toLowerCase().includes(q)) return false;
        return true;
    });

    // Pagination bounds
    const total = filteredVehicles.length;
    const start = (currentPage - 1) * pageSize;
    const end = Math.min(start + pageSize, total);
    
    document.getElementById('pag-total').textContent = total;
    document.getElementById('pag-prev').disabled = currentPage === 1;
    document.getElementById('pag-next').disabled = end >= total;

    const tbody = document.getElementById('vehicle-list-body');
    tbody.innerHTML = "";

    if (filteredVehicles.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;color:var(--text3);padding:24px;">Không tìm thấy phương tiện nào khớp với điều kiện tìm kiếm.</td></tr>`;
        renderPageNumbers(0);
        return;
    }

    const itemsToShow = filteredVehicles.slice(start, end);
    itemsToShow.forEach((v, idx) => {
        const tr = document.createElement('tr');
        const toMeter = (cm) => (cm / 100).toFixed(2);
        const specText = (v.length && v.width && v.height) ? `${toMeter(v.length)}×${toMeter(v.width)}×${toMeter(v.height)}` : '—';

        tr.innerHTML = `
            <td style="text-align: center;">${start + idx + 1}</td>
            <td style="font-weight: 600;">${v.name}</td>
            <td>${v.type}</td>
            <td>${v.boxType}</td>
            <td style="text-align: right; font-weight: 600;">${v.maxPayload.toLocaleString()}</td>
            <td style="text-align: right; font-weight: 600;">${v.volume.toFixed(2)}</td>
            <td class="font-mono">${specText}</td>
            <td style="color: var(--text2); font-size: 12px;">${v.note || '—'}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" onclick="deleteVehicle('${v.id}')" title="Xóa" style="color:var(--danger)">
                        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px">
                            <path d="M3 6h14M8 6v10M12 6v10M5 6v12a1 1 0 001 1h8a1 1 0 001-1V6M8 3h4a1 1 0 011 1v2H7V4a1 1 0 011-1z"/>
                        </svg>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    renderPageNumbers(Math.ceil(total / pageSize));
}

function renderPageNumbers(totalPages) {
    const wrapper = document.getElementById('pag-numbers');
    wrapper.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `pag-num ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.onclick = () => { currentPage = i; renderList(); };
        wrapper.appendChild(btn);
    }
}

function changePage(delta) {
    currentPage += delta;
    renderList();
}

function changePageSize(size) {
    pageSize = parseInt(size);
    currentPage = 1;
    renderList();
}

// ==========================================
// 6. FORM & IMAGE UPLOAD
// ==========================================
function triggerFileInput() {
    document.getElementById('tf-image-file').click();
}

function handleImageUpload(input) {
    const file = input.files[0];
    if (file) {
        if (file.size > 5 * 1024 * 1024) {
            showToast("Kích thước ảnh vượt quá giới hạn 5MB!", "error");
            return;
        }
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImageBase64 = e.target.result;
            const img = document.getElementById('tf-image-preview');
            img.src = uploadedImageBase64;
            img.style.display = 'block';
            document.getElementById('upload-zone-text').style.display = 'none';
            document.getElementById('tf-image-clear-btn').style.display = 'flex';
        }
        reader.readAsDataURL(file);
    }
}

function clearImageUpload(e) {
    if (e) e.stopPropagation();
    uploadedImageBase64 = "";
    document.getElementById('tf-image-preview').style.display = 'none';
    document.getElementById('upload-zone-text').style.display = 'inline';
    document.getElementById('tf-image-clear-btn').style.display = 'none';
    document.getElementById('tf-image-file').value = "";
}

function autogenerateCode() {
    const runningNum = Math.floor(100 + Math.random() * 900);
    return `XE-${runningNum}`;
}

function calcVolume() {
    const len = parseFloat(document.getElementById('tf-len').value) || 0;
    const wid = parseFloat(document.getElementById('tf-wid').value) || 0;
    const hgt = parseFloat(document.getElementById('tf-hgt').value) || 0;
    if (len > 0 && wid > 0 && hgt > 0) {
        const volume = len * wid * hgt;
        document.getElementById('tf-volume').value = volume.toFixed(2);
    }
}

function saveForm(isSubmit = true) {
    const code = document.getElementById('tf-code').value.trim();
    const name = document.getElementById('tf-name').value.trim();
    const type = document.getElementById('tf-type').value.trim();
    const boxType = document.getElementById('tf-box-type').value;
    const payload = parseFloat(document.getElementById('tf-payload').value) || 0;
    const volume = parseFloat(document.getElementById('tf-volume').value) || 0;
    const len = parseInt(document.getElementById('tf-len').value) || 0;
    const wid = parseInt(document.getElementById('tf-wid').value) || 0;
    const hgt = parseInt(document.getElementById('tf-hgt').value) || 0;
    const note = document.getElementById('tf-note').value.trim();

    // Validations
    if (!name) { showToast("Vui lòng điền tên phương tiện!", "error"); return; }
    if (!type) { showToast("Vui lòng điền loại phương tiện!", "error"); return; }
    if (!boxType) { showToast("Vui lòng chọn loại thùng xe!", "error"); return; }
    if (payload <= 0) { showToast("Tải trọng tối đa phải lớn hơn 0!", "error"); return; }
    
    const finalCode = code || autogenerateCode();

    // Create mode
    const newId = `V-${Date.now()}`;
    const newVehicle = {
        id: newId,
        code: finalCode,
        name: name,
        type: type,
        boxType: boxType,
        maxPayload: payload,
        payloadUnit: "tấn",
        volume: volume,
        length: len,
        width: wid,
        height: hgt,
        image: uploadedImageBase64,
        note: note
    };
    vehicles.push(newVehicle);
    showToast("Đã thêm mới phương tiện vận chuyển thành công.");

    showListView();
}

function cancelForm() {
    const isDirty = document.getElementById('tf-name').value.trim() !== "" || document.getElementById('tf-type').value.trim() !== "";
    if (isDirty) {
        showConfirm(
            "Hủy bỏ thao tác",
            "Biểu mẫu chứa dữ liệu đã thay đổi. Bạn có chắc chắn muốn hủy không?",
            () => { showListView(); }
        );
    } else {
        showListView();
    }
}

function resetForm() {
    document.getElementById('tf-code').value = autogenerateCode();
    document.getElementById('tf-name').value = "";
    document.getElementById('tf-type').value = "";
    document.getElementById('tf-box-type').value = "";
    document.getElementById('tf-payload').value = "";
    document.getElementById('tf-volume').value = "";
    document.getElementById('tf-len').value = "";
    document.getElementById('tf-wid').value = "";
    document.getElementById('tf-hgt').value = "";
    document.getElementById('tf-note').value = "";
    clearImageUpload();
}

// ==========================================
// 7. DELETE FUNCTION
// ==========================================
function deleteVehicle(vehicleId) {
    const v = vehicles.find(item => item.id === vehicleId);
    if (!v) return;

    showConfirm(
        "Xác nhận xóa",
        `Bạn có chắc chắn muốn xóa phương tiện [${v.code}] - ${v.name}?`,
        () => {
            vehicles = vehicles.filter(item => item.id !== vehicleId);
            showToast("Đã xóa phương tiện thành công.");
            renderList();
        }
    );
}

// ==========================================
// 8. APP INITIALIZATION & DRAG/DROP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    showListView();

    // Drag & drop listeners for image upload zone
    const dropzone = document.getElementById('image-upload-zone');
    if (dropzone) {
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = 'var(--primary)';
            dropzone.style.background = 'rgba(238, 0, 51, 0.04)';
        });
        dropzone.addEventListener('dragleave', () => {
            dropzone.style.borderColor = 'var(--border)';
            dropzone.style.background = 'var(--bg3)';
        });
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = 'var(--border)';
            dropzone.style.background = 'var(--bg3)';
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                const input = document.getElementById('tf-image-file');
                const dt = new DataTransfer();
                dt.items.add(file);
                input.files = dt.files;
                handleImageUpload(input);
            } else {
                showToast("Vui lòng kéo thả file ảnh hợp lệ!", "error");
            }
        });
    }
});
