'use strict';

let DECISION = 'accept'; // accept | reject
let ORDER_ID = 'OUT-2026-00452';
let ORDER_DATA = null;

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

  document.getElementById('header-order-subtitle').textContent = `Order ${ORDER_DATA.id} · ${ORDER_DATA.refCode}`;
  document.getElementById('kpi-order-id').textContent = ORDER_DATA.id;
  document.getElementById('kpi-assignee-name').textContent = ORDER_DATA.assigneeName || 'Trần Văn Kho';
  
  document.getElementById('dt-order-id').textContent = ORDER_DATA.id;
  document.getElementById('dt-order-type').textContent = ORDER_DATA.category;
  document.getElementById('dt-order-ref').textContent = ORDER_DATA.refCode;
  document.getElementById('dt-order-customer').textContent = ORDER_DATA.customer;
  document.getElementById('dt-order-wh').textContent = ORDER_DATA.warehouse;
  document.getElementById('dt-order-plan-date').textContent = ORDER_DATA.outboundDate;
  document.getElementById('dt-order-lines').textContent = ORDER_DATA.goods ? ORDER_DATA.goods.length : 5;
  
  const qtySum = ORDER_DATA.goods ? ORDER_DATA.goods.reduce((s, g) => s + g.doc, 0) : 120;
  document.getElementById('dt-order-qty').textContent = qtySum;
});

function selectDecision(type) {
  DECISION = type;

  const acceptCard = document.getElementById('card-accept');
  const rejectCard = document.getElementById('card-reject');

  const acceptIcon = acceptCard.querySelector('.decision-icon');
  const rejectIcon = rejectCard.querySelector('.decision-icon');

  const acceptTitle = acceptCard.querySelector('.decision-title');
  const rejectTitle = rejectCard.querySelector('.decision-title');

  if (type === 'accept') {
    acceptCard.className = 'decision-card active-accept';
    acceptIcon.style.background = '';
    acceptIcon.style.color = '';
    acceptTitle.style.color = '#065F46';

    rejectCard.className = 'decision-card';
    rejectIcon.style.background = 'var(--slate-200)';
    rejectIcon.style.color = 'var(--slate-600)';
    rejectTitle.style.color = '';

    document.getElementById('form-fields').style.display = 'grid';
    document.getElementById('reject-fields').style.display = 'none';
  } else {
    acceptCard.className = 'decision-card';
    acceptIcon.style.background = 'var(--slate-200)';
    acceptIcon.style.color = 'var(--slate-600)';
    acceptTitle.style.color = '';

    rejectCard.className = 'decision-card active-reject';
    rejectIcon.style.background = '';
    rejectIcon.style.color = '';
    rejectTitle.style.color = '#991B1B';

    document.getElementById('form-fields').style.display = 'none';
    document.getElementById('reject-fields').style.display = 'flex';
  }
}

function submitDecision() {
  if (DECISION === 'accept') {
    const date = document.getElementById('input-date').value;
    const time = document.getElementById('input-time').value;
    if (!date || !time) {
      alert('Vui lòng nhập đầy đủ ngày và giờ dự kiến xuất!');
      return;
    }

    if (ORDER_DATA) {
      ORDER_DATA.status = 'processing';
      ORDER_DATA.statusLabel = 'Đang xử lý';
      ORDER_DATA.outboundDate = `${date} ${time}`;
    }

    alert(`Đồng ý tiếp nhận lệnh ${ORDER_ID} thành công! Hệ thống đã lập lịch xuất dự kiến: ${date} ${time}.`);
  } else {
    const reason = document.getElementById('input-reason').value.trim();
    if (!reason) {
      alert('Bắt buộc phải nhập lý do từ chối lệnh xuất!');
      return;
    }

    if (ORDER_DATA) {
      ORDER_DATA.status = 'error';
      ORDER_DATA.statusLabel = 'Từ chối ký';
    }

    alert(`Đã từ chối lệnh ${ORDER_ID} với lý do: "${reason}". Hệ thống đã đồng bộ trạng thái về SAP/VERP.`);
  }

  goBack();
}

function openFullDetail() {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: 'loadDetail', url: `PH3_Xuat/outbound_detail.html?id=${ORDER_ID}` }, '*');
  } else {
    window.location.href = `outbound_detail.html?id=${ORDER_ID}`;
  }
}

function goBack() {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ action: 'navigate', view: 'outbound-issue' }, '*');
  } else {
    window.location.href = 'PH3.html';
  }
}
