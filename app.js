// ================= DỮ LIỆU GIẢNG VIÊN (20+ entries) =================
// NOTE: ảnh sẽ là đường dẫn img/<ho_ten>.jpg 
const lecturers = [
  { key: "le_hieu_hoc", img:"img/le_hieu_hoc.jpg", name:"PGS.TS. Lê Hiếu Học", title:"Trưởng khoa", dept:"Khoa KH&CN Giáo dục", email:"hoc.lehieu@hust.edu.vn", phone:"(+84) 24 3868 1432", office:"(đang cập nhật)", train:["2001–2005: Tiến sĩ Xã hội học – ĐH Trento","MBA – AIT Bangkok"], work:["2022 – nay: Trưởng khoa KH&CN Giáo dục","2019 – 2022: Phó Hiệu trưởng ĐH Phenikaa"], area:["Quản trị","Quản lý chất lượng","CSR"] },
  { key: "pham_thi_thanh_hai", img:"img/pham_thi_thanh_hai.jpg", name:"PGS.TS. Phạm Thị Thanh Hải", title:"Phó Trưởng khoa", dept:"Khoa KH&CN Giáo dục", email:"hai.phamthithanh@hust.edu.vn", office:"Phòng 325, C7", train:["2013: Tiến sĩ Quản lý giáo dục","2005: Thạc sĩ Quản lý giáo dục"], work:["2023 – nay: Giảng viên ĐHBK","2015 – 2022: Trưởng phòng KH-Hợp tác phát triển"], area:["Công nghệ giáo dục","Đánh giá CTĐT"] },
  { key: "nguyen_thi_huyen", img:"img/nguyen_thi_huyen.jpg", name:"TS. Nguyễn Thị Huyền", title:"Giám đốc CTĐT Công nghệ Giáo dục", dept:"Khoa KH&CN Giáo dục", email:"huyen.nguyenthi2@hust.edu.vn", office:"M329, C7", train:["2019: Tiến sĩ Công nghệ Giáo dục (Taiwan)","2014: Thạc sĩ Khoa học Máy tính (Taiwan)"], work:["2020 – nay: Giảng viên ĐHBK","2019 – 2021: R&D Viettel"], area:["Mobile Learning","Interactive Systems","GenAI Learning"] },
  { key: "bui_ngoc_son", img:"img/bui_ngoc_son.jpg", name:"ThS. Bùi Ngọc Sơn", title:"Giảng viên", dept:"Viện Sư phạm Kỹ thuật", email:"son.buingoc@hust.edu.vn", office:"402, D5", train:["ThS. Sư phạm Dạy nghề – ĐHBK & ĐH Dresden","KS. Điều khiển học – ĐHBK"], work:["2000 – nay: Giảng viên Viện SPKT"], area:["Đánh giá","Phát triển CTĐT","Công nghệ giáo dục"] },
  { key: "nguyen_thi_thanh_tu", img:"img/nguyen_thi_thanh_tu.jpg", name:"TS. Nguyễn Thị Thanh Tú", title:"Giảng viên", dept:"Viện Sư phạm Kỹ thuật", email:"tu.nguyenthithanh@hust.edu.vn", office:"302, D3–D5", train:["2014: Tiến sĩ CNTT – ĐHBK","2007: Thạc sĩ CNTT – ĐH Ulsan"], work:["2020 – nay: Giảng viên Viện SPKT"], area:["Khóa học trực tuyến","Đại học thông minh"] },
  { key: "vu_dinh_minh", img:"img/vu_dinh_minh.jpg", name:"TS. Vũ Đình Minh", title:"Giảng viên", dept:"Viện Sư phạm Kỹ thuật", email:"minh.vudinh@hust.edu.vn", office:"M329, C7", train:["2020: Tiến sĩ CNTT – Nhật Bản","2014: Thạc sĩ CNTT – ĐHBK"], work:["2022 – nay: Giảng viên"], area:["Phân tích dữ liệu","Công nghệ giáo dục"] },
  { key: "nguyen_thi_thanh_thuy", img:"img/nguyen_thi_thanh_thuy.jpg", name:"TS. Nguyễn Thị Thanh Thủy", title:"Giảng viên", dept:"Viện Sư phạm Kỹ thuật", email:"thuy.nguyenthithanh@hust.edu.vn", office:"M329, C7", train:["Tiến sĩ Quản lý giáo dục","Thạc sĩ Quản trị kinh doanh"], work:["2022 – nay: Giảng viên"], area:["Khoa học giáo dục","Quản lý giáo dục"] },
  { key: "nguyen_yen_chi", img:"img/nguyen_yen_chi.jpg", name:"ThS. Nguyễn Yến Chi", title:"Giảng viên", dept:"Khoa KH&CN Giáo dục", email:"chi.nguyenyen@hust.edu.vn", office:"M329, C7", train:["2019: ThS. Quản lý giáo dục – Bristol","2016: Cử nhân Kinh tế đối ngoại – FTU"], work:["2023 – nay: Trợ giảng"], area:["Quản lý giáo dục","Công nghệ giáo dục"] },
  { key: "nguyen_tran_khanh_phuong", img:"img/nguyen_tran_khanh_phuong.jpg", name:"CN. Nguyễn Trần Khánh Phương", title:"Giảng viên tạo nguồn", dept:"Khoa KH&CN Giáo dục", email:"phuong.nguyentrankhanh@hust.edu.vn", office:"M329, C7", train:["Cử nhân Nghệ thuật số – Mỹ"], work:["2025 – nay: Giảng viên tạo nguồn"], area:["Thiết kế số","Công nghệ giáo dục"] },
  { key: "nguyen_thi_duyen", img:"img/nguyen_thi_duyen.jpg", name:"TS. Nguyễn Thị Duyên", title:"Giảng viên", dept:"Viện Sư phạm Kỹ thuật", email:"duyen.nguyenthi@hust.edu.vn", office:"M327, C7", train:["Tiến sĩ LL&LS giáo dục","Thạc sĩ LL&LS giáo dục"], work:["2023 – nay: Giảng viên"], area:["Tâm lý ứng dụng","Giáo dục nghề nghiệp"] },
  { key: "nguyen_van_hanh", img:"img/nguyen_van_hanh.jpg", name:"TS. Nguyễn Văn Hạnh", title:"Giảng viên", dept:"Viện Sư phạm Kỹ thuật", email:"hanh.nguyenvan@hust.edu.vn", office:"302, D3-5", train:["2017: Tiến sĩ KHGD","2013: ThS. Kỹ thuật Cơ khí"], work:["2018 – nay: Giảng viên"], area:["Công nghệ giáo dục","STEM"] },
  { key: "bui_thi_thuy_hang", img:"img/bui_thi_thuy_hang.jpg", name:"PGS.TS. Bùi Thị Thúy Hằng", title:"Giảng viên cao cấp", dept:"Khoa KH&CN Giáo dục", email:"hang.buithithuy@hust.edu.vn", office:"M327-C7", train:["Tiến sĩ KHGD – Paris X","ThS. KHGD"], work:["2013 – nay: Giảng viên"], area:["Động cơ học tập","Giáo dục đại học"] },
  { key: "le_huy_tung", img:"img/le_huy_tung.jpg", name:"PGS.TS. Lê Huy Tùng", title:"Giảng viên chính", dept:"Viện Sư phạm Kỹ thuật", email:"tung.lehuy@hust.edu.vn", office:"302, D5-5", train:["Tiến sĩ Điều khiển hệ thống – Hàn Quốc"], work:["2018 – nay: Phó Viện trưởng + Giảng viên"], area:["Quản lý chất lượng","PP nghiên cứu"] },
  { key: "pham_manh_ha", img:"img/pham_manh_ha.jpg", name:"PGS.TS. Phạm Mạnh Hà", title:"Giảng viên cao cấp", dept:"Khoa KH&CN Giáo dục", email:"ha.phammanh@hust.edu.vn", phone:"0904801212", office:"M330, C7", train:["Cử nhân Tâm lý học","Tiến sĩ Tâm lý học"], work:["2018 – nay: Giảng viên"], area:["Tâm lý học giáo dục","Tư vấn tâm lý"] },
  { key: "duong_thi_thuy_mai", img:"img/duong_thi_thuy_mai.jpg", name:"TS. Dương Thị Thùy Mai", title:"Phó Giám đốc Trung tâm Đào tạo Liên tục", dept:"Viện Sư phạm Kỹ thuật", email:"mai.duongthithuy@hust.edu.vn", train:["Tiến sĩ Ngôn ngữ học","ThS. Ngôn ngữ học ứng dụng"], work:["2023 – nay: Phó Giám đốc TTĐT Liên tục"], area:["Công nghệ giáo dục","Giảng dạy ngoại ngữ"] },
  { key: "nguyen_tien_long", img:"img/nguyen_tien_long.jpg", name:"TS. Nguyễn Tiến Long", title:"Phó Viện trưởng", dept:"Viện Sư phạm Kỹ thuật", email:"long.nguyentien@hust.edu.vn", office:"302, D3-5", train:["Tiến sĩ Cơ khí – Jilin University"], work:["2000 – nay: Giảng viên"], area:["Kỹ năng mềm","Thiết kế CTĐT"] },
  { key: "pham_hong_hanh", img:"img/pham_hong_hanh.jpg", name:"ThS. Phạm Hồng Hạnh", title:"Giảng viên", dept:"Viện Sư phạm Kỹ thuật", email:"hanh.phamhong@hust.edu.vn", office:"402, D5", train:["ThS. Đo lường – ĐHBK"], work:["2000 – nay: Giảng viên"], area:["Ứng dụng CNTT trong dạy học"] },
  { key: "hoang_thi_quynh_lan", img:"img/hoang_thi_quynh_lan.jpg", name:"TS. Hoàng Thị Quỳnh Lan", title:"Giảng viên", dept:"Viện Sư phạm Kỹ thuật", email:"lan.hoangthiquynh@hust.edu.vn", office:"302, D3-5", train:["Tiến sĩ Tâm lý học","ThS. Tâm lý học"], work:["2018 – nay: Giảng viên"], area:["Giáo dục kỹ năng sống","Tư vấn hướng nghiệp"] },
  { key: "tran_thi_thanh_ha", img:"img/tran_thi_thanh_ha.jpg", name:"TS. Trần Thị Thanh Hà", title:"Giảng viên", dept:"Khoa KH&CN Giáo dục", email:"ha.tranthithanh@hust.edu.vn", office:"Đại Cồ Việt", train:["Tiến sĩ Giáo dục học – Western Sydney","ThS. Địa lý học"], work:["2024 – nay: Giảng viên"], area:["Lãnh đạo giáo dục","Bình đẳng giáo dục"] }
];
// ================ END DATA =====================

// ============ CẤU HÌNH PHÂN TRANG ============
const ITEMS_PER_PAGE = 4;   // như bạn yêu cầu
let currentPage = 1;
let filtered = [...lecturers];

// ============ RENDER GRID ============
const grid = document.getElementById('lecturer-grid');
const paginationWrap = document.getElementById('pagination');

function renderGrid(page = 1) {
  currentPage = page;
  grid.innerHTML = '';

  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

  if(pageItems.length === 0){
    grid.innerHTML = `<div class="empty">Không tìm thấy giảng viên.</div>`;
    renderPagination();
    return;
  }

  pageItems.forEach(lec => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-top">
        <img src="${lec.img}" alt="${lec.name}" class="card-img" />
      </div>
      <div class="card-body">
        <h3 class="card-name"><a href="#" class="link-detail" data-key="${lec.key}">${lec.name}</a></h3>
        <div class="card-title">${lec.title}</div>
        <div class="card-dept">${lec.dept}</div>
      </div>
    `;
    // click image or name -> open modal
    card.querySelector('.card-img').addEventListener('click', ()=> openDetailByKey(lec.key));
    card.querySelector('.link-detail').addEventListener('click', (e)=>{ e.preventDefault(); openDetailByKey(lec.key); });
    grid.appendChild(card);
  });

  renderPagination();
}

// ============ PAGINATION UI ============
function renderPagination(){
  paginationWrap.innerHTML = '';
  const total = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  // prev
  const prev = document.createElement('button');
  prev.className = 'page-btn';
  prev.disabled = currentPage === 1;
  prev.innerHTML = '<i class="fa fa-chevron-left"></i>';
  prev.addEventListener('click', ()=> renderGrid(currentPage - 1));
  paginationWrap.appendChild(prev);

  // numbered pages (compact if many)
  for(let p=1; p<=total; p++){
    const btn = document.createElement('button');
    btn.className = 'page-btn num' + (p===currentPage ? ' active' : '');
    btn.textContent = p;
    btn.addEventListener('click', ()=> renderGrid(p));
    paginationWrap.appendChild(btn);
  }

  // next
  const next = document.createElement('button');
  next.className = 'page-btn';
  next.disabled = currentPage === total;
  next.innerHTML = '<i class="fa fa-chevron-right"></i>';
  next.addEventListener('click', ()=> renderGrid(currentPage + 1));
  paginationWrap.appendChild(next);
}

// ============ SEARCH ============
document.getElementById('search-btn').addEventListener('click', doSearch);
document.getElementById('search-input').addEventListener('keydown', (e)=>{ if(e.key === 'Enter') doSearch(); });

function doSearch(){
  const q = (document.getElementById('search-input').value || '').trim().toLowerCase();
  if(!q){
    filtered = [...lecturers];
  } else {
    filtered = lecturers.filter(l=>{
      const hay = (l.name + ' ' + (l.area||[]).join(' ') + ' ' + l.dept + ' ' + (l.title||'')).toLowerCase();
      return hay.includes(q);
    });
  }
  renderGrid(1);
}

// ============ MODAL DETAIL ============
function openDetailByKey(key){
  const lec = lecturers.find(x => x.key === key);
  if(!lec) return;
  const html = `
    <div class="modal-profile">
      <img src="${lec.img}" class="modal-img" alt="${lec.name}" />
      <div class="modal-info">
        <h2>${lec.name}</h2>
        <p class="muted"><strong>${lec.title}</strong></p>
        <p>${lec.dept}</p>
        <p><strong>Phòng:</strong> ${lec.office || '(đang cập nhật)'}</p>
        <p><strong>Email:</strong> ${lec.email || ''}</p>
        ${lec.phone ? `<p><strong>Điện thoại:</strong> ${lec.phone}</p>` : ''}
        <hr/>
        <h4>🎓 Quá trình đào tạo</h4>
        <ul>${(lec.train||[]).map(t => `<li>${t}</li>`).join('')}</ul>
        <h4>💼 Quá trình công tác</h4>
        <ul>${(lec.work||[]).map(w => `<li>${w}</li>`).join('')}</ul>
        ${lec.area ? `<h4>📚 Lĩnh vực</h4><ul>${lec.area.map(a => `<li>${a}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  `;
  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-bg').style.display = 'block';
  document.getElementById('modal-box').style.display = 'block';
  // prevent background scroll
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  document.getElementById('modal-bg').style.display = 'none';
  document.getElementById('modal-box').style.display = 'none';
  document.body.style.overflow = '';
}

// ============ CHATBOT (mini) ============
function toggleChatbot(){
  const box = document.getElementById('chatbot-box');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}
function sendChat(){
  const input = document.getElementById('chatbot-input');
  const q = (input.value || '').trim();
  if(!q) return;
  const messages = document.getElementById('chatbot-messages');
  messages.innerHTML += `<div class="msg user">${escapeHtml(q)}</div>`;
  // simple intent: if contains name, try to find lecturer
  setTimeout(()=> {
    const found = searchLecturerByText(q);
    if(found){
      messages.innerHTML += `<div class="msg bot">Mình tìm thấy <strong>${found.name}</strong>. Nhấn vào tên để xem chi tiết, hoặc gõ "email ${found.key}" để lấy email.</div>`;
    } else if(q.toLowerCase().startsWith('email ')){
      const key = q.split(' ')[1];
      const lec = lecturers.find(x => x.key === key);
      messages.innerHTML += `<div class="msg bot">${lec ? `Email của ${lec.name}: ${lec.email}` : 'Không tìm thấy giảng viên theo mã.'}</div>`;
    } else {
      messages.innerHTML += `<div class="msg bot">Mình nhận được rồi! Bạn có thể tìm theo tên ở ô tìm kiếm hoặc hỏi "tên giảng viên".</div>`;
    }
    messages.scrollTop = messages.scrollHeight;
  }, 400);
  input.value = '';
}

function searchLecturerByText(text){
  const q = text.toLowerCase();
  // try to find by exact key or name contains
  let found = lecturers.find(l => l.key === q);
  if(found) return found;
  found = lecturers.find(l => l.name.toLowerCase().includes(q) || (l.area||[]).some(a => a.toLowerCase().includes(q)));
  return found || null;
}

// small helper
function escapeHtml(s){
  return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', ()=>{
  filtered = [...lecturers];
  renderGrid(1);
});
