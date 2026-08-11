/**
 * ViettelAIWS — Mock Data Toàn Hệ Thống
 * Dùng chung cho tất cả các phân hệ: PH1, PH2, PH3, PH4, PH5, PH6
 * Cập nhật: 2026-06-25
 */

window.MOCK = window.MOCK || {};

/* ============================================================
   1. USERS — Danh sách người dùng
   ============================================================ */
MOCK.users = [
  { id: 'USR-001', name: 'Nguyễn Admin',    initials: 'NA', role: 'Administrator',    email: 'admin@viettel.com.vn',   phone: '0981000001', warehouse: 'HN01', active: true },
  { id: 'USR-002', name: 'Trần Văn Kho',    initials: 'TK', role: 'Thủ kho',          email: 'tvkho@viettel.com.vn',   phone: '0981000002', warehouse: 'HN01', active: true },
  { id: 'USR-003', name: 'Phạm Thị Hằng',   initials: 'PH', role: 'Kế toán kho',      email: 'pthang@viettel.com.vn',  phone: '0981000003', warehouse: 'HN01', active: true },
  { id: 'USR-004', name: 'Nguyễn Hữu An',   initials: 'NA', role: 'Nhân viên kho',    email: 'nhuan@viettel.com.vn',   phone: '0981000004', warehouse: 'HN01', active: true },
  { id: 'USR-005', name: 'Lê Minh Tuấn',    initials: 'LT', role: 'Trưởng ca',        email: 'lmtuan@viettel.com.vn',  phone: '0981000005', warehouse: 'HCM01',active: true },
  { id: 'USR-006', name: 'Vũ Thanh Hải',    initials: 'VH', role: 'Nhân viên kho',    email: 'vthai@viettel.com.vn',   phone: '0981000006', warehouse: 'HCM01',active: true },
  { id: 'USR-007', name: 'Đặng Thúy Linh',  initials: 'DL', role: 'Giám sát kho',     email: 'dtlinh@viettel.com.vn',  phone: '0981000007', warehouse: 'DN01', active: false },
];

/* ============================================================
   2. WAREHOUSES — Danh sách kho
   ============================================================ */
MOCK.warehouses = [
  {
    id: 'HN01', name: 'Kho Hà Nội 01', shortName: 'Kho HN01',
    address: '18 Trần Hữu Dực, Nam Từ Liêm, Hà Nội',
    region: 'Hà Nội', zone: 'Miền Bắc',
    status: 'configured',
    totalArea: 2400,   // m²
    usedArea: 1640,
    capacity: 5000,    // pallet
    usedCapacity: 3200,
    manager: 'USR-002',
    zones: ['ZONE-NHAP', 'ZONE-XE', 'ZONE-LUUKHO-A', 'ZONE-LUUKHO-B', 'ZONE-XUAT', 'ZONE-QC'],
    created: '2025-01-15',
  },
  {
    id: 'HCM01', name: 'Kho Hồ Chí Minh 01', shortName: 'Kho HCM01',
    address: '220 Điện Biên Phủ, Bình Thạnh, TP. HCM',
    region: 'Hồ Chí Minh', zone: 'Miền Nam',
    status: 'configured',
    totalArea: 3800,
    usedArea: 2900,
    capacity: 8000,
    usedCapacity: 5900,
    manager: 'USR-005',
    zones: ['ZONE-NHAP', 'ZONE-XE', 'ZONE-LUUKHO-A', 'ZONE-XUAT'],
    created: '2025-02-01',
  },
  {
    id: 'DN01', name: 'Kho Đà Nẵng 01', shortName: 'Kho ĐN01',
    address: '35 Nguyễn Văn Linh, Hải Châu, Đà Nẵng',
    region: 'Đà Nẵng', zone: 'Miền Trung',
    status: 'configuring',
    totalArea: 1800,
    usedArea: 900,
    capacity: 3000,
    usedCapacity: 1100,
    manager: 'USR-007',
    zones: ['ZONE-NHAP', 'ZONE-LUUKHO-A', 'ZONE-XUAT'],
    created: '2025-04-10',
  },
];

/* ============================================================
   3. SUPPLIERS — Nhà cung cấp
   ============================================================ */
MOCK.suppliers = [
  { id: 'NCC-001', name: 'Ericsson Vietnam',       code: 'ERICSSON-VN',  country: 'Thụy Điển',  contact: 'nguyen.a@ericsson.com',   phone: '024 3936 7000', taxCode: '0102958932' },
  { id: 'NCC-002', name: 'Huawei Technologies',    code: 'HUAWEI-TECH',  country: 'Trung Quốc', contact: 'vn.sales@huawei.com',      phone: '024 6285 9999', taxCode: '0106198632' },
  { id: 'NCC-003', name: 'Nokia Solutions & Networks', code: 'NOKIA-SNS', country: 'Phần Lan',  contact: 'support.vn@nokia.com',     phone: '028 3825 5858', taxCode: '0301551018' },
  { id: 'NCC-004', name: 'Thu hồi CCDC – Chi nhánh HN', code: 'CCDC-HN', country: 'Việt Nam', contact: 'thuho.ccdc@viettel.com.vn', phone: '0981000010',   taxCode: '0100109106' },
  { id: 'NCC-005', name: 'ZTE Vietnam',            code: 'ZTE-VN',       country: 'Trung Quốc', contact: 'vn.bd@zte.com.cn',         phone: '028 7109 9333', taxCode: '0311654321' },
];

/* ============================================================
   4. INBOUND ORDERS — Lệnh nhập kho (DO Pool - PH2)
   ============================================================ */
MOCK.inboundOrders = [
  {
    id: 'INB-2026-00118',
    refCode: 'PO-2026-0991',
    type: 'XE',           // XE = Xăng Đầu tư, XX = nhãn khác
    category: 'INB-NCC',  // INB-NCC | INB-TRF | INB-OTH
    categoryLabel: 'INB-NCC – Nhập kho NCC',
    supplier: 'NCC-001',
    supplierName: 'Ericsson Vietnam',
    warehouse: 'HN01',
    totalTasks: 13,
    doneTasks: 12,
    status: 'processing',     // pending | confirmed | processing | done | error | waiting_assign
    statusLabel: 'Đang xử lý',
    slaType: 'hours',
    slaValue: 6,
    slaRemaining: '6h12',
    slaUrgent: true,
    slaExpired: false,
    inboundDate: '2026-05-18 09:00',
    assignee: 'USR-002',
    assigneeName: 'Trần Văn Kho',
    volume: 12.4,           // m³
    note: '',
    sapDocNo: '4900001234',
    createdAt: '2026-05-17 14:00',
  },
  {
    id: 'INB-2026-00119',
    refCode: 'PO-2026-1002',
    type: 'XX',
    category: 'INB-NCC',
    categoryLabel: 'INB-NCC – Nhập kho NCC',
    supplier: 'NCC-002',
    supplierName: 'Huawei Tech',
    warehouse: 'HN01',
    totalTasks: 13,
    doneTasks: 11,
    status: 'error',
    statusLabel: 'Lỗi API',
    slaType: null,
    slaValue: null,
    slaRemaining: null,
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-18 10:30',
    assignee: null,
    assigneeName: null,
    volume: 8.7,
    note: 'Lỗi kết nối SAP API, cần kiểm tra lại.',
    sapDocNo: '4900001235',
    createdAt: '2026-05-17 15:10',
  },
  {
    id: 'INB-2026-00120',
    refCode: 'STO-N-S-118',
    type: 'XE',
    category: 'INB-TRF',
    categoryLabel: 'INB-TRF – NCK',
    supplier: null,
    supplierName: 'Kho HCM01',
    warehouse: 'HN01',
    totalTasks: 12,
    doneTasks: 10,
    status: 'pending',
    statusLabel: 'Chờ xác nhận',
    slaType: 'hours',
    slaValue: 12,
    slaRemaining: '12h',
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-18 14:00',
    assignee: 'USR-003',
    assigneeName: 'Phạm Thị Hằng',
    volume: 15.2,
    note: '',
    sapDocNo: '4900001236',
    createdAt: '2026-05-17 16:00',
  },
  {
    id: 'INB-2026-00121',
    refCode: 'ASS-RC-0042',
    type: 'XE',
    category: 'INB-OTH',
    categoryLabel: 'INB-OTH – Nhập kho khác',
    supplier: 'NCC-004',
    supplierName: 'Thu hồi CCDC – Chi nhánh HN',
    warehouse: 'HN01',
    totalTasks: null,
    doneTasks: 0,
    status: 'waiting_assign',
    statusLabel: 'Chờ phân công',
    slaType: 'days',
    slaValue: 1,
    slaRemaining: '1d8h',
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-19 08:00',
    assignee: 'USR-004',
    assigneeName: 'Nguyễn Hữu An',
    volume: 3.1,
    note: 'Thu hồi tài sản từ chi nhánh HN về kho trung tâm.',
    sapDocNo: '4900001237',
    createdAt: '2026-05-18 07:30',
  },
  {
    id: 'INB-2026-00122',
    refCode: 'PO-2026-1010',
    type: 'XE',
    category: 'INB-NCC',
    categoryLabel: 'INB-NCC – Nhập kho NCC',
    supplier: 'NCC-003',
    supplierName: 'Nokia Solutions & Networks',
    warehouse: 'HN01',
    totalTasks: 8,
    doneTasks: 8,
    status: 'done',
    statusLabel: 'Hoàn tất',
    slaType: 'hours',
    slaValue: 24,
    slaRemaining: null,
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-17 09:00',
    assignee: 'USR-002',
    assigneeName: 'Trần Văn Kho',
    volume: 6.8,
    note: '',
    sapDocNo: '4900001238',
    createdAt: '2026-05-16 11:00',
  },
  {
    id: 'INB-2026-00123',
    refCode: 'PO-2026-1015',
    type: 'XX',
    category: 'INB-NCC',
    categoryLabel: 'INB-NCC – Nhập kho NCC',
    supplier: 'NCC-005',
    supplierName: 'ZTE Vietnam',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 5,
    status: 'confirmed',
    statusLabel: 'Đã xác nhận',
    slaType: 'hours',
    slaValue: 8,
    slaRemaining: '3h45',
    slaUrgent: true,
    slaExpired: false,
    inboundDate: '2026-05-19 13:00',
    assignee: 'USR-004',
    assigneeName: 'Nguyễn Hữu An',
    volume: 9.5,
    note: '',
    sapDocNo: '4900001239',
    createdAt: '2026-05-18 09:00',
  },
  {
    id: 'INB-2026-00124',
    refCode: 'STO-N-S-120',
    type: 'XE',
    category: 'INB-TRF',
    categoryLabel: 'INB-TRF – NCK',
    supplier: null,
    supplierName: 'Kho ĐN01',
    warehouse: 'HN01',
    totalTasks: 6,
    doneTasks: 0,
    status: 'waiting_assign',
    statusLabel: 'Chờ phân công',
    slaType: 'days',
    slaValue: 2,
    slaRemaining: '2d',
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-20 10:00',
    assignee: null,
    assigneeName: null,
    volume: 4.4,
    note: 'Chuyển kho từ Đà Nẵng về HN.',
    sapDocNo: '4900001240',
    createdAt: '2026-05-18 10:00',
  },
  {
    id: 'INB-2026-00125',
    refCode: 'PO-2026-1020',
    type: 'XE',
    category: 'INB-NCC',
    categoryLabel: 'INB-NCC – Nhập kho NCC',
    supplier: 'NCC-001',
    supplierName: 'Ericsson Vietnam',
    warehouse: 'HN01',
    totalTasks: 15,
    doneTasks: 15,
    status: 'done',
    statusLabel: 'Hoàn tất',
    slaType: null,
    slaValue: null,
    slaRemaining: null,
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-16 08:00',
    assignee: 'USR-002',
    assigneeName: 'Trần Văn Kho',
    volume: 22.0,
    note: '',
    sapDocNo: '4900001241',
    createdAt: '2026-05-15 14:00',
  },
  {
    id: 'INB-2026-00126',
    refCode: 'PO-2026-0990',
    type: 'XE',
    category: 'INB-NCC',
    categoryLabel: 'INB-NCC – Nhập kho NCC',
    supplier: 'NCC-002',
    supplierName: 'Huawei Tech',
    warehouse: 'HN01',
    totalTasks: 11,
    doneTasks: 6,
    status: 'processing',
    statusLabel: 'Đang xử lý',
    slaType: 'hours',
    slaValue: 6,
    slaRemaining: '2h30',
    slaUrgent: true,
    slaExpired: false,
    inboundDate: '2026-05-19 14:00',
    assignee: 'USR-004',
    assigneeName: 'Nguyễn Hữu An',
    volume: 11.1,
    note: '',
    sapDocNo: '4900001242',
    createdAt: '2026-05-18 12:00',
  },
  {
    id: 'INB-2026-00127',
    refCode: 'ASS-RC-0043',
    type: 'XX',
    category: 'INB-OTH',
    categoryLabel: 'INB-OTH – Nhập kho khác',
    supplier: 'NCC-004',
    supplierName: 'Thu hồi CCDC – Chi nhánh HCM',
    warehouse: 'HN01',
    totalTasks: 4,
    doneTasks: 4,
    status: 'done',
    statusLabel: 'Hoàn tất',
    slaType: null,
    slaValue: null,
    slaRemaining: null,
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-15 09:00',
    assignee: 'USR-003',
    assigneeName: 'Phạm Thị Hằng',
    volume: 2.5,
    note: '',
    sapDocNo: '4900001243',
    createdAt: '2026-05-14 10:00',
  },
  {
    id: 'INB-2026-00128',
    refCode: 'PO-2026-1025',
    type: 'XE',
    category: 'INB-NCC',
    categoryLabel: 'INB-NCC – Nhập kho NCC',
    supplier: 'NCC-003',
    supplierName: 'Nokia Solutions & Networks',
    warehouse: 'HCM01',
    totalTasks: 9,
    doneTasks: 7,
    status: 'processing',
    statusLabel: 'Đang xử lý',
    slaType: 'hours',
    slaValue: 12,
    slaRemaining: '5h',
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-19 11:00',
    assignee: 'USR-005',
    assigneeName: 'Lê Minh Tuấn',
    volume: 14.3,
    note: '',
    sapDocNo: '4900001244',
    createdAt: '2026-05-18 09:00',
  },
  {
    id: 'INB-2026-00129',
    refCode: 'STO-N-S-125',
    type: 'XE',
    category: 'INB-TRF',
    categoryLabel: 'INB-TRF – NCK',
    supplier: null,
    supplierName: 'Kho HN01',
    warehouse: 'HCM01',
    totalTasks: 7,
    doneTasks: 7,
    status: 'done',
    statusLabel: 'Hoàn tất',
    slaType: null,
    slaValue: null,
    slaRemaining: null,
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-17 15:00',
    assignee: 'USR-006',
    assigneeName: 'Vũ Thanh Hải',
    volume: 18.0,
    note: '',
    sapDocNo: '4900001245',
    createdAt: '2026-05-16 14:00',
  },
  {
    id: 'INB-2026-00130',
    refCode: 'PO-2026-1030',
    type: 'XX',
    category: 'INB-NCC',
    categoryLabel: 'INB-NCC – Nhập kho NCC',
    supplier: 'NCC-001',
    supplierName: 'Ericsson Vietnam',
    warehouse: 'HN01',
    totalTasks: 20,
    doneTasks: 0,
    status: 'pending',
    statusLabel: 'Chờ xác nhận',
    slaType: 'days',
    slaValue: 3,
    slaRemaining: '3d',
    slaUrgent: false,
    slaExpired: false,
    inboundDate: '2026-05-22 08:00',
    assignee: null,
    assigneeName: null,
    volume: 30.5,
    note: 'Lô hàng lớn, cần phối hợp thêm nhân sự.',
    sapDocNo: '4900001246',
    createdAt: '2026-05-18 15:00',
  },
];

/* ============================================================
   5. TASKS — Danh sách task (PH6 – Task Pool)
   status: done | doing | pending | waiting_assign | waiting_confirm
   slaType: continuous | one_time | null
   ============================================================ */
MOCK.tasks = [

  /* ── INB-2026-00118 (Ericsson) — quy trình nhập kho — 7/10 done ── */
  { id: 'TSK-118-01', orderId: 'INB-2026-00118', seq: 1,  name: 'Duyệt lịch giao việc',         type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: '09:00', endTime: '09:15', note: '' },
  { id: 'TSK-118-02', orderId: 'INB-2026-00118', seq: 2,  name: 'Kiểm hàng - Bàn giao',         type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'Cổng A · Thủ kho',         slaType: 'one_time',   startTime: '09:15', endTime: '09:40', note: '' },
  { id: 'TSK-118-03', orderId: 'INB-2026-00118', seq: 3,  name: 'Dỡ hàng',                       type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Khu C01 · NV bốc xếp',    slaType: 'one_time',   startTime: '09:40', endTime: '10:30', note: '' },
  { id: 'TSK-118-04', orderId: 'INB-2026-00118', seq: 4,  name: 'Đưa vào khu chờ nhập',          type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu chờ nhập · NV kho',    slaType: 'one_time',   startTime: '10:30', endTime: '11:00', note: '' },
  { id: 'TSK-118-05', orderId: 'INB-2026-00118', seq: 5,  name: 'Ký Voffice',                    type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: '11:00', endTime: '11:15', note: '' },
  { id: 'TSK-118-06', orderId: 'INB-2026-00118', seq: 6,  name: 'Đưa sang khu đóng gói',         type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu đóng gói · NV kho',    slaType: 'one_time',   startTime: '11:15', endTime: '12:00', note: '' },
  { id: 'TSK-118-07', orderId: 'INB-2026-00118', seq: 7,  name: 'Đóng gói hàng',                 type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu đóng gói · NV bốc xếp', slaType: 'one_time', startTime: '12:00', endTime: '13:00', note: '' },
  { id: 'TSK-118-08', orderId: 'INB-2026-00118', seq: 8,  name: 'Đưa vào khu lưu trữ',           type: 'INB', status: 'doing',          priority: 'high',   assignee: 'USR-004', location: 'Khu A-01 · NV bốc xếp',   slaType: 'continuous', startTime: '13:00', endTime: null,    note: '' },
  { id: 'TSK-118-09', orderId: 'INB-2026-00118', seq: 9,  name: 'Giám sát lệnh',                 type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'continuous', startTime: '09:00', endTime: '13:00', note: '' },
  { id: 'TSK-118-10', orderId: 'INB-2026-00118', seq: 10, name: 'Giám sát an ninh',              type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-003', location: 'Cổng A · Bảo vệ',         slaType: 'continuous', startTime: '09:00', endTime: '13:00', note: '' },

  /* ── INB-2026-00119 (Huawei) — blocked ── */
  { id: 'TSK-119-01', orderId: 'INB-2026-00119', seq: 1,  name: 'Duyệt lịch giao việc',         type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: '10:30', endTime: '10:45', note: '' },
  { id: 'TSK-119-02', orderId: 'INB-2026-00119', seq: 2,  name: 'Kiểm hàng - Bàn giao',         type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Cổng A · Thủ kho',         slaType: 'one_time',   startTime: '10:45', endTime: '11:10', note: '' },
  { id: 'TSK-119-03', orderId: 'INB-2026-00119', seq: 3,  name: 'Dỡ hàng',                       type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu C02 · NV bốc xếp',    slaType: 'one_time',   startTime: '11:10', endTime: '12:10', note: '' },
  { id: 'TSK-119-04', orderId: 'INB-2026-00119', seq: 4,  name: 'Đưa vào khu chờ nhập',          type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu chờ nhập · NV kho',    slaType: 'one_time',   startTime: '12:10', endTime: '12:40', note: '' },
  { id: 'TSK-119-05', orderId: 'INB-2026-00119', seq: 5,  name: 'Ký Voffice',                    type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: '12:40', endTime: '12:55', note: '' },
  { id: 'TSK-119-06', orderId: 'INB-2026-00119', seq: 6,  name: 'Đưa sang khu đóng gói',         type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu đóng gói · NV kho',    slaType: 'one_time',   startTime: '12:55', endTime: '13:30', note: '' },
  { id: 'TSK-119-07', orderId: 'INB-2026-00119', seq: 7,  name: 'Đóng gói hàng',                 type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu đóng gói · NV bốc xếp', slaType: 'one_time', startTime: '13:30', endTime: '14:30', note: '' },
  { id: 'TSK-119-08', orderId: 'INB-2026-00119', seq: 8,  name: 'Đưa vào khu lưu trữ',           type: 'INB', status: 'waiting_assign', priority: 'high',   assignee: null,       location: '—',                        slaType: 'one_time',   startTime: null,    endTime: null,    note: 'Lỗi kết nối SAP API. Cần IT hỗ trợ.' },
  { id: 'TSK-119-09', orderId: 'INB-2026-00119', seq: 9,  name: 'Giám sát lệnh',                 type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'continuous', startTime: '10:30', endTime: '14:30', note: '' },
  { id: 'TSK-119-10', orderId: 'INB-2026-00119', seq: 10, name: 'Giám sát an ninh',              type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-003', location: 'Cổng A · Bảo vệ',         slaType: 'continuous', startTime: '10:30', endTime: '14:30', note: '' },

  /* ── INB-2026-00120 (Chuyển kho HCM to HN) — 7/10 done ── */
  { id: 'TSK-120-01', orderId: 'INB-2026-00120', seq: 1,  name: 'Duyệt lịch giao việc',         type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'VP Kho · Kế toán kho',     slaType: 'one_time',   startTime: '14:00', endTime: '14:15', note: '' },
  { id: 'TSK-120-02', orderId: 'INB-2026-00120', seq: 2,  name: 'Kiểm hàng - Bàn giao',         type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'Cổng A · Kế toán kho',     slaType: 'one_time',   startTime: '14:15', endTime: '14:40', note: '' },
  { id: 'TSK-120-03', orderId: 'INB-2026-00120', seq: 3,  name: 'Dỡ hàng',                       type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu C03 · NV bốc xếp',    slaType: 'one_time',   startTime: '14:40', endTime: '15:30', note: '' },
  { id: 'TSK-120-04', orderId: 'INB-2026-00120', seq: 4,  name: 'Đưa vào khu chờ nhập',          type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu chờ nhập · NV kho',    slaType: 'one_time',   startTime: '15:30', endTime: '16:00', note: '' },
  { id: 'TSK-120-05', orderId: 'INB-2026-00120', seq: 5,  name: 'Ký Voffice',                    type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: '16:00', endTime: '16:15', note: '' },
  { id: 'TSK-120-06', orderId: 'INB-2026-00120', seq: 6,  name: 'Đưa sang khu đóng gói',         type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu đóng gói · NV kho',    slaType: 'one_time',   startTime: '16:15', endTime: '17:00', note: '' },
  { id: 'TSK-120-07', orderId: 'INB-2026-00120', seq: 7,  name: 'Đóng gói hàng',                 type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu đóng gói · NV bốc xếp', slaType: 'one_time', startTime: '17:00', endTime: '17:45', note: '' },
  { id: 'TSK-120-08', orderId: 'INB-2026-00120', seq: 8,  name: 'Đưa vào khu lưu trữ',           type: 'INB', status: 'pending',        priority: 'high',   assignee: 'USR-004', location: 'Khu A-03 · NV bốc xếp',   slaType: 'one_time',   startTime: null,    endTime: null,    note: 'Chờ xác nhận từ phía HCM01.' },
  { id: 'TSK-120-09', orderId: 'INB-2026-00120', seq: 9,  name: 'Giám sát lệnh',                 type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'continuous', startTime: '14:00', endTime: '17:45', note: '' },
  { id: 'TSK-120-10', orderId: 'INB-2026-00120', seq: 10, name: 'Giám sát an ninh',              type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-003', location: 'Cổng A · Bảo vệ',         slaType: 'continuous', startTime: '14:00', endTime: '17:45', note: '' },

  /* ── INB-2026-00121 (CCDC thu hoi) ── */
  { id: 'TSK-121-01', orderId: 'INB-2026-00121', seq: 1,  name: 'Duyệt lịch giao việc',         type: 'INB', status: 'pending',        priority: 'medium', assignee: 'USR-004', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-121-02', orderId: 'INB-2026-00121', seq: 2,  name: 'Kiểm hàng - Bàn giao',         type: 'INB', status: 'pending',        priority: 'high',   assignee: 'USR-004', location: 'Cổng A · Thủ kho',         slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-121-03', orderId: 'INB-2026-00121', seq: 3,  name: 'Dỡ hàng',                       type: 'INB', status: 'waiting_assign', priority: 'medium', assignee: null,       location: '—',                        slaType: null,         startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-121-04', orderId: 'INB-2026-00121', seq: 4,  name: 'Đưa vào khu chờ nhập',          type: 'INB', status: 'waiting_assign', priority: 'medium', assignee: null,       location: '—',                        slaType: null,         startTime: null,    endTime: null,    note: '' },

  /* ── INB-2026-00123 (ZTE) — 3/10 done ── */
  { id: 'TSK-123-01', orderId: 'INB-2026-00123', seq: 1,  name: 'Duyệt lịch giao việc',         type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: '13:00', endTime: '13:15', note: '' },
  { id: 'TSK-123-02', orderId: 'INB-2026-00123', seq: 2,  name: 'Kiểm hàng - Bàn giao',         type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Cổng A · Thủ kho',         slaType: 'one_time',   startTime: '13:15', endTime: '13:50', note: '' },
  { id: 'TSK-123-03', orderId: 'INB-2026-00123', seq: 3,  name: 'Dỡ hàng',                       type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Khu C04 · NV bốc xếp',    slaType: 'one_time',   startTime: '13:50', endTime: '14:55', note: '' },
  { id: 'TSK-123-04', orderId: 'INB-2026-00123', seq: 4,  name: 'Đưa vào khu chờ nhập',          type: 'INB', status: 'doing',          priority: 'medium', assignee: 'USR-004', location: 'Khu chờ nhập · NV kho',    slaType: 'continuous', startTime: '14:55', endTime: null,    note: '' },
  { id: 'TSK-123-05', orderId: 'INB-2026-00123', seq: 5,  name: 'Ký Voffice',                    type: 'INB', status: 'pending',        priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-123-06', orderId: 'INB-2026-00123', seq: 6,  name: 'Đưa sang khu đóng gói',         type: 'INB', status: 'pending',        priority: 'medium', assignee: 'USR-004', location: 'Khu đóng gói · NV kho',    slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-123-07', orderId: 'INB-2026-00123', seq: 7,  name: 'Đóng gói hàng',                 type: 'INB', status: 'waiting_assign', priority: 'medium', assignee: null,       location: '—',                        slaType: null,         startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-123-08', orderId: 'INB-2026-00123', seq: 8,  name: 'Đưa vào khu lưu trữ',           type: 'INB', status: 'waiting_assign', priority: 'high',   assignee: null,       location: '—',                        slaType: null,         startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-123-09', orderId: 'INB-2026-00123', seq: 9,  name: 'Giám sát lệnh',                 type: 'INB', status: 'doing',          priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'continuous', startTime: '13:00', endTime: null,    note: '' },
  { id: 'TSK-123-10', orderId: 'INB-2026-00123', seq: 10, name: 'Giám sát an ninh',              type: 'INB', status: 'doing',          priority: 'medium', assignee: 'USR-003', location: 'Cổng A · Bảo vệ',         slaType: 'continuous', startTime: '13:00', endTime: null,    note: '' },

  /* ── OUT-2026-00202 (Xuat kho HN) — 4/9 done ── */
  { id: 'TSK-202-01', orderId: 'OUT-2026-00202', seq: 1,  name: 'Duyệt lịch giao việc',         type: 'OUT', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: '10:00', endTime: '10:15', note: '' },
  { id: 'TSK-202-02', orderId: 'OUT-2026-00202', seq: 2,  name: 'Lấy hàng ra khu đóng gói',     type: 'OUT', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Khu A-01 · NV bốc xếp',   slaType: 'one_time',   startTime: '10:15', endTime: '11:15', note: '' },
  { id: 'TSK-202-03', orderId: 'OUT-2026-00202', seq: 3,  name: 'Đóng gói hàng',                 type: 'OUT', status: 'done',           priority: 'medium', assignee: 'USR-003', location: 'Khu C02 · NV bốc xếp',    slaType: 'one_time',   startTime: '11:15', endTime: '12:00', note: '' },
  { id: 'TSK-202-04', orderId: 'OUT-2026-00202', seq: 4,  name: 'Đưa sang khu chờ xuất',        type: 'OUT', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu chờ xuất · NV bốc xếp', slaType: 'one_time', startTime: '12:00', endTime: '12:30', note: '' },
  { id: 'TSK-202-05', orderId: 'OUT-2026-00202', seq: 5,  name: 'Kiểm hàng - Bàn giao',         type: 'OUT', status: 'doing',          priority: 'high',   assignee: 'USR-002', location: 'Khu chờ xuất · Thủ kho',   slaType: 'continuous', startTime: '12:30', endTime: null,    note: '' },
  { id: 'TSK-202-06', orderId: 'OUT-2026-00202', seq: 6,  name: 'Tải hàng lên xe',              type: 'OUT', status: 'waiting_assign', priority: 'high',   assignee: null,       location: 'Cổng A · Bảo vệ cổng',    slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-202-07', orderId: 'OUT-2026-00202', seq: 7,  name: 'Ký Voffice',                    type: 'OUT', status: 'waiting_assign', priority: 'high',   assignee: null,       location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-202-08', orderId: 'OUT-2026-00202', seq: 8,  name: 'Giám sát lệnh',                 type: 'OUT', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'continuous', startTime: '10:00', endTime: '12:30', note: '' },
  { id: 'TSK-202-09', orderId: 'OUT-2026-00202', seq: 9,  name: 'Giám sát an ninh',              type: 'OUT', status: 'doing',          priority: 'medium', assignee: 'USR-003', location: 'Cổng A · Bảo vệ',         slaType: 'continuous', startTime: '10:00', endTime: null,    note: '' },
];

/* ============================================================
   6. OUTBOUND ORDERS — Lệnh xuất kho (PH3)
   ============================================================ */

MOCK.outboundOrders = [

  { id: 'TSK-118-04', orderId: 'INB-2026-00118', seq: 4,  name: 'Kiểm đếm số lượng',             type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-002', location: 'Khu C01 · Thủ kho',        slaType: 'one_time',   startTime: '10:20', endTime: '11:00', note: '' },
  { id: 'TSK-118-05', orderId: 'INB-2026-00118', seq: 5,  name: 'Kiểm tra chất lượng QC',        type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'Khu QC · KT chất lượng',  slaType: 'one_time',   startTime: '11:00', endTime: '12:00', note: '' },
  { id: 'TSK-118-06', orderId: 'INB-2026-00118', seq: 6,  name: 'Chụp ảnh hiện trạng hàng',      type: 'INB', status: 'done',           priority: 'low',    assignee: 'USR-004', location: 'Khu C01 · NV kho',         slaType: null,         startTime: '12:00', endTime: '12:15', note: '' },
  { id: 'TSK-118-07', orderId: 'INB-2026-00118', seq: 7,  name: 'Phân loại hàng hóa',            type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-002', location: 'Khu C02 · Thủ kho',        slaType: 'one_time',   startTime: '12:15', endTime: '13:00', note: '' },
  { id: 'TSK-118-08', orderId: 'INB-2026-00118', seq: 8,  name: 'Đánh dấu vị trí lưu kho',       type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu A · NV kho',           slaType: 'one_time',   startTime: '13:00', endTime: '13:30', note: '' },
  { id: 'TSK-118-09', orderId: 'INB-2026-00118', seq: 9,  name: 'Nhập hàng vào hệ thống SAP',    type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: '13:30', endTime: '14:10', note: '' },
  { id: 'TSK-118-10', orderId: 'INB-2026-00118', seq: 10, name: 'Xếp hàng vào kệ',               type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu A-01 · NV bốc xếp',   slaType: 'one_time',   startTime: '14:10', endTime: '15:00', note: '' },
  { id: 'TSK-118-11', orderId: 'INB-2026-00118', seq: 11, name: 'Cập nhật vị trí trên hệ thống', type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: null,         startTime: '15:00', endTime: '15:20', note: '' },
  { id: 'TSK-118-12', orderId: 'INB-2026-00118', seq: 12, name: 'Ký xác nhận phiếu nhập',        type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: '15:20', endTime: '15:35', note: '' },
  { id: 'TSK-118-13', orderId: 'INB-2026-00118', seq: 13, name: 'Lưu hồ sơ & đóng lệnh',         type: 'INB', status: 'doing',          priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'continuous', startTime: '15:35', endTime: null,    note: '' },

  /* ── INB-2026-00119 (Huawei) — blocked tại SAP ── */
  { id: 'TSK-119-01', orderId: 'INB-2026-00119', seq: 1,  name: 'Tiếp nhận xe tải',              type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Cổng A · Bảo vệ cổng',    slaType: 'one_time',   startTime: '10:32', endTime: '10:50', note: '' },
  { id: 'TSK-119-02', orderId: 'INB-2026-00119', seq: 2,  name: 'Kiểm tra chứng từ',             type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: '10:50', endTime: '11:15', note: '' },
  { id: 'TSK-119-03', orderId: 'INB-2026-00119', seq: 3,  name: 'Dỡ hàng từ xe',                 type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu C02 · NV bốc xếp',    slaType: 'one_time',   startTime: '11:15', endTime: '12:10', note: '' },
  { id: 'TSK-119-04', orderId: 'INB-2026-00119', seq: 4,  name: 'Kiểm đếm số lượng',             type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-003', location: 'Khu C02 · KT chất lượng', slaType: 'one_time',   startTime: '12:10', endTime: '13:00', note: '' },
  { id: 'TSK-119-05', orderId: 'INB-2026-00119', seq: 5,  name: 'Kiểm tra chất lượng QC',        type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'Khu QC · KT chất lượng',  slaType: 'one_time',   startTime: '13:00', endTime: '14:00', note: '' },
  { id: 'TSK-119-06', orderId: 'INB-2026-00119', seq: 6,  name: 'Chụp ảnh hiện trạng',           type: 'INB', status: 'done',           priority: 'low',    assignee: 'USR-004', location: 'Khu C02 · NV kho',         slaType: null,         startTime: '14:00', endTime: '14:12', note: '' },
  { id: 'TSK-119-07', orderId: 'INB-2026-00119', seq: 7,  name: 'Phân loại hàng hóa',            type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu B · NV kho',           slaType: 'one_time',   startTime: '14:12', endTime: '15:00', note: '' },
  { id: 'TSK-119-08', orderId: 'INB-2026-00119', seq: 8,  name: 'Đánh dấu vị trí lưu kho',       type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu B-02 · NV kho',        slaType: 'one_time',   startTime: '15:00', endTime: '15:30', note: '' },
  { id: 'TSK-119-09', orderId: 'INB-2026-00119', seq: 9,  name: 'Xếp hàng vào kệ',               type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu B-02 · NV bốc xếp',   slaType: 'one_time',   startTime: '15:30', endTime: '16:30', note: '' },
  { id: 'TSK-119-10', orderId: 'INB-2026-00119', seq: 10, name: 'Cập nhật vị trí trên hệ thống', type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: null,         startTime: '16:30', endTime: '16:58', note: '' },
  { id: 'TSK-119-11', orderId: 'INB-2026-00119', seq: 11, name: 'Ký xác nhận phiếu nhập',        type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: '16:58', endTime: '17:10', note: '' },
  { id: 'TSK-119-12', orderId: 'INB-2026-00119', seq: 12, name: 'Nhập hàng vào hệ thống SAP',    type: 'INB', status: 'waiting_assign', priority: 'high',   assignee: 'USR-002', location: 'VP Kho · IT hỗ trợ',       slaType: 'one_time',   startTime: null,    endTime: null,    note: 'Lỗi kết nối SAP API. Cần IT hỗ trợ.' },
  { id: 'TSK-119-13', orderId: 'INB-2026-00119', seq: 13, name: 'Lưu hồ sơ & đóng lệnh',         type: 'INB', status: 'pending',        priority: 'medium', assignee: null,       location: '—',                         slaType: null,         startTime: null,    endTime: null,    note: '' },

  /* ── INB-2026-00120 (Chuyển kho HCM to HN) — 10/12 done ── */
  { id: 'TSK-120-01', orderId: 'INB-2026-00120', seq: 1,  name: 'Kiểm tra xe chuyển kho',        type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'Cổng A · Bảo vệ cổng',    slaType: 'one_time',   startTime: '14:05', endTime: '14:25', note: '' },
  { id: 'TSK-120-02', orderId: 'INB-2026-00120', seq: 2,  name: 'Đối chiếu phiếu xuất HCM01',    type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'VP Kho · Kế toán kho',     slaType: 'one_time',   startTime: '14:25', endTime: '14:45', note: '' },
  { id: 'TSK-120-03', orderId: 'INB-2026-00120', seq: 3,  name: 'Dỡ hàng',                       type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu C03 · NV bốc xếp',    slaType: 'one_time',   startTime: '14:45', endTime: '15:30', note: '' },
  { id: 'TSK-120-04', orderId: 'INB-2026-00120', seq: 4,  name: 'Kiểm đếm',                      type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-003', location: 'Khu C03 · Kế toán kho',   slaType: 'one_time',   startTime: '15:30', endTime: '16:00', note: '' },
  { id: 'TSK-120-05', orderId: 'INB-2026-00120', seq: 5,  name: 'Kiểm tra QC',                   type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'Khu QC · KT chất lượng',  slaType: 'one_time',   startTime: '16:00', endTime: '17:00', note: '' },
  { id: 'TSK-120-06', orderId: 'INB-2026-00120', seq: 6,  name: 'Phân loại & xếp khu vực',       type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu A · NV kho',           slaType: 'one_time',   startTime: '17:00', endTime: '17:30', note: '' },
  { id: 'TSK-120-07', orderId: 'INB-2026-00120', seq: 7,  name: 'Đánh dấu vị trí lưu kho',       type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu A-03 · NV kho',        slaType: 'one_time',   startTime: '17:30', endTime: '17:55', note: '' },
  { id: 'TSK-120-08', orderId: 'INB-2026-00120', seq: 8,  name: 'Nhập SAP – STO nhận',           type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: '17:55', endTime: '18:30', note: '' },
  { id: 'TSK-120-09', orderId: 'INB-2026-00120', seq: 9,  name: 'Xếp kệ',                        type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu A-03 · NV bốc xếp',   slaType: 'one_time',   startTime: '18:30', endTime: '19:00', note: '' },
  { id: 'TSK-120-10', orderId: 'INB-2026-00120', seq: 10, name: 'Cập nhật vị trí hệ thống',      type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: null,         startTime: '19:00', endTime: '19:18', note: '' },
  { id: 'TSK-120-11', orderId: 'INB-2026-00120', seq: 11, name: 'Ký biên bản bàn giao',          type: 'INB', status: 'pending',        priority: 'high',   assignee: 'USR-003', location: 'VP Kho · Kế toán kho',     slaType: 'one_time',   startTime: null,    endTime: null,    note: 'Chờ xác nhận từ phía HCM01.' },
  { id: 'TSK-120-12', orderId: 'INB-2026-00120', seq: 12, name: 'Đóng lệnh',                     type: 'INB', status: 'pending',        priority: 'medium', assignee: null,       location: '—',                         slaType: null,         startTime: null,    endTime: null,    note: '' },

  /* ── INB-2026-00121 (CCDC thu hoi) ── */
  { id: 'TSK-121-01', orderId: 'INB-2026-00121', seq: 1,  name: 'Tiếp nhận tài sản thu hồi',     type: 'INB', status: 'pending',        priority: 'medium', assignee: 'USR-004', location: 'Cổng A · Bảo vệ cổng',    slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-121-02', orderId: 'INB-2026-00121', seq: 2,  name: 'Kiểm tra tình trạng tài sản',   type: 'INB', status: 'pending',        priority: 'high',   assignee: 'USR-004', location: 'Khu QC · KT chất lượng',  slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-121-03', orderId: 'INB-2026-00121', seq: 3,  name: 'Phân loại có thể tái sử dụng',  type: 'INB', status: 'waiting_assign', priority: 'medium', assignee: null,       location: '—',                         slaType: null,         startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-121-04', orderId: 'INB-2026-00121', seq: 4,  name: 'Nhập SAP – Thu hồi',            type: 'INB', status: 'waiting_assign', priority: 'high',   assignee: null,       location: '—',                         slaType: null,         startTime: null,    endTime: null,    note: '' },

  /* ── INB-2026-00123 (ZTE) — 5/10 done ── */
  { id: 'TSK-123-01', orderId: 'INB-2026-00123', seq: 1,  name: 'Tiếp nhận xe tải ZTE',          type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Cổng A · Bảo vệ cổng',    slaType: 'one_time',   startTime: '13:05', endTime: '13:25', note: '' },
  { id: 'TSK-123-02', orderId: 'INB-2026-00123', seq: 2,  name: 'Kiểm tra chứng từ',             type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: '13:25', endTime: '13:55', note: '' },
  { id: 'TSK-123-03', orderId: 'INB-2026-00123', seq: 3,  name: 'Dỡ hàng từ xe',                 type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Khu C04 · NV bốc xếp',    slaType: 'one_time',   startTime: '13:55', endTime: '14:55', note: '' },
  { id: 'TSK-123-04', orderId: 'INB-2026-00123', seq: 4,  name: 'Kiểm đếm số lượng',             type: 'INB', status: 'done',           priority: 'medium', assignee: 'USR-003', location: 'Khu C04 · KT chất lượng', slaType: 'one_time',   startTime: '14:55', endTime: '15:30', note: '' },
  { id: 'TSK-123-05', orderId: 'INB-2026-00123', seq: 5,  name: 'Kiểm tra QC',                   type: 'INB', status: 'done',           priority: 'high',   assignee: 'USR-003', location: 'Khu QC · KT chất lượng',  slaType: 'one_time',   startTime: '15:30', endTime: '16:30', note: '' },
  { id: 'TSK-123-06', orderId: 'INB-2026-00123', seq: 6,  name: 'Phân loại hàng hóa',            type: 'INB', status: 'doing',          priority: 'medium', assignee: 'USR-004', location: 'Khu B · NV kho',           slaType: 'continuous', startTime: '16:30', endTime: null,    note: '' },
  { id: 'TSK-123-07', orderId: 'INB-2026-00123', seq: 7,  name: 'Đánh dấu vị trí lưu kho',       type: 'INB', status: 'pending',        priority: 'medium', assignee: 'USR-004', location: 'Khu B · NV kho',           slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-123-08', orderId: 'INB-2026-00123', seq: 8,  name: 'Nhập hàng vào hệ thống SAP',    type: 'INB', status: 'pending',        priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-123-09', orderId: 'INB-2026-00123', seq: 9,  name: 'Xếp kệ & cập nhật vị trí',     type: 'INB', status: 'waiting_assign', priority: 'medium', assignee: null,       location: '—',                         slaType: null,         startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-123-10', orderId: 'INB-2026-00123', seq: 10, name: 'Đóng lệnh & lưu hồ sơ',        type: 'INB', status: 'waiting_assign', priority: 'medium', assignee: null,       location: '—',                         slaType: null,         startTime: null,    endTime: null,    note: '' },

  /* ── OUT-2026-00202 (Xuat kho HN to HCM) — 4/8 done ── */
  { id: 'TSK-202-01', orderId: 'OUT-2026-00202', seq: 1,  name: 'Xác nhận lệnh xuất',            type: 'OUT', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'VP Kho · Giám đốc kho',    slaType: 'one_time',   startTime: '10:05', endTime: '10:20', note: '' },
  { id: 'TSK-202-02', orderId: 'OUT-2026-00202', seq: 2,  name: 'Lấy hàng khỏi kệ',             type: 'OUT', status: 'done',           priority: 'high',   assignee: 'USR-004', location: 'Khu A-01 · NV bốc xếp',   slaType: 'one_time',   startTime: '10:20', endTime: '11:20', note: '' },
  { id: 'TSK-202-03', orderId: 'OUT-2026-00202', seq: 3,  name: 'Kiểm đếm hàng xuất',           type: 'OUT', status: 'done',           priority: 'medium', assignee: 'USR-003', location: 'Khu C02 · NV kiểm hàng',  slaType: 'one_time',   startTime: '11:20', endTime: '11:58', note: '' },
  { id: 'TSK-202-04', orderId: 'OUT-2026-00202', seq: 4,  name: 'Đóng gói vận chuyển',          type: 'OUT', status: 'done',           priority: 'medium', assignee: 'USR-004', location: 'Khu C02 · NV bốc xếp',    slaType: 'one_time',   startTime: '11:58', endTime: '13:00', note: '' },
  { id: 'TSK-202-05', orderId: 'OUT-2026-00202', seq: 5,  name: 'Xuất SAP – STO phát',          type: 'OUT', status: 'doing',          priority: 'high',   assignee: 'USR-002', location: 'VP Kho · Thủ kho',         slaType: 'continuous', startTime: '13:00', endTime: null,    note: '' },
  { id: 'TSK-202-06', orderId: 'OUT-2026-00202', seq: 6,  name: 'Bàn giao hàng lên xe',         type: 'OUT', status: 'waiting_assign', priority: 'high',   assignee: null,       location: 'Cổng A · Bảo vệ cổng',    slaType: 'one_time',   startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-202-07', orderId: 'OUT-2026-00202', seq: 7,  name: 'Cập nhật tồn kho hệ thống',    type: 'OUT', status: 'waiting_assign', priority: 'medium', assignee: null,       location: '—',                         slaType: null,         startTime: null,    endTime: null,    note: '' },
  { id: 'TSK-202-08', orderId: 'OUT-2026-00202', seq: 8,  name: 'Đóng lệnh xuất',               type: 'OUT', status: 'waiting_assign', priority: 'medium', assignee: null,       location: '—',                         slaType: null,         startTime: null,    endTime: null,    note: '' },
];

/* ============================================================
   6. OUTBOUND ORDERS — Lệnh xuất kho (PH3)
   ============================================================ */
MOCK.outboundOrders = [
  {
    id: 'OUT-2026-00451',
    refCode: 'SO-2026-1188',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Chi nhánh Viettel HP',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 9,
    status: 'processing',
    statusLabel: 'Đang lấy hàng',
    slaRemaining: '5h30',
    slaUrgent: false,
    outboundDate: '2026-05-18 10:00:00',
    assigneeName: 'Đỗ Minh Khôi',
    volume: 12.4,
    sapDocNo: 'QĐ-2026-1188',
    contractNo: 'HĐ-2026-1188',
    reason: 'Xuất vận chuyển đến đơn vị / chi nhánh',
    desc: 'Xuất vận chuyển · 8 dòng · 240 đơn vị · Phụ trách: Đỗ Minh Khôi',
    goods: [
      { code: 'ANT-4G-2T', name: 'Anten 4G 2T2R', unit: 'Bộ', doc: 12, actual: 12, diff: 0, loc: 'G02-T01-B03', hu: 'HU-OUT-201' },
      { code: 'BBU-3900', name: 'Baseband Unit BBU 3900', unit: 'Bộ', doc: 8, actual: 6, diff: -2, loc: 'G02-T01-B04', hu: 'HU-OUT-202' },
      { code: 'CAB-PWR-10', name: 'Cáp nguồn 10m', unit: 'Cuộn', doc: 80, actual: 80, diff: 0, loc: 'I02-T02-B05', hu: '' }
    ]
  },
  {
    id: 'OUT-2026-00452',
    refCode: 'SO-2026-1190',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Trạm BTS Đà Nẵng',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 8,
    status: 'pending',
    statusLabel: 'Chờ xác nhận',
    slaRemaining: '10h',
    slaUrgent: false,
    outboundDate: '2026-05-18 18:00:00',
    assigneeName: 'Trần Văn Kho',
    volume: 12.0,
    sapDocNo: 'QĐ-2026-1190',
    contractNo: 'HĐ-2026-1190',
    reason: 'Xuất vận chuyển đến đơn vị / chi nhánh',
    desc: 'Xuất vận chuyển · 5 dòng · 120 đơn vị · Phụ trách: Trần Văn Kho',
    goods: [
      { code: 'BBU-3900', name: 'Baseband Unit BBU 3900', unit: 'Bộ', doc: 5, actual: 5, diff: 0, loc: 'G02-T01-B04', hu: 'HU-OUT-205' },
      { code: 'CAB-PWR-10', name: 'Cáp nguồn 10m', unit: 'Cuộn', doc: 20, actual: 20, diff: 0, loc: 'I02-T02-B05', hu: '' }
    ]
  },
  {
    id: 'OUT-2026-00453',
    refCode: 'SO-2026-1191',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Chi nhánh HCM',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 8,
    status: 'error',
    statusLabel: 'Lỗi API',
    slaRemaining: '—',
    slaUrgent: false,
    outboundDate: '2026-05-18 16:00:00',
    assigneeName: '—',
    volume: 15.0,
    sapDocNo: 'QĐ-2026-1191',
    contractNo: 'HĐ-2026-1191',
    reason: 'Xuất vận chuyển đến đơn vị / chi nhánh',
    desc: 'Xuất vận chuyển · 10 dòng · 350 đơn vị · Phụ trách: —',
    goods: []
  },
  {
    id: 'OUT-2026-00454',
    refCode: 'ISS-INT-077',
    type: 'XE',
    category: 'OUT-OTH',
    categoryLabel: 'OUT-OTH - Xuất kho khác',
    customer: 'Phòng Kỹ thuật HN',
    warehouse: 'HN01',
    totalTasks: 11,
    doneTasks: 9,
    status: 'processing',
    statusLabel: 'Đã đóng gói',
    slaRemaining: '1h',
    slaUrgent: true,
    outboundDate: '2026-05-18 11:00:00',
    assigneeName: 'Phạm Thị Hằng',
    volume: 5.4,
    sapDocNo: 'QĐ-2026-1192',
    contractNo: 'HĐ-2026-1192',
    reason: 'Xuất sử dụng nội bộ phòng ban',
    desc: 'Xuất khác · 4 dòng · 90 đơn vị · Phụ trách: Phạm Thị Hằng',
    goods: []
  },
  {
    id: 'OUT-2026-00455',
    refCode: 'SO-2026-1192',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Kho Đà Nẵng DN01',
    warehouse: 'HCM01',
    totalTasks: 10,
    doneTasks: 8,
    status: 'processing',
    statusLabel: 'Đang tải xe',
    slaRemaining: '30p',
    slaUrgent: true,
    outboundDate: '2026-05-18 09:30:00',
    assigneeName: 'Lê Hoàng Nam',
    volume: 8.0,
    sapDocNo: 'QĐ-2026-1193',
    contractNo: 'HĐ-2026-1193',
    reason: 'Xuất điều chuyển kho nội bộ',
    desc: 'Xuất điều chuyển · 6 dòng · 180 đơn vị · Phụ trách: Lê Hoàng Nam',
    goods: []
  },
  {
    id: 'OUT-2026-00456',
    refCode: 'SO-2026-1193',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Đối tác BCC - ABC Telecom',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 8,
    status: 'processing',
    statusLabel: 'Chờ ký VOffice',
    slaRemaining: '2h15',
    slaUrgent: true,
    outboundDate: '2026-05-18 14:00:00',
    assigneeName: 'Trần Văn Kho',
    volume: 6.5,
    sapDocNo: 'QĐ-2026-1194',
    contractNo: 'HĐ-2026-1194',
    reason: 'Xuất hàng dự án hợp tác BCC',
    desc: 'Xuất dự án · 7 dòng · 140 đơn vị · Phụ trách: Trần Văn Kho',
    goods: []
  },
  {
    id: 'OUT-2026-00457',
    refCode: 'SO-2026-1194',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Chi nhánh Nghệ An',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 8,
    status: 'error',
    statusLabel: 'Lỗi API xuất',
    slaRemaining: 'Quá hạn - 30p',
    slaUrgent: false,
    outboundDate: '2026-05-18 08:00:00',
    assigneeName: 'Đỗ Minh Khôi',
    volume: 7.2,
    sapDocNo: 'QĐ-2026-1195',
    contractNo: 'HĐ-2026-1195',
    reason: 'Xuất vận chuyển đến đơn vị / chi nhánh',
    desc: 'Xuất vận chuyển · 5 dòng · 110 đơn vị · Phụ trách: Đỗ Minh Khôi',
    goods: []
  },
  {
    id: 'OUT-2026-00458',
    refCode: 'ISS-RTN-019',
    type: 'XE',
    category: 'OUT-OTH',
    categoryLabel: 'OUT-OTH - Xuất kho khác',
    customer: 'Trả NCC Huawei',
    warehouse: 'HN01',
    totalTasks: 11,
    doneTasks: 9,
    status: 'error',
    statusLabel: 'Từ chối ký',
    slaRemaining: 'Quá hạn —',
    slaUrgent: false,
    outboundDate: '2026-05-17 16:00:00',
    assigneeName: 'Nguyễn Hữu An',
    volume: 3.5,
    sapDocNo: 'QĐ-2026-1196',
    contractNo: 'HĐ-2026-1196',
    reason: 'Xuất trả hàng lỗi hỏng cho nhà cung cấp',
    desc: 'Xuất trả NCC · 3 dòng · 15 đơn vị · Phụ trách: Nguyễn Hữu An',
    goods: []
  },
  {
    id: 'OUT-2026-00459',
    refCode: 'SO-2026-1195',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Chi nhánh Hải Phòng',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 10,
    status: 'done',
    statusLabel: 'Hoàn thành',
    slaRemaining: 'Quá hạn —',
    slaUrgent: false,
    outboundDate: '2026-05-17 09:00:00',
    assigneeName: 'Bùi Quốc Việt',
    volume: 6.0,
    sapDocNo: 'QĐ-2026-1197',
    contractNo: 'HĐ-2026-1197',
    reason: 'Xuất vận chuyển đến đơn vị / chi nhánh',
    desc: 'Xuất vận chuyển · 6 dòng · 130 đơn vị · Phụ trách: Bùi Quốc Việt',
    goods: []
  },
  {
    id: 'OUT-2026-00460',
    refCode: 'SO-2026-1196',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Chi nhánh Cần Thơ',
    warehouse: 'HCM01',
    totalTasks: 10,
    doneTasks: 8,
    status: 'processing',
    statusLabel: 'Chờ duyệt phân công',
    slaRemaining: '8h',
    slaUrgent: false,
    outboundDate: '2026-05-18 17:00:00',
    assigneeName: 'Lê Hoàng Nam',
    volume: 5.0,
    sapDocNo: 'QĐ-2026-1198',
    contractNo: 'HĐ-2026-1198',
    reason: 'Xuất vận chuyển đến đơn vị / chi nhánh',
    desc: 'Xuất vận chuyển · 7 dòng · 150 đơn vị · Phụ trách: Lê Hoàng Nam',
    goods: []
  },
  {
    id: 'OUT-2026-00461',
    refCode: 'SO-2026-1197',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Đối tác Nokia VN',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 8,
    status: 'processing',
    statusLabel: 'Cần lưu trữ lại',
    slaRemaining: 'Quá hạn —',
    slaUrgent: false,
    outboundDate: '2026-05-17 14:00:00',
    assigneeName: 'Phạm Thị Hằng',
    volume: 4.0,
    sapDocNo: 'QĐ-2026-1199',
    contractNo: 'HĐ-2026-1199',
    reason: 'Xuất trả thiết bị bảo hành',
    desc: 'Xuất trả bảo hành · 4 dòng · 60 đơn vị · Phụ trách: Phạm Thị Hằng',
    goods: []
  },
  {
    id: 'OUT-2026-00462',
    refCode: 'SO-2026-1198',
    type: 'XE',
    category: 'OUT-VC',
    categoryLabel: 'OUT-VC - Xuất kho vận chuyển',
    customer: 'Chi nhánh Viettel Quảng Ninh',
    warehouse: 'HN01',
    totalTasks: 10,
    doneTasks: 2,
    status: 'processing',
    statusLabel: 'Đang lấy hàng',
    slaRemaining: '12h',
    slaUrgent: false,
    outboundDate: '2026-05-19 10:00:00',
    assigneeName: 'Nguyễn Hữu An',
    volume: 6.0,
    sapDocNo: 'QĐ-2026-1200',
    contractNo: 'HĐ-2026-1200',
    reason: 'Xuất vận chuyển đến đơn vị / chi nhánh',
    desc: 'Xuất vận chuyển · 8 dòng · 220 đơn vị · Phụ trách: Nguyễn Hữu An',
    goods: []
  }
];

/* ============================================================
   7. CONFIGURATIONS — Cấu hình hệ thống (PH4)
   ============================================================ */
MOCK.configurations = {
  taskTemplates: [
    {
      id: 'TMPL-INB-NCC', name: 'Template Nhập kho NCC', type: 'inbound',
      tasks: [
        'Tiếp nhận xe tải', 'Kiểm tra chứng từ', 'Dỡ hàng từ xe',
        'Kiểm đếm số lượng', 'Kiểm tra chất lượng QC', 'Chụp ảnh hiện trạng hàng',
        'Phân loại hàng hóa', 'Đánh dấu vị trí lưu kho', 'Nhập hàng vào hệ thống SAP',
        'Xếp hàng vào kệ', 'Cập nhật vị trí trên hệ thống', 'Ký xác nhận phiếu nhập',
        'Lưu hồ sơ & đóng lệnh'
      ],
      slaHours: 24,
      active: true,
    },
    {
      id: 'TMPL-INB-TRF', name: 'Template Nhập kho Chuyển kho', type: 'inbound',
      tasks: [
        'Kiểm tra xe chuyển kho', 'Đối chiếu phiếu xuất', 'Dỡ hàng',
        'Kiểm đếm', 'Nhập SAP', 'Xếp kệ', 'Đóng lệnh'
      ],
      slaHours: 12,
      active: true,
    },
    {
      id: 'TMPL-OUT-CUST', name: 'Template Xuất kho KH', type: 'outbound',
      tasks: [
        'Xác nhận lệnh xuất', 'Lấy hàng khỏi kệ', 'Kiểm đếm hàng xuất',
        'Đóng gói', 'Xuất SAP', 'Bàn giao lái xe', 'Đóng lệnh'
      ],
      slaHours: 8,
      active: true,
    },
  ],
  slaRules: [
    { id: 'SLA-01', name: 'SLA Nhập NCC Tiêu chuẩn', type: 'INB-NCC', hours: 24, urgentHours: 6, active: true },
    { id: 'SLA-02', name: 'SLA Nhập Chuyển kho', type: 'INB-TRF', hours: 12, urgentHours: 4, active: true },
    { id: 'SLA-03', name: 'SLA Xuất KH Tiêu chuẩn', type: 'OUT-CUST', hours: 8, urgentHours: 3, active: true },
  ],
  sapIntegration: {
    host: 'https://sap-api.viettel.vn',
    syncInterval: 15, // minutes
    lastSync: '2026-05-18 15:00:00',
    status: 'connected',
    apiKey: '***HIDDEN***',
  },
};

/* ============================================================
   8. DASHBOARD — Dữ liệu Dashboard (PH5)
   ============================================================ */
MOCK.dashboard = {
  overview: {
    totalOrders: 13,
    pendingConfirm: 1,
    processing: 3,
    done: 1,
    doneThisYear: 13,
    totalVolume: 140.4,  // m³
    slaBreachToday: 0,
    slaAtRiskToday: 3,
  },
  dailyOps: {
    staffOnDuty: 4,
    activeOrdersToday: 5,
    tasksCompletedToday: 28,
    tasksPendingToday: 12,
    vehiclesIn: 4,
    vehiclesOut: 2,
  },
  chartData: {
    inboundByMonth: [
      { month: 'T1', count: 18, volume: 210.5 },
      { month: 'T2', count: 12, volume: 140.2 },
      { month: 'T3', count: 22, volume: 310.8 },
      { month: 'T4', count: 16, volume: 200.1 },
      { month: 'T5', count: 13, volume: 140.4 },
    ],
    slaCompliance: [
      { month: 'T1', rate: 92 },
      { month: 'T2', rate: 95 },
      { month: 'T3', rate: 88 },
      { month: 'T4', rate: 97 },
      { month: 'T5', rate: 94 },
    ],
    tasksByStatus: [
      { status: 'Hoàn tất', count: 85, color: '#059669' },
      { status: 'Đang xử lý', count: 12, color: '#2563EB' },
      { status: 'Chờ xử lý', count: 8, color: '#D97706' },
      { status: 'Lỗi', count: 2, color: '#DC2626' },
    ],
  },
};

/* ============================================================
   9. HELPER FUNCTIONS
   ============================================================ */
MOCK.getInboundByWarehouse = function(warehouseId) {
  return MOCK.inboundOrders.filter(o => o.warehouse === warehouseId);
};

MOCK.getOutboundByWarehouse = function(warehouseId) {
  return MOCK.outboundOrders; // Trả về tất cả để hiển thị danh sách pool toàn hệ thống như thiết kế
};

MOCK.getOutboundSummaryHN01 = function() {
  const list = MOCK.outboundOrders;
  const totalVolume = list.reduce((s, o) => s + (o.volume || 0), 0);
  return {
    total: list.length,
    totalVolume: totalVolume.toFixed(1),
    pending: list.filter(o => o.status === 'pending').length,
    processing: list.filter(o => o.status === 'processing').length,
    done: list.filter(o => o.status === 'done').length,
    doneThisYear: list.filter(o => o.status === 'done').length
  };
};

MOCK.getInboundByStatus = function(status) {
  if (status === 'all') return MOCK.inboundOrders;
  return MOCK.inboundOrders.filter(o => o.status === status);
};

MOCK.getTasksByOrder = function(orderId) {
  return MOCK.tasks.filter(t => t.orderId === orderId);
};

MOCK.getUserById = function(id) {
  return MOCK.users.find(u => u.id === id) || null;
};

MOCK.getSupplierById = function(id) {
  return MOCK.suppliers.find(s => s.id === id) || null;
};

MOCK.getWarehouseById = function(id) {
  return MOCK.warehouses.find(w => w.id === id) || null;
};

// Thống kê tóm tắt lệnh nhập cho HN01
MOCK.getInboundSummaryHN01 = function() {
  const orders = MOCK.getInboundByWarehouse('HN01');
  return {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    confirmed: orders.filter(o => o.status === 'confirmed').length,
    processing: orders.filter(o => o.status === 'processing').length,
    done: orders.filter(o => o.status === 'done').length,
    error: orders.filter(o => o.status === 'error').length,
    waitingAssign: orders.filter(o => o.status === 'waiting_assign').length,
    totalVolume: orders.reduce((s, o) => s + (o.volume || 0), 0).toFixed(1),
    doneThisYear: orders.filter(o => o.status === 'done').length,
  };
};

console.log('[MockData] ViettelAIWS mock data loaded ✓', {
  users: MOCK.users.length,
  warehouses: MOCK.warehouses.length,
  suppliers: MOCK.suppliers.length,
  inboundOrders: MOCK.inboundOrders.length,
  tasks: MOCK.tasks.length,
  outboundOrders: MOCK.outboundOrders.length,
});
