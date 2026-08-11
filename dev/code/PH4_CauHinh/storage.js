/* ===================================================
   Viettel AIWS — PH4 Cấu hình (Quản lý Công cụ lưu trữ)
   storage.js — Operations mapped to V1.4 layouts
   =================================================== */

// ==========================================
// 1. DATA & DATA STRUCTURES
// ==========================================
let storageTools = [
    {
        id: "T-001",
        code: "PLT-8012",
        name: "Pallet gỗ tiêu chuẩn 800x1200",
        type: "Pallet",
        length: 120,
        width: 80,
        height: 15,
        unit: "Cái",
        status: "Đang sử dụng",
        groupCode: "GRP-PL",
        barcode: "8931201901231",
        color: "Tự nhiên",
        material: "Gỗ",
        maxLoad: 1500,
        minStock: 50,
        maxStock: 500,
        image: "",
        note: "Pallet gỗ thông chịu tải cao, chuyên dùng cho kệ Selective hạng nặng.",
        dateCreated: "2026-01-10T08:00:00Z"
    },
    {
        id: "T-002",
        code: "PLT-1012",
        name: "Pallet nhựa HDPE 1000x1200",
        type: "Pallet",
        length: 120,
        width: 100,
        height: 16,
        unit: "Cái",
        status: "Mới",
        groupCode: "GRP-PL",
        barcode: "8931201901248",
        color: "Xanh dương",
        material: "Nhựa HDPE",
        maxLoad: 2000,
        minStock: 30,
        maxStock: 300,
        image: "",
        note: "Pallet nhựa nguyên sinh chống ẩm mốc, thích hợp kho lạnh.",
        dateCreated: "2026-02-15T09:30:00Z"
    },
    {
        id: "T-003",
        code: "TGO-TN1",
        name: "Thùng gỗ đóng kín TN1",
        type: "Thùng gỗ",
        length: 100,
        width: 80,
        height: 50,
        unit: "Cái",
        status: "Đang sử dụng",
        groupCode: "GRP-BX",
        barcode: "8931201901255",
        color: "Tự nhiên",
        material: "Gỗ",
        maxLoad: 300,
        minStock: 10,
        maxStock: 100,
        image: "",
        note: "Thùng gỗ ép công nghiệp đóng gói thiết bị đo đạc, đầu thu sóng.",
        dateCreated: "2026-03-01T14:20:00Z"
    },
    {
        id: "T-004",
        code: "TCT-NHO",
        name: "Thùng carton nhỏ 5 lớp",
        type: "Thùng carton",
        length: 40,
        width: 30,
        height: 30,
        unit: "Cái",
        status: "Mới",
        groupCode: "GRP-BX",
        barcode: "8931201901262",
        color: "Vàng",
        material: "Giấy Carton",
        maxLoad: 20,
        minStock: 200,
        maxStock: 2000,
        image: "",
        note: "Hộp giấy carton đóng gói phụ kiện nhỏ, dây cáp mạng.",
        dateCreated: "2026-03-12T10:15:00Z"
    },
    {
        id: "T-005",
        code: "DGC-XEK",
        name: "Xe đẩy kéo tay tải trọng 500kg",
        type: "Dụng cụ kho",
        length: 110,
        width: 60,
        height: 90,
        unit: "Chiếc",
        status: "Hỏng",
        groupCode: "GRP-EQ",
        barcode: "8931201901279",
        color: "Xám",
        material: "Sắt/Thép",
        maxLoad: 500,
        minStock: 2,
        maxStock: 15,
        image: "",
        note: "Xe đẩy hàng khung thép gia cố chống lật.",
        dateCreated: "2026-04-05T11:00:00Z"
    }
];

// Pre-seeded inventories
let inventories = [
    { toolId: "T-001", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", warehouse: "Kho Hà Nội 01", location: "A-02-03", quantity: 150, status: "Đang sử dụng", lastUpdated: "2026-06-28T16:45:00Z" },
    { toolId: "T-001", plant: "Plant 01 - Miền Bắc", sloc: "Kho Hải Phòng", warehouse: "Kho Hải Phòng 01", location: "B-01-01", quantity: 80, status: "Mới", lastUpdated: "2026-06-29T10:00:00Z" },
    { toolId: "T-002", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", warehouse: "Kho Hà Nội 01", location: "Z-12-04", quantity: 120, status: "Mới", lastUpdated: "2026-06-28T15:20:00Z" },
    { toolId: "T-002", plant: "Plant 03 - Miền Nam", sloc: "Tổng kho miền Nam", warehouse: "Kho TP.HCM 01", location: "C-04-02", quantity: 90, status: "Đang sử dụng", lastUpdated: "2026-06-29T08:30:00Z" },
    { toolId: "T-003", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", warehouse: "Kho Hà Nội 01", location: "A-01-05", quantity: 35, status: "Đang sử dụng", lastUpdated: "2026-06-25T11:40:00Z" },
    { toolId: "T-004", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", warehouse: "Kho Hà Nội 01", location: "BOX-01", quantity: 650, status: "Mới", lastUpdated: "2026-06-27T09:15:00Z" },
    { toolId: "T-005", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", warehouse: "Kho Hà Nội 01", location: "MAIN-BAY", quantity: 2, status: "Hỏng", lastUpdated: "2026-06-28T17:00:00Z" }
];

// Pre-seeded import history entries
let importHistory = [
    { toolId: "T-001", date: "2026-06-25T10:00:00Z", supplier: "Công ty Cổ phần Gỗ Việt", quantity: 100, price: 150000, amount: 15000000, warehouse: "Kho Hà Nội 01", user: "Nguyễn Văn A", note: "Nhập mới bổ sung đợt 1" },
    { toolId: "T-001", date: "2026-06-28T16:45:00Z", supplier: "Công ty Cổ phần Gỗ Việt", quantity: 50, price: 150000, amount: 7500000, warehouse: "Kho Hà Nội 01", user: "Nguyễn Văn A", note: "Nhập bù số lượng thiếu" },
    { toolId: "T-002", date: "2026-06-28T15:20:00Z", supplier: "Nhựa Duy Tân CN Hà Nội", quantity: 120, price: 320000, amount: 38400000, warehouse: "Kho Hà Nội 01", user: "Trần Văn B", note: "Nhập mới dự án" }
];

// Cascade directories mapping
const PLANT_SLOCS = {
    "Plant 01 - Miền Bắc": ["Tổng kho miền Bắc", "Bãi kho Hà Nội", "Kho Hải Phòng"],
    "Plant 02 - Miền Trung": ["Tổng kho miền Trung"],
    "Plant 03 - Miền Nam": ["Tổng kho miền Nam", "Kho Bình Dương"]
};

const SLOC_WAREHOUSES = {
    "Tổng kho miền Bắc": ["Kho Hà Nội 01", "Kho K2"],
    "Bãi kho Hà Nội": ["Bãi kho Hà Nội 02"],
    "Kho Hải Phòng": ["Kho Hải Phòng 01"],
    "Tổng kho miền Trung": ["Kho Đà Nẵng 01"],
    "Tổng kho miền Nam": ["Kho TP.HCM 01"],
    "Kho Bình Dương": ["Kho Bình Dương 01"]
};

// Pre-seeded RFID data
let rfidData = [
    { toolId: "T-001", rfidCode: "RFID-PLT-001", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "A-02-01", lastUpdated: "2026-06-28T08:00:00Z" },
    { toolId: "T-001", rfidCode: "RFID-PLT-002", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "A-02-02", lastUpdated: "2026-06-28T08:05:00Z" },
    { toolId: "T-001", rfidCode: "RFID-PLT-003", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "A-02-03", lastUpdated: "2026-06-28T08:10:00Z" },
    { toolId: "T-001", rfidCode: "RFID-PLT-004", plant: "Plant 01 - Miền Bắc", sloc: "Kho Hải Phòng", location: "B-01-01", lastUpdated: "2026-06-29T09:00:00Z" },
    { toolId: "T-001", rfidCode: "RFID-PLT-005", plant: "Plant 01 - Miền Bắc", sloc: "Kho Hải Phòng", location: "B-01-02", lastUpdated: "2026-06-29T09:05:00Z" },
    { toolId: "T-002", rfidCode: "RFID-PLT-006", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "Z-12-01", lastUpdated: "2026-06-28T15:00:00Z" },
    { toolId: "T-002", rfidCode: "RFID-PLT-007", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "Z-12-02", lastUpdated: "2026-06-28T15:05:00Z" },
    { toolId: "T-002", rfidCode: "RFID-PLT-008", plant: "Plant 03 - Miền Nam", sloc: "Tổng kho miền Nam", location: "C-04-01", lastUpdated: "2026-06-29T08:00:00Z" },
    { toolId: "T-002", rfidCode: "RFID-PLT-009", plant: "Plant 03 - Miền Nam", sloc: "Tổng kho miền Nam", location: "C-04-02", lastUpdated: "2026-06-29T08:05:00Z" },
    { toolId: "T-002", rfidCode: "RFID-PLT-010", plant: "Plant 03 - Miền Nam", sloc: "Tổng kho miền Nam", location: "C-04-03", lastUpdated: "2026-06-29T08:10:00Z" },
    { toolId: "T-003", rfidCode: "RFID-TGO-001", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "A-01-03", lastUpdated: "2026-06-25T11:00:00Z" },
    { toolId: "T-003", rfidCode: "RFID-TGO-002", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "A-01-04", lastUpdated: "2026-06-25T11:05:00Z" },
    { toolId: "T-003", rfidCode: "RFID-TGO-003", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "A-01-05", lastUpdated: "2026-06-25T11:10:00Z" },
    { toolId: "T-004", rfidCode: "RFID-TCT-001", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "BOX-01", lastUpdated: "2026-06-27T09:00:00Z" },
    { toolId: "T-004", rfidCode: "RFID-TCT-002", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "BOX-02", lastUpdated: "2026-06-27T09:05:00Z" },
    { toolId: "T-004", rfidCode: "RFID-TCT-003", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "BOX-03", lastUpdated: "2026-06-27T09:10:00Z" },
    { toolId: "T-005", rfidCode: "RFID-DGC-001", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "MAIN-BAY", lastUpdated: "2026-06-28T16:00:00Z" },
    { toolId: "T-005", rfidCode: "RFID-DGC-002", plant: "Plant 01 - Miền Bắc", sloc: "Tổng kho miền Bắc", location: "MAIN-BAY-02", lastUpdated: "2026-06-28T16:05:00Z" }
];

// ==========================================
// 2. STATE & PAGINATION
// ==========================================
let filteredTools = [];
let currentPage = 1;
let pageSize = 20; // Default 20 lines/page
let editMode = false;
let currentToolId = null;
let uploadedImageBase64 = "";
let stockCurrentPage = 1;
let stockPageSize = 20;

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

function showFormView(toolId = null) {
    document.querySelectorAll('.view-panel').forEach(v => v.classList.remove('active'));
    document.getElementById('view-form').classList.add('active');

    if (toolId) {
        editMode = true;
        currentToolId = toolId;
        document.getElementById('tool-form-title').textContent = "Chỉnh sửa công cụ lưu trữ";
        loadToolIntoForm(toolId);
    } else {
        editMode = false;
        currentToolId = null;
        document.getElementById('tool-form-title').textContent = "Thêm mới công cụ lưu trữ";
        resetForm();
    }
}

function showDetailView(toolId) {
    document.querySelectorAll('.view-panel').forEach(v => v.classList.remove('active'));
    document.getElementById('view-detail').classList.add('active');
    currentToolId = toolId;
    loadToolDetail(toolId);
}

// ==========================================
// 5. VIEW 1: LIST & SEARCH (MH-01)
// ==========================================
function handleFilterChange() {
    currentPage = 1;
    renderList();
}

function resetFilters() {
    document.getElementById('filter-search').value = "";
    document.getElementById('filter-type').value = "";
    currentPage = 1;
    renderList();
    showToast("Đã reset bộ lọc tìm kiếm!");
}

function resetStockFilters() {
    document.getElementById('td-filter-plant').value = "";
    document.getElementById('td-filter-sloc').innerHTML = '<option value="">Tất cả SLOC</option>';
    document.getElementById('td-filter-sloc').disabled = true;
    stockCurrentPage = 1;
    renderDetailInventoryTable(currentToolId);
    showToast("Đã reset bộ lọc tồn kho!");
}

function renderList() {
    const q = document.getElementById('filter-search').value.trim().toLowerCase();
    const typeF = document.getElementById('filter-type').value;

    // Filter tools
    filteredTools = storageTools.filter(t => {
        if (q && !(t.code.toLowerCase().includes(q) || t.name.toLowerCase().includes(q))) return false;
        if (typeF && t.type !== typeF) return false;
        return true;
    });

    // Pagination bounds
    const total = filteredTools.length;
    const start = (currentPage - 1) * pageSize;
    const end = Math.min(start + pageSize, total);
    
    document.getElementById('pag-total').textContent = total;
    document.getElementById('pag-prev').disabled = currentPage === 1;
    document.getElementById('pag-next').disabled = end >= total;

    const tbody = document.getElementById('storage-list-body');
    tbody.innerHTML = "";

    if (filteredTools.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text3);padding:24px;">Không tìm thấy công cụ lưu trữ nào khớp với điều kiện tìm kiếm.</td></tr>`;
        renderPageNumbers(0);
        return;
    }

    const itemsToShow = filteredTools.slice(start, end);
    itemsToShow.forEach((t, idx) => {
        const tr = document.createElement('tr');
        const specText = (t.length && t.width && t.height) ? `${t.length}×${t.width}×${t.height} mm` : '—';

        tr.innerHTML = `
            <td style="text-align: center;">${start + idx + 1}</td>
            <td class="font-mono" style="font-weight: 700; color: var(--primary);">${t.code}</td>
            <td style="font-weight: 600;">${t.name}</td>
            <td>${t.type}</td>
            <td class="font-mono">${specText}</td>
            <td>${t.unit}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" onclick="showDetailView('${t.id}')" title="Xem chi tiết">
                        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px">
                            <path d="M1 10s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"/>
                            <circle cx="10" cy="10" r="3"/>
                        </svg>
                    </button>
                    <button class="action-btn" onclick="showFormView('${t.id}')" title="Sửa thông tin">
                        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.586.586.586.586.586-.586a2 2 0 010-2.828z"/>
                            <path d="M11.293 5.293L3 13.586V17h3.414l8.293-8.293-1.414-1.414z"/>
                        </svg>
                    </button>
                    <button class="action-btn btn-stock-add" onclick="openAddStockModal('${t.id}', '${t.code}', '${t.name}')" title="Thêm số lượng">
                        <svg viewBox="0 0 20 20" fill="currentColor" style="width:14px;height:14px">
                            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
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
// 6. FORM & VALIDATIONS (MH-02 & MH-04)
// ==========================================
function handleFormTypeChange() {
    // No longer auto-filling group code
}

function autogenerateCode(type) {
    const mapping = {
        "Pallet": "PLT",
        "Thùng gỗ": "TGO",
        "Thùng carton": "TCT",
        "Dụng cụ kho": "DGC",
        "Thiết bị kho": "TBI"
    };
    const prefix = mapping[type] || "CC";
    const runningNum = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${runningNum}`;
}

function validateStockLimits() {
    const minVal = parseInt(document.getElementById('tf-min-stock').value) || 0;
    const maxVal = parseInt(document.getElementById('tf-max-stock').value) || 0;
    
    const maxInput = document.getElementById('tf-max-stock');
    if (maxVal < minVal) {
        maxInput.style.borderColor = 'var(--danger)';
    } else {
        maxInput.style.borderColor = 'var(--border)';
    }
}

function saveForm(isSubmit = true) {
    const type = document.getElementById('tf-group').value;
    const code = document.getElementById('tf-code').value.trim();
    const name = document.getElementById('tf-name').value.trim();
    const barcode = ""; // removed
    const unit = document.getElementById('tf-unit').value;
    const len = parseInt(document.getElementById('tf-len').value) || 0;
    const wid = parseInt(document.getElementById('tf-wid').value) || 0;
    const hgt = parseInt(document.getElementById('tf-hgt').value) || 0;
    const maxLoad = parseInt(document.getElementById('tf-load').value) || 0;
    const color = document.getElementById('tf-color').value;
    const material = document.getElementById('tf-material').value;
    const minStock = parseInt(document.getElementById('tf-min-stock').value) || 0;
    const maxStock = parseInt(document.getElementById('tf-max-stock').value) || 0;
    const initialQty = 0; // removed
    const note = document.getElementById('tf-note').value.trim();
    const status = document.getElementById('tf-status').value;

    // Validations based on markdown
    if (!type) { showToast("Vui lòng chọn loại công cụ!", "error"); return; }
    if (!name) { showToast("Vui lòng điền tên vật tư!", "error"); return; }
    if (!unit) { showToast("Vui lòng chọn đơn vị tính!", "error"); return; }
    
    if (maxStock < minStock) { 
        showToast("Định mức tồn tối đa không thể nhỏ hơn định mức tồn tối thiểu!", "error"); 
        return; 
    }

    const finalCode = code || autogenerateCode(type);

    if (editMode) {
        // Edit mode (MH-04)
        const tool = storageTools.find(t => t.id === currentToolId);
        if (tool) {
            tool.name = name;
            tool.type = type;
            tool.code = finalCode;
            tool.unit = unit;
            tool.length = len;
            tool.width = wid;
            tool.height = hgt;
            tool.maxLoad = maxLoad;
            tool.minStock = minStock;
            tool.maxStock = maxStock;
            tool.barcode = barcode;
            tool.material = material;
            tool.color = color;
            tool.note = note;
            tool.status = status;
            if (uploadedImageBase64) tool.image = uploadedImageBase64;
            
            showToast("Đã lưu chỉnh sửa thông tin công cụ lưu trữ.");
        }
    } else {
        // Create mode (MH-02)
        const newId = `T-${Date.now()}`;
        const newTool = {
            id: newId,
            code: finalCode,
            name: name,
            type: type,
            length: len,
            width: wid,
            height: hgt,
            unit: unit,
            status: status || "Mới",
            groupCode: group,
            barcode: barcode,
            color: color,
            material: material,
            maxLoad: maxLoad,
            minStock: minStock,
            maxStock: maxStock,
            image: uploadedImageBase64,
            note: note,
            dateCreated: new Date().toISOString()
        };
        storageTools.push(newTool);

        // Preseed initial stock in first warehouse
        if (initialQty > 0) {
            inventories.push({
                toolId: newId,
                plant: "Plant 01 - Miền Bắc",
                sloc: "Tổng kho miền Bắc",
                warehouse: "Kho Hà Nội 01",
                location: "VỊ-TRÍ-ĐẦU",
                quantity: initialQty,
                status: status || "Mới",
                lastUpdated: new Date().toISOString()
            });

            importHistory.push({
                toolId: newId,
                date: new Date().toISOString(),
                supplier: "Nhập số lượng ban đầu",
                quantity: initialQty,
                price: 0,
                amount: 0,
                warehouse: "Kho Hà Nội 01",
                user: "Nguyễn Admin",
                note: "Khởi tạo ban đầu"
            });
        }

        showToast("Đã thêm mới công cụ lưu trữ thành công.");
    }

    showListView();
}

function cancelForm() {
    const isDirty = document.getElementById('tf-name').value.trim() !== "" || document.getElementById('tf-group').value !== "";
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
    document.getElementById('tf-name').value = "";
    document.getElementById('tf-group').value = "";
    document.getElementById('tf-code').value = "";
    document.getElementById('tf-unit').value = "Cái";
    document.getElementById('tf-len').value = "";
    document.getElementById('tf-wid').value = "";
    document.getElementById('tf-hgt').value = "";
    document.getElementById('tf-load').value = "0";
    document.getElementById('tf-min-stock').value = "0";
    document.getElementById('tf-max-stock').value = "0";
    document.getElementById('tf-material').value = "";
    document.getElementById('tf-color').value = "";
    document.getElementById('tf-note').value = "";
    document.getElementById('tf-status').value = "Mới";
    
    // Clear image
    uploadedImageBase64 = "";
    document.getElementById('tf-image-preview').style.display = 'none';
    document.getElementById('upload-zone-text').style.display = 'inline';
    document.getElementById('tf-image-clear-btn').style.display = 'none';
}

function loadToolIntoForm(toolId) {
    const t = storageTools.find(tool => tool.id === toolId);
    if (!t) return;

    document.getElementById('tf-name').value = t.name;
    document.getElementById('tf-group').value = t.type;
    document.getElementById('tf-code').value = t.code;
    document.getElementById('tf-unit').value = t.unit;
    document.getElementById('tf-len').value = t.length || "";
    document.getElementById('tf-wid').value = t.width || "";
    document.getElementById('tf-hgt').value = t.height || "";
    document.getElementById('tf-load').value = t.maxLoad || 0;
    document.getElementById('tf-min-stock').value = t.minStock || 0;
    document.getElementById('tf-max-stock').value = t.maxStock || 0;
    document.getElementById('tf-material').value = t.material || "";
    document.getElementById('tf-color').value = t.color || "";
    document.getElementById('tf-note').value = t.note || "";
    document.getElementById('tf-status').value = t.status || "Mới";

    if (t.image) {
        uploadedImageBase64 = t.image;
        const img = document.getElementById('tf-image-preview');
        img.src = t.image;
        img.style.display = 'block';
        document.getElementById('upload-zone-text').style.display = 'none';
        document.getElementById('tf-image-clear-btn').style.display = 'flex';
    } else {
        uploadedImageBase64 = "";
        document.getElementById('tf-image-preview').style.display = 'none';
        document.getElementById('upload-zone-text').style.display = 'inline';
        document.getElementById('tf-image-clear-btn').style.display = 'none';
    }
}

// File uploads
function triggerFileInput() {
    document.getElementById('tf-image-file').click();
}

function handleImageUpload(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
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
    e.stopPropagation();
    uploadedImageBase64 = "";
    document.getElementById('tf-image-preview').style.display = 'none';
    document.getElementById('upload-zone-text').style.display = 'inline';
    document.getElementById('tf-image-clear-btn').style.display = 'none';
    document.getElementById('tf-image-file').value = "";
}

// ==========================================
// 7. READ-ONLY DETAIL TABS (MH-03)
// ==========================================
function loadToolDetail(toolId) {
    const t = storageTools.find(tool => tool.id === toolId);
    if (!t) return;

    // Set detail text values
    document.getElementById('td-type').textContent = t.type;
    document.getElementById('td-code').textContent = t.code;
    document.getElementById('td-name').textContent = t.name;
    document.getElementById('td-unit').textContent = t.unit;
    
    document.getElementById('td-len').textContent = t.length || '—';
    document.getElementById('td-wid').textContent = t.width || '—';
    document.getElementById('td-hgt').textContent = t.height || '—';
    document.getElementById('td-load').textContent = t.maxLoad ? `${t.maxLoad.toLocaleString()}` : '0';
    
    document.getElementById('td-color').textContent = t.color || '—';
    document.getElementById('td-material').textContent = t.material || '—';
    document.getElementById('td-min-stock').textContent = t.minStock || 0;
    document.getElementById('td-max-stock').textContent = t.maxStock || 0;

    const displayImg = document.getElementById('td-image-preview');
    const emptyMsg = document.getElementById('td-image-empty');
    if (t.image) {
        displayImg.src = t.image;
        displayImg.style.display = 'block';
        emptyMsg.style.display = 'none';
    } else {
        displayImg.style.display = 'none';
        emptyMsg.style.display = 'flex';
    }

    // Reset tab 2 filters
    document.getElementById('td-filter-plant').value = "";
    document.getElementById('td-filter-sloc').innerHTML = '<option value="">Tất cả SLOC</option>';
    document.getElementById('td-filter-sloc').disabled = true;

    // Reset RFID tab filters
    document.getElementById('td-rfid-plant').value = "";
    document.getElementById('td-rfid-sloc').innerHTML = '<option value="">Tất cả SLOC</option>';
    renderRfidTable();

    stockCurrentPage = 1;
    renderDetailInventoryTable(toolId);
    switchDetailTab('tab-general');
}

function switchDetailTab(tabId) {
    // 1. Reset all tab buttons visual states
    document.querySelectorAll('.detail-tab').forEach(btn => {
        btn.classList.remove('active');
        btn.style.borderBottomColor = 'transparent';
        btn.style.color = 'var(--text2)';
        btn.style.fontWeight = '500';
    });

    // 2. Determine and activate the clicked tab button
    let btnId = '';
    if (tabId === 'tab-general') btnId = 'tab-btn-general';
    else if (tabId === 'tab-history') btnId = 'tab-btn-stock';
    else if (tabId === 'tab-rfid') btnId = 'tab-btn-rfid';

    const activeTabBtn = document.getElementById(btnId);
    if (activeTabBtn) {
        activeTabBtn.classList.add('active');
        activeTabBtn.style.borderBottomColor = 'var(--primary)';
        activeTabBtn.style.color = 'var(--primary)';
        activeTabBtn.style.fontWeight = '700';
    }

    // 3. Toggle tab panels visibility and manage active class
    const panels = ['tab-general', 'tab-history', 'tab-rfid'];
    panels.forEach(pId => {
        const panel = document.getElementById(pId);
        if (panel) {
            if (pId === tabId) {
                panel.classList.add('active');
                panel.style.display = 'block';
            } else {
                panel.classList.remove('active');
                panel.style.display = 'none';
            }
        }
    });
}

function editDetailTool() {
    showFormView(currentToolId);
}

// Cascade selections in Tab 2
function handleHistPlantChange() {
    const plant = document.getElementById('td-filter-plant').value;
    const slocSelect = document.getElementById('td-filter-sloc');
    const whSelect = document.getElementById('td-filter-warehouse');

    if (!plant) {
        slocSelect.innerHTML = '<option value="">Tất cả SLOC</option>';
        slocSelect.disabled = true;
        whSelect.innerHTML = '<option value="">Tất cả Kho</option>';
        whSelect.disabled = true;
    } else {
        const slocs = PLANT_SLOCS[plant] || [];
        let html = '<option value="">Tất cả SLOC</option>';
        slocs.forEach(s => { html += `<option value="${s}">${s}</option>`; });
        slocSelect.innerHTML = html;
        slocSelect.disabled = false;
    }
    handleHistFilterChange();
}

function handleHistSlocChange() {
    handleHistFilterChange();
}

function handleHistFilterChange() {
    stockCurrentPage = 1;
    renderDetailInventoryTable(currentToolId);
}

// RFID Tab functions
function handleRfidPlantChange() {
    const plant = document.getElementById('td-rfid-plant').value;
    const slocSelect = document.getElementById('td-rfid-sloc');

    if (!plant) {
        slocSelect.innerHTML = '<option value="">Tất cả SLOC</option>';
    } else {
        const slocs = PLANT_SLOCS[plant] || [];
        slocSelect.innerHTML = '<option value="">Tất cả SLOC</option>' + slocs.map(s => `<option value="${s}">${s}</option>`).join('');
    }
    renderRfidTable();
}

function resetRfidFilters() {
    document.getElementById('td-rfid-plant').value = "";
    document.getElementById('td-rfid-sloc').innerHTML = '<option value="">Tất cả SLOC</option>';
    renderRfidTable();
}

function renderRfidTable() {
    const plant = document.getElementById('td-rfid-plant').value;
    const sloc = document.getElementById('td-rfid-sloc').value;

    const matched = rfidData.filter(item => {
        if (item.toolId !== currentToolId) return false;
        if (plant && item.plant !== plant) return false;
        if (sloc && item.sloc !== sloc) return false;
        return true;
    });

    const tbody = document.getElementById('td-rfid-tbody');
    if (!tbody) return;

    if (matched.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="padding:40px;text-align:center;color:var(--text3);">Không có dữ liệu RFID</td></tr>';
        return;
    }

    tbody.innerHTML = matched.map((item, idx) => {
        const date = new Date(item.lastUpdated);
        const dateStr = date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
        return `<tr style="border-bottom:1px solid var(--border)">
            <td style="padding:10px 14px;text-align:center;color:var(--text2);font-size:12px;">${idx + 1}</td>
            <td style="padding:10px 14px;font-family:var(--mono);font-size:12px;color:var(--primary);font-weight:600;">${item.rfidCode}</td>
            <td style="padding:10px 14px;font-size:12px;">${item.plant}</td>
            <td style="padding:10px 14px;font-size:12px;">${item.sloc}</td>
            <td style="padding:10px 14px;font-size:12px;">${item.location}</td>
            <td style="padding:10px 14px;font-size:12px;text-align:right;">${dateStr}</td>
        </tr>`;
    }).join('');
}

function renderDetailInventoryTable(toolId) {
    const plant = document.getElementById('td-filter-plant').value;
    const sloc = document.getElementById('td-filter-sloc').value;

    const matched = inventories.filter(item => {
        if (item.toolId !== toolId) return false;
        if (plant && item.plant !== plant) return false;
        if (sloc && item.sloc !== sloc) return false;
        return true;
    });

    const tbody = document.getElementById('td-stock-tbody');
    tbody.innerHTML = "";

    // Set records count
    document.getElementById('td-stock-total').textContent = matched.length;

    if (matched.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text3);padding:12px;">Không có tồn kho phù hợp.</td></tr>`;
        document.getElementById('td-stock-prev').disabled = true;
        document.getElementById('td-stock-next').disabled = true;
        renderStockPageNumbers(0);
        return;
    }

    // Pagination slice
    const total = matched.length;
    const start = (stockCurrentPage - 1) * stockPageSize;
    const end = Math.min(start + stockPageSize, total);
    
    document.getElementById('td-stock-prev').disabled = stockCurrentPage === 1;
    document.getElementById('td-stock-next').disabled = end >= total;

    const itemsToShow = matched.slice(start, end);
    itemsToShow.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => {
            // Set header SLoc name and show history modal popup
            document.getElementById('modal-hist-wh-name').textContent = item.sloc;
            document.getElementById('history-modal').classList.add('active');
            
            // Load history
            renderDetailHistoryTable(toolId, item.warehouse);
        };

        tr.innerHTML = `
            <td style="padding:10px 14px;text-align:center;">${start + idx + 1}</td>
            <td style="padding:10px 14px;">${item.plant}</td>
            <td style="padding:10px 14px;">${item.sloc}</td>
            <td style="padding:10px 14px;text-align:right;font-weight:700;color:var(--primary);">${item.quantity.toLocaleString()}</td>
            <td style="padding:10px 14px;text-align:right;font-size:11px;color:var(--text2);" class="font-mono">${new Date(item.lastUpdated).toLocaleDateString()}</td>
        `;
        tbody.appendChild(tr);
    });

    renderStockPageNumbers(Math.ceil(total / stockPageSize));
}

function changeStockPage(delta) {
    stockCurrentPage += delta;
    renderDetailInventoryTable(currentToolId);
}

function renderStockPageNumbers(totalPages) {
    const wrapper = document.getElementById('td-stock-numbers');
    if (!wrapper) return;
    wrapper.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `pag-num ${i === stockCurrentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.onclick = (e) => {
            e.stopPropagation();
            stockCurrentPage = i;
            renderDetailInventoryTable(currentToolId);
        };
        wrapper.appendChild(btn);
    }
}

function closeHistoryModal() {
    document.getElementById('history-modal').classList.remove('active');
}

function renderDetailHistoryTable(toolId, whFilter = null) {
    const plant = document.getElementById('td-filter-plant').value;
    const sloc = document.getElementById('td-filter-sloc').value;
    const wh = whFilter;

    const matched = importHistory
        .filter(item => {
            if (item.toolId !== toolId) return false;
            if (wh && item.warehouse !== wh) return false;
            if (sloc && !SLOC_WAREHOUSES[sloc]?.includes(item.warehouse)) return false;
            if (plant && !PLANT_SLOCS[plant]?.some(s => SLOC_WAREHOUSES[s]?.includes(item.warehouse))) return false;
            return true;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const tbody = document.getElementById('td-history-tbody');
    tbody.innerHTML = "";

    if (matched.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--text3);padding:12px;">Chưa có lịch sử nhập, xuất vật tư cho kho này.</td></tr>`;
        return;
    }

    const tool = storageTools.find(t => t.id === toolId);
    const unit = tool ? tool.unit : 'Cái';

    matched.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="padding:10px 14px;text-align:center;">${idx + 1}</td>
            <td style="padding:10px 14px;font-size:11px;" class="font-mono">${new Date(item.date).toLocaleDateString()}</td>
            <td style="padding:10px 14px;font-weight:500;">${item.supplier}</td>
            <td style="padding:10px 14px;text-align:center;">${unit}</td>
            <td style="padding:10px 14px;text-align:right;font-weight:700;">${item.quantity}</td>
            <td style="padding:10px 14px;text-align:right;color:var(--text2);">${item.price ? item.price.toLocaleString() : '—'}</td>
            <td style="padding:10px 14px;text-align:right;font-weight:700;color:var(--success);">${item.amount ? item.amount.toLocaleString() : '—'}</td>
            <td style="padding:10px 14px;color:var(--text2);">${item.user}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ==========================================
// 8. POPUP: ADD STOCK POPUP
// ==========================================
function openAddStockModal(toolId, toolCode, toolName) {
    document.getElementById('modal-tool-id').value = toolId;
    document.getElementById('modal-tool-name').value = `[${toolCode}] - ${toolName}`;
    document.getElementById('modal-qty').value = "1";
    document.getElementById('modal-price').value = "0";
    document.getElementById('modal-amount').textContent = "0 VND";
    document.getElementById('modal-supplier').value = "";

    document.getElementById('modal-plant').value = "";
    document.getElementById('modal-sloc').innerHTML = '<option value="">-- Chọn SLoc --</option>';
    document.getElementById('modal-sloc').disabled = true;

    document.getElementById('add-stock-modal').classList.add('active');
}

function closeAddStockModal() {
    document.getElementById('add-stock-modal').classList.remove('active');
}

function handleModalPlantChange() {
    const plant = document.getElementById('modal-plant').value;
    const slocSelect = document.getElementById('modal-sloc');

    if (!plant) {
        slocSelect.innerHTML = '<option value="">-- Chọn SLoc --</option>';
        slocSelect.disabled = true;
    } else {
        const slocs = PLANT_SLOCS[plant] || [];
        let html = '<option value="">-- Chọn SLoc --</option>';
        slocs.forEach(s => { html += `<option value="${s}">${s}</option>`; });
        slocSelect.innerHTML = html;
        slocSelect.disabled = false;
    }
}

function handleModalSlocChange() {
    // No warehouse dependency anymore
}

function calcModalAmount() {
    const qty = parseInt(document.getElementById('modal-qty').value) || 0;
    const price = parseInt(document.getElementById('modal-price').value) || 0;
    const amount = qty * price;
    document.getElementById('modal-amount').textContent = amount.toLocaleString() + " VND";
}

function submitAddStock() {
    const toolId = document.getElementById('modal-tool-id').value;
    const plant = document.getElementById('modal-plant').value;
    const sloc = document.getElementById('modal-sloc').value;
    const qty = parseInt(document.getElementById('modal-qty').value) || 0;
    const price = parseInt(document.getElementById('modal-price').value) || 0;
    const supplier = document.getElementById('modal-supplier').value.trim();
    
    if (!plant) { showToast("Vui lòng chọn Plant!", "error"); return; }
    if (!sloc) { showToast("Vui lòng chọn SLoc!", "error"); return; }
    if (qty < 1) { showToast("Số lượng nhập thêm phải tối thiểu từ 1!", "error"); return; }
    if (price < 0) { showToast("Đơn giá không được âm!", "error"); return; }
    if (!supplier) { showToast("Vui lòng điền tên Nhà cung cấp!", "error"); return; }

    const t = storageTools.find(tool => tool.id === toolId);
    if (!t) return;

    // Double confirmation popup
    showConfirm(
        "Xác nhận thêm số lượng",
        `Bạn có chắc chắn muốn thêm ${qty} ${t.unit} vào ${sloc}?`,
        () => {
            let item = inventories.find(i => i.toolId === toolId && i.sloc === sloc);
            if (item) {
                item.quantity += qty;
                item.lastUpdated = new Date().toISOString();
            } else {
                inventories.push({
                    toolId: toolId,
                    plant: plant,
                    sloc: sloc,
                    warehouse: sloc,
                    location: "VỊ-TRÍ-BÙ",
                    quantity: qty,
                    status: t.status,
                    lastUpdated: new Date().toISOString()
                });
            }

            importHistory.push({
                toolId: toolId,
                date: new Date().toISOString(),
                supplier: supplier,
                quantity: qty,
                price: price,
                amount: qty * price,
                warehouse: sloc,
                user: "Nguyễn Admin",
                note: "Nhập bổ sung"
            });

            showToast(`Đã thêm thành công ${qty} ${t.unit} vào kho.`);
            closeAddStockModal();
            renderList();
        }
    );
}

// Drag & drop triggers for image upload
const dropzone = document.getElementById('image-upload-zone');
if (dropzone) {
    dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.style.borderColor = 'var(--primary)'; });
    dropzone.addEventListener('dragleave', () => { dropzone.style.borderColor = 'var(--border)'; });
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'var(--border)';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const input = document.getElementById('tf-image-file');
            const dt = new DataTransfer();
            dt.items.add(file);
            input.files = dt.files;
            handleImageUpload(input);
        }
    });
}

// ==========================================
// 9. APP INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    showListView();
});

// ==========================================
// 10. TEMPLATE DOWNLOAD & CSV LIST IMPORT
// ==========================================
function downloadStorageTemplate() {
  const csvContent = "\uFEFF" + `"Loai vat tu (Pallet/Thung go/Thung carton/Dung cu kho/Thiet bi kho)","Ma vat tu","Ten vat tu","Ma nhom","Barcode","DVT (Cai/Chiec/Bo/Kien)","Ton toi thieu","Ton toi da"\n` +
    `"Pallet","PL-099","Pallet nhựa xanh BP1","GRP-PL","PLG009988","Cái","10","100"\n` +
    `"Thùng gỗ","TG-088","Thùng gỗ thông đóng kín","GRP-BX","TGG008877","Cái","5","50"`;
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "mau_danh_sach_ccdc.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function triggerStorageImport() {
  document.getElementById('storage-import-file').click();
}

function handleStorageImport(input) {
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
          const type = cols[0];
          const code = cols[1];
          const name = cols[2];
          
          if (!type || !name) continue;

          // Check duplicate code
          const exists = storageTools.some(x => x.code.toLowerCase() === code.toLowerCase());
          if (exists) continue;

          const mockId = "T-" + String(storageTools.length + 1).padStart(3, '0');
          
          storageTools.push({
            id: mockId,
            code: code || autogenerateCode(type),
            name: name,
            type: type,
            length: 120,
            width: 80,
            height: 15,
            unit: cols[5] || "Cái",
            status: "Mới",
            groupCode: cols[3] || "GRP-PL",
            barcode: cols[4] || "",
            color: "Xám",
            material: "Nhựa HDPE",
            maxLoad: 1000,
            minStock: parseInt(cols[6]) || 0,
            maxStock: parseInt(cols[7]) || 100,
            image: "",
            note: "Imported from CSV template file.",
            dateCreated: new Date().toISOString()
          });
          importedCount++;
        }
      }

      if (importedCount > 0) {
        showToast(`Đã import thành công ${importedCount} công cụ lưu trữ mới!`, "success");
        renderList();
      } else {
        showToast("Không tìm thấy bản ghi mới hợp lệ hoặc định dạng sai.", "error");
      }
      input.value = '';
    };
    reader.readAsText(file, 'UTF-8');
  }
}
