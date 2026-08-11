// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════
const PLANT_SLOC_MAP = {
    'Plant 01 - Miền Bắc': {
        'Tổng kho miền Bắc': { donViQL: 'Viettel CN Hà Nội', thukho: 'Nguyễn Văn A' },
        'Bãi kho Hà Nội': { donViQL: 'Viettel CN Hà Nội', thukho: 'Trần Văn B' },
        'Kho Hải Phòng': { donViQL: 'Viettel CN Hải Phòng', thukho: 'Lê Văn C' }
    },
    'Plant 02 - Miền Trung': {
        'Tổng kho miền Trung': { donViQL: 'Viettel CN Đà Nẵng', thukho: 'Nguyễn Văn D' }
    },
    'Plant 03 - Miền Nam': {
        'Tổng kho miền Nam': { donViQL: 'Viettel CN TP.HCM', thukho: 'Phạm Văn E' },
        'Kho Bình Dương': { donViQL: 'Viettel CN Bình Dương', thukho: 'Hoàng Văn F' }
    }
};

const WAREHOUSES = {
    'KHO-HN-01': { id: 'KHO-HN-01', name: 'Kho Hà Nội 01', tenNhaKho: 'Tổng kho miền Bắc', donViQL: 'Viettel CN Hà Nội', maTinh: 'HN', address: 'Sóc Sơn, Hà Nội', type: 'Nhà kho', status: 'configured', len: 100, wid: 60, hgt: 8, area: 6000, theorVol: 48000, temp: 25, desc: '', note: '', plant: 'Plant 01 - Miền Bắc', sloc: 'Tổng kho miền Bắc', slocs: [{ id: 1, plant: 'Plant 01 - Miền Bắc', sloc: 'Tổng kho miền Bắc', donViQL: 'Viettel CN Hà Nội', thukho: 'Nguyễn Văn A' }] },
    'KHO-HN-02': {
        id: 'KHO-HN-02',
        name: 'Bãi kho Hà Nội 02',
        tenNhaKho: 'Bãi kho trung tâm',
        donViQL: 'Viettel CN Hà Nội',
        maTinh: 'HN',
        address: 'Gia Lâm, Hà Nội',
        type: 'Bãi kho',
        status: 'configured',
        len: 80,
        wid: 50,
        hgt: 5,
        area: 4000,
        theorVol: 20000,
        temp: 28,
        desc: 'Bãi kho lưu trữ hàng ngoài trời, cuộn cáp và thiết bị cồng kềnh',
        note: 'Cần che phủ bạt đối với các thùng gỗ và thiết bị nhạy cảm độ ẩm',
        plant: 'Plant 01 - Miền Bắc',
        sloc: 'Bãi kho Hà Nội',
        slocs: [{ id: 1, plant: 'Plant 01 - Miền Bắc', sloc: 'Bãi kho Hà Nội', donViQL: 'Viettel CN Hà Nội', thukho: 'Trần Văn B' }],
        subLayout: [
            { id: 'KV.1', type: 'rack', x: 100, y: 100, w: 300, h: 200, lenM: 15, widM: 10, hgt: 3.0 },
            { id: 'KV.2', type: 'rack', x: 500, y: 100, w: 400, h: 300, lenM: 20, widM: 15, hgt: 3.5 },
            { id: 'KV.3', type: 'rack', x: 100, y: 400, w: 300, h: 400, lenM: 15, widM: 20, hgt: 3.0 },
            { id: 'Lối.1', type: 'aisle', x: 420, y: 100, w: 60, h: 700, aisleType: 'forklift', dir: 'V', lenM: 35, widM: 3.0 }
        ]
    },
    'KHO-HCM-01': { id: 'KHO-HCM-01', name: 'Kho TP.HCM 01', tenNhaKho: 'Tổng kho miền Nam', donViQL: 'Viettel CN TP.HCM', maTinh: 'HCM', address: 'Củ Chi, TP.HCM', type: 'Nhà kho', status: 'configuring', len: 120, wid: 80, hgt: 10, area: 9600, theorVol: 96000, temp: 25, desc: '', note: '', plant: 'Plant 03 - Miền Nam', sloc: 'Tổng kho miền Nam', slocs: [{ id: 1, plant: 'Plant 03 - Miền Nam', sloc: 'Tổng kho miền Nam', donViQL: 'Viettel CN TP.HCM', thukho: 'Phạm Văn E' }] },
    'KHO-DN-01': { id: 'KHO-DN-01', name: 'Kho Đà Nẵng 01', tenNhaKho: 'Tổng kho miền Trung', donViQL: 'Viettel CN Đà Nẵng', maTinh: 'DN', address: 'Hòa Vang, Đà Nẵng', type: 'Nhà kho', status: 'configured', len: 80, wid: 50, hgt: 7, area: 4000, theorVol: 28000, temp: 25, desc: '', note: '', plant: 'Plant 02 - Miền Trung', sloc: 'Tổng kho miền Trung', slocs: [{ id: 1, plant: 'Plant 02 - Miền Trung', sloc: 'Tổng kho miền Trung', donViQL: 'Viettel CN Đà Nẵng', thukho: 'Nguyễn Văn D' }] },
    'KHO-HP-01': { id: 'KHO-HP-01', name: 'Kho Hải Phòng 01', tenNhaKho: 'Kho Hải Phòng', donViQL: 'Viettel CN Hải Phòng', maTinh: 'HP', address: 'An Dương, Hải Phòng', type: 'Nhà kho', status: 'configured', len: 90, wid: 50, hgt: 8, area: 4500, theorVol: 36000, temp: 25, desc: '', note: '', plant: 'Plant 01 - Miền Bắc', sloc: 'Kho Hải Phòng', slocs: [{ id: 1, plant: 'Plant 01 - Miền Bắc', sloc: 'Kho Hải Phòng', donViQL: 'Viettel CN Hải Phòng', thukho: 'Lê Văn C' }] },
    'KHO-BD-01': { id: 'KHO-BD-01', name: 'Kho Bình Dương 01', tenNhaKho: 'Kho Bình Dương', donViQL: 'Viettel CN Bình Dương', maTinh: 'BD', address: 'Dĩ An, Bình Dương', type: 'Nhà kho', status: 'configured', len: 110, wid: 70, hgt: 9, area: 7700, theorVol: 69300, temp: 25, desc: '', note: '', plant: 'Plant 03 - Miền Nam', sloc: 'Kho Bình Dương', slocs: [{ id: 1, plant: 'Plant 03 - Miền Nam', sloc: 'Kho Bình Dương', donViQL: 'Viettel CN Bình Dương', thukho: 'Hoàng Văn F' }] },
    'KHO-HN-03': { id: 'KHO-HN-03', name: 'Kho K2', donViQL: 'Viettel CN Hà Nội', maTinh: 'HN', address: 'Hòa Lạc', type: 'Nhà kho', status: 'configured', len: 104, wid: 49.7, hgt: 15, area: 5169, theorVol: 77530, temp: 25, desc: 'Sơ đồ quy hoạch Nhà kho K2 – Tổng kho Hòa Lạc (104m × 49.7m)', note: '', plant: 'Plant 01 - Miền Bắc', sloc: 'Tổng kho miền Bắc', slocs: [{ id: 1, plant: 'Plant 01 - Miền Bắc', sloc: 'Tổng kho miền Bắc', donViQL: 'Viettel CN Hà Nội', thukho: 'Nguyễn Văn A' }] }
};

const CCDC_RACK = { KC: { name: 'Giá kệ cao hạng nặng', maxLoad: 3000, note: '< 3000kg/tầng' }, KT: { name: 'Giá kệ hàng trung', maxLoad: 1000, note: '< 1000kg/tầng' }, KN: { name: 'Giá kệ hàng nhẹ', maxLoad: 500, note: '< 500kg/tầng' } };
const CCDC_PALLET = { PL1: { name: 'Pallet 800×1200', l: 1200, w: 800, note: 'Áp dụng quy hoạch' }, PL2: { name: 'Pallet 1000×1200', l: 1200, w: 1000, note: '' }, PL3: { name: 'Pallet 1100×1100', l: 1100, w: 1100, note: '' } };
const CCDC_BOX = { 'TG-NHO': { name: 'Thùng gỗ nhỏ', l: 500, w: 500, h: 500, maxLoad: 50, rfid: false }, TN1: { name: 'Thùng gỗ TN1', l: 1000, w: 800, h: 500, maxLoad: 100, rfid: true }, TN2: { name: 'Thùng gỗ TN2', l: 1150, w: 1050, h: 900, maxLoad: 200, rfid: true }, TN3: { name: 'Thùng gỗ TN3', l: 1150, w: 1050, h: 1100, maxLoad: 300, rfid: true }, TN4: { name: 'Thùng gỗ TN4', l: 1150, w: 1050, h: 1400, maxLoad: 400, rfid: true }, TN5: { name: 'Thùng gỗ TN5', l: 1150, w: 1050, h: 1700, maxLoad: 500, rfid: true } };

const MANDATORY_TYPES = new Set(['B', 'D', 'F']);
const ZONE_COLORS = {
    A: 'transparent',
    B: 'rgba(230, 145, 56, 0.12)',
    C: 'rgba(230, 145, 56, 0.12)',
    D: 'rgba(153, 153, 153, 0.10)',
    F: 'rgba(153, 153, 153, 0.10)',
    G: 'rgba(106, 168, 79, 0.12)',
    H: 'rgba(106, 168, 79, 0.12)',
    I: 'rgba(106, 168, 79, 0.12)',
    J: 'rgba(244, 143, 177, 0.15)',
    K: 'rgba(255, 245, 157, 0.15)',
    KH: 'rgba(153, 153, 153, 0.10)',
    BK: 'rgba(153, 153, 153, 0.10)',
    M: 'rgba(230, 145, 56, 0.12)'
};
const ZONE_BORDERS = {
    A: '#B5B5B5', B: '#e69138', C: '#e69138', D: '#999999', F: '#999999',
    G: '#6aa84f', H: '#6aa84f', I: '#6aa84f', J: '#E57373', K: '#F9A825',
    KH: '#999999', BK: '#999999', M: '#e69138'
};
const ZONE_LABELS = { A: 'Cửa Nhập – Xuất', B: 'Khu vực chờ Nhập – xuất', C: 'Khu vực đóng gói', D: 'Khu dự phòng', F: 'Khu làm việc', G: 'Phân khu giá kệ hạng nặng', H: 'Phân khu giá kệ hạng trung', I: 'Phân khu giá kệ hạng nhẹ', J: 'Khu vực pallet', K: 'Khu vực thùng gỗ', KH: 'Kho hở', BK: 'Bãi kho', M: 'Khu vực hàng quá khổ' };
const CELL_CM = 20;
const CELL_PX = 4;
let canvasZoom = 1;
let selectedWarehouseId = 'KHO-HN-01';
let canvasZones = [];
let selectedZoneId = null;
let draggingType = null, draggingLabel = null;
let zoneCounter = {};
let currentZonePopup = null;
let moveState = null;

function m2c(m) { return Math.round(m * 100 / CELL_CM); }
function c2m(c) { return (c * CELL_CM / 100); }
function snapCell(v) { return Math.round(v); }
function getMockFillRate(id) { let h = 0; for (let i = 0; i < id.length; i++)h = Math.imul(31, h) + id.charCodeAt(i) | 0; return Math.abs(h % 100) / 100; }
function getFillColor(r) { if (r < 0.6) return `hsl(120,90%,${Math.round(45 - r * 10)}%)`; if (r < 0.8) return `hsl(50,95%,50%)`; if (r < 0.95) return `hsl(30,100%,50%)`; return `hsl(0,100%,45%)`; }

// ════════════════════════════════════════
// TOAST
// ════════════════════════════════════════
function showToast(message, type = 'success') {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.style.cssText = `padding:12px 20px;border-radius:8px;background:#000000;color:#FFF;font-family:var(--font);font-size:13px;font-weight:600;box-shadow:0 10px 30px rgba(0,0,0,.3);border:1px solid var(--border);border-left:4px solid ${type === 'success' ? 'var(--primary)' : 'var(--danger)'};opacity:0;transform:translateY(-20px);transition:all .3s cubic-bezier(.16,1,.3,1);pointer-events:auto;`;
    t.textContent = message; c.appendChild(t);
    setTimeout(() => { t.style.opacity = '1'; t.style.transform = 'translateY(0)'; }, 10);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(-20px)'; setTimeout(() => t.remove(), 300); }, 3000);
}

// ════════════════════════════════════════
// CONFIRM DIALOG
// ════════════════════════════════════════
function showConfirm(title, msg, onOk, okLabel = 'Xác nhận', okClass = 'btn-danger') {
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-msg').textContent = msg;
    const okBtn = document.getElementById('confirm-ok-btn');
    const cancelBtn = document.getElementById('confirm-cancel-btn');
    okBtn.className = 'btn ' + okClass;
    okBtn.textContent = okLabel;
    document.getElementById('confirm-overlay').style.display = 'flex';
    const close = () => { document.getElementById('confirm-overlay').style.display = 'none'; };
    okBtn.onclick = () => { close(); onOk(); };
    cancelBtn.onclick = close;
}

// ════════════════════════════════════════
// ROUTER
// ════════════════════════════════════════
function showView(name) {
    ['warehouse-list', 'warehouse-detail', 'warehouse-config', 'warehouse-add'].forEach(v => {
        const el = document.getElementById('view-' + v);
        if (el) el.style.display = 'none';
    });
    const el = document.getElementById('view-' + name);
    if (el) { el.style.display = 'block'; el.classList.remove('fade-in'); void el.offsetWidth; el.classList.add('fade-in'); }
    const main = document.getElementById('main');
    if (name === 'warehouse-config') { main.style.padding = '0'; main.style.overflow = 'hidden'; }
    else { main.style.padding = '24px'; main.style.overflow = 'auto'; }
    // Nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navWh = document.getElementById('nav-warehouse');
    if (navWh) navWh.classList.add('active');
    // Sub nav
    document.querySelectorAll('.nav-sub').forEach(s => s.classList.remove('active'));
    if (name === 'warehouse-list') {
        const subnavL = document.getElementById('subnav-list');
        if (subnavL) subnavL.classList.add('active');
    }
    if (name === 'warehouse-list') filterWarehouseList();
    if (name === 'warehouse-detail') renderDetail();
    if (name === 'warehouse-config') initConfig();
}

function toggleSidebar() {
    const body = document.querySelector('.cfg-body');
    if (body) {
        body.classList.toggle('sidebar-collapsed');
        // Fit canvas zoom after transition
        setTimeout(mainZoomFit, 260);
    }
}

function toggleMainSidebar() {
    const app = document.getElementById('app');
    if (app) {
        app.classList.toggle('main-sidebar-collapsed');
        // If we are in the config view, fit the canvas zoom
        const configView = document.getElementById('view-warehouse-config');
        if (configView && configView.style.display !== 'none') {
            setTimeout(mainZoomFit, 210);
        }
    }
}

function toggleSubnav(event) {
    showView('warehouse-list');
    const subnav = document.getElementById('warehouse-subnav');
    const arrow = document.getElementById('nav-arrow-warehouse');
    if (subnav && arrow) {
        const isHidden = subnav.style.display === 'none';
        if (isHidden) {
            subnav.style.display = 'block';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            subnav.style.display = 'none';
            arrow.style.transform = 'rotate(-90deg)';
        }
    }
}

function selectWarehouse(id) { selectedWarehouseId = id; }

// ════════════════════════════════════════
// WAREHOUSE LIST
// ════════════════════════════════════════
function resetWhFilters() {
    ['wh-search-input', 'wh-filter-plant', 'wh-filter-sloc', 'wh-filter-matinh'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    filterWarehouseList();
}

function filterWarehouseList() {
    const q = (document.getElementById('wh-search-input')?.value || '').toLowerCase();
    const plantF = document.getElementById('wh-filter-plant')?.value || '';
    const slocF = document.getElementById('wh-filter-sloc')?.value || '';
    const maTinhF = document.getElementById('wh-filter-matinh')?.value || '';
    const statusMap = { configured: 'Đã cấu hình', configuring: 'Đang cấu hình' };
    const statusCls = { configured: 'badge-green', configuring: 'badge-yellow' };
    const typeCls = { 'Nhà kho': 'badge-blue', 'Bãi kho': 'badge-yellow' };
    const maTinhColors = { HN: '#EE0033', HCM: '#2563EB', DN: '#059669', HP: '#9333EA', BD: '#D97706' };
    const whs = Object.values(WAREHOUSES).filter(wh => {
        if (q && !(wh.id.toLowerCase().includes(q) || wh.name.toLowerCase().includes(q))) return false;
        if (plantF && wh.plant !== plantF) return false;
        if (slocF && wh.sloc !== slocF) return false;
        if (maTinhF && wh.maTinh !== maTinhF) return false;
        return true;
    });
    const tbody = document.getElementById('wh-list-tbody');
    if (!tbody) return;
    if (whs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="padding:40px;text-align:center;color:var(--text3)"><div style="display:flex;flex-direction:column;align-items:center;gap:10px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:40px;height:40px;opacity:.4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg><span style="font-size:13px;font-weight:500">Không tìm thấy kho phù hợp</span><button onclick="resetWhFilters()" class="btn btn-ghost btn-sm">Xóa bộ lọc</button></div></td></tr>`;
        return;
    }
    tbody.innerHTML = whs.map((wh, idx) => {
        const slocsArr = wh.slocs || [];
        const plants = slocsArr.length > 0
            ? [...new Set(slocsArr.map(s => s.plant).filter(Boolean))].join(', ')
            : (wh.plant || '—');
        const slocs = slocsArr.length > 0
            ? slocsArr.map(s => s.sloc).filter(Boolean).join(', ')
            : (wh.sloc || '—');
        const dviQLs = slocsArr.length > 0
            ? [...new Set(slocsArr.map(s => s.donViQL).filter(Boolean))].join(', ')
            : (wh.donViQL || '—');

        return `<tr>
<td style="text-align:center;font-weight:600;color:var(--text3);font-size:12px">${idx + 1}</td>
<td><span class="code-tag">${wh.id}</span></td>
<td><strong style="font-size:13px">${wh.name}</strong></td>
<td><span class="badge ${typeCls[wh.type] || 'badge-blue'}" style="font-size:11px">${wh.type}</span></td>
<td style="font-size:12px;color:var(--text2);max-width:140px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${plants}">${plants}</td>
<td style="font-size:12px;color:var(--text2);max-width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${slocs}">${slocs}</td>
<td style="font-size:12px;color:var(--text2);max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${dviQLs}">${dviQLs}</td>
<td style="font-size:12px;color:var(--text2);max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${wh.address}">${wh.address}</td>
<td><span class="badge ${statusCls[wh.status]}" style="font-size:11px">${statusMap[wh.status]}</span></td>
<td>
  <div class="action-btns" style="gap:4px;justify-content:center">
    <button title="Xem chi tiết" style="width:32px;height:32px;border-radius:7px;border:1px solid var(--border);background:var(--bg3);cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--text2);transition:.15s" onmouseover="this.style.background='var(--bg4)'" onmouseout="this.style.background='var(--bg3)'" onclick="selectWarehouse('${wh.id}');showView('warehouse-detail')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    </button>
    ${wh.status !== 'configured' ? `
    <button title="Cấu hình mặt bằng" style="width:32px;height:32px;border-radius:7px;border:none;background:var(--primary);cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;transition:.15s" onmouseover="this.style.background='var(--primary2)'" onmouseout="this.style.background='var(--primary)'" onclick="selectWarehouse('${wh.id}');showView('warehouse-config')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.75 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.75a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    </button>` : ''}
  </div>
</td>
</tr>`;
    }).join('');
}

// ════════════════════════════════════════
// WAREHOUSE DETAIL
// ════════════════════════════════════════
const ZONE_MOCKUP = [
    { id: 'NK(n)', name: 'Nhà kho chính', typeName: 'Khu vực lưu trữ kệ', size: '~125×30 m' },
    { id: 'A(n)', name: 'Khu vực cửa Nhập-Xuất', typeName: 'Cửa Nhập-Xuất', size: '20×10 m' },
    { id: 'B(n)', name: 'Khu vực Chờ Nhập-Xuất', typeName: 'Khu đệm phân loại', size: '35×30 m' },
    { id: 'C(n)', name: 'Khu vực Đóng gói', typeName: 'Đóng gói', size: '25×15 m' },
    { id: 'D(n)', name: 'Khu vực dự phòng', typeName: 'Dự phòng (kẻ sọc)', size: '4×80 m' },
    { id: 'E(n)', name: 'Phòng lạnh 20-30°C', typeName: 'Card, bo mạch', size: '20×15 m' },
    { id: 'F(n)', name: 'Khu vực làm việc', typeName: 'Văn phòng / phòng họp', size: '30×10 m' },
    { id: 'G(n)', name: 'Kệ hàng nặng (Selective Racking)', typeName: '16 dãy đôi, khoang 2.7×1.1 m', size: 'lối đi 2.3 m' },
    { id: 'H(n)', name: 'Kệ hàng trung', typeName: '12 dãy, khoang 2.0×0.8 m', size: 'lối đi 1.2 m' },
    { id: 'I(n)', name: 'Kệ hàng nhẹ (V-lỗ)', typeName: '6 dãy, khoang 1.2×0.6 m', size: 'lối đi 1.2 m' },
    { id: 'J(n)', name: 'Khu vực Pallet', typeName: 'Lưu trữ pallet trên sàn', size: '1.2×1.0 m / pallet' },
    { id: 'K(n)', name: 'Khu Pallet / Thùng gỗ', typeName: 'Lưu trữ trên sàn', size: '~50×30 m' },
    { id: 'L(n)', name: 'Khu vực để PTVT-CCDCL', typeName: 'Sạc & đỗ 10 xe nâng', size: '20×10 m' },
    { id: 'M(n)', name: 'Hàng quá khổ / đặc biệt', typeName: 'Antenna, container, module', size: '40×25 m' },
    { id: 'N(n)', name: 'Đường giao thông chính', typeName: '2 chiều xe nâng tránh nhau', size: '4×180 m' },
    { id: 'PCCC', name: 'Đường vành đai PCCC', typeName: 'Fire Safety Perimeter', size: '≥ 0.7 m rộng' },
];

function renderDetail() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    document.getElementById('detail-title2').textContent = wh.name;
    const sMap = { configured: 'Đã cấu hình', configuring: 'Đang cấu hình', unconfigured: 'Chưa cấu hình' };
    const sCls = { configured: 'badge-green', configuring: 'badge-yellow', unconfigured: '' };
    const pct = ((wh.area / wh.theorVol) * 100 || 0).toFixed(1);
    const rf = (wh.status === 'configured' ? 62.3 : wh.status === 'configuring' ? 30.0 : 0).toFixed(1);
    const renderField = f => `<div class="d-field"><span class="d-field-label">${f.label}</span><span class="d-field-sep">:</span><span class="d-field-val">${f.val}</span></div>`;
    const provinceNames = {
        HN: 'Hà Nội',
        HCM: 'TP.HCM',
        DN: 'Đà Nẵng',
        HP: 'Hải Phòng',
        BD: 'Bình Dương'
    };
    const provinceName = provinceNames[wh.maTinh];
    const provinceText = (wh.maTinh && wh.maTinh !== '—') ? (provinceName ? `${wh.maTinh} - ${provinceName}` : wh.maTinh) : '—';

    const col1 = [
        { label: 'Mã kho', val: `<span class="code-tag" style="background:#FFF1F2; border-color:#FECDD3; color:var(--primary); font-size:13px; font-weight:700;">${wh.id}</span>` },
        { label: 'Tên kho', val: wh.name },
        { label: 'Mã tỉnh', val: provinceText },
        { label: 'Địa chỉ', val: wh.address || '—' },
        { label: 'Trạng thái', val: `<span class="badge ${sCls[wh.status]}">${sMap[wh.status]}</span>` },
    ];
    const col2 = [
        { label: 'Loại kho', val: `<span class="badge badge-blue" style="font-size:12px">${wh.type}</span>` },
        { label: 'Chiều dài', val: `<span style="font-family:var(--mono);font-weight:600">${wh.len} m</span>` },
        { label: 'Chiều rộng', val: `<span style="font-family:var(--mono);font-weight:600">${wh.wid} m</span>` },
        { label: 'Chiều cao', val: `<span style="font-family:var(--mono);font-weight:600">${wh.hgt} m</span>` },
        { label: 'Diện tích', val: `<span style="font-family:var(--mono);font-weight:700;color:var(--primary)">${wh.area.toLocaleString('vi')} m²</span>` },
        { label: 'Thể tích', val: `<span style="font-family:var(--mono);font-weight:700;color:var(--primary)">${(wh.theorVol || (wh.len * wh.wid * wh.hgt) || 0).toLocaleString('vi')} m³</span>` },
    ];
    const col3 = [
        { label: 'Nhiệt độ', val: `${wh.temp || 25}°C` },
        { label: 'Tỉ lệ lấp đầy', val: `<span style="font-weight:700;font-size:15px;color:var(--success);font-family:var(--mono)">${rf}%</span>` },
        { label: 'Mô tả', val: wh.desc || '—' },
        { label: 'Ghi chú', val: wh.note || '—' },
    ];

    const sidebarHtml = [
        col1.map(renderField).join(''),
        `<hr style="border:0; border-top: 1px solid var(--border); margin: 12px 0;">`,
        col2.map(renderField).join(''),
        `<hr style="border:0; border-top: 1px solid var(--border); margin: 12px 0;">`,
        col3.map(renderField).join('')
    ].join('');
    const sidebarEl = document.getElementById('detail-info-sidebar');
    if (sidebarEl) sidebarEl.innerHTML = sidebarHtml;
    const ms = document.getElementById('detail-map-status');
    const mc = document.getElementById('detail-map-container');
    if (ms && mc) {
        // Auto-fit container to warehouse aspect ratio, no scroll needed
        mc.style.aspectRatio = `${wh.len} / ${wh.wid}`;
        mc.style.maxHeight = '56vh';
        mc.style.overflow = 'hidden';
        mc.style.padding = '0';
        if (wh.status === 'unconfigured') {
            ms.className = 'badge'; ms.textContent = 'Chưa có sơ đồ';
            mc.style.removeProperty('aspect-ratio');
            mc.style.maxHeight = '220px';
            mc.style.overflow = 'hidden';
            mc.innerHTML = `<div class="map-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14"/><path d="M8 21h8m-4-4v4"/></svg><div>Kho chưa có sơ đồ quy hoạch</div><button class="btn btn-primary btn-sm mt-2" onclick="showView('warehouse-config')">Cấu hình ngay</button></div>`;
        } else {
            ms.className = 'badge badge-green'; ms.textContent = 'Đã cấu hình';
            mc.innerHTML = renderSimpleMap(wh);
            // Reset zoom after SVG is in DOM
            detailZoomVal = 1;
            const lbl = document.getElementById('detail-zoom-label');
            if (lbl) lbl.textContent = '100%';
        }
    }

    // Render Slocs table
    const slocSection = document.getElementById('detail-slocs-section');
    const slocTbody = document.getElementById('detail-slocs-tbody');
    if (slocSection && slocTbody) {
        if (wh.slocs && wh.slocs.length > 0) {
            slocSection.style.display = 'block';
            slocTbody.innerHTML = wh.slocs.map((s, idx) => `
                        <tr>
                            <td style="text-align:center;font-weight:600;color:var(--text3);font-size:12px">${idx + 1}</td>
                            <td>${s.plant}</td>
                            <td><strong>${s.sloc}</strong></td>
                            <td style="color:var(--text2)">${s.donViQL || '—'}</td>
                            <td style="color:var(--text2)">${s.thukho || '—'}</td>
                        </tr>
                    `).join('');
        } else {
            slocSection.style.display = 'none';
        }
    }
}

const ZONE_DISPLAY = {
    'NK': { fill: '#F0F4FF', stroke: '#1D4ED8', label: 'Nhà kho chính', textColor: '#1E3A8A' },
    'G': { fill: '#1D4ED8', stroke: '#1E3A8A', label: 'Kệ hàng NẶNG (G)', textColor: '#fff' },
    'H': { fill: '#EE0033', stroke: '#AA0025', label: 'Kệ hàng TRUNG (H)', textColor: '#fff' },
    'I': { fill: '#0891B2', stroke: '#0C4A6E', label: 'Kệ hàng NHẸ (I)', textColor: '#fff' },
    'A': { fill: '#7C3AED', stroke: '#5B21B6', label: 'Cửa Nhập-Xuất', textColor: '#fff' },
    'B': { fill: '#DBEAFE', stroke: '#3B82F6', label: 'Chờ Nhập-Xuất', textColor: '#1D4ED8' },
    'C': { fill: '#FFEDD5', stroke: '#EA580C', label: 'Đóng gói', textColor: '#9A3412' },
    'D': { fill: '#F1F5F9', stroke: '#64748B', label: 'Dự phòng', textColor: '#374151', dash: true },
    'E': { fill: '#CFFAFE', stroke: '#0891B2', label: 'Phòng lạnh 20-30°C', textColor: '#0E7490' },
    'F': { fill: '#DCFCE7', stroke: '#16A34A', label: 'Khu làm việc', textColor: '#166534' },
    'J': { fill: '#FED7AA', stroke: '#B45309', label: 'Khu Pallet (J)', textColor: '#7C2D12' },
    'K': { fill: '#92400E', stroke: '#78350F', label: 'Thùng gỗ (K)', textColor: '#fff' },
    'L': { fill: '#FEE2E2', stroke: '#DC2626', label: 'PTVT-CCDCL', textColor: '#7F1D1D' },
    'M': { fill: '#F3E8FF', stroke: '#7C3AED', label: 'Hàng quá khổ', textColor: '#581C87' },
    'N': { fill: '#E2E8F0', stroke: '#94A3B8', label: 'Đường giao thông', textColor: '#475569' },
    'PCCC': { fill: '#FEF3C7', stroke: '#D97706', label: 'PCCC', textColor: '#92400E' }
};

const ZONE_DETAIL_INFO = {
    'G': {
        title: 'Phân khu Giá kệ Hàng NẶNG (G)',
        subtitle: 'Heavy-duty racking zone — Tải trọng ≥ 1000 kg/tầng',
        color: '#1D4ED8',
        specs: [
            ['Tổng số khoang', '320 khoang (16 dãy, 8 cụm kệ)'],
            ['Chiều cao kệ', '≥ 5000mm (5 tầng)'],
            ['Tải trọng/tầng', '≥ 1000 kg'],
            ['Loại kệ', 'Drive-in / Selective pallet rack'],
        ],
        items: [
            { id: 'G1', bays: 4, levels: 5, fill: '#1D4ED8' }, { id: 'G2', bays: 4, levels: 5, fill: '#1D4ED8' },
            { id: 'G3', bays: 4, levels: 5, fill: '#1D4ED8' }, { id: 'G4', bays: 4, levels: 5, fill: '#1D4ED8' },
            { id: 'G5', bays: 4, levels: 5, fill: '#2563EB' }, { id: 'G6', bays: 4, levels: 5, fill: '#2563EB' },
            { id: 'G7', bays: 4, levels: 5, fill: '#2563EB' }, { id: 'G8', bays: 4, levels: 5, fill: '#2563EB' },
        ],
        aisleLabel: 'Lối đi xe nâng 2300mm',
        note: 'Dãy kệ bố trí back-to-back, lối đi giữa cho xe nâng reach truck'
    },
    'H': {
        title: 'Phân khu Giá kệ Hàng TRUNG (H)',
        subtitle: 'Medium-duty racking zone — Tải trọng 200–1000 kg/tầng',
        color: '#EE0033',
        specs: [
            ['Tổng số khoang', '288 khoang (12 dãy)'],
            ['Chiều cao kệ', '4000mm (4 tầng)'],
            ['Tải trọng/tầng', '1000 kg'],
            ['Loại kệ', 'Longspan / Medium-duty shelf'],
        ],
        items: [
            { id: 'H1', bays: 6, levels: 4, fill: '#EE0033' }, { id: 'H2', bays: 6, levels: 4, fill: '#EE0033' },
            { id: 'H3', bays: 6, levels: 4, fill: '#DC2626' }, { id: 'H4', bays: 6, levels: 4, fill: '#DC2626' },
            { id: 'H5', bays: 6, levels: 4, fill: '#EE0033' }, { id: 'H6', bays: 6, levels: 4, fill: '#EE0033' },
        ],
        aisleLabel: 'Lối đi 1200mm',
        note: 'Kệ dạng longspan, phân khu dùng xe tay thụ hoặc bốc xếp tay'
    },
    'I': {
        title: 'Phân khu Giá kệ Hàng NHẸ (I)',
        subtitle: 'Light-duty shelving zone — Tải trọng ≤ 200 kg/tầng',
        color: '#0891B2',
        specs: [
            ['Tổng số khoang', '240 khoang (6 dãy đơn)'],
            ['Chiều cao kệ', '2000–2500mm (4-5 tầng)'],
            ['Tải trọng/tầng', '≤ 200 kg'],
            ['Loại kệ', 'Boltless / Light shelf'],
        ],
        items: [
            { id: 'I1', bays: 8, levels: 5, fill: '#0891B2' }, { id: 'I2', bays: 8, levels: 5, fill: '#0891B2' },
            { id: 'I3', bays: 8, levels: 5, fill: '#0E7490' }, { id: 'I4', bays: 8, levels: 5, fill: '#0E7490' },
            { id: 'I5', bays: 8, levels: 5, fill: '#0891B2' }, { id: 'I6', bays: 8, levels: 5, fill: '#0891B2' },
        ],
        aisleLabel: 'Lối đi 900mm',
        note: '6 dãy đơn, bố trí song song. Thích hợp lưu trữ linh kiện nhỏ, thiết bị viễn thông'
    },
    'K': {
        title: 'Phân khu Thùng gỗ (K)',
        subtitle: 'Wooden crate storage — Lưu trữ thiết bị đóng gói thùng gỗ',
        color: '#92400E',
        specs: [
            ['Bố cục', '5 hàng × 4 cột = 20 ô'],
            ['Kích thước ô', '1200mm × 1000mm'],
            ['Xếp chồng', '≤ 3 lớp'],
            ['Khoảng cách', '≥ 100mm giữa các thùng'],
            ['Phù hợp', 'Thiết bị lớn, trạm BTS, node cabinet'],
        ],
        items: [
            { id: 'K-A1', fill: '#92400E' }, { id: 'K-A2', fill: '#92400E' }, { id: 'K-A3', fill: '#78350F' }, { id: 'K-A4', fill: '#78350F' },
            { id: 'K-B1', fill: '#92400E' }, { id: 'K-B2', fill: '#92400E' }, { id: 'K-B3', fill: '#78350F' }, { id: 'K-B4', fill: '#78350F' },
            { id: 'K-C1', fill: '#A16207' }, { id: 'K-C2', fill: '#A16207' }, { id: 'K-C3', fill: '#92400E' }, { id: 'K-C4', fill: '#92400E' },
            { id: 'K-D1', fill: '#78350F' }, { id: 'K-D2', fill: '#78350F' }, { id: 'K-D3', fill: '#92400E' }, { id: 'K-D4', fill: '#92400E' },
            { id: 'K-E1', fill: '#A16207' }, { id: 'K-E2', fill: '#A16207' }, { id: 'K-E3', fill: '#78350F' }, { id: 'K-E4', fill: '#78350F' },
        ],
        aisleLabel: 'Lối đi chính',
        note: 'Thùng gỗ xếp thành lưới 5×4, lối đi chính rộng 2300mm cho xe nâng'
    },
    'J': {
        title: 'Phân khu Khu vực Pallet (J)',
        subtitle: 'Floor pallet storage — Lưu trữ hàng pallet dưới sàn',
        color: '#B45309',
        specs: [
            ['Bố cục', '3 hàng × 8 cột = 24 vị trí pallet'],
            ['Kích thước pallet', '1200mm × 800mm (EUR) / 1200mm × 1000mm'],
            ['Xếp chồng', '≤ 4 lớp (tùy trọng lượng)'],
            ['Khoảng cách', '≥ 100mm giữa các pallet'],
        ],
        items: [],
        aisleLabel: 'Lối đi xe nâng 2300mm',
        note: 'Lưu trữ hàng dưới sàn bằng pallet, phù hợp hàng nặng / cồng kềnh chưa qua kệ'
    },
    'C': {
        title: 'Khu vực Đóng gói (C)',
        subtitle: 'Packing & Outbound zone',
        color: '#EA580C',
        specs: [
            ['Chức năng', 'Đóng gói, dán nhãn, kiểm hàng trước xuất kho'],
            ['Thiết bị', 'Bàn đóng gói, máy quấn màng, máy in nhãn'],
            ['Công suất', '≥ 50 pallet/ngày'],
        ],
        items: [],
        aisleLabel: '',
        note: 'Khu vực kết nối trực tiếp với A(n) cửa Nhập-Xuất'
    },
    'E': {
        title: 'Phòng lạnh / Khu vực Nhiệt độ Kiểm soát (E)',
        subtitle: 'Temperature-controlled storage 20–30°C',
        color: '#0891B2',
        specs: [
            ['Nhiệt độ', '20–30°C (kiểm soát chặt)'],
            ['Độ ẩm', '40–60% RH'],
            ['Phù hợp', 'Card SIM, bo mạch điện tử, thiết bị nhạy cảm nhiệt'],
            ['Vách ngăn', 'Panel cách nhiệt 100mm'],
            ['Cửa', 'Cửa panel cách nhiệt có màn khí'],
        ],
        items: [],
        aisleLabel: '',
        note: 'Khu vực kiểm soát môi trường nghiêm ngặt, hạn chế ra vào'
    },
    'F': {
        title: 'Khu vực Làm việc (F)',
        subtitle: 'Work & administrative zone',
        color: '#16A34A',
        specs: [
            ['Nội dung', 'Văn phòng kho, khu kiểm tra hàng (QC), máy tính WMS'],
            ['Thiết bị', 'Máy scan barcode, máy in, bàn kiểm hàng'],
        ],
        items: [],
        aisleLabel: '',
        note: 'Khu làm việc của thủ kho, nhân viên xuất-nhập kho'
    },
    'L': {
        title: 'Khu để PTVT-CCDCL (L)',
        subtitle: 'Equipment & vehicle storage zone',
        color: '#DC2626',
        specs: [
            ['Nội dung', 'Phương tiện vận tải nội kho: xe nâng, xe tay, xe đẩy'],
            ['Yêu cầu', 'Sạc điện cho xe nâng điện, thông gió tốt'],
            ['Công cụ', 'Dụng cụ, thiết bị phụ trợ (CCDCL)'],
        ],
        items: [],
        aisleLabel: '',
        note: 'Tối thiểu 5 xe nâng, khu vực sạc có lưới điện riêng'
    },
    'M': {
        title: 'Khu vực Hàng Quá khổ / Đặc biệt (M)',
        subtitle: 'Oversized & special item zone',
        color: '#7C3AED',
        specs: [
            ['Phù hợp', 'Hàng có kích thước > 500mm, không vào kệ tiêu chuẩn'],
            ['Ví dụ', 'Anten, cuộn cáp, container module, trạm BTS'],
            ['Bố cục', 'Đặt sàn tự do, đánh số ô theo mảng'],
        ],
        items: [],
        aisleLabel: '',
        note: 'Khu vực linh hoạt, bổ sung phân khu theo nhu cầu dự án'
    },
    'A': {
        title: 'Cửa Nhập-Xuất (A)',
        subtitle: 'Inbound & Outbound gate zone',
        color: '#7C3AED',
        specs: [
            ['Số cửa', '≥ 2 cửa (nhập riêng, xuất riêng)'],
            ['Chiều rộng cửa', '≥ 3500mm / cửa'],
            ['Thiết bị', 'Cân điện tử, camera, đầu đọc barcode/RFID'],
        ],
        items: [],
        aisleLabel: '',
        note: 'Kiểm soát vào/ra nghiêm ngặt, ghi nhận WMS khi hàng qua cửa'
    },
    'B': {
        title: 'Khu vực Chờ Nhập-Xuất (B)',
        subtitle: 'Staging & buffer zone',
        color: '#1D4ED8',
        specs: [
            ['Chức năng', 'Tập kết hàng chờ nhập/xuất kho, kiểm đếm sơ bộ'],
            ['Sức chứa', '≥ 18 vị trí pallet (3 hàng × 6 cột)'],
            ['Khoảng cách', '≥ 100mm giữa các pallet'],
        ],
        items: [],
        aisleLabel: 'Lối đi xe nâng 2300mm',
        note: 'Hàng tập kết tại đây trước khi xác nhận lệnh nhập/xuất WMS'
    },
    'D': {
        title: 'Khu vực Dự phòng (D)',
        subtitle: 'Buffer / contingency zone',
        color: '#64748B',
        specs: [
            ['Chức năng', 'Linh hoạt theo nhu cầu, không bố trí kệ cố định'],
            ['Sử dụng', 'Hàng tồn đột xuất, mở rộng tạm thời, cách ly hàng lỗi'],
        ],
        items: [],
        aisleLabel: '',
        note: 'Khu dự phòng bắt buộc theo tiêu chuẩn Viettel, chiếm ≥ 10% diện tích'
    },
    'N': {
        title: 'Đường Giao thông Nội kho (N)',
        subtitle: 'Internal traffic corridor',
        color: '#64748B',
        specs: [
            ['Chiều rộng', '≥ 4000mm (xe nâng 2 chiều)'],
            ['Tải trọng sàn', '≥ 5 tấn/m²'],
            ['Vạch kẻ', 'Vạch vàng phân làn, biển báo tốc độ ≤ 10km/h'],
        ],
        items: [],
        aisleLabel: '',
        note: 'Đường nội kho chạy dọc toàn bộ chiều dài kho, kết nối tất cả phân khu'
    }
};

function getRackTooltip(zoneKey, itemIndex, isCell = false, cellLevel = 0, cellBay = 0, cellFill = 0) {
    const info = ZONE_DETAIL_INFO[zoneKey];
    if (!info) return { avgFill: 0, tooltip: '' };
    const item = info.items[itemIndex];
    if (!item) return { avgFill: 0, tooltip: '' };

    const levels = item.levels || 1;
    const bays = item.bays || 1;

    let tooltip = `${info.title} - ${item.id}\n`;
    tooltip += `Cấu trúc: ${levels} tầng x ${bays} khoang\n\n`;

    if (isCell) {
        let dim = "";
        let used = 0;
        let design = 0;
        let unit = "m³";
        if (zoneKey === 'G') {
            dim = "2.7m x 1.1m x 1.0m";
            design = 2.97;
            used = (cellFill * design).toFixed(2);
        } else if (zoneKey === 'H') {
            dim = "2.0m x 0.8m x 1.0m";
            design = 1.6;
            used = (cellFill * design).toFixed(2);
        } else if (zoneKey === 'I') {
            dim = "1.2m x 0.6m x 0.5m";
            design = 0.36;
            used = (cellFill * design).toFixed(2);
        } else {
            dim = "1.2m x 1.0m x 1.2m";
            design = 1.44;
            used = (cellFill * design).toFixed(2);
        }
        tooltip += `Khoang [Tầng ${cellLevel + 1} - Khoang ${cellBay + 1}]\n`;
        tooltip += `Kích thước: ${dim}\n`;
        tooltip += `Tỉ lệ lấp đầy: ${(cellFill * 100).toFixed(1)}% (Đã dùng: ${used}${unit} / Thiết kế: ${design}${unit})`;
        return { avgFill: cellFill, tooltip };
    }

    tooltip += `Tỉ lệ lấp đầy theo tầng:\n`;
    let totalFill = 0;
    for (let lv = 0; lv < levels; lv++) {
        let lvFill = 0;
        for (let b = 0; b < bays; b++) {
            lvFill += getMockFillRate(item.id + '-T' + lv + '-B' + b);
        }
        lvFill /= bays;
        tooltip += `- Tầng ${lv + 1}: ${(lvFill * 100).toFixed(1)}%\n`;
        totalFill += lvFill;
    }
    const avgFill = totalFill / levels;
    return { avgFill, tooltip };
}

function getZoneMetrics(zoneKey, wh) {
    const len = wh.len;
    const wid = wh.wid;
    const hgt = wh.hgt;

    let zLen = 0;
    let zWid = 0;
    let zHgt = hgt;

    switch (zoneKey) {
        case 'C':
            zLen = 20.0;
            zWid = 30.4;
            break;
        case 'B':
            zLen = 56.3;
            zWid = 25.0;
            break;
        case 'D':
            zLen = Math.max(0, len - 59.8);
            zWid = 25.0;
            break;
        case 'F':
            zLen = 62.6;
            zWid = Math.max(0, wid - 59.2);
            break;
        case 'J':
            zLen = 45.0;
            zWid = Math.max(0, wid - 59.2);
            break;
        case 'M':
            zLen = Math.max(0, len - 111.4);
            zWid = Math.max(0, wid - 59.2);
            break;
        default:
            const nkLen = len - 23.5;
            const insW = nkLen - 2;
            const insH = 26.4;

            if (zoneKey === 'G') {
                zLen = insW * 0.30;
                zWid = insH;
            } else if (zoneKey === 'H') {
                zLen = insW * 0.24;
                zWid = insH;
            } else if (zoneKey === 'I') {
                zLen = insW * 0.18;
                zWid = insH;
            } else if (zoneKey === 'K') {
                zLen = insW * 0.28;
                zWid = insH;
            } else {
                zLen = len;
                zWid = wid;
            }
            break;
    }

    zLen = Math.round(zLen * 10) / 10;
    zWid = Math.round(zWid * 10) / 10;
    zHgt = Math.round(zHgt * 10) / 10;

    const area = Math.round(zLen * zWid * 10) / 10;
    const volume = Math.round(area * zHgt * 10) / 10;

    let fillRate = 0;
    if (zoneKey === 'G' || zoneKey === 'H' || zoneKey === 'I') {
        const info = ZONE_DETAIL_INFO[zoneKey];
        if (info && info.items) {
            let total = 0;
            info.items.forEach((item, idx) => {
                total += getRackTooltip(zoneKey, idx).avgFill;
            });
            fillRate = total / info.items.length;
        } else {
            fillRate = getMockFillRate(zoneKey);
        }
    } else if (zoneKey === 'K') {
        const info = ZONE_DETAIL_INFO[zoneKey];
        if (info && info.items) {
            let total = 0;
            info.items.forEach(item => {
                total += getMockFillRate(item.id);
            });
            fillRate = total / info.items.length;
        } else {
            fillRate = getMockFillRate(zoneKey);
        }
    } else if (zoneKey === 'J') {
        let total = 0;
        let count = 0;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 8; c++) {
                total += getMockFillRate('J-' + String.fromCharCode(65 + r) + (c + 1));
                count++;
            }
        }
        fillRate = total / count;
    } else {
        fillRate = getMockFillRate(zoneKey);
    }

    return {
        length: zLen,
        width: zWid,
        height: zHgt,
        area: area,
        volume: volume,
        fillRate: fillRate
    };
}

function openZoneDetail(zoneKey) {
    const info = ZONE_DETAIL_INFO[zoneKey];
    if (!info) return;
    const ov = document.getElementById('zone-detail-overlay');
    const wh = WAREHOUSES[selectedWarehouseId];
    const metrics = getZoneMetrics(zoneKey, wh);
    const col = getFillColor(metrics.fillRate);

    const specs = [
        ['Dài x rộng x cao', `${metrics.length}m x ${metrics.width}m x ${metrics.height}m`],
        ['Diện tích', `${metrics.area} m²`],
        ['Thể tích', `${metrics.volume} m³`],
        ['Tỉ lệ lấp đầy hiện tại', `<span style="font-weight:700;color:${col}">${(metrics.fillRate * 100).toFixed(1)}%</span>`]
    ];

    const specsHtml = specs.map(([k, v]) =>
        `<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px">
                    <span style="color:var(--text2);min-width:140px;flex-shrink:0">${k}</span>
                    <span style="font-weight:600;color:var(--text);text-align:right">${v}</span>
                </div>`
    ).join('');

    document.getElementById('zd-title').textContent = info.title;
    document.getElementById('zd-subtitle').textContent = info.subtitle;
    document.getElementById('zd-color-bar').style.background = col;
    document.getElementById('zd-specs').innerHTML = specsHtml;
    document.getElementById('zd-note').textContent = info.note;
    document.getElementById('zd-svg-container').innerHTML = drawZoneDetailSVG(zoneKey, 560, 260);

    ov.style.display = 'flex';
    setTimeout(() => ov.classList.add('active'), 10);
}

function closeZoneDetail() {
    const ov = document.getElementById('zone-detail-overlay');
    ov.classList.remove('active');
    setTimeout(() => { ov.style.display = 'none'; }, 200);
}

function handleMapClick(event, W, H) {
    const target = event.target.closest('[data-zone]');
    if (target) {
        let zoneKey = target.getAttribute('data-zone');
        if (zoneKey) {
            if (zoneKey.startsWith('G')) zoneKey = 'G';
            else if (zoneKey.startsWith('I')) zoneKey = 'I';
            else if (zoneKey.startsWith('D')) zoneKey = 'D';
            else if (zoneKey.startsWith('A') && zoneKey !== 'A' && !zoneKey.startsWith('A0')) zoneKey = 'G';
            else if (zoneKey.startsWith('B') && zoneKey !== 'B') {
                if (zoneKey === 'B2') zoneKey = 'G';
                else zoneKey = 'B';
            }
            else if (zoneKey.startsWith('L') && zoneKey !== 'L') zoneKey = 'L';
            else if (zoneKey === 'F01') zoneKey = 'F';

            if (ZONE_DETAIL_INFO[zoneKey]) openZoneDetail(zoneKey);
        }
    }
}

function drawZoneDetailSVG(zoneKey, W, H) {
    const info = ZONE_DETAIL_INFO[zoneKey];
    if (!info) return '';
    const defs = `<defs>
                <pattern id="zd-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="#FAFAFA"/>
                    <path d="M20,0 L0,0 0,20" fill="none" stroke="#E8ECEF" stroke-width="0.4"/>
                </pattern>
                <pattern id="zd-aisle" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <rect width="8" height="8" fill="rgba(245,158,11,0.07)"/>
                    <path d="M0,8 L8,0" stroke="rgba(217,119,6,0.3)" stroke-width="0.8"/>
                </pattern>
            </defs>`;

    let svg = `<svg viewBox="-20 -20 ${W + 70} ${H + 50}" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:8px;border:1px solid var(--border)">
                ${defs}
                <rect x="0" y="0" width="${W}" height="${H}" fill="url(#zd-grid)" stroke="#CBD5E1" stroke-width="1"/>`;

    const zdDimFs = 8.5;
    const zdArrow = 3.5;
    const zdCol = '#334155';
    const zdDimH = (x1, x2, y, label, col) => {
        col = col || zdCol;
        const lx = (x1 + x2) / 2;
        let d = '';
        d += `<line x1="${x1}" y1="${y - 6}" x2="${x1}" y2="${y + 6}" stroke="${col}" stroke-width="0.7" pointer-events="none"/>`;
        d += `<line x1="${x2}" y1="${y - 6}" x2="${x2}" y2="${y + 6}" stroke="${col}" stroke-width="0.7" pointer-events="none"/>`;
        d += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${col}" stroke-width="0.8" pointer-events="none"/>`;
        d += `<polygon points="${x1},${y} ${x1 + zdArrow},${y - 1.5} ${x1 + zdArrow},${y + 1.5}" fill="${col}" pointer-events="none"/>`;
        d += `<polygon points="${x2},${y} ${x2 - zdArrow},${y - 1.5} ${x2 - zdArrow},${y + 1.5}" fill="${col}" pointer-events="none"/>`;
        const lw = label.length * zdDimFs * 0.6 + 6;
        d += `<rect x="${lx - lw / 2}" y="${y - zdDimFs / 2 - 2}" width="${lw}" height="${zdDimFs + 4}" fill="rgba(255,255,255,0.92)" rx="2" pointer-events="none"/>`;
        d += `<text x="${lx}" y="${y + zdDimFs / 2}" fill="${col}" font-size="${zdDimFs}" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-weight="700" pointer-events="none">${label}</text>`;
        return d;
    };
    const zdDimV = (x, y1, y2, label, col) => {
        col = col || zdCol;
        const ly = (y1 + y2) / 2;
        let d = '';
        d += `<line x1="${x - 6}" y1="${y1}" x2="${x + 6}" y2="${y1}" stroke="${col}" stroke-width="0.7" pointer-events="none"/>`;
        d += `<line x1="${x - 6}" y1="${y2}" x2="${x + 6}" y2="${y2}" stroke="${col}" stroke-width="0.7" pointer-events="none"/>`;
        d += `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${col}" stroke-width="0.8" pointer-events="none"/>`;
        d += `<polygon points="${x},${y1} ${x - 1.5},${y1 + zdArrow} ${x + 1.5},${y1 + zdArrow}" fill="${col}" pointer-events="none"/>`;
        d += `<polygon points="${x},${y2} ${x - 1.5},${y2 - zdArrow} ${x + 1.5},${y2 - zdArrow}" fill="${col}" pointer-events="none"/>`;
        const lw = label.length * zdDimFs * 0.6 + 6;
        d += `<rect x="${x - lw / 2}" y="${ly - zdDimFs / 2 - 2}" width="${lw}" height="${zdDimFs + 4}" fill="rgba(255,255,255,0.92)" rx="2" pointer-events="none"/>`;
        d += `<text x="${x}" y="${ly + zdDimFs / 2}" fill="${col}" font-size="${zdDimFs}" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-weight="700" pointer-events="none">${label}</text>`;
        return d;
    };

    if (zoneKey === 'G' || zoneKey === 'H' || zoneKey === 'I') {
        const items = info.items;
        const cols = items.length;
        const aisleH = H * 0.12;
        const rackAreaH = (H - aisleH) / 2;
        const colW = W / cols;
        const rackW = colW * 0.72;
        const rackOffX = (colW - rackW) / 2;

        svg += `<rect x="0" y="${rackAreaH}" width="${W}" height="${aisleH}" fill="url(#zd-aisle)" stroke="rgba(217,119,6,0.4)" stroke-width="0.5" stroke-dasharray="6,3"/>`;
        svg += `<text x="${W / 2}" y="${rackAreaH + aisleH / 2 + 3}" fill="#92400E" font-size="9" text-anchor="middle" font-family="Arial,sans-serif" font-weight="600">${info.aisleLabel}</text>`;

        items.forEach((item, i) => {
            const x = i * colW + rackOffX;
            const levels = item.levels || 4;
            const bays = item.bays || 4;
            const cellW = rackW / bays;
            const cellH = rackAreaH / levels;

            for (let lv = 0; lv < levels; lv++) {
                for (let b = 0; b < bays; b++) {
                    const cx = x + b * cellW + 0.5;
                    const cy = lv * cellH + 0.5;
                    const opacity = 1 - lv * 0.12;
                    const fill = getMockFillRate(item.id + '-T' + lv + '-B' + b);
                    const tooltip = getRackTooltip(zoneKey, i, true, lv, b, fill).tooltip;
                    svg += `<g><title>${tooltip}</title><rect x="${cx}" y="${cy}" width="${cellW - 1}" height="${cellH - 1}" fill="${getFillColor(fill)}" opacity="${opacity}" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/></g>`;
                }
            }
            svg += `<text x="${x + rackW / 2}" y="${rackAreaH - 4}" fill="#333333" font-size="7.5" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-weight="700">${item.id}</text>`;

            const botY = rackAreaH + aisleH;
            for (let lv = 0; lv < levels; lv++) {
                for (let b = 0; b < bays; b++) {
                    const cx = x + b * cellW + 0.5;
                    const cy = botY + lv * cellH + 0.5;
                    const opacity = 1 - lv * 0.12;
                    const fill = getMockFillRate(item.id + '-BT' + lv + '-B' + b);
                    const tooltip = getRackTooltip(zoneKey, i, true, lv, b, fill).tooltip;
                    svg += `<g><title>${tooltip}</title><rect x="${cx}" y="${cy}" width="${cellW - 1}" height="${cellH - 1}" fill="${getFillColor(fill)}" opacity="${opacity}" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/></g>`;
                }
            }
            svg += `<text x="${x + rackW / 2}" y="${H - 4}" fill="#333333" font-size="7.5" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-weight="700">${item.id}</text>`;
        });

        for (let i = 1; i < cols; i++) {
            svg += `<line x1="${i * colW}" y1="0" x2="${i * colW}" y2="${H}" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-dasharray="3,2"/>`;
        }

        const aisleLabel2 = zoneKey === 'G' ? '2300mm' : zoneKey === 'H' ? '1200mm' : '900mm';
        const rackWLabel = zoneKey === 'G' ? '2.7m' : zoneKey === 'H' ? '2.0m' : '1.2m';
        const rackDLabel = zoneKey === 'G' ? '1.1m' : zoneKey === 'H' ? '0.8m' : '0.6m';
        svg += zdDimV(W + 12, rackAreaH, rackAreaH + aisleH, aisleLabel2, zoneKey === 'G' ? '#1D4ED8' : '#EE0033');
        svg += zdDimV(W + 12, 0, rackAreaH, `${rackDLabel}×${items[0]?.levels || 4}T`, '#64748B');
        svg += zdDimV(W + 12, rackAreaH + aisleH, H, `${rackDLabel}×${items[0]?.levels || 4}T`, '#64748B');
        svg += zdDimH(0, colW, H + 12, rackWLabel, '#475569');
        svg += zdDimH(0, W, H + 24, `${cols} dãy × ${rackWLabel}`, '#1E3A8A');
        svg += zdDimH(0, colW * 0.14, rackAreaH / 2, '≥0.1m', '#94A3B8');

    } else if (zoneKey === 'K') {
        const rows = 5, cols = 4;
        const pad = 12;
        const aisleW = W * 0.12;
        const cellW = (W - aisleW - pad * 2) / cols;
        const cellH = (H - pad * 2) / rows;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = pad + aisleW / 2 + c * cellW + 3;
                const y = pad + r * cellH + 3;
                const item = info.items[r * cols + c];
                const fill = getMockFillRate(item.id);
                const designK = 1.44;
                const usedK = (fill * designK).toFixed(2);
                const tooltip = `Thùng gỗ: ${item.id}\nKích thước: 1.2m x 1.0m x 1.2m\nTỉ lệ lấp đầy: ${(fill * 100).toFixed(1)}% (Đã dùng: ${usedK}m³ / Thiết kế: ${designK}m³)`;
                svg += `<g><title>${tooltip}</title><rect x="${x}" y="${y}" width="${cellW - 6}" height="${cellH - 6}" fill="${getFillColor(fill)}" stroke="#5C300A" stroke-width="1" rx="2"/>`;
                svg += `<text x="${x + (cellW - 6) / 2}" y="${y + (cellH - 6) / 2 + 4}" fill="#FEF3C7" font-size="8" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-weight="700">${item.id}</text>`;
                for (let g = 0; g < 3; g++) {
                    const gy = y + 8 + g * ((cellH - 12) / 3);
                    svg += `<line x1="${x + 4}" y1="${gy}" x2="${x + cellW - 10}" y2="${gy}" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>`;
                }
                svg += `</g>`;
            }
        }
        const aisleX = pad;
        svg += `<rect x="${aisleX}" y="${pad}" width="${aisleW * 0.6}" height="${H - pad * 2}" fill="url(#zd-aisle)" stroke="rgba(217,119,6,0.5)" stroke-width="0.5" stroke-dasharray="5,3"/>`;
        svg += `<text x="${aisleX + aisleW * 0.3}" y="${H / 2}" fill="#92400E" font-size="7" text-anchor="middle" font-family="Arial" transform="rotate(-90, ${aisleX + aisleW * 0.3}, ${H / 2})">Lối đi</text>`;
        svg += zdDimH(pad + aisleW * 0.6, pad + aisleW * 0.6 + cellW, H + 14, '1200mm', '#92400E');
        svg += zdDimV(W + 14, pad, pad + cellH, '1000mm', '#92400E');
        svg += zdDimH(pad, pad + aisleW * 0.6, H + 14, 'lối đi', '#D97706');
        svg += zdDimH(0, W, H + 26, `${cols}×${rows} = 20 ô`, '#1E3A8A');
        svg += zdDimV(-14, pad, H - pad, `5 hàng`, '#1E3A8A');
        svg += zdDimH(pad + aisleW / 2 + 3, pad + aisleW / 2 + 3 + (cellW - 6), pad - 6, '≥100mm', '#B45309');

    } else if (zoneKey === 'J') {
        const rows = 3, cols = 8, pad = 14, aisleH = H * 0.15;
        const usableH = H - pad * 2 - aisleH;
        const cellW = (W - pad * 2) / cols;
        const cellH = usableH / rows;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = pad + c * cellW + 4;
                const y = pad + r * cellH + 4;
                const colLtrJ = String.fromCharCode(65 + r);
                const pId = 'J-' + colLtrJ + (c + 1);
                const fill = getMockFillRate(pId);
                const designJ = 1.8;
                const usedJ = (fill * designJ).toFixed(2);
                const tooltip = `Vị trí Pallet: ${pId}\nKích thước: 1.2m x 1.0m x 1.5m\nTỉ lệ lấp đầy: ${(fill * 100).toFixed(1)}% (Đã dùng: ${usedJ}m³ / Thiết kế: ${designJ}m³)`;
                svg += `<g><title>${tooltip}</title><rect x="${x}" y="${y}" width="${cellW - 8}" height="${cellH - 8}" fill="${getFillColor(fill)}" stroke="#9A3412" stroke-width="1" rx="2"/>`;
                svg += `<line x1="${x + (cellW - 8) * 0.33}" y1="${y + 2}" x2="${x + (cellW - 8) * 0.33}" y2="${y + cellH - 10}" stroke="#9A3412" stroke-width="0.8"/>`;
                svg += `<line x1="${x + (cellW - 8) * 0.66}" y1="${y + 2}" x2="${x + (cellW - 8) * 0.66}" y2="${y + cellH - 10}" stroke="#9A3412" stroke-width="0.8"/>`;
                const colLtr = String.fromCharCode(65 + r);
                svg += `<text x="${x + (cellW - 8) / 2}" y="${y + (cellH - 8) / 2 + 3}" fill="#7C2D12" font-size="7.5" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-weight="700">${colLtr}${c + 1}</text></g>`;
            }
        }
        const aisleY = H - pad - aisleH;
        svg += `<rect x="${pad}" y="${aisleY}" width="${W - pad * 2}" height="${aisleH}" fill="url(#zd-aisle)" stroke="rgba(217,119,6,0.4)" stroke-width="0.5" stroke-dasharray="6,3"/>`;
        svg += `<text x="${W / 2}" y="${aisleY + aisleH / 2 + 3}" fill="#92400E" font-size="8" text-anchor="middle" font-family="Arial">Lối đi xe nâng 2300mm</text>`;
        svg += zdDimH(pad, pad + cellW, H + 14, '1200mm', '#B45309');
        svg += zdDimV(W + 14, pad, pad + cellH, '800mm', '#B45309');
        svg += zdDimH(pad, W - pad, H + 26, `${cols} cột pallet`, '#1E3A8A');
        svg += zdDimV(-14, pad, pad + usableH, `${rows} hàng`, '#1E3A8A');
        svg += zdDimV(W + 28, aisleY, aisleY + aisleH, '2300mm', '#D97706');
        svg += zdDimH(pad + 4, pad + 4 + (cellW - 8), -8, '≥100mm', '#B45309');
    } else {
        const zd = ZONE_DISPLAY[zoneKey] || { fill: '#F1F5F9', stroke: '#94A3B8' };
        svg += `<rect x="10" y="10" width="${W - 20}" height="${H - 20}" fill="${zd.fill}" stroke="${zd.stroke}" stroke-width="2" rx="8" opacity="0.5"/>`;
        svg += `<text x="${W / 2}" y="${H / 2 - 10}" fill="${zd.stroke}" font-size="14" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700">${ZONE_DISPLAY[zoneKey]?.label || zoneKey}</text>`;
        svg += `<text x="${W / 2}" y="${H / 2 + 10}" fill="#64748B" font-size="9" text-anchor="middle" font-family="Arial,sans-serif">${info.subtitle}</text>`;
    }

    svg += '</svg>';
    return svg;
}

function getFillColorForZoneType(zoneType, rate) {
    const L = Math.round(90 - rate * 55);
    if (['G', 'H', 'I'].includes(zoneType)) {
        return `hsl(220, 80%, ${L}%)`;
    } else if (zoneType === 'J') {
        return `hsl(150, 75%, ${L}%)`;
    } else if (zoneType === 'K') {
        return `hsl(275, 70%, ${L}%)`;
    } else if (zoneType === 'B' || zoneType === 'C') {
        return `hsl(210, 40%, ${L}%)`;
    }
    return `hsl(200, 15%, ${L}%)`;
}

function getTextColorForRate(rate) {
    return rate > 0.5 ? '#FFFFFF' : '#0F172A';
}

function renderSimpleMap(wh) {
    if (wh.id === 'KHO-HN-03') {
        // ─── SPECIAL LAYOUT FOR KHO K2 ───
        const VW = 1000, VH = Math.round(1000 * wh.wid / wh.len);
        const sc = VW / wh.len;
        const Xv = m => m * sc, Yv = m => m * sc;
        const pccc = Xv(1.6);
        const ix = pccc, iy = pccc;
        const iW2 = VW - 2 * pccc;
        const iH2 = VH - 2 * pccc;
        const fsSv = Math.max(5, VW / 160);
        const fsSmall = Math.max(3.5, VW / 220);
        const doorH = Yv(3.5), doorW = Xv(4.5);
        const doorThick = 2.5;
        const pcccFs2 = Math.max(4, VW / 230);

        const cFill = (seed) => {
            const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
            return 0.08 + 0.84 * Math.abs(x - Math.floor(x));
        };

        const rackCellFill = (rate) => {
            const l = Math.round(92 - rate * 54);
            return `hsl(122,48%,${l}%)`;
        };

        const orangeCellFill = (rate) => {
            const l = Math.round(95 - rate * 35);
            return `hsl(30,90%,${l}%)`;
        };

        const mono = "'JetBrains Mono',monospace";
        const fsBay = Math.max(3, VW / 250);

        const drawRackZone = (id, rx, ry, rw, rh, numBays, numLevels, numRackRows, seed0, prefix) => {
            if (rw <= 0 || rh <= 0) return '';
            prefix = prefix || id;
            const AISLE_FRAC = 0.12;
            const numAisles = numRackRows - 1;
            const usedForAisles = numAisles * AISLE_FRAC;
            const rackRowH = (rh * (1 - usedForAisles)) / numRackRows;
            const aisleH = numAisles > 0 ? (rh * usedForAisles) / numAisles : 0;
            const gap = 0.7;

            const buildTooltip = (zid, bay, seed) => {
                let tip = `${zid} — Khoang ${bay + 1}\nTỉ lệ lấp đầy: `;
                let total = 0;
                const perLevel = [];
                for (let lv = 0; lv < numLevels; lv++) {
                    const r = cFill(seed + lv * 97 + bay * 31);
                    total += r;
                    perLevel.push(Math.round(r * 100));
                }
                const avg = total / numLevels;
                tip += Math.round(avg * 100) + '%\n';
                perLevel.forEach((p, i) => { tip += `Tầng ${i + 1}: ${p}%\n`; });
                return tip.trim();
            };

            let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
            d += `<rect x="${rx.toFixed(1)}" y="${ry.toFixed(1)}" width="${rw.toFixed(1)}" height="${rh.toFixed(1)}" fill="#FFFFFF" stroke="#81C784" stroke-width="1.2" stroke-dasharray="5,3" rx="2"/>`;
            const cellW = rw / numBays;
            let curY = ry;
            let totalFill = 0, totalCount = 0;
            const bayFs = Math.min(fsBay, Math.max(2.5, cellW * 0.42));

            for (let row = 0; row < numRackRows; row++) {
                const seed1 = seed0 + row * 500;
                d += `<rect x="${rx.toFixed(1)}" y="${curY.toFixed(1)}" width="${rw.toFixed(1)}" height="${rackRowH.toFixed(1)}" fill="none" stroke="rgba(100,160,100,0.45)" stroke-width="0.6" rx="1"/>`;
                for (let bay = 0; bay < numBays; bay++) {
                    const tip = buildTooltip(id, bay, seed1);
                    let bayTotalRate = 0;
                    for (let lv = 0; lv < numLevels; lv++) {
                        bayTotalRate += cFill(seed1 + lv * 97 + bay * 31);
                    }
                    const avgRate = bayTotalRate / numLevels;
                    totalFill += avgRate; totalCount++;
                    const cx = rx + bay * cellW + gap / 2;
                    const cy = curY + gap / 2;
                    d += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${(cellW - gap).toFixed(1)}" height="${(rackRowH - gap).toFixed(1)}" fill="${rackCellFill(avgRate)}" stroke="rgba(130,180,130,0.35)" stroke-width="0.3" rx="0.4"><title>${tip}</title></rect>`;
                    if (bay > 0) {
                        d += `<line x1="${(rx + bay * cellW).toFixed(1)}" y1="${curY.toFixed(1)}" x2="${(rx + bay * cellW).toFixed(1)}" y2="${(curY + rackRowH).toFixed(1)}" stroke="rgba(100,150,100,0.3)" stroke-width="0.4"/>`;
                    }
                }
                if (rackRowH > 5) {
                    d += `<text x="${(rx + cellW * 0.5).toFixed(1)}" y="${(curY - 1.2).toFixed(1)}" fill="#2E7D32" font-size="${bayFs}" text-anchor="middle" font-family="${mono}" font-weight="600" pointer-events="none">${prefix}.${row + 1}.1</text>`;
                    if (numBays > 1) {
                        d += `<text x="${(rx + cellW * (numBays - 0.5)).toFixed(1)}" y="${(curY - 1.2).toFixed(1)}" fill="#2E7D32" font-size="${bayFs}" text-anchor="middle" font-family="${mono}" font-weight="600" pointer-events="none">${prefix}.${row + 1}.${numBays}</text>`;
                    }
                }
                curY += rackRowH;
                if (row < numRackRows - 1 && aisleH > 0) {
                    d += `<rect x="${rx.toFixed(1)}" y="${curY.toFixed(1)}" width="${rw.toFixed(1)}" height="${aisleH.toFixed(1)}" fill="#FFFFFF" stroke="none"/>`;
                    d += `<line x1="${(rx + 4).toFixed(1)}" y1="${(curY + aisleH / 2).toFixed(1)}" x2="${(rx + rw - 4).toFixed(1)}" y2="${(curY + aisleH / 2).toFixed(1)}" stroke="rgba(140,140,140,0.35)" stroke-width="0.5" stroke-dasharray="4,3"/>`;
                    curY += aisleH;
                }
            }

            const avgZ = totalCount > 0 ? totalFill / totalCount : 0;
            const pctZ = Math.round(avgZ * 100);
            const idFs = Math.max(fsSv, fsSv);
            const idBgW = Math.round(idFs * id.length * 0.58 + 10);
            d += `<rect x="${(rx + rw / 2 - idBgW / 2).toFixed(1)}" y="${(ry + rh / 2 - idFs / 2 - 3).toFixed(1)}" width="${idBgW.toFixed(1)}" height="${(idFs + 6).toFixed(1)}" fill="rgba(46,125,50,0.78)" rx="3" pointer-events="none"/>`;
            d += `<text x="${(rx + rw / 2).toFixed(1)}" y="${(ry + rh / 2 + idFs * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${idFs}" text-anchor="middle" font-weight="800" font-family="${mono}" pointer-events="none">${id}</text>`;
            const pctTxtZ = pctZ + '%';
            const pWZ = pctTxtZ.length * fsSmall * 0.6 + 5;
            d += `<rect x="${(rx + rw - pWZ - 2).toFixed(1)}" y="${(ry + 2).toFixed(1)}" width="${pWZ.toFixed(1)}" height="${(fsSmall + 3.5).toFixed(1)}" fill="rgba(27,94,32,0.65)" rx="2" pointer-events="none"/>`;
            d += `<text x="${(rx + rw - pWZ / 2 - 2).toFixed(1)}" y="${(ry + fsSmall + 3).toFixed(1)}" fill="#FFFFFF" font-size="${fsSmall}" text-anchor="middle" font-weight="700" font-family="${mono}" pointer-events="none">${pctTxtZ}</text>`;
            d += `</g>`;
            return d;
        };

        const drawFuncZone = (id, zx, zy, zw, zh, bgFill, stroke, label, opts = {}) => {
            if (zw <= 0 || zh <= 0) return '';
            let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
            d += `<rect x="${zx.toFixed(1)}" y="${zy.toFixed(1)}" width="${zw.toFixed(1)}" height="${zh.toFixed(1)}" fill="${bgFill}" stroke="${stroke}" stroke-width="${opts.sw || 1.2}" stroke-dasharray="5,3" rx="2"/>`;
            if (label && zw > 20 && zh > fsSv * 2.5) {
                d += `<text x="${(zx + zw / 2).toFixed(1)}" y="${(zy + zh / 2 + fsSv * 0.35 + fsSv * 0.7).toFixed(1)}" fill="${opts.tc || '#546E7A'}" font-size="${fsSv * 0.72}" text-anchor="middle" font-weight="400" pointer-events="none" opacity="0.7">${label}</text>`;
            }
            const idFs3 = Math.max(fsSv, 7);
            const idBg3 = Math.round(idFs3 * id.length * 0.58 + 10);
            d += `<rect x="${(zx + zw / 2 - idBg3 / 2).toFixed(1)}" y="${(zy + zh / 2 - idFs3 / 2 - 3).toFixed(1)}" width="${idBg3.toFixed(1)}" height="${(idFs3 + 5).toFixed(1)}" fill="rgba(0,0,0,0.30)" rx="3" pointer-events="none"/>`;
            d += `<text x="${(zx + zw / 2).toFixed(1)}" y="${(zy + zh / 2 + idFs3 * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${idFs3}" text-anchor="middle" font-weight="800" font-family="${mono}" pointer-events="none">${id}</text>`;
            d += `</g>`;
            return d;
        };

        const drawOrangeZone = (id, zx, zy, zw, zh, seed0, label) => {
            if (zw <= 0 || zh <= 0) return '';
            const rate = cFill(seed0);
            const fill = orangeCellFill(rate);
            return drawFuncZone(id, zx, zy, zw, zh, fill, '#E69138', label, { tc: '#7F4F1E' });
        };

        const drawMZone = (id, zx, zy, zw, zh, cols, rows, seed0) => {
            let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
            d += `<rect x="${zx.toFixed(1)}" y="${zy.toFixed(1)}" width="${zw.toFixed(1)}" height="${zh.toFixed(1)}" fill="#FFFFFF" stroke="#E69138" stroke-width="1.2" stroke-dasharray="5,3" rx="2"/>`;
            const cellW = zw / cols, cellH = zh / rows;
            const gap = 0.8;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const rate = cFill(seed0 + r * 37 + c * 13);
                    const cx = zx + c * cellW + gap / 2;
                    const cy = zy + r * cellH + gap / 2;
                    const fill = orangeCellFill(rate);
                    d += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${(cellW - gap).toFixed(1)}" height="${(cellH - gap).toFixed(1)}" fill="${fill}" stroke="rgba(230,145,56,0.35)" stroke-width="0.5" rx="1"/>`;
                }
            }
            const idFs = Math.max(fsSv, 7);
            const idBg = Math.round(idFs * id.length * 0.58 + 10);
            d += `<rect x="${(zx + zw / 2 - idBg / 2).toFixed(1)}" y="${(zy + zh / 2 - idFs / 2 - 3).toFixed(1)}" width="${idBg.toFixed(1)}" height="${(idFs + 5).toFixed(1)}" fill="rgba(230,145,56,0.85)" rx="3" pointer-events="none"/>`;
            d += `<text x="${(zx + zw / 2).toFixed(1)}" y="${(zy + zh / 2 + idFs * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${idFs}" text-anchor="middle" font-weight="800" font-family="${mono}" pointer-events="none">${id}</text>`;
            d += `</g>`;
            return d;
        };

        const drawVerticalPalletZone = (id, px, py, pw, ph, numPallets, seed0) => {
            let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
            d += `<rect x="${px.toFixed(1)}" y="${py.toFixed(1)}" width="${pw.toFixed(1)}" height="${ph.toFixed(1)}" fill="#FFFFFF" stroke="#E69138" stroke-width="1.2" stroke-dasharray="5,3" rx="2"/>`;
            const cellH = ph / numPallets;
            const gap = 0.8;
            let totalFill = 0;
            for (let i = 0; i < numPallets; i++) {
                const rate = cFill(seed0 + i * 83);
                totalFill += rate;
                const cy = py + i * cellH + gap / 2;
                const cx = px + gap / 2;
                d += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${(pw - gap).toFixed(1)}" height="${(cellH - gap).toFixed(1)}" fill="${orangeCellFill(rate)}" stroke="rgba(230,140,40,0.3)" stroke-width="0.4" rx="0.5"/>`;
            }
            const avgZ = totalFill / numPallets;
            const pctZ = Math.round(avgZ * 100);
            const idFs = Math.max(fsSv - 1, 6);
            const idBgW = Math.round(idFs * id.length * 0.58 + 8);
            d += `<rect x="${(px + pw / 2 - idBgW / 2).toFixed(1)}" y="${(py + ph / 2 - idFs / 2 - 2).toFixed(1)}" width="${idBgW.toFixed(1)}" height="${(idFs + 4).toFixed(1)}" fill="rgba(230,145,56,0.85)" rx="2" pointer-events="none"/>`;
            d += `<text x="${(px + pw / 2).toFixed(1)}" y="${(py + ph / 2 + idFs * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${idFs}" text-anchor="middle" font-weight="800" font-family="${mono}" pointer-events="none">${id}</text>`;
            d += `</g>`;
            return d;
        };

        const drawOfficeZone = (id, ox, oy, ow, oh) => {
            let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
            d += `<rect x="${ox.toFixed(1)}" y="${oy.toFixed(1)}" width="${ow.toFixed(1)}" height="${oh.toFixed(1)}" fill="#FFFFFF" stroke="#90A4AE" stroke-width="1.2" stroke-dasharray="5,3" rx="2"/>`;
            const wLeft = ow * 0.33;
            const xDiv = ox + wLeft;
            d += `<line x1="${xDiv.toFixed(1)}" y1="${oy.toFixed(1)}" x2="${xDiv.toFixed(1)}" y2="${(oy + oh).toFixed(1)}" stroke="#B0BEC5" stroke-width="0.8"/>`;
            const hCT = oh * 0.45;
            const yDivL = oy + hCT;
            d += `<line x1="${ox.toFixed(1)}" y1="${yDivL.toFixed(1)}" x2="${xDiv.toFixed(1)}" y2="${yDivL.toFixed(1)}" stroke="#B0BEC5" stroke-width="0.8"/>`;
            const yDivWC = yDivL + (oh - hCT) * 0.5;
            d += `<line x1="${ox.toFixed(1)}" y1="${yDivWC.toFixed(1)}" x2="${xDiv.toFixed(1)}" y2="${yDivWC.toFixed(1)}" stroke="#B0BEC5" stroke-width="0.8"/>`;
            const labelFs = Math.max(4.2, ow / 26);
            const boldFs = labelFs * 1.05;
            d += `<text x="${(ox + wLeft / 2).toFixed(1)}" y="${(oy + hCT / 2 + 2.5).toFixed(1)}" fill="#455A64" font-size="${labelFs.toFixed(1)}" text-anchor="middle" font-weight="600" font-family="Arial">C.Thang</text>`;
            d += `<text x="${(ox + wLeft / 2).toFixed(1)}" y="${(yDivL + (yDivWC - yDivL) / 2 + 2.5).toFixed(1)}" fill="#455A64" font-size="${labelFs.toFixed(1)}" text-anchor="middle" font-weight="600" font-family="Arial">WC Nam</text>`;
            d += `<text x="${(ox + wLeft / 2).toFixed(1)}" y="${(yDivWC + (oy + oh - yDivWC) / 2 + 2.5).toFixed(1)}" fill="#455A64" font-size="${labelFs.toFixed(1)}" text-anchor="middle" font-weight="600" font-family="Arial">WC Nữ</text>`;
            const xRightMid = xDiv + (ow - wLeft) / 2;
            d += `<text x="${xRightMid.toFixed(1)}" y="${(oy + oh / 2 - 4.5).toFixed(1)}" fill="#37474F" font-size="${boldFs.toFixed(1)}" text-anchor="middle" font-weight="700" font-family="Arial">T1: Kho mát</text>`;
            d += `<text x="${xRightMid.toFixed(1)}" y="${(oy + oh / 2 + 7.5).toFixed(1)}" fill="#455A64" font-size="${labelFs.toFixed(1)}" text-anchor="middle" font-weight="600" font-family="Arial">T2: P.Làm việc</text>`;
            d += `</g>`;
            return d;
        };

        const drawDoor = (id, dx, dy, dir = 'H') => {
            const dw = dir === 'H' ? doorW : doorThick;
            const dh = dir === 'H' ? doorThick : doorH;
            let labelX = (dx + dw / 2).toFixed(1);
            let labelY = (dy + dh / 2 + fsSmall * 0.38).toFixed(1);
            if (dir === 'V') {
                if (dx < 10) {
                    labelX = (dx + dw + 8).toFixed(1);
                } else {
                    labelX = (dx - 8).toFixed(1);
                }
            } else {
                labelY = (dy - 4).toFixed(1);
            }
            return `<rect x="${dx.toFixed(1)}" y="${dy.toFixed(1)}" width="${dw.toFixed(1)}" height="${dh.toFixed(1)}" fill="#FF8F00" rx="0.5"/>
<text x="${labelX}" y="${labelY}" fill="#D97706" font-size="${fsSmall * 1.1}" text-anchor="middle" font-weight="800" font-family="${mono}">${id}</text>`;
        };

        const yM = iy;
        const hM = 50;
        const wM = Xv(16.5);
        const wG3 = Xv(22.0);
        const hRow = 20;

        const yG3_1 = iy + hM + 6;
        const yG3_2 = yG3_1 + hRow + 6;
        const yD1 = yG3_2 + hRow + 6;
        const yG3_3 = yD1 + hRow + 6;
        const yD2 = yG3_3 + hRow + 6;
        const yG3_4 = yD2 + hRow + 6;
        const yI1_1 = yG3_4 + hRow + 6;
        const hI1_1 = 8;
        const yI1_2 = yI1_1 + hI1_1 + 6;
        const yI1_3 = yI1_2 + hRow + 6;
        const yI1_4 = yI1_3 + hRow + 6;

        const wG2 = Xv(43.0);
        const hG2_row = Yv(1.23);
        const wG1 = Xv(9.0);

        const xF = 880;
        const wF = Xv(8.0);
        const hF = Yv(8.5);
        const xC = 780;
        const yC = 235;
        const wC = Xv(10.0);
        const hC = Yv(13.4);

        let svg2 = `<svg id="static-detail-map" viewBox="0 0 ${VW} ${VH}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block;background:#FFFFFF;border-radius:6px;font-family:Arial,sans-serif;">`;
        svg2 += `<defs>
<pattern id="res-stripe" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#FFFFFF"/><path d="M0,8 L8,0" stroke="#BDBDBD" stroke-width="1.0"/></pattern>
<pattern id="pccc-pat" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#FFFFFF"/><path d="M-1,1 L1,-1 M0,8 L8,0 M7,9 L9,7" stroke="#B0BEC5" stroke-width="0.9"/></pattern>
</defs>`;

        svg2 += `<rect x="0" y="0" width="${VW}" height="${VH}" fill="#FFFFFF" stroke="#37474F" stroke-width="2.5" rx="3"/>`;

        svg2 += `<rect x="0" y="0" width="${VW}" height="${pccc.toFixed(1)}" fill="url(#pccc-pat)" opacity="0.6"/>`;
        svg2 += `<rect x="0" y="${(VH - pccc).toFixed(1)}" width="${VW}" height="${pccc.toFixed(1)}" fill="url(#pccc-pat)" opacity="0.6"/>`;
        svg2 += `<rect x="0" y="${pccc.toFixed(1)}" width="${pccc.toFixed(1)}" height="${(VH - 2 * pccc).toFixed(1)}" fill="url(#pccc-pat)" opacity="0.6"/>`;
        svg2 += `<rect x="${(VW - pccc).toFixed(1)}" y="${pccc.toFixed(1)}" width="${pccc.toFixed(1)}" height="${(VH - 2 * pccc).toFixed(1)}" fill="url(#pccc-pat)" opacity="0.6"/>`;

        svg2 += `<text x="${(VW / 2).toFixed(1)}" y="${(pccc * 0.7).toFixed(1)}" fill="#78909C" font-size="${pcccFs2}" text-anchor="middle" font-weight="700">PCCC (≥700mm)</text>`;
        svg2 += `<text x="${(VW / 2).toFixed(1)}" y="${(VH - pccc * 0.15).toFixed(1)}" fill="#78909C" font-size="${pcccFs2}" text-anchor="middle" font-weight="700">PCCC (≥700mm)</text>`;

        svg2 += drawMZone('M', ix, yM, wM, hM, 11, 4, 5501);
        svg2 += drawRackZone('G3', ix, yG3_1, wG3, hRow, 8, 5, 1, 5001, 'KC');
        svg2 += drawRackZone('G3', ix, yG3_2, wG3, hRow, 8, 5, 1, 5002, 'KC');
        svg2 += drawFuncZone('D1', ix, yD1, wG3, hRow, 'url(#res-stripe)', '#90A4AE', 'Khu dự phòng', { dash: true, tc: '#546E7A' });
        svg2 += drawRackZone('G3', ix, yG3_3, wG3, hRow, 8, 5, 1, 5003, 'KC');
        svg2 += drawFuncZone('D2', ix, yD2, wG3, hRow, 'url(#res-stripe)', '#90A4AE', 'Khu dự phòng', { dash: true, tc: '#546E7A' });
        svg2 += drawRackZone('G3', ix, yG3_4, wG3, hRow, 8, 5, 1, 5004, 'KC');

        svg2 += drawRackZone('I1', ix, yI1_1, wG3, hI1_1, 8, 4, 1, 5101, 'KN');
        svg2 += drawRackZone('I1', ix, yI1_2, wG3, hRow, 8, 4, 1, 5102, 'KN');
        svg2 += drawRackZone('I1', ix, yI1_3, wG3, hRow, 8, 4, 1, 5103, 'KN');
        svg2 += drawRackZone('I1', ix, yI1_4, wG3, hRow, 8, 4, 1, 5104, 'KN');

        // Middle Column: G2 (8 rack rows)
        svg2 += drawRackZone('G2', 245, iy, wG2, hG2_row, 12, 5, 1, 6001, 'KC');
        svg2 += drawRackZone('G2', 245, iy + 43, wG2, hG2_row, 12, 5, 1, 6002, 'KC');
        svg2 += drawRackZone('G2', 245, iy + 86, wG2, hG2_row, 12, 5, 1, 6003, 'KC');
        svg2 += drawRackZone('G2', 245, iy + 129, wG2, hG2_row, 12, 5, 1, 6004, 'KC');
        svg2 += drawRackZone('G2', 245, iy + 172, wG2, hG2_row, 12, 5, 1, 6005, 'KC');
        svg2 += drawRackZone('G2', 245, iy + 215, wG2, hG2_row, 12, 5, 1, 6006, 'KC');
        svg2 += drawRackZone('G2', 245, iy + 258, wG2, hG2_row, 12, 5, 1, 6007, 'KC');
        svg2 += drawRackZone('G2', 245, iy + 301, wG2, hG2_row, 12, 5, 1, 6008, 'KC');

        // G1 Column (8 short rack rows)
        svg2 += drawRackZone('G1', 675, iy, wG1, hG2_row, 4, 5, 1, 7001, 'KC');
        svg2 += drawRackZone('G1', 675, iy + 43, wG1, hG2_row, 4, 5, 1, 7002, 'KC');
        svg2 += drawRackZone('G1', 675, iy + 86, wG1, hG2_row, 4, 5, 1, 7003, 'KC');
        svg2 += drawRackZone('G1', 675, iy + 129, wG1, hG2_row, 4, 5, 1, 7004, 'KC');
        svg2 += drawRackZone('G1', 675, iy + 172, wG1, hG2_row, 4, 5, 1, 7005, 'KC');
        svg2 += drawRackZone('G1', 675, iy + 215, wG1, hG2_row, 4, 5, 1, 7006, 'KC');
        svg2 += drawRackZone('G1', 675, iy + 258, wG1, hG2_row, 4, 5, 1, 7007, 'KC');
        svg2 += drawRackZone('G1', 675, iy + 301, wG1, hG2_row, 4, 5, 1, 7008, 'KC');

        // Right columns
        svg2 += drawOfficeZone('F01', xF, iy, wF, hF);
        svg2 += drawOrangeZone('C', xC, yC, wC, hC, 7501, 'Đóng gói');

        svg2 += drawVerticalPalletZone('B1', 885, 100, 38, 120, 6, 8001);
        svg2 += drawVerticalPalletZone('B1', 935, 100, 38, 120, 6, 8002);

        svg2 += drawVerticalPalletZone('B2', 880, 235, 21, 120, 6, 9001);
        svg2 += drawVerticalPalletZone('B2', 906, 235, 21, 120, 6, 9002);
        svg2 += drawVerticalPalletZone('B2', 932, 235, 21, 120, 6, 9003);
        svg2 += drawVerticalPalletZone('B2', 958, 235, 21, 120, 6, 9004);

        // Door Markers
        svg2 += drawDoor('A03', 245 + wG2 / 2 - doorW / 2, 0, 'H');
        svg2 += drawDoor('A04', xC + wC / 2 - doorW / 2, 0, 'H');
        svg2 += drawDoor('A02', 0, yG3_1 - 4, 'V');
        svg2 += drawDoor('A08', 0, yG3_4 + 10, 'V');
        svg2 += drawDoor('A07', VW - doorThick, 150, 'V');
        svg2 += drawDoor('A01', VW - doorThick, 300, 'V');

        const dimFs3 = Math.max(4, VW / 240);
        svg2 += `<text x="${(VW / 2).toFixed(1)}" y="${(VH - 2).toFixed(1)}" fill="#78909C" font-size="${dimFs3}" text-anchor="middle" font-family="${mono}" font-weight="700">${wh.len} m</text>`;
        svg2 += `<text x="${(VW - 2).toFixed(1)}" y="${(VH / 2).toFixed(1)}" fill="#78909C" font-size="${dimFs3}" text-anchor="end" dominant-baseline="middle" font-family="${mono}" font-weight="700" transform="rotate(-90,${(VW - 2).toFixed(1)},${(VH / 2).toFixed(1)})">${wh.wid} m</text>`;

        svg2 += `</svg>`;
        return `<style>
.map-zone-clickable:hover { opacity: 0.88; filter: brightness(0.94); }
.map-zone-clickable { transition: opacity .15s, filter .15s; }
#static-detail-map { shape-rendering: crispEdges; }
</style>` + svg2;
    }

    const baseLen = 180, baseWid = 90;
    const s = Math.max(4, Math.min(7, 1100 / wh.len));
    const W = Math.round(wh.len * s), H = Math.round(wh.wid * s);
    const PX = W / baseLen, PY = H / baseWid;
    const X = m => m * PX, Y = m => m * PY;
    const pT = Y(1.6), pTx = X(1.6);
    const fs = Math.max(5, W / 180), fsCode = Math.max(5.5, W / 160);

    const dimColor = '#475569';
    const dimFs = Math.max(5, W / 200);
    const arrowSz = Math.max(2, dimFs * 0.55);

    const drawDimH = (x1, x2, y, labelM, opts = {}) => {
        const ext = opts.ext || 6;
        const off = opts.off || 0;
        const lx = (x1 + x2) / 2;
        const col = opts.col || dimColor;
        let d = '';
        d += `<line x1="${x1}" y1="${y - ext}" x2="${x1}" y2="${y + ext}" stroke="${col}" stroke-width="0.5" pointer-events="none"/>`;
        d += `<line x1="${x2}" y1="${y - ext}" x2="${x2}" y2="${y + ext}" stroke="${col}" stroke-width="0.5" pointer-events="none"/>`;
        d += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${col}" stroke-width="0.6" pointer-events="none"/>`;
        d += `<polygon points="${x1},${y} ${x1 + arrowSz},${y - arrowSz * 0.5} ${x1 + arrowSz},${y + arrowSz * 0.5}" fill="${col}" pointer-events="none"/>`;
        d += `<polygon points="${x2},${y} ${x2 - arrowSz},${y - arrowSz * 0.5} ${x2 - arrowSz},${y + arrowSz * 0.5}" fill="${col}" pointer-events="none"/>`;
        const lw = labelM.length * dimFs * 0.62 + 4;
        d += `<rect x="${lx - lw / 2}" y="${y - dimFs - 2 + off}" width="${lw}" height="${dimFs + 4}" fill="rgba(255,255,255,0.88)" rx="1" pointer-events="none"/>`;
        d += `<text x="${lx}" y="${y + off}" fill="${col}" font-size="${dimFs}" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-weight="700" pointer-events="none">${labelM}</text>`;
        return d;
    };

    const drawDimV = (x, y1, y2, labelM, opts = {}) => {
        const ext = opts.ext || 6;
        const col = opts.col || dimColor;
        const ly = (y1 + y2) / 2;
        let d = '';
        d += `<line x1="${x - ext}" y1="${y1}" x2="${x + ext}" y2="${y1}" stroke="${col}" stroke-width="0.5" pointer-events="none"/>`;
        d += `<line x1="${x - ext}" y1="${y2}" x2="${x + ext}" y2="${y2}" stroke="${col}" stroke-width="0.5" pointer-events="none"/>`;
        d += `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${col}" stroke-width="0.6" pointer-events="none"/>`;
        d += `<polygon points="${x},${y1} ${x - arrowSz * 0.5},${y1 + arrowSz} ${x + arrowSz * 0.5},${y1 + arrowSz}" fill="${col}" pointer-events="none"/>`;
        d += `<polygon points="${x},${y2} ${x - arrowSz * 0.5},${y2 - arrowSz} ${x + arrowSz * 0.5},${y2 - arrowSz}" fill="${col}" pointer-events="none"/>`;
        const lw = labelM.length * dimFs * 0.62 + 4;
        d += `<rect x="${x - lw / 2}" y="${ly - dimFs / 2 - 2}" width="${lw}" height="${dimFs + 4}" fill="rgba(255,255,255,0.88)" rx="1" pointer-events="none"/>`;
        d += `<text x="${x}" y="${ly + dimFs / 2}" fill="${col}" font-size="${dimFs}" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-weight="700" pointer-events="none">${labelM}</text>`;
        return d;
    };

    if (wh.type === 'Bãi kho') {
        const subLayout = wh.subLayout || [];
        const toMapCoord = px => px * (s / 20);

        let svg = `<svg id="static-detail-map" viewBox="-40 -10 ${W + 90} ${H + 30}" style="width:100%;background:#FFFFFF;border-radius:8px;border:2px solid #CBD5E1;font-family:Arial,sans-serif;cursor:pointer" ondblclick="handleMapClick(event,${W},${H})">`;
        svg += `<defs>
<pattern id="grid-floor" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="#FAFAFA"/><path d="M20,0 L0,0 0,20" fill="none" stroke="#E2E8F0" stroke-width="0.3"/></pattern>
<pattern id="pccc-stripes" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#F1F5F9"/><path d="M-1,1 L1,-1 M0,8 L8,0 M7,9 L9,7" stroke="#999999" stroke-width="1"/></pattern>
</defs>`;

        svg += `<rect x="0" y="0" width="${W}" height="${H}" fill="url(#grid-floor)" stroke="#000000" stroke-width="2"/>`;

        svg += `<rect x="0" y="0" width="${W}" height="${pT}" fill="url(#pccc-stripes)" stroke="#94A3B8" stroke-width="0.7"/>`;
        svg += `<rect x="0" y="${H - pT}" width="${W}" height="${pT}" fill="url(#pccc-stripes)" stroke="#94A3B8" stroke-width="0.7"/>`;
        svg += `<rect x="0" y="${pT}" width="${pTx}" height="${H - 2 * pT}" fill="url(#pccc-stripes)" stroke="#94A3B8" stroke-width="0.7"/>`;
        svg += `<rect x="${W - pTx}" y="${pT}" width="${pTx}" height="${H - 2 * pT}" fill="url(#pccc-stripes)" stroke="#94A3B8" stroke-width="0.7"/>`;
        svg += `<text x="${W / 2}" y="${pT * 0.72}" fill="#64748B" font-size="${Math.max(5, W / 130)}" text-anchor="middle" font-weight="700">PCCC (&ge; 700mm)</text>`;
        svg += `<text x="${W / 2}" y="${H - pT * 0.28}" fill="#64748B" font-size="${Math.max(5, W / 130)}" text-anchor="middle" font-weight="700">PCCC (&ge; 700mm)</text>`;

        // Draw walkways
        subLayout.filter(r => r.type === 'aisle').forEach(a => {
            const ax = toMapCoord(a.x), ay = toMapCoord(a.y);
            const aw = toMapCoord(a.w), ah = toMapCoord(a.h);
            const isWalk = a.aisleType === 'walk';
            const fill = isWalk ? 'rgba(10, 185, 129, 0.08)' : 'rgba(245, 158, 11, 0.08)';
            const stroke = isWalk ? '#10B981' : '#F59E0B';
            svg += `<rect x="${ax}" y="${ay}" width="${aw}" height="${ah}" fill="${fill}" stroke="${stroke}" stroke-width="0.8" stroke-dasharray="3,2" rx="1"/>`;
        });

        // Draw areas
        subLayout.filter(r => r.type !== 'aisle').forEach(rack => {
            const rx = toMapCoord(rack.x), ry = toMapCoord(rack.y);
            const rw = toMapCoord(rack.w), rh = toMapCoord(rack.h);
            const rate = getMockFillRate(rack.id);
            const fill = getFillColor(rate);
            svg += `<g class="map-zone-clickable" data-zone="${rack.id}" style="cursor:pointer">`;
            svg += `<rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" fill="${fill}" stroke="#000000" stroke-width="0.8" rx="1"/>`;
            if (rw > X(6)) {
                svg += `<text x="${rx + rw / 2}" y="${ry + rh / 2 + fs / 2 - 1}" fill="#FFFFFF" font-size="${fs}" font-weight="700" text-anchor="middle" pointer-events="none">${rack.id}</text>`;
            }
            svg += `</g>`;
        });

        let dimSvg = '<g id="dim-layer">';
        dimSvg += drawDimH(0, W, H + 8, `${wh.len} m`, { ext: 5, col: '#1E3A8A' });
        dimSvg += drawDimV(W + 8, 0, H, `${wh.wid} m`, { ext: 5, col: '#1E3A8A' });
        dimSvg += '</g>';
        svg += dimSvg;
        svg += '</svg>';

        return `<style>
                .map-zone-clickable:hover { filter: drop-shadow(0 2px 6px rgba(0,0,0,0.08)); }
                </style>` + svg;
    }


    // ─── NHAKHO: Top-down floor plan with compartment cells ───
    // Auto-fit: SVG covers full warehouse proportional to real dimensions
    const VW = 1000, VH = Math.round(1000 * wh.wid / wh.len);
    const sc = VW / wh.len; // SVG units per meter
    const Xv = m => m * sc, Yv = m => m * sc;
    const pccc = Xv(1.6);
    const ix = pccc, iy = pccc;
    const iW2 = VW - 2 * pccc;
    const iH2 = VH - 2 * pccc;
    const fsSv = Math.max(5, VW / 160);
    const fsCode2 = Math.max(4, VW / 185);
    const fsSmall = Math.max(3.5, VW / 220);

    // Seed-based stable fill rate per compartment
    const cFill = (seed) => {
        const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
        return 0.08 + 0.84 * Math.abs(x - Math.floor(x));
    };

    // Color: rack zones (G, I) green gradient empty->full
    const rackCellFill = (rate) => {
        const l = Math.round(92 - rate * 54);
        return `hsl(122,48%,${l}%)`;
    };
    // Color: pallet zones (J) pink gradient
    const palletCellFill = (rate) => {
        const l = Math.round(95 - rate * 42);
        return `hsl(350,65%,${l}%)`;
    };
    const bufBg = '#FFFDE7', bufStroke = '#F9A825';
    const wrkBg = '#FFFFFF', wrkStroke = '#B0BEC5';
    const doorFill = '#FF8F00';
    const doorH = Yv(3.5), doorW = Xv(4.5);
    // Color constants
    const RACK_BG = '#E8F5E9', RACK_STROKE = '#81C784';
    const PALLET_BG = '#FCE4EC', PALLET_STROKE = '#E57373';
    const RESV_STROKE = '#90A4AE';
    const mono = "'JetBrains Mono',monospace";
    const fsBay = Math.max(3, VW / 250);

    // ── RACK ZONE RENDERER: top-down cross-section view ──
    // numRackRows = number of rack rows separated by aisles
    // numBays = compartments per row, numLevels = depth levels per compartment (stacked in Y)
    const drawRackZone = (id, rx, ry, rw, rh, numBays, numLevels, numRackRows, seed0, prefix) => {
        if (rw <= 0 || rh <= 0) return '';
        prefix = prefix || id;
        const AISLE_FRAC = 0.12;
        const numAisles = numRackRows - 1;
        const usedForAisles = numAisles * AISLE_FRAC;
        const rackRowH = (rh * (1 - usedForAisles)) / numRackRows;
        const aisleH = numAisles > 0 ? (rh * usedForAisles) / numAisles : 0;
        const gap = 0.7;

        const buildTooltip = (zid, bay, seed) => {
            let tip = `${zid} — Khoang ${bay + 1}\nTỉ lệ lấp đầy: `;
            let total = 0;
            const perLevel = [];
            for (let lv = 0; lv < numLevels; lv++) {
                const r = cFill(seed + lv * 97 + bay * 31);
                total += r;
                perLevel.push(Math.round(r * 100));
            }
            const avg = total / numLevels;
            tip += Math.round(avg * 100) + '%\n';
            perLevel.forEach((p, i) => { tip += `Tầng ${i + 1}: ${p}%\n`; });
            return tip.trim();
        };

        let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
        d += `<rect x="${rx.toFixed(1)}" y="${ry.toFixed(1)}" width="${rw.toFixed(1)}" height="${rh.toFixed(1)}" fill="${RACK_BG}" stroke="${RACK_STROKE}" stroke-width="1" rx="2"/>`;
        const cellW = rw / numBays;
        let curY = ry;
        let totalFill = 0, totalCount = 0;

        for (let row = 0; row < numRackRows; row++) {
            const seed1 = seed0 + row * 500;
            // Row outline
            d += `<rect x="${rx.toFixed(1)}" y="${curY.toFixed(1)}" width="${rw.toFixed(1)}" height="${rackRowH.toFixed(1)}" fill="none" stroke="rgba(100,160,100,0.45)" stroke-width="0.6" rx="1"/>`;
            for (let bay = 0; bay < numBays; bay++) {
                const tip = buildTooltip(id, bay, seed1);
                let bayTotalRate = 0;
                for (let lv = 0; lv < numLevels; lv++) {
                    bayTotalRate += cFill(seed1 + lv * 97 + bay * 31);
                }
                const avgRate = bayTotalRate / numLevels;
                totalFill += avgRate; totalCount++;
                const cx = rx + bay * cellW + gap / 2;
                const cy = curY + gap / 2;
                d += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${(cellW - gap).toFixed(1)}" height="${(rackRowH - gap).toFixed(1)}" fill="${rackCellFill(avgRate)}" stroke="rgba(130,180,130,0.35)" stroke-width="0.3" rx="0.4"><title>${tip}</title></rect>`;
                if (bay > 0) {
                    d += `<line x1="${(rx + bay * cellW).toFixed(1)}" y1="${curY.toFixed(1)}" x2="${(rx + bay * cellW).toFixed(1)}" y2="${(curY + rackRowH).toFixed(1)}" stroke="rgba(100,150,100,0.3)" stroke-width="0.4"/>`;
                }
            }
            // Bay labels: head and tail
            const bayFs = Math.min(fsBay, Math.max(2.5, cellW * 0.42));
            if (rackRowH > 5) {
                d += `<text x="${(rx + cellW * 0.5).toFixed(1)}" y="${(curY - 1.2).toFixed(1)}" fill="#2E7D32" font-size="${bayFs}" text-anchor="middle" font-family="${mono}" font-weight="600" pointer-events="none">${prefix}.${row + 1}.1</text>`;
                if (numBays > 1) {
                    d += `<text x="${(rx + cellW * (numBays - 0.5)).toFixed(1)}" y="${(curY - 1.2).toFixed(1)}" fill="#2E7D32" font-size="${bayFs}" text-anchor="middle" font-family="${mono}" font-weight="600" pointer-events="none">${prefix}.${row + 1}.${numBays}</text>`;
                }
            }
            curY += rackRowH;
            // Aisle between rows
            if (row < numRackRows - 1 && aisleH > 0) {
                d += `<rect x="${rx.toFixed(1)}" y="${curY.toFixed(1)}" width="${rw.toFixed(1)}" height="${aisleH.toFixed(1)}" fill="rgba(255,255,255,0.78)" stroke="none"/>`;
                d += `<line x1="${(rx + 4).toFixed(1)}" y1="${(curY + aisleH / 2).toFixed(1)}" x2="${(rx + rw - 4).toFixed(1)}" y2="${(curY + aisleH / 2).toFixed(1)}" stroke="rgba(140,140,140,0.35)" stroke-width="0.5" stroke-dasharray="4,3"/>`;
                curY += aisleH;
            }
        }
        // Zone ID badge centered
        const avgZ = totalCount > 0 ? totalFill / totalCount : 0;
        const pctZ = Math.round(avgZ * 100);
        const idFs = Math.max(fsSv, fsSv);
        const idBgW = Math.round(idFs * id.length * 0.58 + 10);
        d += `<rect x="${(rx + rw / 2 - idBgW / 2).toFixed(1)}" y="${(ry + rh / 2 - idFs / 2 - 3).toFixed(1)}" width="${idBgW.toFixed(1)}" height="${(idFs + 6).toFixed(1)}" fill="rgba(46,125,50,0.78)" rx="3" pointer-events="none"/>`;
        d += `<text x="${(rx + rw / 2).toFixed(1)}" y="${(ry + rh / 2 + idFs * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${idFs}" text-anchor="middle" font-weight="800" font-family="${mono}" pointer-events="none">${id}</text>`;
        // Fill % badge (top-right)
        const pctTxtZ = pctZ + '%';
        const pWZ = pctTxtZ.length * fsSmall * 0.6 + 5;
        d += `<rect x="${(rx + rw - pWZ - 2).toFixed(1)}" y="${(ry + 2).toFixed(1)}" width="${pWZ.toFixed(1)}" height="${(fsSmall + 3.5).toFixed(1)}" fill="rgba(27,94,32,0.65)" rx="2" pointer-events="none"/>`;
        d += `<text x="${(rx + rw - pWZ / 2 - 2).toFixed(1)}" y="${(ry + fsSmall + 3).toFixed(1)}" fill="#FFFFFF" font-size="${fsSmall}" text-anchor="middle" font-weight="700" font-family="${mono}" pointer-events="none">${pctTxtZ}</text>`;
        d += `</g>`;
        return d;
    };


    // ── M01 ZONE RENDERER (rounded squares grid for oversized/wooden boxes) ──
    const drawM01Zone = (id, zx, zy, zw, zh, cols, rows, seed0) => {
        if (zw <= 0 || zh <= 0) return '';
        let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
        d += `<rect x="${zx.toFixed(1)}" y="${zy.toFixed(1)}" width="${zw.toFixed(1)}" height="${zh.toFixed(1)}" fill="${bufBg}" stroke="${bufStroke}" stroke-width="1" rx="2"/>`;
        const cellW = zw / cols, cellH = zh / rows;
        const gap = 1.0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const rate = cFill(seed0 + r * 37 + c * 13);
                const cx = zx + c * cellW + gap / 2;
                const cy = zy + r * cellH + gap / 2;
                const fill = rate > 0.55 ? '#FFF59D' : '#F5F5F5';
                const stroke = rate > 0.55 ? '#FBC02D' : '#E0E0E0';
                d += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${(cellW - gap).toFixed(1)}" height="${(cellH - gap).toFixed(1)}" fill="${fill}" stroke="${stroke}" stroke-width="0.8" rx="1.5"/>`;
            }
        }
        const idFs3 = Math.max(fsSv, 7);
        const idBg3 = Math.round(idFs3 * id.length * 0.58 + 10);
        d += `<rect x="${(zx + zw / 2 - idBg3 / 2).toFixed(1)}" y="${(zy + zh / 2 - idFs3 / 2 - 3).toFixed(1)}" width="${idBg3.toFixed(1)}" height="${(idFs3 + 5).toFixed(1)}" fill="rgba(0,0,0,0.28)" rx="3" pointer-events="none"/>`;
        d += `<text x="${(zx + zw / 2).toFixed(1)}" y="${(zy + zh / 2 + idFs3 * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${idFs3}" text-anchor="middle" font-weight="800" font-family="${mono}" pointer-events="none">${id}</text>`;
        d += `</g>`;
        return d;
    };

    // ── PALLET ZONE RENDERER ──
    const drawPalletZone = (id, px, py, pw, ph, cols, rows, seed0) => {
        if (pw <= 0 || ph <= 0) return '';
        const cellW = pw / cols, cellH = ph / rows;
        const gap = 0.6;
        let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
        d += `<rect x="${px.toFixed(1)}" y="${py.toFixed(1)}" width="${pw.toFixed(1)}" height="${ph.toFixed(1)}" fill="${PALLET_BG}" stroke="${PALLET_STROKE}" stroke-width="1" rx="2"/>`;
        let total = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const rate = cFill(seed0 + r * 53 + c * 17);
                total += rate;
                const cx = px + c * cellW + gap / 2;
                const cy = py + r * cellH + gap / 2;
                const tip = `${id} — Pallet ${String.fromCharCode(65 + r)}${c + 1}\nTỉ lệ lấp đầy: ${Math.round(rate * 100)}%`;
                d += `<rect x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" width="${(cellW - gap).toFixed(1)}" height="${(cellH - gap).toFixed(1)}" fill="${palletCellFill(rate)}" stroke="rgba(200,120,130,0.3)" stroke-width="0.3" rx="0.4"><title>${tip}</title></rect>`;
                if (cellW > 4) {
                    for (let b = 1; b < 3; b++) {
                        d += `<line x1="${(cx + (cellW - gap) * b / 3).toFixed(1)}" y1="${cy.toFixed(1)}" x2="${(cx + (cellW - gap) * b / 3).toFixed(1)}" y2="${(cy + cellH - gap).toFixed(1)}" stroke="rgba(180,80,80,0.25)" stroke-width="0.4"/>`;
                    }
                }
            }
        }
        const avg = total / (cols * rows);
        const pct = Math.round(avg * 100);
        const idFs2 = Math.max(fsSv * 0.85, fsSv * 0.85);
        const idBg2 = Math.round(idFs2 * id.length * 0.58 + 10);
        d += `<rect x="${(px + pw / 2 - idBg2 / 2).toFixed(1)}" y="${(py + ph / 2 - idFs2 / 2 - 3).toFixed(1)}" width="${idBg2.toFixed(1)}" height="${(idFs2 + 6).toFixed(1)}" fill="rgba(136,14,79,0.72)" rx="3" pointer-events="none"/>`;
        d += `<text x="${(px + pw / 2).toFixed(1)}" y="${(py + ph / 2 + idFs2 * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${idFs2}" text-anchor="middle" font-weight="800" font-family="${mono}" pointer-events="none">${id}</text>`;
        const pctTxt = pct + '%';
        const pW2 = pctTxt.length * fsSmall * 0.6 + 5;
        d += `<rect x="${(px + pw - pW2 - 2).toFixed(1)}" y="${(py + 2).toFixed(1)}" width="${pW2.toFixed(1)}" height="${(fsSmall + 3.5).toFixed(1)}" fill="rgba(100,0,50,0.6)" rx="2" pointer-events="none"/>`;
        d += `<text x="${(px + pw - pW2 / 2 - 2).toFixed(1)}" y="${(py + fsSmall + 3).toFixed(1)}" fill="#FFFFFF" font-size="${fsSmall}" text-anchor="middle" font-weight="700" font-family="${mono}" pointer-events="none">${pctTxt}</text>`;
        d += `</g>`;
        return d;
    };

    // ── FUNCTIONAL ZONE RENDERER (B, C, M, F, D, N) ──
    const drawFuncZone = (id, zx, zy, zw, zh, bgFill, stroke, label, opts = {}) => {
        if (zw <= 0 || zh <= 0) return '';
        let d = `<g class="map-zone-clickable" data-zone="${id}" style="cursor:pointer">`;
        d += `<rect x="${zx.toFixed(1)}" y="${zy.toFixed(1)}" width="${zw.toFixed(1)}" height="${zh.toFixed(1)}" fill="${bgFill}" stroke="${stroke}" stroke-width="${opts.sw || 1}" ${opts.dash ? 'stroke-dasharray="6,3"' : ''} rx="2"/>`;
        if (label && zw > 20 && zh > fsSv * 2.5) {
            d += `<text x="${(zx + zw / 2).toFixed(1)}" y="${(zy + zh / 2 + fsSv * 0.35 + fsSv * 0.7).toFixed(1)}" fill="${opts.tc || '#546E7A'}" font-size="${fsSv * 0.72}" text-anchor="middle" font-weight="400" pointer-events="none" opacity="0.7">${label}</text>`;
        }
        // Zone ID badge centered
        const idFs3 = Math.max(fsSv, 7);
        const idBg3 = Math.round(idFs3 * id.length * 0.58 + 10);
        d += `<rect x="${(zx + zw / 2 - idBg3 / 2).toFixed(1)}" y="${(zy + zh / 2 - idFs3 / 2 - 3).toFixed(1)}" width="${idBg3.toFixed(1)}" height="${(idFs3 + 5).toFixed(1)}" fill="rgba(0,0,0,0.30)" rx="3" pointer-events="none"/>`;
        d += `<text x="${(zx + zw / 2).toFixed(1)}" y="${(zy + zh / 2 + idFs3 * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${idFs3}" text-anchor="middle" font-weight="800" font-family="${mono}" pointer-events="none">${id}</text>`;
        d += `</g>`;
        return d;
    };

    // ── DOOR MARKER ──
    const drawDoor = (id, dx, dy, dir = 'H') => {
        const dw = dir === 'H' ? doorW : pccc;
        const dh = dir === 'H' ? pccc * 0.75 : doorH;
        return `<rect x="${dx.toFixed(1)}" y="${dy.toFixed(1)}" width="${dw.toFixed(1)}" height="${dh.toFixed(1)}" fill="${doorFill}" rx="2"/>
<text x="${(dx + dw / 2).toFixed(1)}" y="${(dy + dh / 2 + fsSmall * 0.38).toFixed(1)}" fill="#FFFFFF" font-size="${fsSmall * 1.1}" text-anchor="middle" font-weight="800" font-family="${mono}">${id}</text>`;
    };

    // ══ LAYOUT (proportional to warehouse dimensions) ══
    const colG01 = iW2 * 0.215;
    const colG02 = iW2 * 0.375;
    const colG03 = iW2 * 0.165;
    const colR = iW2 - colG01 - colG02 - colG03;
    const GAP = Xv(0.5);

    const xG01 = ix;
    const xG02 = ix + colG01 + GAP;
    const xG03 = xG02 + colG02 + GAP;
    const xR = xG03 + colG03 + GAP;

    // Height splits for Left Column (M01, G01, D02, I01)
    const m01H = iH2 * 0.18;
    const g01H = iH2 * 0.40;
    const d02H = iH2 * 0.10;
    const i01H = iH2 - m01H - g01H - d02H - GAP * 3;

    const yM01 = iy;
    const yG01 = yM01 + m01H + GAP;
    const yD02 = yG01 + g01H + GAP;
    const yI01 = yD02 + d02H + GAP;

    // Height splits for Middle and Center-Right Columns
    const g02H = iH2 * 0.70;
    const d01H = iH2 - g02H - GAP;

    const yG02 = iy;
    const yD01 = yG02 + g02H + GAP;

    // Height splits for Right Column (F01, B01, C01/J01, B02, J02)
    const f01H = iH2 * 0.18;
    const b01H = iH2 * 0.22;
    const c01H = iH2 * 0.32;
    const b02H = iH2 * 0.12;
    const j02H = iH2 - f01H - b01H - c01H - b02H - GAP * 4;

    const yF01 = iy;
    const yB01 = yF01 + f01H + GAP;
    const yC01 = yB01 + b01H + GAP;
    const yB02 = yC01 + c01H + GAP;
    const yJ02 = yB02 + b02H + GAP;

    // ══ BUILD SVG ══
    let svg2 = `<svg id="static-detail-map" viewBox="0 0 ${VW} ${VH}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style="display:block;background:#E8EDF2;border-radius:6px;font-family:Arial,sans-serif;">`;

    svg2 += `<defs>
<pattern id="res-stripe" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#F5F5F5"/><path d="M0,8 L8,0" stroke="#BDBDBD" stroke-width="1.0"/></pattern>
<pattern id="pccc-pat" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#F1F5F9"/><path d="M-1,1 L1,-1 M0,8 L8,0 M7,9 L9,7" stroke="#B0BEC5" stroke-width="0.9"/></pattern>
</defs>`;

    // Outer boundary
    svg2 += `<rect x="0" y="0" width="${VW}" height="${VH}" fill="#FFFFFF" stroke="#37474F" stroke-width="2.5" rx="3"/>`;

    // PCCC bands
    svg2 += `<rect x="0" y="0" width="${VW}" height="${pccc.toFixed(1)}" fill="url(#pccc-pat)" opacity="0.75"/>`;
    svg2 += `<rect x="0" y="${(VH - pccc).toFixed(1)}" width="${VW}" height="${pccc.toFixed(1)}" fill="url(#pccc-pat)" opacity="0.75"/>`;
    svg2 += `<rect x="0" y="${pccc.toFixed(1)}" width="${pccc.toFixed(1)}" height="${(VH - 2 * pccc).toFixed(1)}" fill="url(#pccc-pat)" opacity="0.75"/>`;
    svg2 += `<rect x="${(VW - pccc).toFixed(1)}" y="${pccc.toFixed(1)}" width="${pccc.toFixed(1)}" height="${(VH - 2 * pccc).toFixed(1)}" fill="url(#pccc-pat)" opacity="0.75"/>`;

    const pcccFs2 = Math.max(4, VW / 230);
    svg2 += `<text x="${(VW / 2).toFixed(1)}" y="${(pccc * 0.7).toFixed(1)}" fill="#78909C" font-size="${pcccFs2}" text-anchor="middle" font-weight="700">PCCC (≥700mm)</text>`;
    svg2 += `<text x="${(VW / 2).toFixed(1)}" y="${(VH - pccc * 0.15).toFixed(1)}" fill="#78909C" font-size="${pcccFs2}" text-anchor="middle" font-weight="700">PCCC (≥700mm)</text>`;

    // Floor background
    svg2 += `<rect x="${ix.toFixed(1)}" y="${iy.toFixed(1)}" width="${iW2.toFixed(1)}" height="${iH2.toFixed(1)}" fill="#FAFAFA"/>`;

    // ══ LEFT COLUMN ══
    svg2 += drawM01Zone('M01', xG01, yM01, colG01, m01H, 8, 5, 1001);
    svg2 += drawRackZone('G01', xG01, yG01, colG01, g01H, 8, 5, 4, 1002, 'KC');
    svg2 += drawFuncZone('D02', xG01, yD02, colG01, d02H, 'url(#res-stripe)', RESV_STROKE, 'Dự phòng', { dash: true, tc: '#546E7A' });
    svg2 += drawRackZone('I01', xG01, yI01, colG01, i01H, 12, 3, 4, 4001, 'KN');

    // ══ MIDDLE COLUMN ══
    svg2 += drawRackZone('G02', xG02, yG02, colG02, g02H, 14, 5, 8, 2001, 'KC');
    // D01 spans Middle Column and Center-Right Column
    svg2 += drawFuncZone('D01', xG02, yD01, colG02 + GAP + colG03, d01H, 'url(#res-stripe)', RESV_STROKE, 'Khu dự phòng', { dash: true, tc: '#546E7A' });

    // ══ CENTER-RIGHT COLUMN ══
    svg2 += drawRackZone('G03', xG03, yG02, colG03, g02H, 4, 5, 6, 3001, 'KC');

    // ══ RIGHT COLUMN ══
    svg2 += drawFuncZone('F01', xR, yF01, colR, f01H, wrkBg, wrkStroke, 'Làm việc', { tc: '#455A64' });
    svg2 += drawFuncZone('B01', xR, yB01, colR, b01H, bufBg, bufStroke, 'Chờ Nhập-Xuất', { tc: '#795548' });
    // C01 packing (left) and J01 vertical pallets (right)
    const c01W = colR * 0.6;
    const j01W = colR * 0.4 - GAP;
    svg2 += drawFuncZone('C01', xR, yC01, c01W, c01H, bufBg, bufStroke, 'Đóng gói', { tc: '#E65100' });
    svg2 += drawPalletZone('J01', xR + c01W + GAP, yC01, j01W, c01H, 2, 8, 7001);
    svg2 += drawFuncZone('B02', xR, yB02, colR, b02H, bufBg, bufStroke, 'B02', { tc: '#795548' });
    svg2 += drawPalletZone('J02', xR, yJ02, colR, j02H, 8, 3, 8001);

    // ══ DOOR MARKERS (orange) ══
    svg2 += drawDoor('A03', xG02, 0, 'H');
    svg2 += drawDoor('A04', xG03, 0, 'H');
    svg2 += drawDoor('A02', 0, yG01 - doorH / 2, 'V');
    svg2 += drawDoor('A08', 0, yI01 - doorH / 2, 'V');
    svg2 += drawDoor('A07', VW - pccc, yB01 + b01H / 2 - doorH / 2, 'V');
    svg2 += drawDoor('A01', VW - pccc, yB02 + b02H / 2 - doorH / 2, 'V');

    // ══ DIMENSION LABELS ══
    const dimFs3 = Math.max(4, VW / 240);
    svg2 += `<text x="${(VW / 2).toFixed(1)}" y="${(VH - 2).toFixed(1)}" fill="#78909C" font-size="${dimFs3}" text-anchor="middle" font-family="${mono}" font-weight="700">${wh.len} m</text>`;
    svg2 += `<text x="${(VW - 2).toFixed(1)}" y="${(VH / 2).toFixed(1)}" fill="#78909C" font-size="${dimFs3}" text-anchor="end" dominant-baseline="middle" font-family="${mono}" font-weight="700" transform="rotate(-90,${(VW - 2).toFixed(1)},${(VH / 2).toFixed(1)})">${wh.wid} m</text>`;

    svg2 += `</svg>`;

    return `<style>
.map-zone-clickable:hover { opacity: 0.88; filter: brightness(0.94); }
.map-zone-clickable { transition: opacity .15s, filter .15s; }
#static-detail-map { shape-rendering: crispEdges; }
</style>` + svg2;
}


// ════════════════════════════════════════
// CONFIG INIT
// ════════════════════════════════════════
function initConfig() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    // Top bar
    const barId = document.getElementById('cfg-bar-id'); if (barId) barId.textContent = wh.id;
    const barName = document.getElementById('cfg-bar-name'); if (barName) barName.textContent = wh.name;
    const barAddr = document.getElementById('cfg-bar-addr'); if (barAddr) barAddr.textContent = wh.address;
    const barType = document.getElementById('cfg-bar-type'); if (barType) barType.textContent = wh.type;
    const sb = document.getElementById('cfg-bar-status');
    if (sb) {
        const sMap = { configured: 'Đã cấu hình', configuring: 'Đang cấu hình', unconfigured: 'Chưa cấu hình' };
        const sCls = { configured: 'badge-green', configuring: 'badge-yellow', unconfigured: 'badge-red' };
        sb.className = 'badge ' + sCls[wh.status]; sb.textContent = sMap[wh.status];
    }
    // Info body
    document.getElementById('cfg-info-body').innerHTML = `
<div class="cfg-info-section">
<div class="cfg-info-label">Thông tin chung</div>
<div class="cfg-info-row"><span class="cfg-info-key">Mã kho:</span><span class="cfg-info-val">${wh.id}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Tên kho:</span><span class="cfg-info-val" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px" title="${wh.name}">${wh.name}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Mã tỉnh:</span><span class="cfg-info-val">${wh.maTinh || '—'}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Địa chỉ:</span><span class="cfg-info-val" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px" title="${wh.address || '—'}">${wh.address || '—'}</span></div>
</div>
<div class="cfg-divider"></div>
<div class="cfg-info-section">
<div class="cfg-info-label">Thông số kỹ thuật</div>
<div class="cfg-info-row"><span class="cfg-info-key">Loại kho:</span><span class="cfg-info-val">${wh.type}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều dài:</span><span class="cfg-info-val mono">${wh.len} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều rộng:</span><span class="cfg-info-val mono">${wh.wid} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều cao:</span><span class="cfg-info-val mono">${wh.hgt} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Diện tích sàn:</span><span class="cfg-info-val mono">${wh.area.toLocaleString('vi')} m²</span></div>
</div>
<div class="cfg-divider"></div>
<div class="cfg-info-section">
<div class="cfg-info-label">Quản lý</div>
<div class="cfg-info-row"><span class="cfg-info-key">Nhiệt độ:</span><span class="cfg-info-val mono">${wh.temp || 25}°C</span></div>
<div class="cfg-info-row"><span class="cfg-info-key" style="align-self:flex-start;padding-top:2px;">Mô tả:</span><span class="cfg-info-val" style="white-space:normal;max-width:160px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${wh.desc || ''}">${wh.desc || '—'}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key" style="align-self:flex-start;padding-top:2px;">Ghi chú:</span><span class="cfg-info-val" style="white-space:normal;max-width:160px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${wh.note || ''}">${wh.note || '—'}</span></div>
</div>`;
    // Canvas and Sidebar toggling
    const totalCellsW = m2c(wh.len);
    const totalCellsH = m2c(wh.wid);
    const pxW = totalCellsW * CELL_PX;
    const pxH = totalCellsH * CELL_PX;
    const canvas = document.getElementById('warehouse-canvas');
    if (canvas) {
        canvas.style.width = pxW + 'px';
        canvas.style.height = pxH + 'px';
    }

    const standardPalette = document.getElementById('standard-palette-wrap');
    const standardValidate = document.getElementById('standard-validate-panel');
    const yardConfig = document.getElementById('yard-config-wrap');

    if (wh.type === 'Bãi kho') {
        if (standardPalette) standardPalette.style.display = 'none';
        if (standardValidate) standardValidate.style.display = 'none';
        if (yardConfig) yardConfig.style.display = 'flex';

        // Load Yard warehouse layout
        subRacks = wh.subLayout ? JSON.parse(JSON.stringify(wh.subLayout)) : [];
        subCounter = subRacks.length;
        subSelectedId = null;
        subExpandedId = null;

        const lenInput = document.getElementById('yard-wh-len');
        const widInput = document.getElementById('yard-wh-wid');
        if (lenInput) lenInput.value = wh.len;
        if (widInput) widInput.value = wh.wid;

        requestAnimationFrame(() => {
            mainZoomFit();
            renderYardCanvas();
            validateYardRules();
            renderYardTree();
        });
        setTimeout(() => {
            mainZoomFit();
            renderYardCanvas();
        }, 100);
    } else {
        if (standardPalette) standardPalette.style.display = 'block';
        if (standardValidate) standardValidate.style.display = 'block';
        if (yardConfig) yardConfig.style.display = 'none';

        canvasZones = []; zoneCounter = {}; selectedZoneId = null;
        // Pre-seed K2 layout
        if (wh.id === 'KHO-HN-03' && canvasZones.length === 0) {
            // Warehouse: 104m x 49.7m. 1 cell = 20cm. Total: 520 x 249 cells
            // 4 columns: col1=128c, gap=5, col2=230c, gap=5, col3=48c, gap=5, col4=78c
            const c1x = 0, c1w = 128;
            const c2x = 133, c2w = 230;
            const c3x = 368, c3w = 48;
            const c4x = 421, c4w = 78;
            // Heights in cells: total 249. Inner ~239 cells.
            const m01h = 43;  // M01: ~8.6m
            const g01h = 97;  // G01 zone total: ~19.4m (incl D02 gap area)
            const d02h = 23;  // D02: ~4.6m (sits in middle of g01 area)
            const i01h = 86;  // I01: bottom of col1
            // Col1 row positions
            const ym01 = 0;
            const yg01top = m01h + 2;     // KC1-KC4 rows
            const yd02 = yg01top + 48;    // D02 in mid of G01
            const yg01bot = yd02 + d02h;  // KC5-KC9 rows
            const yi01 = yg01top + g01h + 2; // I01
            // Col2 heights
            const g02h = 165; // G02: ~33m
            const d01h = 80;  // D01: ~16m
            // Col2 row positions
            const yg02 = 0;
            const yd01 = g02h + 2;
            // Col4 heights
            const f01h = 43;
            const b01h = 53;
            const c01h = 75;
            const b02h = 30;
            const j02h = 249 - f01h - b01h - c01h - b02h - 4*2;
            const j01w = Math.round(c4w * 0.55);
            canvasZones = [
                { id:'M01', type:'M', x:c1x, y:ym01, w:c1w, h:m01h, config:null },
                { id:'G01', type:'G', x:c1x, y:yg01top, w:c1w, h:48, config:null },
                { id:'D02', type:'D', x:c1x, y:yd02, w:c1w, h:d02h, config:null },
                { id:'G01b', type:'G', x:c1x, y:yg01bot, w:c1w, h:49, config:null },
                { id:'I01', type:'I', x:c1x, y:yi01, w:c1w, h:i01h, config:null },
                { id:'G02', type:'G', x:c2x, y:yg02, w:c2w, h:g02h, config:null },
                { id:'D01', type:'D', x:c2x, y:yd01, w:c2w, h:d01h, config:null },
                { id:'G03', type:'G', x:c3x, y:0, w:c3w, h:249, config:null },
                { id:'F01', type:'F', x:c4x, y:0, w:c4w, h:f01h, config:null },
                { id:'B01', type:'B', x:c4x, y:f01h+2, w:c4w, h:b01h, config:null },
                { id:'C01', type:'C', x:c4x, y:f01h+b01h+4, w:Math.round(c4w*0.45), h:c01h, config:null },
                { id:'J01', type:'J', x:c4x+Math.round(c4w*0.45)+2, y:f01h+b01h+4, w:j01w, h:c01h, config:null },
                { id:'B02', type:'B', x:c4x, y:f01h+b01h+c01h+6, w:c4w, h:b02h, config:null },
                { id:'J02', type:'J', x:c4x, y:f01h+b01h+c01h+b02h+8, w:c4w, h:j02h, config:null },
            ];
            zoneCounter = { M:1, G:3, D:2, I:1, F:1, B:2, C:1, J:2 };
        }
        // Fit zoom after layout is done
        requestAnimationFrame(() => {
            mainZoomFit();
            renderCanvas();
            validateRules();
        });
        // Also run after layout reflow timeout to ensure correct dimensions are computed
        setTimeout(() => {
            mainZoomFit();
            renderCanvas();
        }, 100);
    }
}

// ════════════════════════════════════════
// ZOOM
// ════════════════════════════════════════
function mainZoomChange(delta) {
    canvasZoom = Math.max(0.1, Math.min(5, canvasZoom + delta));
    applyMainZoom();
}
function mainZoomFit() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    const canvasWrap = document.getElementById('canvas-wrap');
    const pxW = m2c(wh.len) * CELL_PX;
    const pxH = m2c(wh.wid) * CELL_PX;
    const availW = canvasWrap.clientWidth - 20;
    const availH = canvasWrap.clientHeight - 20;
    canvasZoom = Math.max(0.1, Math.min(availW / pxW, availH / pxH, 5));
    applyMainZoom();
}
function applyMainZoom() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    const canvas = document.getElementById('warehouse-canvas');
    canvas.style.transformOrigin = 'top left';
    canvas.style.transform = `scale(${canvasZoom})`;
    document.getElementById('main-zoom-label').textContent = Math.round(canvasZoom * 100) + '%';
    document.getElementById('canvas-size-label').textContent = `${wh.len}m × ${wh.wid}m · ${m2c(wh.len)}×${m2c(wh.wid)} ô`;
}

// ════════════════════════════════════════
// DRAG & DROP
// ════════════════════════════════════════
function startDrag(e, type, label) { draggingType = type; draggingLabel = label; e.dataTransfer.effectAllowed = 'copy'; e.dataTransfer.setData('text', 'zone'); }
function allowDrop(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; }
function onDrop(e) {
    e.preventDefault(); if (!draggingType) return;
    const canvas = document.getElementById('warehouse-canvas');
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / canvasZoom;
    const my = (e.clientY - rect.top) / canvasZoom;
    const cellX = Math.round(mx / CELL_PX);
    const cellY = Math.round(my / CELL_PX);
    if (!zoneCounter[draggingType]) zoneCounter[draggingType] = 0;
    zoneCounter[draggingType]++;
    const n = zoneCounter[draggingType];
    const id = `${draggingType}0${n}`;
    const wh = WAREHOUSES[selectedWarehouseId];
    const whCW = m2c(wh.len), whCH = m2c(wh.wid);
    const defs = { A: [m2c(8), m2c(5)], B: [m2c(16), m2c(9)], C: [m2c(11), m2c(8)], D: [m2c(10), m2c(8)], F: [m2c(11), m2c(8)], G: [m2c(21), m2c(11)], H: [m2c(17), m2c(9)], I: [m2c(14), m2c(8)], J: [m2c(16), m2c(9)], K: [m2c(12), m2c(8)], M: [m2c(15), m2c(9)], KH: [m2c(25), m2c(15)], BK: [m2c(25), m2c(15)] };
    const [dw, dh] = defs[draggingType] || [m2c(11), m2c(8)];
    const zx = snapCell(Math.max(0, Math.min(cellX - Math.floor(dw / 2), whCW - dw)));
    const zy = snapCell(Math.max(0, Math.min(cellY - Math.floor(dh / 2), whCH - dh)));
    const tempZone = { id, type: draggingType, x: zx, y: zy, w: dw, h: dh };
    if (wouldOverlap(tempZone, zx, zy)) { zoneCounter[draggingType]--; draggingType = null; showToast('Không thể đặt phân khu: chồng lấn với phân khu khác', 'error'); return; }
    canvasZones.push({ id, type: draggingType, label: draggingLabel, x: zx, y: zy, w: dw, h: dh, config: null });
    draggingType = null;
    renderCanvas(); validateRules(); checkOverlaps();
}

// ════════════════════════════════════════
// CANVAS RENDER
// ════════════════════════════════════════
function renderCanvas() {
    const canvas = document.getElementById('warehouse-canvas');
    canvas.innerHTML = '';
    const wh = WAREHOUSES[selectedWarehouseId];
    const cellsW = m2c(wh.len), cellsH = m2c(wh.wid);
    const pxW = cellsW * CELL_PX, pxH = cellsH * CELL_PX;
    // Grid
    const grid = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    grid.setAttribute('viewBox', `0 0 ${pxW} ${pxH}`);
    grid.style.cssText = `position:absolute;inset:0;width:${pxW}px;height:${pxH}px;pointer-events:none;z-index:0`;
    let lines = '';
    const c5m = 5 * CELL_PX;
    for (let x = 0; x <= pxW; x += c5m)lines += `<line x1="${x}" y1="0" x2="${x}" y2="${pxH}" stroke="rgba(100,116,139,.12)" stroke-width=".4"/>`;
    for (let y = 0; y <= pxH; y += c5m)lines += `<line x1="0" y1="${y}" x2="${pxW}" y2="${y}" stroke="rgba(100,116,139,.12)" stroke-width=".4"/>`;
    const c10m = 50 * CELL_PX;
    for (let x = 0; x <= pxW; x += c10m)lines += `<line x1="${x}" y1="0" x2="${x}" y2="${pxH}" stroke="rgba(100,116,139,.3)" stroke-width="1"/>`;
    for (let y = 0; y <= pxH; y += c10m)lines += `<line x1="0" y1="${y}" x2="${pxW}" y2="${y}" stroke="rgba(100,116,139,.3)" stroke-width="1"/>`;
    for (let i = 1; i * 10 <= wh.len; i++)lines += `<text x="${i * c10m + 2}" y="${pxH - 2}" fill="rgba(100,116,139,.5)" font-size="7" font-family="JetBrains Mono">${i * 10}m</text>`;
    for (let i = 1; i * 10 <= wh.wid; i++)lines += `<text x="2" y="${i * c10m - 2}" fill="rgba(100,116,139,.5)" font-size="7" font-family="JetBrains Mono">${i * 10}m</text>`;
    grid.innerHTML = lines; canvas.appendChild(grid);
    const overlapIds = getOverlapIds();
    canvasZones.forEach(zone => {
        const el = document.createElement('div');
        el.className = 'wh-zone' + (zone.id === selectedZoneId ? ' selected' : '') + (overlapIds.has(zone.id) ? ' overlap-err' : '');
        el.id = 'zone-el-' + zone.id;
        const zIndex = zone.type === 'NK' ? 1 : zone.type === 'A' ? 9 : zone.type === 'PCCC' ? 2 : zone.type === 'N' ? 3 : 5;
        const px = zone.x * CELL_PX, py = zone.y * CELL_PX, pw = zone.w * CELL_PX, ph = zone.h * CELL_PX;

        const zoneBg = ZONE_COLORS[zone.type] || '#FFFFFF';
        const zoneBorder = ZONE_BORDERS[zone.type] || '#B5B5B5';
        if (zone.type === 'A') {
            el.style.cssText = `left:${px}px;top:${py}px;width:${pw}px;height:${ph}px;background:transparent;border:1.5px dashed ${zoneBorder};z-index:${zIndex};pointer-events:none`;
        } else {
            el.style.cssText = `left:${px}px;top:${py}px;width:${pw}px;height:${ph}px;background:${zoneBg};border:1.5px dashed ${zoneBorder};z-index:${zIndex}`;
        }

        const wM = c2m(zone.w).toFixed(1), hM = c2m(zone.h).toFixed(1);
        const linkedLabel = zone.type === 'D' && zone.config?.linkedRackId ? ` ⇆ ${zone.config.linkedRackId}` : '';
        const hdr = document.createElement('div'); hdr.className = 'zone-hdr';

        if (zone.type === 'A') {
            hdr.style.cssText = 'pointer-events:auto;cursor:pointer;background:rgba(245,158,11,.15);color:#92400E;border-bottom:1px solid rgba(245,158,11,.3)';
            hdr.innerHTML = `<span>🚪 ${zone.id} — Cửa Nhập-Xuất</span><span style="font-size:7px;opacity:.6;font-weight:400">${zone.config?.doors?.length || 0} cửa</span>`;
            hdr.addEventListener('dblclick', e => { e.stopPropagation(); openZoneConfig(zone.id); });
        } else {
            hdr.innerHTML = `<span>${zone.id}${linkedLabel}</span><span style="font-size:7px;opacity:.6;font-weight:400">${wM}×${hM}m</span>`;
        }
        el.appendChild(hdr);

        if (zone.type !== 'A') {
            const bdy = document.createElement('div'); bdy.className = 'zone-bdy';
            if (zone.config && zone.config.subLayout && zone.config.subLayout.length > 0 && ['G', 'H', 'I', 'J', 'K', 'BK'].includes(zone.type)) {
                const subScale = Math.min(pw / m2spx(c2m(zone.w)), ph / m2spx(c2m(zone.h)));
                let miniHtml = '<div style="position:relative;width:100%;height:100%">';
                zone.config.subLayout.filter(r => r.type === 'aisle').forEach(a => {
                    const ax = Math.round(a.x * subScale), ay = Math.round(a.y * subScale);
                    const aw = Math.max(1, Math.round(a.w * subScale)), ah = Math.max(1, Math.round(a.h * subScale));
                    const isWalk = a.aisleType === 'walk';
                    const bgStyle = isWalk
                        ? 'repeating-linear-gradient(45deg, transparent, transparent 1.5px, rgba(16, 185, 129, .1) 1.5px, rgba(16, 185, 129, .1) 3px)'
                        : 'repeating-linear-gradient(45deg, transparent, transparent 1.5px, rgba(245, 158, 11, .08) 1.5px, rgba(245, 158, 11, .08) 3px)';
                    const borderStyle = isWalk
                        ? '0.5px dashed rgba(16, 185, 129, .4)'
                        : '0.5px dashed rgba(217, 119, 6, .2)';
                    miniHtml += `<div style="position:absolute;left:${ax}px;top:${ay}px;width:${aw}px;height:${ah}px;background:${bgStyle};border:${borderStyle}"></div>`;
                });
                zone.config.subLayout.filter(rack => rack.type !== 'aisle').forEach(rack => {
                    const rx = Math.round(rack.x * subScale), ry = Math.round(rack.y * subScale);
                    const rw = Math.max(2, Math.round(rack.w * subScale)), rh = Math.max(2, Math.round(rack.h * subScale));
                    const rate = getMockFillRate(rack.id);
                    const rc = getFillColor(rate);
                    const isPalletBox = zone && ['J', 'K'].includes(zone.type);
                    const isYard = zone && zone.type === 'BK';
                    const lvls = isPalletBox || isYard ? 1 : (rack.levels || 3);
                    const bays = rack.bays || 1;

                    let rackHtml = `<div style="position:absolute;left:${rx}px;top:${ry}px;width:${rw}px;height:${rh}px;background:#FFFFFF;border:0.5px solid #B5B5B5;overflow:hidden;display:flex;flex-direction:column">`;
                    if (rh > 8) rackHtml += `<div style="font-size:${Math.max(2, Math.min(5, rw / 6))}px;color:#475569;font-family:var(--mono);font-weight:700;padding:0 1px;background:rgba(0,0,0,.06);flex-shrink:0;white-space:nowrap;overflow:hidden;line-height:1.2">${rack.id}</div>`;

                    const gridH = rh - (rh > 8 ? Math.max(4, Math.min(8, rw / 5)) : 0);
                    const cellW = Math.max(1, (rw - 1) / bays);
                    const cellH = Math.max(1, (gridH - 1) / lvls);
                    if (cellW >= 1.5 && cellH >= 1.5) {
                        rackHtml += `<div style="flex:1;display:grid;grid-template-columns:repeat(${bays},1fr);grid-template-rows:repeat(${lvls},1fr);gap:0.5px;padding:0.5px;background:#B5B5B5">`;
                        for (let i = 0; i < lvls * bays; i++) rackHtml += `<div style="background:${rc}"></div>`;
                        rackHtml += `</div>`;
                    } else { rackHtml += `<div style="flex:1;background:${rc}"></div>`; }
                    rackHtml += `</div>`;
                    miniHtml += rackHtml;
                });
                const rackCount = zone.config.subLayout.filter(r => r.type !== 'aisle').length;
                const aisleCount = zone.config.subLayout.filter(r => r.type === 'aisle').length;
                miniHtml += `<div style="position:absolute;bottom:0;left:0;right:0;text-align:center;font-size:${Math.max(4, Math.min(7, pw / 12))}px;color:#64748B;background:rgba(0,0,0,.06);padding:1px">✓ ${rackCount} dãy · ${aisleCount} lối đi</div>`;
                miniHtml += '</div>';
                bdy.innerHTML = miniHtml;
            } else if (zone.config && ['G', 'H', 'I'].includes(zone.type)) {
                bdy.innerHTML = renderRackGridCell(zone);
            } else if (zone.config && zone.type === 'J') {
                bdy.innerHTML = renderPalletGridCell(zone);
            } else if (zone.config && zone.type === 'K') {
                bdy.innerHTML = renderBoxGridCell(zone);
            } else {
                bdy.innerHTML = `<span style="font-size:${Math.max(6, Math.min(9, pw / 8))}px;text-align:center;color:#475569">${ZONE_LABELS[zone.type] || zone.type}</span>`;
            }
            el.appendChild(bdy);
        }

        // Delete btn
        const delBtn = document.createElement('div');
        delBtn.style.cssText = 'position:absolute;top:0;right:0;width:12px;height:12px;border-radius:2px;background:rgba(239,68,68,.8);color:white;font-size:8px;font-weight:700;display:none;align-items:center;justify-content:center;cursor:pointer;z-index:10;line-height:1';
        delBtn.textContent = '✕';
        delBtn.addEventListener('click', ev => { ev.stopPropagation(); showConfirm('Xóa phân khu', 'Bạn có chắc muốn xóa phân khu ' + zone.id + '?', () => { canvasZones = canvasZones.filter(z => z.id !== zone.id); selectedZoneId = null; renderCanvas(); checkOverlaps(); validateRules(); }); });
        el.appendChild(delBtn);

        el.addEventListener('mouseenter', () => { delBtn.style.display = 'flex'; });
        el.addEventListener('mouseleave', () => { delBtn.style.display = 'none'; });
        el.addEventListener('mousedown', e => { if (e.detail >= 2) return; startMove(e, zone.id); });
        el.addEventListener('click', e => { e.stopPropagation(); selectZone(zone.id); });
        el.addEventListener('dblclick', e => { e.stopPropagation(); if (moveState) { moveState = null; document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', stopMove); } if (['G', 'H', 'I', 'J', 'K', 'BK'].includes(zone.type)) { openSubCanvas(zone.id); } else { openZoneConfig(zone.id); } });

        // Doors
        if (zone.config?.doors && zone.config.doors.length > 0) {
            zone.config.doors.forEach((d, di) => {
                const doorEl = document.createElement('div');
                const doorW = m2c(d.width) * CELL_PX, doorOff = m2c(d.offset) * CELL_PX, doorThick = 4;
                let dStyle = `position:absolute;background:#F59E0B;z-index:8;${zone.type === 'A' ? 'pointer-events:auto;cursor:pointer;' : ''}`;
                if (d.wall === 'top') { dStyle += `top:-${doorThick / 2}px;left:${doorOff}px;width:${doorW}px;height:${doorThick}px;`; }
                else if (d.wall === 'bottom') { dStyle += `bottom:-${doorThick / 2}px;left:${doorOff}px;width:${doorW}px;height:${doorThick}px;`; }
                else if (d.wall === 'left') { dStyle += `left:-${doorThick / 2}px;top:${doorOff}px;width:${doorThick}px;height:${doorW}px;`; }
                else { dStyle += `right:-${doorThick / 2}px;top:${doorOff}px;width:${doorThick}px;height:${doorW}px;`; }
                doorEl.style.cssText = dStyle;
                doorEl.title = `Cửa ${di + 1}: tường ${d.wall}, rộng ${d.width}m, cách gốc ${d.offset}m`;
                if (zone.type === 'A') { doorEl.addEventListener('dblclick', e => { e.stopPropagation(); openZoneConfig(zone.id); }); }
                el.appendChild(doorEl);
            });
        }
        canvas.appendChild(el);
    });
}

// ════════════════════════════════════════
// OVERLAP
// ════════════════════════════════════════
function rectsOverlap(a, b) { return !(a.x + a.w <= b.x || b.x + b.w <= a.x || a.y + a.h <= b.y || b.y + b.h <= a.y); }
function isOverlapAllowed(tA, tB) { if (tA === 'D' || tB === 'D') return true; return false; }
function wouldOverlap(movingZone, newX, newY, newW, newH) {
    const r = { x: newX, y: newY, w: newW || movingZone.w, h: newH || movingZone.h };
    for (const o of canvasZones) { if (o.id === movingZone.id) continue; if (isOverlapAllowed(movingZone.type, o.type)) continue; if (rectsOverlap(r, o)) return true; }
    return false;
}
function getOverlapIds() {
    const ids = new Set();
    const mz = canvasZones.filter(z => MANDATORY_TYPES.has(z.type) || ['G', 'H', 'I', 'J', 'K'].includes(z.type));
    for (let i = 0; i < mz.length; i++)for (let j = i + 1; j < mz.length; j++) {
        const a = mz[i], b = mz[j];
        if (!isOverlapAllowed(a.type, b.type) && rectsOverlap(a, b)) { ids.add(a.id); ids.add(b.id); }
    }
    return ids;
}
function checkOverlaps() {
    const ids = getOverlapIds();
    canvasZones.forEach(z => { const el = document.getElementById('zone-el-' + z.id); if (el) el.classList.toggle('overlap-err', ids.has(z.id)); });
    const ind = document.getElementById('canvas-overlap-indicator');
    if (ind) { if (ids.size > 0) { ind.style.display = 'inline'; ind.style.color = 'var(--danger)'; ind.textContent = `⚠ ${ids.size / 2 | 0} phân khu bị chồng lấn`; } else { ind.style.display = 'none'; } }
}

// ════════════════════════════════════════
// MOVE
// ════════════════════════════════════════
function startMove(e, id) {
    e.preventDefault();
    const zone = canvasZones.find(z => z.id === id); if (!zone) return;
    selectZone(id);
    const canvas = document.getElementById('warehouse-canvas');
    const cr = canvas.getBoundingClientRect();
    const mx = (e.clientX - cr.left) / canvasZoom;
    const my = (e.clientY - cr.top) / canvasZoom;
    moveState = { id, ox: mx / CELL_PX - zone.x, oy: my / CELL_PX - zone.y };
    document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', stopMove);
}
function onMove(e) {
    if (!moveState) return;
    const canvas = document.getElementById('warehouse-canvas');
    const wh = WAREHOUSES[selectedWarehouseId];
    const cr = canvas.getBoundingClientRect();
    const zone = canvasZones.find(z => z.id === moveState.id); if (!zone) return;
    const whCW = m2c(wh.len), whCH = m2c(wh.wid);
    const mx = (e.clientX - cr.left) / canvasZoom;
    const my = (e.clientY - cr.top) / canvasZoom;
    let nx = snapCell(Math.max(0, Math.min(mx / CELL_PX - moveState.ox, whCW - zone.w)));
    let ny = snapCell(Math.max(0, Math.min(my / CELL_PX - moveState.oy, whCH - zone.h)));
    if (!wouldOverlap(zone, nx, ny)) {
        zone.x = nx; zone.y = ny;
        const el = document.getElementById('zone-el-' + zone.id);
        if (el) { el.style.left = (zone.x * CELL_PX) + 'px'; el.style.top = (zone.y * CELL_PX) + 'px'; }
    }
}
function stopMove() { moveState = null; document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', stopMove); checkOverlaps(); validateRules(); }
document.addEventListener('keydown', e => {
    if (e.key === 'Delete' && selectedZoneId && !document.getElementById('sub-canvas-overlay').classList.contains('active')) {
        const zone = canvasZones.find(z => z.id === selectedZoneId); if (!zone) return;
        showConfirm('Xóa phân khu', 'Bạn có chắc muốn xóa phân khu ' + selectedZoneId + '?', () => { canvasZones = canvasZones.filter(z => z.id !== selectedZoneId); selectedZoneId = null; renderCanvas(); checkOverlaps(); validateRules(); });
    }
    if (e.key === 'Delete' && subSelectedId && document.getElementById('sub-canvas-overlay').classList.contains('active')) { e.stopPropagation(); deleteSubRack(subSelectedId); }
});
function selectZone(id) { selectedZoneId = id; document.querySelectorAll('.wh-zone').forEach(el => { el.classList.toggle('selected', el.id === 'zone-el-' + id); }); }
function onCanvasClick(e) { if (e.target === document.getElementById('warehouse-canvas') || e.target.tagName === 'svg' || e.target.tagName === 'line' || e.target.tagName === 'text') { selectedZoneId = null; document.querySelectorAll('.wh-zone').forEach(el => el.classList.remove('selected')); } }

// ════════════════════════════════════════
// VALIDATION
// ════════════════════════════════════════
function validateRules() {
    const types = canvasZones.map(z => z.type);
    const has = t => types.includes(t);
    const hasAny = (...ts) => ts.some(t => types.includes(t));
    const overlapIds = getOverlapIds();
    const wh = WAREHOUSES[selectedWarehouseId];
    const outOfBounds = canvasZones.some(z => z.x + z.w > m2c(wh.len) || z.y + z.h > m2c(wh.wid));
    const rules = [
        { ok: has('B'), msg: 'Khu chờ Nhập-Xuất B(n) bắt buộc' },
        { ok: has('D'), msg: 'Khu dự phòng D(n) bắt buộc' },
        { ok: has('F'), msg: 'Khu làm việc F(n) bắt buộc' },
        { ok: hasAny('G', 'H', 'I'), msg: 'Bắt buộc ít nhất 1 khu vực giá kệ G/H/I' },
        { ok: hasAny('J', 'K'), msg: 'Bắt buộc pallet J(n) hoặc thùng gỗ K(n)', warn: true },
        { ok: overlapIds.size === 0, msg: 'Phân khu bắt buộc bị chồng lấn' },
        { ok: !outOfBounds, msg: 'Phân khu vượt ngoài phạm vi nhà kho' },
    ];
    const el = document.getElementById('validation-list'); if (!el) return;
    el.innerHTML = rules.map(r => `<div class="validate-item ${r.ok ? 'ok' : r.warn ? 'warn' : 'err'}"><span class="validate-icon">${r.ok ? '✓' : r.warn ? '⚠' : '✗'}</span><span>${r.msg}</span></div>`).join('');
}

function saveDraft() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (wh) wh.status = 'configuring';
    const sb = document.getElementById('cfg-bar-status'); if (sb) { sb.className = 'badge badge-yellow'; sb.textContent = 'Đang cấu hình'; }
    const m = document.getElementById('cfg-status-msg'); if (m) { m.textContent = '✓ Đã lưu nháp'; m.style.color = 'var(--warn)'; }
    showToast('Đã lưu nháp thành công!');
}

function finishConfig() {
    validateRules(); checkOverlaps();
    const types = canvasZones.map(z => z.type);
    const required = ['B', 'D', 'F'];
    const missing = required.filter(t => !types.includes(t));
    const hasRack = ['G', 'H', 'I'].some(t => types.includes(t));
    const overlapIds = getOverlapIds();
    const wh = WAREHOUSES[selectedWarehouseId];
    const outOfBounds = canvasZones.some(z => z.x + z.w > m2c(wh.len) || z.y + z.h > m2c(wh.wid));
    const m = document.getElementById('cfg-status-msg');
    if (missing.length > 0 || !hasRack) { m.textContent = '⚠ Còn thiếu phân khu bắt buộc!'; m.style.color = 'var(--danger)'; return; }
    if (overlapIds.size > 0) { m.textContent = '⚠ Có phân khu bị chồng lấn!'; m.style.color = 'var(--danger)'; return; }
    if (outOfBounds) { m.textContent = '⚠ Có phân khu vượt ngoài nhà kho!'; m.style.color = 'var(--danger)'; return; }
    if (wh) wh.status = 'configured';
    const sb = document.getElementById('cfg-bar-status'); if (sb) { sb.className = 'badge badge-green'; sb.textContent = 'Đã cấu hình'; }
    if (m) { m.textContent = '✓ Cấu hình hoàn tất!'; m.style.color = 'var(--success)'; }
    showToast('Cấu hình hoàn tất thành công!');
}

// ════════════════════════════════════════
// ZONE CONFIG POPUP
// ════════════════════════════════════════
function openZoneConfig(id) {
    const zone = canvasZones.find(z => z.id === id); if (!zone) return;
    currentZonePopup = id;
    const wh = WAREHOUSES[selectedWarehouseId];
    document.getElementById('popup-title').textContent = zone.type === 'A' ? `🚪 Khai báo cửa nhập xuất` : `Cấu hình: ${zone.id}`;
    document.getElementById('popup-sub').textContent = zone.type === 'A' ? `Kho ${wh.name} — ${wh.len}m × ${wh.wid}m` : ZONE_LABELS[zone.type] || zone.type;
    document.getElementById('zone-popup').style.display = 'flex';
    if (!zone.config) zone.config = {};
    const cfg = zone.config;
    if (zone.type === 'A') {
        if (!cfg.doors || cfg.doors.length === 0) {
            cfg.doors = [{ wall: 'top', width: 2, offset: 0 }];
        } else if (cfg.doors.length > 1) {
            cfg.doors = [cfg.doors[0]];
        }
    }
    const zoneW = +c2m(zone.w).toFixed(1), zoneH = +c2m(zone.h).toFixed(1);
    const maxW = wh.len, maxH = wh.wid;
    const overlapIds = getOverlapIds();
    const hasOverlap = overlapIds.has(zone.id);
    const whCW = m2c(wh.len), whCH = m2c(wh.wid);
    const sizeOk = (zone.x + zone.w) <= whCW && (zone.y + zone.h) <= whCH;

    // Manage delete button visibility in footer
    const deleteBtn = document.querySelector('#zone-popup .btn-danger');
    if (deleteBtn) {
        if (['F', 'B', 'M', 'C', 'D', 'A'].includes(zone.type)) {
            deleteBtn.style.display = 'none';
        } else {
            deleteBtn.style.display = 'block';
        }
    }

    let html = '';

    html += `
<div class="overlap-warning${hasOverlap ? ' show' : ''}">⚠ Phân khu đang chồng lấn với phân khu bắt buộc khác.</div>
<div class="size-warning${!sizeOk ? ' show' : ''}">⚠ Phân khu vượt ra ngoài phạm vi nhà kho (${wh.len}m × ${wh.wid}m).</div>`;

    if (!['F', 'B', 'M', 'C', 'D', 'A'].includes(zone.type)) {
        html += `
<div class="info-block">
<div class="info-block-title">Thông tin vị trí</div>
<div class="info-block-row">Mã phân khu: <span>${zone.id}</span></div>
<div class="info-block-row">Vị trí: <span class="font-mono">${c2m(zone.x).toFixed(1)}m, ${c2m(zone.y).toFixed(1)}m</span></div>
<div class="info-block-row">Kích thước: <span class="font-mono">${zoneW}m × ${zoneH}m</span></div>
<div class="info-block-row">Diện tích: <span class="font-mono">${(zoneW * zoneH).toFixed(1)} m²</span></div>
</div>`;
    }

    if (zone.type !== 'A') {
        html += `
<div class="form-group"><label class="form-label">Tên phân khu</label><input class="form-input" id="pf-name" value="${zone.label || ''}"></div>
<div class="form-row">
<div class="form-group"><label class="form-label">Chiều dài (m)</label><input class="form-input" id="pf-len" type="number" step="0.2" min="0.2" max="${maxW}" value="${zoneW}" oninput="onPopupSizeChange()"></div>
<div class="form-group"><label class="form-label">Chiều rộng (m)</label><input class="form-input" id="pf-wid" type="number" step="0.2" min="0.2" max="${maxH}" value="${zoneH}" oninput="onPopupSizeChange()"></div>
</div>
<div class="form-group"><label class="form-label">Diện tích (m²)</label><input class="form-input" id="pf-area" readonly value="${(zoneW * zoneH).toFixed(1)}"></div>
<div class="form-group"><label class="form-label">Ghi chú</label><input class="form-input" id="pf-note" value="${cfg.note || ''}"></div>`;
    }

    // Reserve Zone D
    if (zone.type === 'D') {
        const rackItems = [];
        canvasZones.filter(z => ['G', 'H', 'I', 'J', 'K', 'BK'].includes(z.type) && z.config?.subLayout).forEach(z => {
            z.config.subLayout.filter(r => r.type !== 'aisle').forEach(rack => {
                const wm = spx2m(rack.w).toFixed(1), hm = spx2m(rack.h).toFixed(1);
                rackItems.push({
                    id: rack.id, zoneId: z.id, rackX: rack.x, rackY: rack.y, rackW: rack.w, rackH: rack.h,
                    label: `${rack.id} — ${wm}×${hm}m (trong ${z.id})`
                });
            });
        });
        canvasZones.filter(z => ['G', 'H', 'I', 'J', 'K', 'BK'].includes(z.type) && z.config && !z.config.subLayout).forEach(z => {
            const rType = z.type === 'G' ? 'KC' : z.type === 'H' ? 'KT' : z.type === 'I' ? 'KN' : z.type === 'J' ? (z.config.palletType || 'PL1') : z.type === 'K' ? (z.config.boxType || 'TN2') : z.type === 'BK' ? 'KV' : 'KC';
            const rows = z.config.rowCount || 0;
            for (let r = 1; r <= rows; r++) {
                rackItems.push({
                    id: `${rType}.${r}`, zoneId: z.id, rackX: 0, rackY: 0, rackW: 0, rackH: 0,
                    label: `${rType}.${r} (trong ${z.id} — chưa setup chi tiết)`
                });
            }
        });
        const selRack = cfg.linkedRackId || '';
        const selPos = cfg.linkedPosition || 'right';
        html += `<hr class="sep">
<div class="form-section-title">Neo trực tiếp vào dãy kệ</div>
<div style="background:var(--bg3);border:1px solid var(--border);padding:8px;margin-bottom:8px;font-size:10px;color:var(--text2)">
ℹ Chọn dãy kệ cụ thể đã đặt trong mặt bằng kỹ thuật. D sẽ neo sát cạnh dãy kệ đó.
</div>
<div class="form-row">
<div class="form-group">
<label class="form-label">Dãy kệ neo <span class="req">*</span></label>
<select class="form-input" id="pf-linked-rack">
<option value="">— Không neo —</option>
${rackItems.map(ri => `<option value="${ri.id}" data-zone="${ri.zoneId}" data-rx="${ri.rackX}" data-ry="${ri.rackY}" data-rw="${ri.rackW}" data-rh="${ri.rackH}" ${ri.id === selRack ? 'selected' : ''}>${ri.label}</option>`).join('')}
</select>
</div>
<div class="form-group">
<label class="form-label">Vị trí đứng so với kệ</label>
<select class="form-input" id="pf-linked-pos">
<option value="left" ${selPos === 'left' ? 'selected' : ''}>Bên trái</option>
<option value="right" ${selPos === 'right' ? 'selected' : ''}>Bên phải</option>
<option value="top" ${selPos === 'top' ? 'selected' : ''}>Phía trước (trên)</option>
<option value="bottom" ${selPos === 'bottom' ? 'selected' : ''}>Phía sau (dưới)</option>
</select>
</div>
</div>`;
    }

    // Price Racks G/H/I
    if (['G', 'H', 'I'].includes(zone.type)) {
        const rackType = zone.type === 'G' ? 'KC' : zone.type === 'H' ? 'KT' : 'KN';
        const rackInfo = CCDC_RACK[rackType];
        html += `<hr class="sep">
<div class="form-section-title">Cấu hình Giá kệ — ${rackType}</div>
<div class="info-block">
<div class="info-block-title">Thông số CCDC (cố định theo danh mục)</div>
<div class="info-block-row">Loại: <span>${rackInfo.name}</span></div>
<div class="info-block-row">Tải trọng tối đa: <span class="dim-badge">${rackInfo.maxLoad} kg/tầng</span></div>
<div class="info-block-row">Ghi chú: <span>${rackInfo.note}</span></div>
<div class="info-block-row" style="margin-top:4px">Mã vị trí: <span class="font-mono" style="color:var(--primary)">${rackType}.dãy.tầng.khoang</span></div>
</div>
<div class="form-row">
<div class="form-group"><label class="form-label">Số dãy kệ</label><input class="form-input" id="pf-rows" type="number" min="1" max="20" value="${cfg.rowCount || 3}" oninput="calcRackStats();renderRowDetailSection()"></div>
<div class="form-group"><label class="form-label">Số tầng / kệ</label><input class="form-input" id="pf-levels" type="number" min="1" max="10" value="${cfg.levelCount || 3}" oninput="calcRackStats()"></div>
</div>
<div class="form-row">
<div class="form-group"><label class="form-label">Số khoang / tầng</label><input class="form-input" id="pf-bays" type="number" min="1" max="20" value="${cfg.bayPerLevel || 5}" oninput="calcRackStats()"></div>
<div class="form-group"><label class="form-label">Chiều rộng lối đi (m)</label><input class="form-input" id="pf-aisle" type="number" step="0.1" value="${cfg.aisleWidthM || 2.3}"></div>
</div>
<div class="form-row">
<div class="form-group"><label class="form-label">Khoảng cách lưng kệ (m) <span style="color:var(--text3);font-size:9px">≥ 0.1m</span></label><input class="form-input" id="pf-backgap" type="number" step="0.05" value="${cfg.backToBackGapM || 0.1}"></div>
<div class="form-group"><label class="form-label">Dùng xe nâng</label><select class="form-input" id="pf-forklift"><option ${cfg.forklift ? 'selected' : ''}>Có</option><option ${!cfg.forklift ? 'selected' : ''}>Không</option></select></div>
</div>
<div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:10px;margin-top:4px">
<div class="info-block-title">Thống kê tự tính</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-top:6px">
<div style="text-align:center"><div style="font-size:18px;font-weight:700;font-family:var(--mono);color:var(--primary)" id="rs-total">45</div><div style="font-size:9px;color:var(--text2)">Tổng vị trí</div></div>
<div style="text-align:center"><div style="font-size:18px;font-weight:700;font-family:var(--mono);color:var(--success)" id="rs-rows">3</div><div style="font-size:9px;color:var(--text2)">Dãy</div></div>
<div style="display:none"><div style="font-size:18px;font-weight:700;font-family:var(--mono);color:var(--warn)" id="rs-levels">3</div><div style="font-size:9px;color:var(--text2)">Tầng</div></div>
<div style="text-align:center"><div style="font-size:18px;font-weight:700;font-family:var(--mono);color:var(--purple)" id="rs-bays">5</div><div style="font-size:9px;color:var(--text2)">Khoang</div></div>
</div>
</div>
<div class="form-group" style="margin-top:8px">
<label class="form-label">Mã vị trí mẫu (tự sinh)</label>
<div id="rack-code-preview" style="background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:8px;font-family:var(--mono);font-size:10px;color:var(--primary);line-height:2"></div>
</div>
${buildRowDetailSection(zone, 'rack')}`;
    }

    // Pallet J
    if (zone.type === 'J') {
        const selPL = cfg.palletType || 'PL1';
        const pallets = Object.entries(CCDC_PALLET);
        html += `<hr class="sep">
<div class="form-section-title">Cấu hình Khu vực Pallet</div>
<div class="form-group">
<label class="form-label">Loại Pallet (chuẩn CCDC) <span class="req">*</span></label>
<select class="form-input" id="pf-ptype" onchange="onPalletTypeChange()">
${pallets.map(([k, v]) => `<option value="${k}" ${k === selPL ? 'selected' : ''}>${k} — ${v.name}</option>`).join('')}
</select>
</div>
<div class="info-block" id="pallet-dim-block">
<div class="info-block-title">Kích thước chuẩn (cố định, không chỉnh sửa)</div>
<div class="info-block-row">Chiều dài: <span class="dim-badge" id="pd-len">${CCDC_PALLET[selPL].l} mm</span></div>
<div class="info-block-row">Chiều rộng: <span class="dim-badge" id="pd-wid">${CCDC_PALLET[selPL].w} mm</span></div>
<div class="info-block-row">Ghi chú: <span id="pd-note">${CCDC_PALLET[selPL].note || ''}</span></div>
<div class="info-block-row" style="margin-top:4px">Mã vị trí: <span class="font-mono" style="color:var(--primary)" id="pd-code">${selPL}.dãy.tầng.vị_trí</span></div>
</div>
<div class="form-row">
<div class="form-group"><label class="form-label">Số dãy</label><input class="form-input" id="pf-rows" type="number" min="1" value="${cfg.rowCount || 4}" oninput="calcPalletStats();renderRowDetailSection()"></div>
<div class="form-group"><label class="form-label">Số tầng xếp</label><input class="form-input" id="pf-levels" type="number" min="1" value="${cfg.levelCount || 2}" oninput="calcPalletStats()"></div>
</div>
<div class="form-row">
<div class="form-group"><label class="form-label">Số pallet / dãy</label><input class="form-input" id="pf-bays" type="number" min="1" value="${cfg.palletPerRow || 10}" oninput="calcPalletStats()"></div>
<div class="form-group"><label class="form-label">Khoảng cách (m) <span style="color:var(--text3);font-size:9px">≥ 0.1m</span></label><input class="form-input" id="pf-gap" type="number" step="0.05" value="${cfg.gapM || 0.1}"></div>
</div>
<div class="form-group"><label class="form-label">Chiều rộng lối đi (m)</label><input class="form-input" id="pf-aisle" type="number" step="0.1" value="${cfg.aisleWidthM || 2.3}"></div>
<div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:10px;margin-top:4px">
<div class="info-block-title">Thống kê</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
<div><div style="font-size:20px;font-weight:700;font-family:var(--mono);color:var(--primary)" id="ps-total">80</div><div style="font-size:9px;color:var(--text2)">Tổng pallet</div></div>
<div><div style="font-size:13px;font-weight:600;font-family:var(--mono);color:var(--success)" id="ps-code">${selPL}.1.1.1</div><div style="font-size:9px;color:var(--text2)">Mã đầu tiên</div></div>
</div>
</div>
${buildRowDetailSection(zone, 'pallet')}`;
    }

    // Box K
    if (zone.type === 'K') {
        const selTN = cfg.boxType || 'TN2';
        const boxes = Object.entries(CCDC_BOX);
        html += `<hr class="sep">
<div class="form-section-title">Cấu hình Khu vực Thùng gỗ</div>
<div class="form-group">
<label class="form-label">Loại Thùng gỗ (chuẩn CCDC) <span class="req">*</span></label>
<select class="form-input" id="pf-btype" onchange="onBoxTypeChange()">
${boxes.map(([k, v]) => `<option value="${k}" ${k === selTN ? 'selected' : ''}>${k} — ${v.name}</option>`).join('')}
</select>
</div>
<div class="info-block" id="box-dim-block">
<div class="info-block-title">Kích thước chuẩn (cố định, không chỉnh sửa)</div>
<div class="info-block-row">Dài × Rộng × Cao: <span class="dim-badge" id="bd-dims">${CCDC_BOX[selTN].l}×${CCDC_BOX[selTN].w}×${CCDC_BOX[selTN].h} mm</span></div>
<div class="info-block-row">Tải trọng tối đa: <span class="dim-badge dim-badge-warn" id="bd-load">< ${CCDC_BOX[selTN].maxLoad} kg</span></div>
<div class="info-block-row">RFID: <span id="bd-rfid">${CCDC_BOX[selTN].rfid !== false ? 'Có' : 'Không (không quy hoạch RFID)'}</span></div>
</div>
<div class="form-row">
<div class="form-group"><label class="form-label">Số dãy</label><input class="form-input" id="pf-rows" type="number" min="1" value="${cfg.rowCount || 3}" oninput="calcBoxStats();renderRowDetailSection()"></div>
<div class="form-group"><label class="form-label">Số tầng xếp</label><input class="form-input" id="pf-levels" type="number" min="1" value="${cfg.levelCount || 2}"></div>
</div>
<div class="form-row">
<div class="form-group"><label class="form-label">Số thùng / dãy</label><input class="form-input" id="pf-bays" type="number" min="1" value="${cfg.boxPerRow || 8}" oninput="calcBoxStats()"></div>
<div class="form-group"><label class="form-label">Khoảng cách (m) <span style="color:var(--text3);font-size:9px">≥ 0.1m</span></label><input class="form-input" id="pf-gap" type="number" step="0.05" value="${cfg.gapM || 0.1}"></div>
</div>
<div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:10px;margin-top:4px">
<div class="info-block-title">Thống kê</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
<div><div style="font-size:20px;font-weight:700;font-family:var(--mono);color:var(--primary)" id="bs-total">48</div><div style="font-size:9px;color:var(--text2)">Tổng thùng gỗ</div></div>
<div><div style="font-size:13px;font-weight:600;font-family:var(--mono);color:var(--success)" id="bs-code">${selTN}.1.1.1</div><div style="font-size:9px;color:var(--text2)">Mã đầu tiên</div></div>
</div>
</div>
${buildRowDetailSection(zone, 'box')}`;
    }

    // Door Config
    if (['NK', 'A', 'E', 'L', 'PK', 'CK'].includes(zone.type)) {
        if (zone.type === 'A') {
            const d = cfg.doors[0];
            html += `<hr class="sep"><div class="form-section-title">🚪 Khai báo cửa</div>
<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:0"><label class="form-label">Tường</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" id="door-wall-0">
<option value="top" ${d.wall === 'top' ? 'selected' : ''}>Trên (Bắc)</option>
<option value="bottom" ${d.wall === 'bottom' ? 'selected' : ''}>Dưới (Nam)</option>
<option value="left" ${d.wall === 'left' ? 'selected' : ''}>Trái (Tây)</option>
<option value="right" ${d.wall === 'right' ? 'selected' : ''}>Phải (Đông)</option>
</select></div>
<div class="form-group" style="margin-bottom:0"><label class="form-label">Rộng cửa (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.4" value="${d.width || 2}" id="door-width-0"></div>
</div>
<div class="form-group" style="margin-bottom:0"><label class="form-label">Cách gốc tường (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0" value="${d.offset || 0}" id="door-offset-0">
</div>`;
        } else {
            const doors = cfg.doors || [];
            html += `<hr class="sep"><div class="form-section-title">🚪 Khai báo cửa</div>
<div id="door-list">`;
            doors.forEach((d, i) => {
                html += `<div style="background:var(--bg2);border:1px solid var(--border);padding:6px 8px;margin-bottom:4px;font-size:11px">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
<span style="font-weight:700;color:var(--primary);font-family:var(--mono)">Cửa ${i + 1}</span>
<span style="margin-left:auto;color:var(--danger);cursor:pointer;font-size:10px" onclick="removeDoor(${i})">✕ Xóa</span>
</div>
<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:0"><label class="form-label">Tường</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" id="door-wall-${i}">
<option value="top" ${d.wall === 'top' ? 'selected' : ''}>Trên (Bắc)</option>
<option value="bottom" ${d.wall === 'bottom' ? 'selected' : ''}>Dưới (Nam)</option>
<option value="left" ${d.wall === 'left' ? 'selected' : ''}>Trái (Tây)</option>
<option value="right" ${d.wall === 'right' ? 'selected' : ''}>Phải (Đông)</option>
</select></div>
<div class="form-group" style="margin-bottom:0"><label class="form-label">Rộng cửa (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.4" value="${d.width || 2}" id="door-width-${i}"></div>
</div>
<div class="form-group" style="margin-bottom:0"><label class="form-label">Cách gốc tường (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0" value="${d.offset || 0}" id="door-offset-${i}">
</div></div>`;
            });
            html += `</div><button class="btn btn-ghost btn-sm" style="width:100%" onclick="addDoor()">+ Thêm cửa</button>`;
        }
    }
    document.getElementById('popup-body').innerHTML = html;

    // Init computed stats
    if (['G', 'H', 'I'].includes(zone.type)) calcRackStats();
    if (zone.type === 'J') calcPalletStats();
    if (zone.type === 'K') calcBoxStats();
}

function onPopupSizeChange() {
    const l = parseFloat(document.getElementById('pf-len')?.value) || 0;
    const w = parseFloat(document.getElementById('pf-wid')?.value) || 0;
    const areaEl = document.getElementById('pf-area'); if (areaEl) areaEl.value = (l * w).toFixed(1);
}

function saveZoneConfig() {
    const zone = canvasZones.find(z => z.id === currentZonePopup); if (!zone) { closePopup(); return; }
    const wh = WAREHOUSES[selectedWarehouseId];
    zone.config = zone.config || {};

    const l = parseFloat(document.getElementById('pf-len')?.value) || c2m(zone.w);
    const w = parseFloat(document.getElementById('pf-wid')?.value) || c2m(zone.h);
    const whCW = m2c(wh.len), whCH = m2c(wh.wid);
    if (zone.x + m2c(l) > whCW || zone.y + m2c(w) > whCH) { if (!confirm(`Kích thước vượt quá phạm vi nhà kho (${wh.len}m × ${wh.wid}m). Vẫn lưu?`)) return; }
    zone.w = Math.max(1, m2c(l)); zone.h = Math.max(1, m2c(w));
    const nameEl = document.getElementById('pf-name'); if (nameEl) zone.label = nameEl.value;
    const note = document.getElementById('pf-note'); if (note) zone.config.note = note.value;

    const rowsEl = document.getElementById('pf-rows'), levelsEl = document.getElementById('pf-levels'), baysEl = document.getElementById('pf-bays');
    if (rowsEl) zone.config.rowCount = parseInt(rowsEl.value) || 3;
    if (levelsEl) zone.config.levelCount = parseInt(levelsEl.value) || 3;
    if (baysEl) { zone.config.bayPerLevel = parseInt(baysEl.value); zone.config.palletPerRow = parseInt(baysEl.value); zone.config.boxPerRow = parseInt(baysEl.value); }
    const aisleEl = document.getElementById('pf-aisle'); if (aisleEl) zone.config.aisleWidthM = parseFloat(aisleEl.value);
    const gapEl = document.getElementById('pf-gap'); if (gapEl) zone.config.gapM = parseFloat(gapEl.value);
    const bgEl = document.getElementById('pf-backgap'); if (bgEl) zone.config.backToBackGapM = parseFloat(bgEl.value);
    const fkEl = document.getElementById('pf-forklift'); if (fkEl) zone.config.forklift = fkEl.value === 'Có';
    const ptEl = document.getElementById('pf-ptype'); if (ptEl) zone.config.palletType = ptEl.value;
    const btEl = document.getElementById('pf-btype'); if (btEl) zone.config.boxType = btEl.value;
    const pcEl = document.getElementById('pf-pccc-w'); if (pcEl) zone.config.pcccWidth = parseFloat(pcEl.value);

    if (zone.type === 'D') {
        const linkedRackEl = document.getElementById('pf-linked-rack');
        const linkedPosEl = document.getElementById('pf-linked-pos');
        if (linkedRackEl) zone.config.linkedRackId = linkedRackEl.value || null;
        if (linkedPosEl) zone.config.linkedPosition = linkedPosEl.value || 'right';
    }

    if (['G', 'H', 'I', 'J', 'K', 'BK'].includes(zone.type)) {
        saveRowDetailsToConfig(zone);
    }

    if (zone.config && zone.config.doors) {
        zone.config.doors.forEach((d, i) => {
            const wallEl = document.getElementById(`door-wall-${i}`);
            const widthEl = document.getElementById(`door-width-${i}`);
            const offsetEl = document.getElementById(`door-offset-${i}`);
            if (wallEl) d.wall = wallEl.value;
            if (widthEl) d.width = parseFloat(widthEl.value) || 2;
            if (offsetEl) d.offset = parseFloat(offsetEl.value) || 0;
        });
    }

    closePopup(); renderCanvas(); checkOverlaps(); validateRules();
}

function addDoor() {
    const zone = canvasZones.find(z => z.id === currentZonePopup); if (!zone) return;
    if (!zone.config) zone.config = {};
    if (!zone.config.doors) zone.config.doors = [];
    zone.config.doors.push({ wall: 'top', width: 2, offset: 0 });
    openZoneConfig(currentZonePopup);
}
function removeDoor(idx) {
    const zone = canvasZones.find(z => z.id === currentZonePopup); if (!zone || !zone.config?.doors) return;
    zone.config.doors.splice(idx, 1); openZoneConfig(currentZonePopup);
}
function closePopup() { document.getElementById('zone-popup').style.display = 'none'; }
function deleteZone(id) {
    if (!id) return;
    showConfirm('Xóa phân khu', 'Bạn có chắc muốn xóa phân khu ' + id + '?', () => { canvasZones = canvasZones.filter(z => z.id !== id); closePopup(); renderCanvas(); checkOverlaps(); validateRules(); });
}

function onPalletTypeChange() {
    const pt = document.getElementById('pf-ptype')?.value; if (!pt) return;
    const info = CCDC_PALLET[pt]; if (!info) return;
    document.getElementById('pd-len').textContent = `${info.l} mm`;
    document.getElementById('pd-wid').textContent = `${info.w} mm`;
    document.getElementById('pd-note').textContent = info.note || '';
    document.getElementById('pd-code').textContent = `${pt}.dãy.tầng.vị_trí`;
    calcPalletStats();
}

function onBoxTypeChange() {
    const bt = document.getElementById('pf-btype')?.value; if (!bt) return;
    const info = CCDC_BOX[bt]; if (!info) return;
    document.getElementById('bd-dims').textContent = `${info.l}×${info.w}×${info.h} mm`;
    document.getElementById('bd-load').textContent = `< ${info.maxLoad} kg`;
    document.getElementById('bd-rfid').textContent = info.rfid !== false ? 'Có' : 'Không (không quy hoạch RFID)';
    calcBoxStats();
}

function calcRackStats() {
    const rows = parseInt(document.getElementById('pf-rows')?.value) || 1;
    const levels = parseInt(document.getElementById('pf-levels')?.value) || 1;
    const bays = parseInt(document.getElementById('pf-bays')?.value) || 1;
    const total = rows * levels * bays;
    const zone = canvasZones.find(z => z.id === currentZonePopup);
    const prefix = zone?.type === 'G' ? 'KC' : zone?.type === 'H' ? 'KT' : 'KN';
    if (document.getElementById('rs-total')) document.getElementById('rs-total').textContent = total;
    if (document.getElementById('rs-rows')) document.getElementById('rs-rows').textContent = rows;
    if (document.getElementById('rs-levels')) document.getElementById('rs-levels').textContent = levels;
    if (document.getElementById('rs-bays')) document.getElementById('rs-bays').textContent = bays;
    const preview = document.getElementById('rack-code-preview');
    if (preview) {
        let codes = [];
        for (let r = 1; r <= Math.min(rows, 2); r++) for (let l = 1; l <= Math.min(levels, 2); l++) for (let b = 1; b <= Math.min(bays, 3); b++) codes.push(`${prefix}.${r}.${l}.${b}`);
        if (rows > 2 || levels > 2 || bays > 3) codes.push('…');
        preview.textContent = codes.join(' ');
    }
}

function calcPalletStats() {
    const rows = parseInt(document.getElementById('pf-rows')?.value) || 1;
    const levels = parseInt(document.getElementById('pf-levels')?.value) || 1;
    const perRow = parseInt(document.getElementById('pf-bays')?.value) || 1;
    const pt = document.getElementById('pf-ptype')?.value || 'PL1';
    if (document.getElementById('ps-total')) document.getElementById('ps-total').textContent = rows * levels * perRow;
    if (document.getElementById('ps-code')) document.getElementById('ps-code').textContent = `${pt}.1.1.1`;
}

function calcBoxStats() {
    const rows = parseInt(document.getElementById('pf-rows')?.value) || 1;
    const levels = parseInt(document.getElementById('pf-levels')?.value) || 1;
    const perRow = parseInt(document.getElementById('pf-bays')?.value) || 1;
    const bt = document.getElementById('pf-btype')?.value || 'TN2';
    if (document.getElementById('bs-total')) document.getElementById('bs-total').textContent = rows * levels * perRow;
    if (document.getElementById('bs-code')) document.getElementById('bs-code').textContent = `${bt}.1.1.1`;
}

function buildRowDetailSection(zone, kind) {
    const cfg = zone.config || {};
    const rows = parseInt(cfg.rowCount || 3);
    const rowDetails = cfg.rowDetails || {};
    const rackType = zone.type === 'G' ? 'KC' : zone.type === 'H' ? 'KT' : zone.type === 'I' ? 'KN' : zone.type === 'J' ? 'PL' : 'TG';
    const rowIds = [];
    for (let r = 1; r <= rows; r++) rowIds.push(`${rackType}.${r}`);
    let h = `<hr class="sep">
<div class="form-section-title">Cấu trúc chi tiết từng dãy</div>
<div style="background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:8px;margin-bottom:8px;font-size:10px;color:var(--text2)">
ℹ Định nghĩa vị trí từng dãy bên trong phân khu <strong>${zone.id}</strong>.<br>
Chọn đối tượng tiếp giáp 4 phía: <strong>tường (ảo) phân khu</strong> hoặc <strong>dãy kệ khác</strong> trong cùng phân khu, và khoảng cách tới đối tượng đó.
</div>
<div id="row-detail-container">`;
    for (let r = 1; r <= Math.min(rows, 20); r++) {
        const rd = rowDetails[r] || {};
        const sides = ['left', 'right', 'front', 'back'];
        const sideLabels = { left: 'Trái', right: 'Phải', front: 'Trước', back: 'Sau' };
        const rowLabel = `${rackType}.${r}`;
        h += `<div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:10px;margin-bottom:8px">
<div style="font-size:12px;font-weight:700;color:var(--primary);margin-bottom:6px">${rowLabel}</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">`;
        sides.forEach(side => {
            const adj = rd[side] || {};
            const adjType = adj.type || 'wall';
            const adjDist = adj.distance || 0;
            const otherRows = rowIds.filter((_, i) => i !== r - 1);
            h += `<div style="padding:4px;border:1px solid var(--border);border-radius:4px;background:var(--bg3)">
<div style="font-size:9px;font-weight:600;color:var(--text2);text-transform:uppercase;margin-bottom:3px">${sideLabels[side]}</div>
<select class="form-input" style="font-size:10px;padding:3px 6px;margin-bottom:3px" id="rd-${r}-${side}-type">
<option value="wall" ${adjType === 'wall' ? 'selected' : ''}>Tường phân khu</option>
${otherRows.map(rid => `<option value="${rid}" ${adjType === rid ? 'selected' : ''}>${rid}</option>`).join('')}
</select>
<div style="display:flex;align-items:center;gap:4px">
<input class="form-input" style="font-size:10px;padding:3px 6px;width:60px" type="number" step="0.1" min="0" value="${adjDist}" id="rd-${r}-${side}-dist">
<span style="font-size:9px;color:var(--text3)">m</span>
</div>
</div>`;
        });
        h += `</div></div>`;
    }
    h += `</div>`;
    return h;
}

function renderRowDetailSection() {
    const zone = canvasZones.find(z => z.id === currentZonePopup); if (!zone) return;
    const rows = parseInt(document.getElementById('pf-rows')?.value) || 3;
    saveRowDetailsToConfig(zone);
    if (!zone.config) zone.config = {};
    zone.config.rowCount = rows;
    const container = document.getElementById('row-detail-container');
    if (!container) return;
    const kind = ['G', 'H', 'I'].includes(zone.type) ? 'rack' : zone.type === 'J' ? 'pallet' : 'box';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = buildRowDetailSection(zone, kind);
    const newContainer = tempDiv.querySelector('#row-detail-container');
    if (newContainer) container.innerHTML = newContainer.innerHTML;
}

function saveRowDetailsToConfig(zone) {
    if (!zone || !['G', 'H', 'I', 'J', 'K', 'BK'].includes(zone.type)) return;
    const cfg = zone.config || {};
    const rows = parseInt(document.getElementById('pf-rows')?.value) || parseInt(cfg.rowCount) || 3;
    const rowDetails = {};
    const sides = ['left', 'right', 'front', 'back'];
    for (let r = 1; r <= rows; r++) {
        rowDetails[r] = {};
        sides.forEach(side => {
            const typeEl = document.getElementById(`rd-${r}-${side}-type`);
            const distEl = document.getElementById(`rd-${r}-${side}-dist`);
            if (typeEl && distEl) {
                rowDetails[r][side] = { type: typeEl.value, distance: parseFloat(distEl.value) || 0 };
            }
        });
    }
    if (!zone.config) zone.config = {};
    zone.config.rowDetails = rowDetails;
}

function previewLinkedDPosition() {
    const zone = canvasZones.find(z => z.id === currentZonePopup); if (!zone) return;
    const rackId = document.getElementById('pf-linked-rack')?.value;
    const pos = document.getElementById('pf-linked-pos')?.value || 'right';
    if (!rackId) { alert('Chọn dãy kệ neo trước.'); return; }
    const sel = document.getElementById('pf-linked-rack');
    const opt = sel?.selectedOptions[0];
    const parentZoneId = opt?.dataset?.zone;
    const parentZone = canvasZones.find(z => z.id === parentZoneId);
    if (!parentZone) { alert('Không tìm thấy khu vực chứa kệ ' + rackId); return; }
    const rackSubX = parseFloat(opt?.dataset?.rx) || 0;
    const rackSubY = parseFloat(opt?.dataset?.ry) || 0;
    const rackSubW = parseFloat(opt?.dataset?.rw) || 0;
    const rackSubH = parseFloat(opt?.dataset?.rh) || 0;
    const rackAbsXm = c2m(parentZone.x) + spx2m(rackSubX);
    const rackAbsYm = c2m(parentZone.y) + spx2m(rackSubY);
    const rackWm = spx2m(rackSubW);
    const rackHm = spx2m(rackSubH);
    let nx, ny;
    const dWc = zone.w, dHc = zone.h;
    if (pos === 'right') { nx = m2c(rackAbsXm + rackWm); ny = m2c(rackAbsYm); }
    else if (pos === 'left') { nx = m2c(rackAbsXm) - dWc; ny = m2c(rackAbsYm); }
    else if (pos === 'top') { nx = m2c(rackAbsXm); ny = m2c(rackAbsYm) - dHc; }
    else { nx = m2c(rackAbsXm); ny = m2c(rackAbsYm + rackHm); }
    zone.x = Math.max(0, snapCell(nx)); zone.y = Math.max(0, snapCell(ny));
    renderCanvas();
}

function getRowConfigStatus(zone, rowIdx) {
    const cfg = zone.config; if (!cfg || !cfg.rowDetails) return { configured: false, detail: '' };
    const rd = cfg.rowDetails[rowIdx]; if (!rd) return { configured: false, detail: '' };
    const sides = ['left', 'right', 'front', 'back'];
    const labels = { left: 'T', right: 'P', front: 'Tr', back: 'S' };
    let allDefined = true;
    let parts = [];
    sides.forEach(s => {
        const adj = rd[s];
        if (!adj || (!adj.type && !adj.distance)) { allDefined = false; return; }
        const target = adj.type === 'wall' ? 'tường' : adj.type;
        parts.push(`${labels[s]}:${adj.distance}m→${target}`);
    });
    return { configured: allDefined, detail: parts.join(' ') };
}

function renderRackGridCell(zone) {
    const cfg = zone.config, rows = cfg.rowCount || 3, bays = cfg.bayPerLevel || 5, lvls = cfg.levelCount || 3;
    const rackType = zone.type === 'G' ? 'KC' : zone.type === 'H' ? 'KT' : 'KN';
    const pw = zone.w * CELL_PX, ph = zone.h * CELL_PX;
    const aisle = cfg.aisleWidthM || 2.3, gap = cfg.backToBackGapM || 0.1;
    const total = rows * lvls * bays;
    const fs = Math.max(5, Math.min(8, pw / 14));
    let cfgCount = 0;
    for (let r = 1; r <= rows; r++) { const s = getRowConfigStatus(zone, r); if (s.configured) cfgCount++; }
    const statusIcon = cfgCount === rows ? '✓' : '⚠';
    const statusColor = cfgCount === rows ? 'rgba(16,185,129,.9)' : 'rgba(245,158,11,.9)';
    let rowsHtml = '';
    for (let r = 1; r <= rows; r++) {
        const rid = `${rackType}.${r}`;
        const st = getRowConfigStatus(zone, r);
        const rowW = Math.max(8, Math.floor((pw - 4 - rows * 1) / rows));
        const dotColor = st.configured ? 'rgba(16,185,129,.9)' : 'rgba(239,68,68,.7)';
        rowsHtml += `<div style="display:flex;flex-direction:column;align-items:center;gap:0">
<div style="display:flex;align-items:center;gap:1px">
<div style="width:3px;height:3px;border-radius:50%;background:${dotColor};flex-shrink:0"></div>
<div style="font-size:${Math.max(4, fs - 1)}px;color:#334155;font-weight:700;font-family:var(--mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:${rowW - 4}px">${rid}</div>
</div>
<div style="display:flex;gap:0.5px;flex-wrap:wrap;justify-content:center">`;
        for (let b = 1; b <= Math.min(bays, 4); b++) {
            rowsHtml += `<div style="width:${Math.max(2, Math.floor(rowW / (Math.min(bays, 4) + 0.5)))}px;height:${Math.max(2, Math.floor((ph - 20) / (lvls + 1)))}px;background:rgba(0,0,0,.08)"></div>`;
        }
        if (bays > 4) rowsHtml += `<div style="font-size:3px;color:#64748B">+${bays - 4}</div>`;
        rowsHtml += `</div></div>`;
        if (r < rows) rowsHtml += `<div style="font-size:${Math.max(3, fs - 3)}px;color:#94A3B8;text-align:center;line-height:1">↕${gap}m</div>`;
    }
    return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:0;padding:1px;overflow:hidden">
<div style="font-size:${Math.max(4, fs - 2)}px;color:#64748B;display:flex;align-items:center;gap:2px;margin-bottom:1px">
<span style="color:${statusColor}">${statusIcon}</span>${total}vt·${rows}dãy·${lvls}T·lối${aisle}m
</div>
<div style="display:flex;gap:1px;align-items:flex-start;justify-content:center;flex-wrap:wrap">${rowsHtml}</div>
<div style="font-size:${Math.max(3, fs - 3)}px;color:#94A3B8;margin-top:1px">${cfgCount}/${rows} dãy đã cấu hình vị trí</div>
</div>`;
}

function renderPalletGridCell(zone) {
    const cfg = zone.config, rows = cfg.rowCount || 4, perRow = cfg.palletPerRow || 10, lvls = cfg.levelCount || 2;
    const pt = cfg.palletType || 'PL1';
    const pw = zone.w * CELL_PX, ph = zone.h * CELL_PX;
    const aisle = cfg.aisleWidthM || 2.3, gap = cfg.gapM || 0.1;
    const total = rows * lvls * perRow;
    const fs = Math.max(5, Math.min(8, pw / 14));
    let cfgCount = 0;
    for (let r = 1; r <= rows; r++) { const s = getRowConfigStatus(zone, r); if (s.configured) cfgCount++; }
    const statusIcon = cfgCount === rows ? '✓' : '⚠';
    const statusColor = cfgCount === rows ? 'rgba(16,185,129,.9)' : 'rgba(245,158,11,.9)';
    let rowsHtml = '';
    for (let r = 1; r <= rows; r++) {
        const rid = `${pt}.${r}`;
        const st = getRowConfigStatus(zone, r);
        const rowW = Math.max(8, Math.floor((pw - 4 - rows * 1) / rows));
        const dotColor = st.configured ? 'rgba(16,185,129,.9)' : 'rgba(239,68,68,.7)';
        rowsHtml += `<div style="display:flex;flex-direction:column;align-items:center">
<div style="display:flex;align-items:center;gap:1px">
<div style="width:3px;height:3px;border-radius:50%;background:${dotColor};flex-shrink:0"></div>
<div style="font-size:${Math.max(4, fs - 1)}px;color:rgba(252,211,77,.9);font-weight:700;font-family:var(--mono);white-space:nowrap;overflow:hidden;max-width:${rowW - 4}px">${rid}</div>
</div>
<div style="display:flex;gap:0.5px">`;
        for (let p = 0; p < Math.min(perRow, 4); p++) {
            rowsHtml += `<div style="width:${Math.max(2, Math.floor(rowW / (Math.min(perRow, 4) + 0.5)))}px;height:${Math.max(3, Math.floor((ph - 20) / (lvls + 1)))}px;background:rgba(217,119,6,.12)"></div>`;
        }
        if (perRow > 4) rowsHtml += `<div style="font-size:3px;color:rgba(252,211,77,.5)">+${perRow - 4}</div>`;
        rowsHtml += `</div></div>`;
        if (r < rows) rowsHtml += `<div style="font-size:${Math.max(3, fs - 3)}px;color:#94A3B8">↕${gap}m</div>`;
    }
    return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:0;padding:1px;overflow:hidden">
<div style="font-size:${Math.max(4, fs - 2)}px;color:#64748B;display:flex;align-items:center;gap:2px">
<span style="color:${statusColor}">${statusIcon}</span>${total}pl·${rows}dãy·${lvls}T·lối${aisle}m
</div>
<div style="display:flex;gap:1px;align-items:flex-start;justify-content:center;flex-wrap:wrap">${rowsHtml}</div>
<div style="font-size:${Math.max(3, fs - 3)}px;color:#94A3B8;margin-top:1px">${cfgCount}/${rows} dãy đã cấu hình vị trí</div>
</div>`;
}

function renderBoxGridCell(zone) {
    const cfg = zone.config, rows = cfg.rowCount || 3, perRow = cfg.boxPerRow || 8, lvls = cfg.levelCount || 2;
    const bt = cfg.boxType || 'TN2';
    const pw = zone.w * CELL_PX, ph = zone.h * CELL_PX;
    const gap = cfg.gapM || 0.1;
    const total = rows * lvls * perRow;
    const fs = Math.max(5, Math.min(8, pw / 14));
    let cfgCount = 0;
    for (let r = 1; r <= rows; r++) { const s = getRowConfigStatus(zone, r); if (s.configured) cfgCount++; }
    const statusIcon = cfgCount === rows ? '✓' : '⚠';
    const statusColor = cfgCount === rows ? 'rgba(16,185,129,.9)' : 'rgba(245,158,11,.9)';
    let rowsHtml = '';
    for (let r = 1; r <= rows; r++) {
        const rid = `${bt}.${r}`;
        const st = getRowConfigStatus(zone, r);
        const rowW = Math.max(8, Math.floor((pw - 4 - rows * 1) / rows));
        const dotColor = st.configured ? 'rgba(16,185,129,.9)' : 'rgba(239,68,68,.7)';
        rowsHtml += `<div style="display:flex;flex-direction:column;align-items:center">
<div style="display:flex;align-items:center;gap:1px">
<div style="width:3px;height:3px;border-radius:50%;background:${dotColor};flex-shrink:0"></div>
<div style="font-size:${Math.max(4, fs - 1)}px;color:rgba(217,119,6,.9);font-weight:700;font-family:var(--mono);white-space:nowrap;overflow:hidden;max-width:${rowW - 4}px">${rid}</div>
</div>
<div style="display:flex;gap:0.5px">`;
        for (let b = 0; b < Math.min(perRow, 4); b++) {
            rowsHtml += `<div style="width:${Math.max(2, Math.floor(rowW / (Math.min(perRow, 4) + 0.5)))}px;height:${Math.max(3, Math.floor((ph - 20) / (lvls + 1)))}px;background:rgba(180,83,9,.15)"></div>`;
        }
        if (perRow > 4) rowsHtml += `<div style="font-size:3px;color:rgba(217,119,6,.5)">+${perRow - 4}</div>`;
        rowsHtml += `</div></div>`;
        if (r < rows) rowsHtml += `<div style="font-size:${Math.max(3, fs - 3)}px;color:#94A3B8">↕${gap}m</div>`;
    }
    return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:0;padding:1px;overflow:hidden">
<div style="font-size:${Math.max(4, fs - 2)}px;color:#64748B;display:flex;align-items:center;gap:2px">
<span style="color:${statusColor}">${statusIcon}</span>${total}tg·${rows}dãy·${lvls}T·kc${gap}m
</div>
<div style="display:flex;gap:1px;align-items:flex-start;justify-content:center;flex-wrap:wrap">${rowsHtml}</div>
<div style="font-size:${Math.max(3, fs - 3)}px;color:#94A3B8;margin-top:1px">${cfgCount}/${rows} dãy đã cấu hình vị trí</div>
</div>`;
}

// ════════════════════════════════════════
// SUB-CANVAS
// ════════════════════════════════════════
let subZoneId = null, subRacks = [], subSelectedId = null, subMoveState = null, subCounter = 0, subZoom = 1, subExpandedId = null;
function m2spx(m) { return m2c(m) * CELL_PX; }
function spx2m(px) { return c2m(px / CELL_PX); }
function snapSubCell(px) { return Math.round(px / CELL_PX) * CELL_PX; }

function openSubCanvas(zoneId) {
    const zone = canvasZones.find(z => z.id === zoneId); if (!zone) return;
    if (!zone.config) {
        zone.config = { rowCount: 0, levelCount: 3, bayPerLevel: 5, aisleWidthM: 2.3 };
        if (zone.type === 'J') zone.config.palletType = 'PL1';
        if (zone.type === 'K') zone.config.boxType = 'TN2';
    }
    const isYard = zone && zone.type === 'BK';
    const rackTitle = document.getElementById('sub-rack-title');
    if (rackTitle) rackTitle.textContent = isYard ? '📦 Khu vực' : '📦 Dãy kệ/ Pallet';
    const addRackBtn = document.getElementById('sub-add-rack-btn');
    if (addRackBtn) addRackBtn.textContent = isYard ? '+ Thêm khu vực' : '+ Thêm';

    subZoneId = zoneId;
    const wM = c2m(zone.w), hM = c2m(zone.h);
    document.getElementById('sub-title').textContent = `Mặt bằng kỹ thuật: ${zone.id}`;
    document.getElementById('sub-info').textContent = `${wM.toFixed(1)}m × ${hM.toFixed(1)}m`;
    document.getElementById('sz-len').value = wM.toFixed(1);
    document.getElementById('sz-wid').value = hM.toFixed(1);
    document.getElementById('sz-area').value = (wM * hM).toFixed(1) + ' m²';
    document.getElementById('sz-name').value = zone.label || '';
    const sc = document.getElementById('sub-canvas');
    sc.style.width = m2spx(wM) + 'px'; sc.style.height = m2spx(hM) + 'px';
    subRacks = zone.config.subLayout ? JSON.parse(JSON.stringify(zone.config.subLayout)) : [];
    subCounter = subRacks.length; subSelectedId = null; subExpandedId = null; subZoom = 1;
    document.getElementById('sub-canvas-overlay').classList.add('active');
    setTimeout(() => { subZoomFit(); renderSubCanvas(); renderSubTree(); }, 60);
}
function closeSubCanvas() { document.getElementById('sub-canvas-overlay').classList.remove('active'); subZoneId = null; }
function subZoomChange(delta) { subZoom = Math.max(0.5, Math.min(20, subZoom + delta)); applySubZoom(); }
function subZoomFit() {
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return;
    const pxW = m2spx(c2m(zone.w)), pxH = m2spx(c2m(zone.h));
    const container = document.querySelector('.sub-right'); if (!container) return;
    const availW = container.clientWidth - 24, availH = container.clientHeight - 24;
    subZoom = Math.max(0.5, Math.min(availW / pxW, availH / pxH, 10)); applySubZoom();
}
function applySubZoom() {
    const sc = document.getElementById('sub-canvas');
    sc.style.transformOrigin = 'top left'; sc.style.transform = `scale(${subZoom})`;
    document.getElementById('sub-zoom-label').textContent = Math.round(subZoom * 100) + '%';
}
function getSubRackType() {
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return 'KC';
    const cfg = zone.config || {};
    return zone.type === 'G' ? 'KC' : zone.type === 'H' ? 'KT' : zone.type === 'I' ? 'KN' : zone.type === 'J' ? (cfg.palletType || 'PL1') : zone.type === 'K' ? (cfg.boxType || 'TN2') : zone.type === 'BK' ? 'KV' : 'KC';
}
function addRackToSub() {
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return;
    subCounter++;
    const id = `${getSubRackType()}.${subCounter}`;
    const isPalletBox = zone && ['J', 'K'].includes(zone.type);
    const isYard = zone && zone.type === 'BK';
    const defaultLen = isYard ? 5.0 : 1.2;
    const defaultWid = isYard ? 3.0 : isPalletBox ? 1.0 : 1.2;
    const defaultBays = isYard ? 1 : 5;
    const w = m2spx(isYard ? defaultLen : defaultLen * defaultBays), h = m2spx(defaultWid);
    subRacks.push({
        id,
        x: snapSubCell(m2spx(0.5)),
        y: snapSubCell(m2spx(0.5) + (subCounter - 1) * (h + m2spx(2.3))),
        w,
        h,
        orient: 'H',
        levels: isPalletBox || isYard ? 1 : 3,
        bays: defaultBays,
        type: 'rack',
        lenM: defaultLen,
        widM: defaultWid,
        heightM: isPalletBox || isYard ? 0 : 2.5,
        mockType: isPalletBox ? 'typeA' : undefined
    });
    subExpandedId = id; renderSubCanvas(); renderSubTree();
}
function addAisleToSub() {
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return;
    subCounter++;
    const id = `Lối.${subCounter}`;
    const wM = c2m(zone.w);
    subRacks.push({ id, x: 0, y: snapSubCell(m2spx(3)), w: m2spx(wM), h: m2spx(2.3), orient: 'H', type: 'aisle', lenM: wM, widM: 2.3, aisleType: 'walk' });
    subExpandedId = id; renderSubCanvas(); renderSubTree();
}
function renderSubCanvas() {
    const sc = document.getElementById('sub-canvas'); sc.innerHTML = '';
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return;
    const wM = c2m(zone.w), hM = c2m(zone.h);
    const pxW = m2spx(wM), pxH = m2spx(hM);
    const grid = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    grid.setAttribute('viewBox', `0 0 ${pxW} ${pxH}`);
    grid.style.cssText = `position:absolute;inset:0;width:${pxW}px;height:${pxH}px;pointer-events:none;z-index:0`;
    let lines = '';
    const c1m = m2spx(1);
    for (let x = 0; x <= pxW; x += c1m)lines += `<line x1="${x}" y1="0" x2="${x}" y2="${pxH}" stroke="rgba(100,116,139,.15)" stroke-width="1"/>`;
    for (let y = 0; y <= pxH; y += c1m)lines += `<line x1="0" y1="${y}" x2="${pxW}" y2="${y}" stroke="rgba(100,116,139,.15)" stroke-width="1"/>`;
    for (let i = 1; i * 1 <= wM; i++)lines += `<text x="${i * c1m + 2}" y="${pxH - 3}" fill="rgba(100,116,139,.5)" font-size="10" font-family="JetBrains Mono">${i}m</text>`;
    for (let i = 1; i * 1 <= hM; i++)lines += `<text x="3" y="${i * c1m - 3}" fill="rgba(100,116,139,.5)" font-size="10" font-family="JetBrains Mono">${i}m</text>`;
    grid.innerHTML = lines; sc.appendChild(grid);
    // Aisles
    subRacks.filter(r => r.type === 'aisle').forEach(rack => {
        const el = document.createElement('div');
        el.className = 'sub-aisle' + (rack.id === subSelectedId ? ' sub-selected' : '');
        const isWalk = rack.aisleType === 'walk';
        const bgStyle = isWalk
            ? 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(16, 185, 129, .12) 3px, rgba(16, 185, 129, .12) 6px)'
            : 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(245, 158, 11, .12) 3px, rgba(245, 158, 11, .12) 6px)';
        const borderStyle = isWalk
            ? '1px dashed rgba(16, 185, 129, .6)'
            : '1px dashed rgba(217, 119, 6, .4)';
        el.style.cssText = `left:${rack.x}px;top:${rack.y}px;width:${rack.w}px;height:${rack.h}px;cursor:move;user-select:none;position:absolute;z-index:1;background:${bgStyle};border:${borderStyle}`;
        const lbl = document.createElement('div'); lbl.className = 'sub-aisle-label';
        lbl.style.cssText = `left:${rack.x + 2}px;top:${rack.y + 1}px;pointer-events:none`;
        if (isWalk) {
            lbl.style.color = '#059669';
        } else {
            lbl.style.color = '#D97706';
        }
        lbl.textContent = `${rack.id} · Lối đi ${isWalk ? 'bộ' : 'xe nâng'} ${spx2m(Math.min(rack.w, rack.h)).toFixed(1)}m`;
        el.addEventListener('mousedown', e => { e.stopPropagation(); startSubMove(e, rack.id); });
        el.addEventListener('click', e => { e.stopPropagation(); selectSubRack(rack.id); });
        el.addEventListener('dblclick', e => { e.stopPropagation(); editSubRack(rack.id); });
        sc.appendChild(el); sc.appendChild(lbl);
    });
    // Racks
    subRacks.filter(r => r.type !== 'aisle').forEach(rack => {
        const el = document.createElement('div');
        el.className = 'sub-rack' + (rack.id === subSelectedId ? ' sub-selected' : '');
        const color = getFillColor(getMockFillRate(rack.id));
        el.style.cssText = `left:${rack.x}px;top:${rack.y}px;width:${rack.w}px;height:${rack.h}px;background:${color};border:1px solid #B5B5B5;z-index:2;position:absolute;cursor:move;user-select:none;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .1s`;

        const hdr = document.createElement('div'); hdr.style.cssText = 'padding:1px 4px;font-size:7px;font-weight:700;color:#1E293B;background:rgba(255,255,255,.7);display:flex;justify-content:space-between;flex-shrink:0;border-bottom:1px solid rgba(0,0,0,.08)';
        const wm = spx2m(rack.w).toFixed(1), hm = spx2m(rack.h).toFixed(1);
        hdr.innerHTML = `<span>${rack.id}</span><span>${wm}×${hm}m</span>`;
        el.appendChild(hdr);

        const bdy = document.createElement('div'); bdy.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;font-size:6px;color:#64748B';
        const isPalletBox = zone && ['J', 'K'].includes(zone.type);
        const isYard = zone && zone.type === 'BK';
        const lvls = isPalletBox || isYard ? 1 : (rack.levels || 3);
        const bays = rack.bays || 1;
        const rw = rack.w, rh = rack.h;
        const hdrH = 12; // header height approx
        const availH = rh - hdrH - 2, availW = rw - 2;
        if (availH > 4 && availW > 4) {
            const cellW = Math.max(1, Math.floor(availW / bays) - 1);
            const cellH = Math.max(1, Math.floor(availH / lvls) - 1);
            let gridHtml = `<div style="display:grid;grid-template-columns:repeat(${bays},${cellW}px);grid-template-rows:repeat(${lvls},${cellH}px);gap:1px;padding:1px">`;
            for (let l = 0; l < lvls; l++) {
                for (let b = 0; b < bays; b++) {
                    gridHtml += `<div style="background:rgba(0,0,0,.08);border:0.5px solid rgba(0,0,0,.1)"></div>`;
                }
            }
            gridHtml += `</div>`;
            bdy.innerHTML = gridHtml;
        } else {
            bdy.textContent = isYard ? '' : isPalletBox ? `${bays}K` : `${lvls}T·${bays}K`;
        }
        el.appendChild(bdy);

        // Dimension annotations
        const dimX = document.createElement('div');
        dimX.style.cssText = `position:absolute;bottom:-12px;left:0;width:100%;text-align:center;font-size:8px;color:var(--primary);font-family:var(--mono);pointer-events:none`;
        dimX.textContent = `${wm}m`;
        el.appendChild(dimX);
        const dimY = document.createElement('div');
        dimY.style.cssText = `position:absolute;right:-28px;top:0;height:100%;display:flex;align-items:center;font-size:8px;color:var(--primary);font-family:var(--mono);pointer-events:none`;
        dimY.textContent = `${hm}m`;
        el.appendChild(dimY);

        el.addEventListener('mousedown', e => { e.stopPropagation(); startSubMove(e, rack.id); });
        el.addEventListener('click', e => { e.stopPropagation(); selectSubRack(rack.id); });
        el.addEventListener('dblclick', e => { e.stopPropagation(); editSubRack(rack.id); });
        sc.appendChild(el);
    });
    renderSubGapAnnotations(sc);
}

function renderSubGapAnnotations(sc) {
    const racks = subRacks.filter(r => r.type !== 'aisle');
    if (racks.length < 2) return;
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return;
    racks.forEach(rack => {
        // Gap to left wall
        if (rack.x > 0) {
            const gapM = spx2m(rack.x).toFixed(2);
            const ann = document.createElement('div');
            ann.style.cssText = `position:absolute;left:0;top:${rack.y + rack.h / 2 - 5}px;width:${rack.x}px;text-align:center;font-size:7px;color:var(--warn);font-family:var(--mono);pointer-events:none;border-top:1px dashed rgba(217,119,6,.3)`;
            ann.textContent = `←${gapM}m→`;
            sc.appendChild(ann);
        }
        // Gap to top wall
        if (rack.y > 0) {
            const gapM = spx2m(rack.y).toFixed(2);
            const ann = document.createElement('div');
            ann.style.cssText = `position:absolute;left:${rack.x + rack.w / 2 - 15}px;top:0;height:${rack.y}px;display:flex;align-items:center;justify-content:center;font-size:7px;color:var(--warn);font-family:var(--mono);pointer-events:none;writing-mode:vertical-lr;border-left:1px dashed rgba(217,119,6,.3)`;
            ann.textContent = `↑${gapM}m↓`;
            sc.appendChild(ann);
        }
    });
}
function renderSubTree() {
    const zone = canvasZones.find(z => z.id === subZoneId);
    const isPalletZone = zone && zone.type === 'J';
    const addAisleBtn = document.getElementById('sub-add-aisle-btn');
    if (addAisleBtn) {
        addAisleBtn.style.display = isPalletZone ? 'none' : 'inline-block';
    }

    const rackTree = document.getElementById('sub-rack-tree');
    const racks = subRacks.filter(r => r.type !== 'aisle');
    if (racks.length === 0) {
        rackTree.innerHTML = '<div style="text-align:center;color:var(--text3);font-size:10px;padding:8px;border:1px dashed var(--border);border-radius:6px">Chưa có dãy kệ. Bấm + Thêm</div>';
    } else {
        const isRack = zone && ['G', 'H', 'I'].includes(zone.type);
        const isPalletBox = zone && ['J', 'K'].includes(zone.type);
        const isYard = zone && zone.type === 'BK';
        rackTree.innerHTML = racks.map(r => {
            const isOpen = subExpandedId === r.id, isSel = subSelectedId === r.id;
            const wm = spx2m(r.w).toFixed(1), hm = spx2m(r.h).toFixed(1);

            let formBody = '';
            if (isRack) {
                formBody = `<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Hướng đặt</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" onchange="updateSubRack('${r.id}','orient',this.value)">
<option value="H" ${r.orient === 'H' ? 'selected' : ''}>Ngang (→)</option><option value="V" ${r.orient !== 'H' ? 'selected' : ''}>Dọc (↓)</option>
</select></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Cao 1 khoang (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.1" min="0.2" value="${r.heightM || 2.5}" onchange="updateSubRack('${r.id}','heightM',this.value)"></div>
</div>
<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Dài 1 khoang (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.2" value="${r.lenM || 1.2}" onchange="updateSubRack('${r.id}','lenM',this.value)"></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Rộng 1 khoang (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.2" value="${r.widM || 1.2}" onchange="updateSubRack('${r.id}','widM',this.value)"></div>
</div>
<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Số tầng</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" min="1" max="10" value="${r.levels || 3}" onchange="updateSubRack('${r.id}','levels',this.value)"></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Số khoang/tầng</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" min="1" max="30" value="${r.bays || 5}" onchange="updateSubRack('${r.id}','bays',this.value)"></div>
</div>
<div class="form-group" style="margin-bottom:0"><label class="form-label">Diện tích kệ (m²)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" readonly value="${((r.lenM || 1.2) * (r.bays || 5) * (r.widM || 1.2)).toFixed(1)}"></div>`;
            } else if (isPalletBox) {
                formBody = `<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Loại cấu hình sẵn</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" onchange="const opts={'typeA':[1.2,1.0],'typeB':[1.0,1.0],'typeC':[1.5,1.2]}; const d=opts[this.value]||[1.2,1.2]; updateSubRack('${r.id}','lenM',d[0]); updateSubRack('${r.id}','widM',d[1]); updateSubRack('${r.id}','mockType',this.value);">
<option value="typeA" ${r.mockType === 'typeA' ? 'selected' : ''}>Loại tiêu chuẩn A (1.2m x 1.0m)</option>
<option value="typeB" ${r.mockType === 'typeB' ? 'selected' : ''}>Loại tiêu chuẩn B (1.0m x 1.0m)</option>
<option value="typeC" ${r.mockType === 'typeC' ? 'selected' : ''}>Loại cỡ lớn C (1.5m x 1.2m)</option>
</select></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Hướng đặt</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" onchange="updateSubRack('${r.id}','orient',this.value)">
<option value="H" ${r.orient === 'H' ? 'selected' : ''}>Ngang (→)</option><option value="V" ${r.orient !== 'H' ? 'selected' : ''}>Dọc (↓)</option>
</select></div>
</div>
<div class="form-row" style="margin-bottom:0">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Số khoang/tầng</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" min="1" max="30" value="${r.bays || 5}" onchange="updateSubRack('${r.id}','bays',this.value)"></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Diện tích (m²)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" readonly value="${((r.lenM || 1.2) * (r.bays || 5) * (r.widM || 1.2)).toFixed(1)}"></div>
</div>`;
            } else if (isYard) {
                formBody = `<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Chiều dài (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.2" value="${r.lenM || 5.0}" onchange="updateSubRack('${r.id}','lenM',this.value)"></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Chiều rộng (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.2" value="${r.widM || 3.0}" onchange="updateSubRack('${r.id}','widM',this.value)"></div>
</div>`;
            }

            return `<div class="tree-item">
<div class="tree-hd ${isSel ? 'active' : ''}" onclick="toggleTreeItem('${r.id}')">
<span class="tree-arrow ${isOpen ? 'open' : ''}">▶</span>
<span class="tree-dot" style="background:${r.rackColor || '#1E3A8A'}"></span>
<span class="tree-id">${r.id}</span>
<span class="tree-size">${wm}×${hm}m${isYard ? '' : ' · ' + (r.bays || 5) + ' khoảng'}</span>
<span class="tree-del" onclick="event.stopPropagation();deleteSubRack('${r.id}')">✕</span>
</div>
<div class="tree-body ${isOpen ? 'open' : ''}">
${formBody}
</div></div>`;
        }).join('');
    }
    // Aisles
    const aisleTree = document.getElementById('sub-aisle-tree');
    const aisles = subRacks.filter(r => r.type === 'aisle');
    if (aisles.length === 0) {
        aisleTree.innerHTML = '<div style="text-align:center;color:var(--text3);font-size:10px;padding:8px;border:1px dashed var(--border);border-radius:6px">Chưa có lối đi. Bấm + Thêm</div>';
    } else {
        const disabledAttr = isPalletZone ? 'disabled' : '';
        aisleTree.innerHTML = aisles.map(r => {
            const isOpen = subExpandedId === r.id;
            const wm = spx2m(r.w).toFixed(1), hm = spx2m(r.h).toFixed(1);
            return `<div class="tree-item">
<div class="tree-hd" onclick="toggleTreeItem('${r.id}')">
<span class="tree-arrow ${isOpen ? 'open' : ''}">▶</span>
<span class="tree-dot"></span>
<span class="tree-id">${r.id}</span>
<span class="tree-size">${wm}×${hm}m · ${r.aisleType === 'walk' ? 'Lối đi bộ' : 'Lối đi xe nâng'}</span>
${isPalletZone ? '' : `<span class="tree-del" onclick="event.stopPropagation();deleteSubRack('${r.id}')">✕</span>`}
</div>
<div class="tree-body ${isOpen ? 'open' : ''}">
<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Hướng</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" ${disabledAttr} onchange="updateSubRack('${r.id}','orient',this.value)">
<option value="H" ${r.orient === 'H' ? 'selected' : ''}>Ngang</option><option value="V" ${r.orient !== 'H' ? 'selected' : ''}>Dọc</option>
</select></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Loại lối đi</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" ${disabledAttr} onchange="updateSubRack('${r.id}','aisleType',this.value)">
<option value="walk" ${r.aisleType === 'walk' ? 'selected' : ''}>Lối đi bộ</option>
<option value="forklift" ${r.aisleType !== 'walk' ? 'selected' : ''}>Lối đi xe nâng</option>
</select></div>
</div>
<div class="form-row" style="margin-bottom:0">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Dài (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.2" ${disabledAttr} value="${r.lenM || 2.3}" onchange="updateSubRack('${r.id}','lenM',this.value)"></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Rộng (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.6" ${disabledAttr} value="${r.widM || 2.3}" onchange="updateSubRack('${r.id}','widM',this.value)"></div>
</div></div></div>`;
        }).join('');
    }
}
function toggleTreeItem(id) { subExpandedId = subExpandedId === id ? null : id; subSelectedId = id; renderSubTree(); renderSubCanvas(); }
function updateSubRack(id, field, value) {
    const rack = subRacks.find(r => r.id === id); if (!rack) return;
    const zone = canvasZones.find(z => z.id === subZoneId);
    if (field === 'orient') { rack.orient = value; const tmp = rack.w; rack.w = rack.h; rack.h = tmp; const tmpM = rack.lenM; rack.lenM = rack.widM; rack.widM = tmpM; }
    else if (field === 'lenM') {
        rack.lenM = parseFloat(value) || 1;
        const isYard = zone && zone.type === 'BK';
        if (isYard) {
            rack.w = m2spx(rack.lenM);
        } else if (rack.type === 'aisle') {
            if (rack.orient === 'H') rack.w = m2spx(rack.lenM); else rack.h = m2spx(rack.lenM);
        } else {
            if (rack.orient === 'H') rack.w = m2spx(rack.lenM * (rack.bays || 1)); else rack.h = m2spx(rack.lenM * (rack.bays || 1));
        }
    }
    else if (field === 'widM') {
        rack.widM = parseFloat(value) || 1;
        const isYard = zone && zone.type === 'BK';
        if (isYard) {
            rack.h = m2spx(rack.widM);
        } else {
            if (rack.orient === 'H') rack.h = m2spx(rack.widM); else rack.w = m2spx(rack.widM);
        }
    }
    else if (field === 'heightM') {
        rack.heightM = parseFloat(value) || 2.5;
    }
    else if (field === 'aisleType') {
        rack.aisleType = value;
    }
    else if (field === 'levels') { rack.levels = parseInt(value) || 1; }
    else if (field === 'bays') { rack.bays = parseInt(value) || 1; if (rack.orient === 'H') rack.w = m2spx((rack.lenM || 1.2) * rack.bays); else rack.h = m2spx((rack.lenM || 1.2) * rack.bays); }
    else if (field === 'mockType') { rack.mockType = value; }
    renderSubCanvas(); renderSubTree();
}
function selectSubRack(id) { subSelectedId = id; subExpandedId = id; renderSubCanvas(); renderSubTree(); }
function deleteSubRack(id) { subRacks = subRacks.filter(r => r.id !== id); if (subSelectedId === id) subSelectedId = null; if (subExpandedId === id) subExpandedId = null; renderSubCanvas(); renderSubTree(); }
function editSubRack(id) { subExpandedId = id; subSelectedId = id; renderSubTree(); }
function startSubMove(e, id) {
    e.preventDefault();
    const rack = subRacks.find(r => r.id === id); if (!rack) return;
    const zone = canvasZones.find(z => z.id === subZoneId);
    if (zone && zone.type === 'J' && rack.type === 'aisle') return;
    selectSubRack(id);
    const sc = document.getElementById('sub-canvas'); const cr = sc.getBoundingClientRect();
    subMoveState = { id, ox: (e.clientX - cr.left) / subZoom - rack.x, oy: (e.clientY - cr.top) / subZoom - rack.y };
    document.addEventListener('mousemove', onSubMove); document.addEventListener('mouseup', stopSubMove);
}
function onSubMove(e) {
    if (!subMoveState) return;
    const sc = document.getElementById('sub-canvas'); const cr = sc.getBoundingClientRect();
    const rack = subRacks.find(r => r.id === subMoveState.id); if (!rack) return;
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return;
    const maxW = m2spx(c2m(zone.w)), maxH = m2spx(c2m(zone.h));
    let nx = (e.clientX - cr.left) / subZoom - subMoveState.ox;
    let ny = (e.clientY - cr.top) / subZoom - subMoveState.oy;
    rack.x = snapSubCell(Math.max(0, Math.min(nx, maxW - rack.w)));
    rack.y = snapSubCell(Math.max(0, Math.min(ny, maxH - rack.h)));
    renderSubCanvas();
}
function stopSubMove() { subMoveState = null; document.removeEventListener('mousemove', onSubMove); document.removeEventListener('mouseup', stopSubMove); renderSubTree(); }
function saveSubCanvas() {
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return;
    if (!zone.config) zone.config = {};
    zone.config.subLayout = JSON.parse(JSON.stringify(subRacks));
    zone.config.rowCount = subRacks.filter(r => r.type !== 'aisle').length;
    const nameVal = document.getElementById('sz-name')?.value;
    if (nameVal) zone.label = nameVal;
    closeSubCanvas(); renderCanvas();
}
function onSubZoneSizeChange() {
    const zone = canvasZones.find(z => z.id === subZoneId); if (!zone) return;
    const newL = parseFloat(document.getElementById('sz-len').value) || c2m(zone.w);
    const newW = parseFloat(document.getElementById('sz-wid').value) || c2m(zone.h);
    zone.w = m2c(newL); zone.h = m2c(newW);
    zone.label = document.getElementById('sz-name').value || zone.label;
    document.getElementById('sz-area').value = (newL * newW).toFixed(1) + ' m²';
    document.getElementById('sub-info').textContent = `${newL.toFixed(1)}m × ${newW.toFixed(1)}m`;
    const sc = document.getElementById('sub-canvas');
    sc.style.width = m2spx(newL) + 'px'; sc.style.height = m2spx(newW) + 'px';
    applySubZoom(); renderSubCanvas();
}

// ════════════════════════════════════════
// ADD WAREHOUSE MODAL
// ════════════════════════════════════════
// ════════════════════════════════════════
// ADD WAREHOUSE VIEW & SLOC CONFIG TABLE
// ════════════════════════════════════════
let currentAddSlocRows = [];

function addSlocRow() {
    const newId = Date.now() + Math.random();
    currentAddSlocRows.push({
        id: newId,
        plant: '',
        sloc: '',
        donViQL: '',
        thukho: ''
    });
    renderAddSlocTable();
}

function deleteSlocRow(id) {
    currentAddSlocRows = currentAddSlocRows.filter(r => r.id !== id);
    renderAddSlocTable();
}

function onAddPlantChange(id, plantVal) {
    const row = currentAddSlocRows.find(r => r.id === id);
    if (row) {
        row.plant = plantVal;
        row.sloc = '';
        row.donViQL = '';
        row.thukho = '';
    }
    renderAddSlocTable();
}

function onAddSlocChange(id, slocVal) {
    const row = currentAddSlocRows.find(r => r.id === id);
    if (row) {
        row.sloc = slocVal;
        if (row.plant && slocVal && PLANT_SLOC_MAP[row.plant] && PLANT_SLOC_MAP[row.plant][slocVal]) {
            const cfg = PLANT_SLOC_MAP[row.plant][slocVal];
            row.donViQL = cfg.donViQL;
            row.thukho = cfg.thukho;
        } else {
            row.donViQL = '';
            row.thukho = '';
        }
    }
    renderAddSlocTable();
}

function renderAddSlocTable() {
    const tbody = document.getElementById('awh-sloc-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (currentAddSlocRows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text3);padding:20px;">Chưa có cấu hình Sloc nào. Bấm "Thêm Sloc" để bắt đầu.</td></tr>`;
        return;
    }

    currentAddSlocRows.forEach((row, idx) => {
        const tr = document.createElement('tr');

        // STT
        const tdSTT = document.createElement('td');
        tdSTT.style.textAlign = 'center';
        tdSTT.style.fontWeight = '600';
        tdSTT.style.color = 'var(--text3)';
        tdSTT.style.fontSize = '12px';
        tdSTT.textContent = idx + 1;
        tr.appendChild(tdSTT);

        // Plant Select
        const tdPlant = document.createElement('td');
        let plantOptions = `<option value="">-- Chọn Plant --</option>`;
        Object.keys(PLANT_SLOC_MAP).forEach(p => {
            const selectedAttr = p === row.plant ? 'selected' : '';
            plantOptions += `<option value="${p}" ${selectedAttr}>${p}</option>`;
        });
        tdPlant.innerHTML = `<select class="cfg-form-input" style="width:100%" onchange="onAddPlantChange(${row.id}, this.value)">${plantOptions}</select>`;
        tr.appendChild(tdPlant);

        // Sloc Select
        const tdSloc = document.createElement('td');
        let slocOptions = `<option value="">-- Chọn Sloc --</option>`;
        let disabledAttr = 'disabled';
        if (row.plant && PLANT_SLOC_MAP[row.plant]) {
            disabledAttr = '';
            Object.keys(PLANT_SLOC_MAP[row.plant]).forEach(s => {
                const selectedAttr = s === row.sloc ? 'selected' : '';
                slocOptions += `<option value="${s}" ${selectedAttr}>${s}</option>`;
            });
        }
        tdSloc.innerHTML = `<select class="cfg-form-input" style="width:100%" ${disabledAttr} onchange="onAddSlocChange(${row.id}, this.value)">${slocOptions}</select>`;
        tr.appendChild(tdSloc);

        // Đơn vị quản lý
        const tdDonVi = document.createElement('td');
        tdDonVi.style.color = row.donViQL ? 'var(--text)' : 'var(--text3)';
        tdDonVi.textContent = row.donViQL || '—';
        tr.appendChild(tdDonVi);

        // Thủ kho
        const tdThuKho = document.createElement('td');
        tdThuKho.style.color = row.thukho ? 'var(--text)' : 'var(--text3)';
        tdThuKho.textContent = row.thukho || '—';
        tr.appendChild(tdThuKho);

        // Thao tác
        const tdAction = document.createElement('td');
        tdAction.style.textAlign = 'center';
        tdAction.innerHTML = `
                    <button type="button" class="btn btn-danger btn-sm" onclick="deleteSlocRow(${row.id})" style="padding: 4px 8px;">
                        <svg viewBox="0 0 20 20" fill="currentColor" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-right:2px">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        Xóa
                    </button>
                `;
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
    });
}

function resetAddSlocRows() {
    currentAddSlocRows = [];
    renderAddSlocTable();
}

function openAddWarehouseModal() {
    // Reset form
    ['awh-id', 'awh-name', 'awh-address', 'awh-desc', 'awh-note'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    ['awh-matinh'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    document.getElementById('awh-type').value = 'Nhà kho';
    document.getElementById('awh-len').value = 100;
    document.getElementById('awh-wid').value = 50;
    document.getElementById('awh-hgt').value = 10;
    document.getElementById('awh-temp').value = 25;
    computeAddWhDimensions();
    resetAddSlocRows();
    showView('warehouse-add');
}

function confirmCloseAddModal() {
    const hasData = ['awh-id', 'awh-name', 'awh-address'].some(id => document.getElementById(id)?.value.trim()) || currentAddSlocRows.length > 0;
    if (hasData) {
        showConfirm('Hủy thêm kho', 'Các thông tin đã nhập sẽ không được lưu. Bạn có chắc muốn hủy?', () => { showView('warehouse-list'); }, 'Xác nhận hủy', 'btn-danger');
    } else { showView('warehouse-list'); }
}

function autoGenerateWarehouseId() {
    const type = document.getElementById('awh-type')?.value;
    const matinh = document.getElementById('awh-matinh')?.value;
    if (!type || !matinh) return;
    const typeCode = type === 'Bãi kho' ? 'BK' : 'NK';
    const prefix = `${typeCode}-${matinh}-`;
    let maxNum = 0;
    Object.keys(WAREHOUSES).forEach(key => { if (key.startsWith(prefix)) { const n = parseInt(key.substring(prefix.length), 10); if (!isNaN(n) && n > maxNum) maxNum = n; } });
    const nextNum = String(maxNum + 1).padStart(2, '0');
    const idInput = document.getElementById('awh-id');
    if (idInput) idInput.value = prefix + nextNum;
}

function computeAddWhDimensions() {
    const len = parseFloat(document.getElementById('awh-len').value) || 0;
    const wid = parseFloat(document.getElementById('awh-wid').value) || 0;
    const area = len * wid;
    const el = document.getElementById('awh-area');
    if (el) el.textContent = area > 0 ? `${area.toLocaleString('vi')} m²` : '—';
}

function saveAddWarehouse() {
    const id = document.getElementById('awh-id').value.trim();
    const name = document.getElementById('awh-name').value.trim();
    const len = parseFloat(document.getElementById('awh-len').value) || 0;
    const wid = parseFloat(document.getElementById('awh-wid').value) || 0;
    const hgt = parseFloat(document.getElementById('awh-hgt').value) || 0;
    if (!id) { showToast('Vui lòng chọn Loại kho và Mã tỉnh để tự động tạo Mã kho.', 'error'); return; }
    if (!name) { showToast('Vui lòng nhập Tên kho.', 'error'); document.getElementById('awh-name').focus(); return; }
    if (WAREHOUSES[id]) { showToast(`Mã kho "${id}" đã tồn tại.`, 'error'); return; }
    if (len < 1 || wid < 1 || hgt < 1) { showToast('Kích thước kho phải lớn hơn 0.', 'error'); return; }

    // Validate Sloc rows
    for (let i = 0; i < currentAddSlocRows.length; i++) {
        const row = currentAddSlocRows[i];
        if (!row.plant) {
            showToast(`Vui lòng chọn Plant cho dòng thứ ${i + 1}.`, 'error');
            return;
        }
        if (!row.sloc) {
            showToast(`Vui lòng chọn Sloc cho dòng thứ ${i + 1}.`, 'error');
            return;
        }
    }

    const firstSlocRow = currentAddSlocRows[0];
    const newWh = {
        id, name,
        maTinh: document.getElementById('awh-matinh')?.value.trim() || '—',
        address: document.getElementById('awh-address')?.value.trim() || '—',
        type: document.getElementById('awh-type').value,
        len, wid, hgt, area: len * wid, theorVol: len * wid * hgt,
        status: 'unconfigured',
        temp: parseFloat(document.getElementById('awh-temp').value) || 25,
        desc: document.getElementById('awh-desc').value.trim(),
        note: document.getElementById('awh-note').value.trim(),
        slocs: JSON.parse(JSON.stringify(currentAddSlocRows)),
        plant: firstSlocRow ? firstSlocRow.plant : '',
        sloc: firstSlocRow ? firstSlocRow.sloc : '',
        donViQL: firstSlocRow ? firstSlocRow.donViQL : '—'
    };
    WAREHOUSES[id] = newWh;
    selectedWarehouseId = id;
    showToast(`Đã tạo kho "${name}" thành công!`);
    filterWarehouseList();
    // Go to config page — initConfig will be called by showView
    showView('warehouse-config');
}

// ════════════════════════════════════════
// CONFIG STEP 1 MODAL
// ════════════════════════════════════════
function openConfigModal() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    document.getElementById('cfgm-id').value = wh.id || '';
    document.getElementById('cfgm-name').value = wh.name || '';
    document.getElementById('cfgm-matinh').value = wh.maTinh || '';
    document.getElementById('cfgm-address').value = wh.address || '';
    document.getElementById('cfgm-type').value = wh.type || 'Nhà kho';
    document.getElementById('cfgm-len').value = wh.len;
    document.getElementById('cfgm-wid').value = wh.wid;
    document.getElementById('cfgm-hgt').value = wh.hgt;
    document.getElementById('cfgm-temp').value = wh.temp || 25;
    document.getElementById('cfgm-desc').value = wh.desc || '';
    document.getElementById('cfgm-note').value = wh.note || '';
    computeConfigDimensions();
    document.getElementById('cfg-step1-overlay').style.display = 'flex';
}
function closeConfigModal() { document.getElementById('cfg-step1-overlay').style.display = 'none'; }
function computeConfigDimensions() {
    const len = parseFloat(document.getElementById('cfgm-len').value) || 0;
    const wid = parseFloat(document.getElementById('cfgm-wid').value) || 0;
    const el = document.getElementById('cfgm-area');
    if (el) el.textContent = (len * wid) > 0 ? `${(len * wid).toLocaleString('vi')} m²` : '—';
}
function saveConfigStep1() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    const newId = document.getElementById('cfgm-id').value.trim();
    const newName = document.getElementById('cfgm-name').value.trim();
    if (!newId) { showToast('Vui lòng nhập Mã kho.', 'error'); return; }
    if (!newName) { showToast('Vui lòng nhập Tên kho.', 'error'); return; }
    if (newId !== selectedWarehouseId && WAREHOUSES[newId]) { showToast(`Mã kho "${newId}" đã tồn tại.`, 'error'); return; }
    const newLen = parseFloat(document.getElementById('cfgm-len').value) || wh.len;
    const newWid = parseFloat(document.getElementById('cfgm-wid').value) || wh.wid;
    const newHgt = parseFloat(document.getElementById('cfgm-hgt').value) || wh.hgt;
    if (newLen < 1 || newWid < 1 || newHgt < 1) { showToast('Kích thước kho phải lớn hơn 0.', 'error'); return; }
    if (newId !== selectedWarehouseId) { delete WAREHOUSES[selectedWarehouseId]; wh.id = newId; WAREHOUSES[newId] = wh; selectedWarehouseId = newId; }
    wh.name = newName;
    wh.maTinh = document.getElementById('cfgm-matinh').value.trim();
    wh.address = document.getElementById('cfgm-address').value.trim();
    wh.type = document.getElementById('cfgm-type').value;
    wh.len = newLen; wh.wid = newWid; wh.hgt = newHgt;
    wh.area = newLen * newWid; wh.theorVol = newLen * newWid * newHgt;
    wh.temp = parseFloat(document.getElementById('cfgm-temp').value) || 25;
    wh.desc = document.getElementById('cfgm-desc').value;
    wh.note = document.getElementById('cfgm-note').value;
    closeConfigModal();
    // Refresh top bar
    const barId = document.getElementById('cfg-bar-id'); if (barId) barId.textContent = wh.id;
    const barName = document.getElementById('cfg-bar-name'); if (barName) barName.textContent = wh.name;
    const barAddr = document.getElementById('cfg-bar-addr'); if (barAddr) barAddr.textContent = wh.address;
    const barType = document.getElementById('cfg-bar-type'); if (barType) barType.textContent = wh.type;
    document.getElementById('cfg-info-body').innerHTML = `
<div class="cfg-info-section">
<div class="cfg-info-label">Thông tin chung</div>
<div class="cfg-info-row"><span class="cfg-info-key">Mã kho:</span><span class="cfg-info-val">${wh.id}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Tên kho:</span><span class="cfg-info-val" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px" title="${wh.name}">${wh.name}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Mã tỉnh:</span><span class="cfg-info-val">${wh.maTinh || '—'}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Địa chỉ:</span><span class="cfg-info-val" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px" title="${wh.address || '—'}">${wh.address || '—'}</span></div>
</div>
<div class="cfg-divider"></div>
<div class="cfg-info-section">
<div class="cfg-info-label">Thông số kỹ thuật</div>
<div class="cfg-info-row"><span class="cfg-info-key">Loại kho:</span><span class="cfg-info-val">${wh.type}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều dài:</span><span class="cfg-info-val mono">${wh.len} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều rộng:</span><span class="cfg-info-val mono">${wh.wid} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều cao:</span><span class="cfg-info-val mono">${wh.hgt} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Diện tích sàn:</span><span class="cfg-info-val mono">${wh.area.toLocaleString('vi')} m²</span></div>
</div>
<div class="cfg-divider"></div>
<div class="cfg-info-section">
<div class="cfg-info-label">Quản lý</div>
<div class="cfg-info-row"><span class="cfg-info-key">Nhiệt độ:</span><span class="cfg-info-val mono">${wh.temp || 25}°C</span></div>
<div class="cfg-info-row"><span class="cfg-info-key" style="align-self:flex-start;padding-top:2px;">Mô tả:</span><span class="cfg-info-val" style="white-space:normal;max-width:160px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${wh.desc || ''}">${wh.desc || '—'}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key" style="align-self:flex-start;padding-top:2px;">Ghi chú:</span><span class="cfg-info-val" style="white-space:normal;max-width:160px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${wh.note || ''}">${wh.note || '—'}</span></div>
</div>`;
    // Re-init canvas size & re-render
    const pxW = m2c(wh.len) * CELL_PX; const pxH = m2c(wh.wid) * CELL_PX;
    const canvas = document.getElementById('warehouse-canvas');
    if (canvas) { canvas.style.width = pxW + 'px'; canvas.style.height = pxH + 'px'; }
    requestAnimationFrame(() => { mainZoomFit(); renderCanvas(); validateRules(); filterWarehouseList(); });
    showToast('Cập nhật thông tin kho thành công!');
}

// ════════════════════════════════════════
// YARD WAREHOUSE CONFIGURATION
// ════════════════════════════════════════
let yardMoveState = null;

function refreshConfigCanvasAndRules() {
    const wh = WAREHOUSES[selectedWarehouseId];
    if (wh && wh.type === 'Bãi kho') {
        renderYardCanvas();
        validateYardRules();
    } else {
        renderCanvas();
        validateRules();
        checkOverlaps();
    }
}

function renderYardCanvas() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    const sc = document.getElementById('warehouse-canvas'); if (!sc) return;
    sc.innerHTML = '';
    const wM = wh.len, hM = wh.wid;
    const pxW = m2spx(wM), pxH = m2spx(hM);

    // Grid
    const grid = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    grid.setAttribute('viewBox', `0 0 ${pxW} ${pxH}`);
    grid.style.cssText = `position:absolute;inset:0;width:${pxW}px;height:${pxH}px;pointer-events:none;z-index:0`;
    let lines = '';
    const c1m = m2spx(1);
    for (let x = 0; x <= pxW; x += c1m)lines += `<line x1="${x}" y1="0" x2="${x}" y2="${pxH}" stroke="rgba(100,116,139,.15)" stroke-width="1"/>`;
    for (let y = 0; y <= pxH; y += c1m)lines += `<line x1="0" y1="${y}" x2="${pxW}" y2="${y}" stroke="rgba(100,116,139,.15)" stroke-width="1"/>`;
    for (let i = 1; i * 1 <= wM; i++)lines += `<text x="${i * c1m + 2}" y="${pxH - 3}" fill="rgba(100,116,139,.5)" font-size="10" font-family="JetBrains Mono">${i}m</text>`;
    for (let i = 1; i * 1 <= hM; i++)lines += `<text x="3" y="${i * c1m - 3}" fill="rgba(100,116,139,.5)" font-size="10" font-family="JetBrains Mono">${i}m</text>`;
    grid.innerHTML = lines; sc.appendChild(grid);

    const overlapIds = getYardOverlapIds();

    // Aisles
    subRacks.filter(r => r.type === 'aisle').forEach(rack => {
        const el = document.createElement('div');
        el.className = 'sub-aisle' + (rack.id === subSelectedId ? ' sub-selected' : '') + (overlapIds.has(rack.id) ? ' overlap-err' : '');
        const isWalk = rack.aisleType === 'walk';
        const bgStyle = isWalk
            ? 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(16, 185, 129, .12) 3px, rgba(16, 185, 129, .12) 6px)'
            : 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(245, 158, 11, .12) 3px, rgba(245, 158, 11, .12) 6px)';
        const borderStyle = isWalk
            ? '1px dashed rgba(16, 185, 129, .6)'
            : '1px dashed rgba(217, 119, 6, .4)';
        el.style.cssText = `left:${rack.x}px;top:${rack.y}px;width:${rack.w}px;height:${rack.h}px;cursor:move;user-select:none;position:absolute;z-index:1;background:${bgStyle};border:${borderStyle}`;
        const lbl = document.createElement('div'); lbl.className = 'sub-aisle-label';
        lbl.style.cssText = `left:${rack.x + 2}px;top:${rack.y + 1}px;pointer-events:none`;
        if (isWalk) {
            lbl.style.color = '#059669';
        } else {
            lbl.style.color = '#D97706';
        }
        lbl.textContent = `${rack.id} · Lối đi ${isWalk ? 'bộ' : 'xe nâng'} ${spx2m(Math.min(rack.w, rack.h)).toFixed(1)}m`;
        el.addEventListener('mousedown', e => { e.stopPropagation(); startYardMove(e, rack.id); });
        el.addEventListener('click', e => { e.stopPropagation(); selectYardItem(rack.id); });
        el.addEventListener('dblclick', e => { e.stopPropagation(); editYardItem(rack.id); });
        sc.appendChild(el); sc.appendChild(lbl);
    });

    // Areas
    subRacks.filter(r => r.type !== 'aisle').forEach(rack => {
        const el = document.createElement('div');
        el.className = 'sub-rack' + (rack.id === subSelectedId ? ' sub-selected' : '') + (overlapIds.has(rack.id) ? ' overlap-err' : '');
        const color = getFillColor(0);
        el.style.cssText = `left:${rack.x}px;top:${rack.y}px;width:${rack.w}px;height:${rack.h}px;background:${color};border:1px solid #B5B5B5;z-index:2;position:absolute;cursor:move;user-select:none;overflow:hidden;display:flex;flex-direction:column`;

        const hdr = document.createElement('div'); hdr.style.cssText = 'padding:1px 4px;font-size:7px;font-weight:700;color:#1E293B;background:rgba(255,255,255,.7);display:flex;justify-content:space-between;flex-shrink:0;border-bottom:1px solid rgba(0,0,0,.08)';
        const wm = spx2m(rack.w).toFixed(1), hm = spx2m(rack.h).toFixed(1);
        hdr.innerHTML = `<span>${rack.id}</span><span>${wm}×${hm}m</span>`;
        el.appendChild(hdr);

        const bdy = document.createElement('div'); bdy.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;font-size:6px;color:#64748B';
        bdy.textContent = '';
        el.appendChild(bdy);

        // Dimension annotations
        const dimX = document.createElement('div');
        dimX.style.cssText = `position:absolute;bottom:-12px;left:0;width:100%;text-align:center;font-size:8px;color:var(--primary);font-family:var(--mono);pointer-events:none`;
        dimX.textContent = `${wm}m`;
        el.appendChild(dimX);
        const dimY = document.createElement('div');
        dimY.style.cssText = `position:absolute;right:-28px;top:0;height:100%;display:flex;align-items:center;font-size:8px;color:var(--primary);font-family:var(--mono);pointer-events:none`;
        dimY.textContent = `${hm}m`;
        el.appendChild(dimY);

        el.addEventListener('mousedown', e => { e.stopPropagation(); startYardMove(e, rack.id); });
        el.addEventListener('click', e => { e.stopPropagation(); selectYardItem(rack.id); });
        el.addEventListener('dblclick', e => { e.stopPropagation(); editYardItem(rack.id); });
        sc.appendChild(el);
    });
}

function renderYardTree() {
    const rackTree = document.getElementById('yard-rack-tree');
    if (!rackTree) return;
    const racks = subRacks.filter(r => r.type !== 'aisle');
    if (racks.length === 0) {
        rackTree.innerHTML = '<div style="text-align:center;color:var(--text3);font-size:10px;padding:8px;border:1px dashed var(--border);border-radius:6px">Chưa có khu vực. Bấm + Thêm khu vực</div>';
    } else {
        rackTree.innerHTML = racks.map(r => {
            const isOpen = subExpandedId === r.id, isSel = subSelectedId === r.id;
            const wm = spx2m(r.w).toFixed(1), hm = spx2m(r.h).toFixed(1);
            const formBody = `<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Chiều dài (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.2" value="${r.lenM || 5.0}" onchange="updateYardItem('${r.id}','lenM',this.value)"></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Chiều rộng (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.2" value="${r.widM || 3.0}" onchange="updateYardItem('${r.id}','widM',this.value)"></div>
</div>`;
            return `<div class="tree-item">
<div class="tree-hd ${isSel ? 'active' : ''}" onclick="toggleYardTreeItem('${r.id}')">
<span class="tree-arrow ${isOpen ? 'open' : ''}">▶</span>
<span class="tree-dot" style="background:#1E3A8A"></span>
<span class="tree-id">${r.id}</span>
<span class="tree-size">${wm}×${hm}m</span>
<span class="tree-del" onclick="event.stopPropagation();deleteYardItem('${r.id}')">✕</span>
</div>
<div class="tree-body ${isOpen ? 'open' : ''}">
${formBody}
</div></div>`;
        }).join('');
    }

    const aisleTree = document.getElementById('yard-aisle-tree');
    if (!aisleTree) return;
    const aisles = subRacks.filter(r => r.type === 'aisle');
    if (aisles.length === 0) {
        aisleTree.innerHTML = '<div style="text-align:center;color:var(--text3);font-size:10px;padding:8px;border:1px dashed var(--border);border-radius:6px">Chưa có lối đi. Bấm + Thêm</div>';
    } else {
        aisleTree.innerHTML = aisles.map(r => {
            const isOpen = subExpandedId === r.id, isSel = subSelectedId === r.id;
            const wm = spx2m(r.w).toFixed(1), hm = spx2m(r.h).toFixed(1);
            return `<div class="tree-item">
<div class="tree-hd ${isSel ? 'active' : ''}" onclick="toggleYardTreeItem('${r.id}')">
<span class="tree-arrow ${isOpen ? 'open' : ''}">▶</span>
<span class="tree-dot"></span>
<span class="tree-id">${r.id}</span>
<span class="tree-size">${wm}×${hm}m · ${r.aisleType === 'walk' ? 'Lối đi bộ' : 'Lối đi xe nâng'}</span>
<span class="tree-del" onclick="event.stopPropagation();deleteYardItem('${r.id}')">✕</span>
</div>
<div class="tree-body ${isOpen ? 'open' : ''}">
<div class="form-row" style="margin-bottom:4px">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Hướng</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" onchange="updateYardItem('${r.id}','orient',this.value)">
<option value="H" ${r.orient === 'H' ? 'selected' : ''}>Ngang</option><option value="V" ${r.orient !== 'H' ? 'selected' : ''}>Dọc</option>
</select></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Loại lối đi</label>
<select class="form-input" style="font-size:11px;padding:4px 6px" onchange="updateYardItem('${r.id}','aisleType',this.value)">
<option value="walk" ${r.aisleType === 'walk' ? 'selected' : ''}>Lối đi bộ</option>
<option value="forklift" ${r.aisleType !== 'walk' ? 'selected' : ''}>Lối đi xe nâng</option>
</select></div>
</div>
<div class="form-row" style="margin-bottom:0">
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Dài (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.2" value="${r.lenM || 2.3}" onchange="updateYardItem('${r.id}','lenM',this.value)"></div>
<div class="form-group" style="margin-bottom:4px"><label class="form-label">Rộng (m)</label>
<input class="form-input" style="font-size:11px;padding:4px 6px" type="number" step="0.2" min="0.6" value="${r.widM || 2.3}" onchange="updateYardItem('${r.id}','widM',this.value)"></div>
</div></div></div>`;
        }).join('');
    }
}

function toggleYardTreeItem(id) {
    subExpandedId = subExpandedId === id ? null : id;
    subSelectedId = id;
    renderYardTree();
    renderYardCanvas();
}

function editYardItem(id) {
    subExpandedId = subExpandedId === id ? null : id;
    subSelectedId = id;
    renderYardTree();
    renderYardCanvas();
}

function selectYardItem(id) {
    subSelectedId = id;
    renderYardTree();
    renderYardCanvas();
}

function addYardRackToSub() {
    let maxN = 0;
    subRacks.forEach(r => {
        if (r.id.startsWith('KV.')) {
            const num = parseInt(r.id.substring(3));
            if (num > maxN) maxN = num;
        }
    });
    const nextN = maxN + 1;
    const id = `KV.${nextN}`;
    const defaultLen = 5.0;
    const defaultWid = 3.0;
    const w = m2spx(defaultLen), h = m2spx(defaultWid);
    subRacks.push({
        id,
        x: snapSubCell(m2spx(0.5)),
        y: snapSubCell(m2spx(0.5) + (subRacks.filter(r => r.type !== 'aisle').length) * (h + m2spx(1))),
        w,
        h,
        orient: 'H',
        levels: 1,
        bays: 1,
        type: 'rack',
        lenM: defaultLen,
        widM: defaultWid,
        heightM: 0
    });
    subExpandedId = id;
    subSelectedId = id;
    refreshConfigCanvasAndRules();
    renderYardTree();
}

function addYardAisleToSub() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    let maxN = 0;
    subRacks.forEach(r => {
        if (r.id.startsWith('Lối.')) {
            const num = parseInt(r.id.substring(4));
            if (num > maxN) maxN = num;
        }
    });
    const nextN = maxN + 1;
    const id = `Lối.${nextN}`;
    const wM = wh.len;
    subRacks.push({
        id,
        x: 0,
        y: snapSubCell(m2spx(3)),
        w: m2spx(wM),
        h: m2spx(2.3),
        orient: 'H',
        type: 'aisle',
        lenM: wM,
        widM: 2.3,
        aisleType: 'walk'
    });
    subExpandedId = id;
    subSelectedId = id;
    refreshConfigCanvasAndRules();
    renderYardTree();
}

function updateYardItem(id, field, value) {
    const rack = subRacks.find(r => r.id === id); if (!rack) return;
    const wh = WAREHOUSES[selectedWarehouseId];
    if (field === 'orient') {
        rack.orient = value;
        const tmp = rack.w; rack.w = rack.h; rack.h = tmp;
        const tmpM = rack.lenM; rack.lenM = rack.widM; rack.widM = tmpM;
    }
    else if (field === 'lenM') {
        rack.lenM = parseFloat(value) || 1;
        if (rack.type === 'aisle') {
            if (rack.orient === 'H') rack.w = m2spx(rack.lenM); else rack.h = m2spx(rack.lenM);
        } else {
            rack.w = m2spx(rack.lenM);
        }
    }
    else if (field === 'widM') {
        rack.widM = parseFloat(value) || 1;
        if (rack.type === 'aisle') {
            if (rack.orient === 'H') rack.h = m2spx(rack.widM); else rack.w = m2spx(rack.widM);
        } else {
            rack.h = m2spx(rack.widM);
        }
    }
    else if (field === 'aisleType') {
        rack.aisleType = value;
    }

    const maxW = m2spx(wh.len), maxH = m2spx(wh.wid);
    rack.x = snapSubCell(Math.max(0, Math.min(rack.x, maxW - rack.w)));
    rack.y = snapSubCell(Math.max(0, Math.min(rack.y, maxH - rack.h)));

    refreshConfigCanvasAndRules();
    renderYardTree();
}

function deleteYardItem(id) {
    showConfirm('Xóa đối tượng', 'Bạn có chắc chắn muốn xóa ' + id + '?', () => {
        subRacks = subRacks.filter(r => r.id !== id);
        if (subSelectedId === id) subSelectedId = null;
        if (subExpandedId === id) subExpandedId = null;
        refreshConfigCanvasAndRules();
        renderYardTree();
    });
}

function onYardWarehouseSizeChange() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    const newL = parseFloat(document.getElementById('yard-wh-len').value) || wh.len;
    const newW = parseFloat(document.getElementById('yard-wh-wid').value) || wh.wid;
    wh.len = newL; wh.wid = newW;
    wh.area = newL * newW;
    wh.theorVol = newL * newW * wh.hgt;

    const pxW = m2spx(newL), pxH = m2spx(newW);
    const canvas = document.getElementById('warehouse-canvas');
    if (canvas) {
        canvas.style.width = pxW + 'px';
        canvas.style.height = pxH + 'px';
    }

    mainZoomFit();

    const maxW = m2spx(newL), maxH = m2spx(newW);
    subRacks.forEach(rack => {
        rack.x = snapSubCell(Math.max(0, Math.min(rack.x, maxW - rack.w)));
        rack.y = snapSubCell(Math.max(0, Math.min(rack.y, maxH - rack.h)));
    });

    document.getElementById('canvas-size-label').textContent = `${wh.len}m × ${wh.wid}m · ${m2c(wh.len)}×${m2c(wh.wid)} ô`;

    const infoBody = document.getElementById('cfg-info-body');
    if (infoBody) {
        infoBody.innerHTML = `
<div class="cfg-info-section">
<div class="cfg-info-label">Thông tin chung</div>
<div class="cfg-info-row"><span class="cfg-info-key">Mã kho:</span><span class="cfg-info-val">${wh.id}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Tên kho:</span><span class="cfg-info-val" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px" title="${wh.name}">${wh.name}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Tên nhà kho:</span><span class="cfg-info-val">${wh.tenNhaKho || '—'}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Mã tỉnh:</span><span class="cfg-info-val">${wh.maTinh || '—'}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Địa chỉ:</span><span class="cfg-info-val" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px" title="${wh.address || '—'}">${wh.address || '—'}</span></div>
</div>
<div class="cfg-divider"></div>
<div class="cfg-info-section">
<div class="cfg-info-label">Thông số kỹ thuật</div>
<div class="cfg-info-row"><span class="cfg-info-key">Loại kho:</span><span class="cfg-info-val">${wh.type}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều dài:</span><span class="cfg-info-val mono">${wh.len} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều rộng:</span><span class="cfg-info-val mono">${wh.wid} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Chiều cao:</span><span class="cfg-info-val mono">${wh.hgt} m</span></div>
<div class="cfg-info-row"><span class="cfg-info-key">Diện tích sàn:</span><span class="cfg-info-val mono">${wh.area.toLocaleString('vi')} m²</span></div>
</div>
<div class="cfg-divider"></div>
<div class="cfg-info-section">
<div class="cfg-info-label">Quản lý</div>
<div class="cfg-info-row"><span class="cfg-info-key">Nhiệt độ:</span><span class="cfg-info-val mono">${wh.temp || 25}°C</span></div>
<div class="cfg-info-row"><span class="cfg-info-key" style="align-self:flex-start;padding-top:2px;">Mô tả:</span><span class="cfg-info-val" style="white-space:normal;max-width:160px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${wh.desc || ''}">${wh.desc || ''}</span></div>
<div class="cfg-info-row"><span class="cfg-info-key" style="align-self:flex-start;padding-top:2px;">Ghi chú:</span><span class="cfg-info-val" style="white-space:normal;max-width:160px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${wh.note || ''}">${wh.note || ''}</span></div>
</div>`;
    }

    refreshConfigCanvasAndRules();
    renderYardTree();
}

function getYardOverlapIds() {
    const ids = new Set();
    for (let i = 0; i < subRacks.length; i++) {
        for (let j = i + 1; j < subRacks.length; j++) {
            const a = subRacks[i], b = subRacks[j];
            const overlap = (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y);
            if (overlap) {
                ids.add(a.id);
                ids.add(b.id);
            }
        }
    }
    return ids;
}

function validateYardRules() {
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    const overlapIds = getYardOverlapIds();
    const outOfBounds = subRacks.some(r => r.x + r.w > m2spx(wh.len) || r.y + r.h > m2spx(wh.wid));
    const aisleOk = subRacks.filter(r => r.type === 'aisle').every(r => r.widM >= 1.2);

    const rules = [
        { ok: overlapIds.size === 0, msg: 'Khu vực hoặc lối đi bị chồng lấn' },
        { ok: !outOfBounds, msg: 'Khu vực hoặc lối đi vượt ngoài phạm vi bãi kho' },
        { ok: aisleOk, msg: 'Lối đi tối thiểu 1.2m' }
    ];

    const el = document.getElementById('yard-validation-list'); if (!el) return;
    el.innerHTML = rules.map(r => `<div class="validate-item ${r.ok ? 'ok' : 'err'}"><span class="validate-icon">${r.ok ? '✓' : '✗'}</span><span>${r.msg}</span></div>`).join('');

    const m = document.getElementById('cfg-status-msg');
    if (m) {
        if (overlapIds.size > 0 || outOfBounds || !aisleOk) {
            m.textContent = '⚠ Còn lỗi cấu hình!';
            m.style.color = 'var(--danger)';
        } else {
            m.textContent = '';
        }
    }
}

function startYardMove(e, id) {
    e.preventDefault();
    selectYardItem(id);
    const sc = document.getElementById('warehouse-canvas'); const cr = sc.getBoundingClientRect();
    const rack = subRacks.find(r => r.id === id); if (!rack) return;
    const mx = (e.clientX - cr.left) / canvasZoom;
    const my = (e.clientY - cr.top) / canvasZoom;
    yardMoveState = { id, ox: mx - rack.x, oy: my - rack.y };
    document.addEventListener('mousemove', onYardMove); document.addEventListener('mouseup', stopYardMove);
}

function onYardMove(e) {
    if (!yardMoveState) return;
    const wh = WAREHOUSES[selectedWarehouseId]; if (!wh) return;
    const sc = document.getElementById('warehouse-canvas'); const cr = sc.getBoundingClientRect();
    const rack = subRacks.find(r => r.id === yardMoveState.id); if (!rack) return;
    const maxW = m2spx(wh.len), maxH = m2spx(wh.wid);
    let nx = (e.clientX - cr.left) / canvasZoom - yardMoveState.ox;
    let ny = (e.clientY - cr.top) / canvasZoom - yardMoveState.oy;
    rack.x = snapSubCell(Math.max(0, Math.min(nx, maxW - rack.w)));
    rack.y = snapSubCell(Math.max(0, Math.min(ny, maxH - rack.h)));
    renderYardCanvas();
}

function stopYardMove() {
    yardMoveState = null;
    document.removeEventListener('mousemove', onYardMove);
    document.removeEventListener('mouseup', stopYardMove);
    renderYardTree();
    validateYardRules();
}

// ════════════════════════════════════════
// BOOT
// Detail zoom variables and functions
let detailZoomVal = 1;
window.detailZoomChange = function (delta) {
    detailZoomVal = Math.max(0.2, Math.min(5, detailZoomVal + delta));
    applyDetailZoom();
};
window.detailZoomFit = function () {
    detailZoomVal = 1;
    applyDetailZoom();
};
window.applyDetailZoom = function () {
    const mapEl = document.getElementById('static-detail-map');
    if (mapEl) {
        const vb = mapEl.getAttribute('viewBox');
        const wh = WAREHOUSES[selectedWarehouseId];
        if (vb && wh) {
            const VW = 1000, VH = Math.round(1000 * wh.wid / wh.len);
            const zoomW = VW / detailZoomVal;
            const zoomH = VH / detailZoomVal;
            const offsetX = (VW - zoomW) / 2;
            const offsetY = (VH - zoomH) / 2;
            mapEl.setAttribute('viewBox', `${offsetX.toFixed(1)} ${offsetY.toFixed(1)} ${zoomW.toFixed(1)} ${zoomH.toFixed(1)}`);
        }
    }
    const label = document.getElementById('detail-zoom-label');
    if (label) {
        label.textContent = Math.round(detailZoomVal * 100) + '%';
    }
};

showView('warehouse-list');