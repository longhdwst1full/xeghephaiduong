/**
 * XE GHÉP HẢI DƯƠNG LIÊN TỈNH 24H - MAIN JAVASCRIPT
 * Tương tác mượt mà, tính toán báo giá tự động, không phụ thuộc thư viện ngoài
 */

document.addEventListener('DOMContentLoaded', () => {
  // Hotline & Zalo cấu hình
  const HOTLINE_NUMBER = '0384026089';
  const HOTLINE_DISPLAY = '0384.026.089';
  const ZALO_LINK = 'https://zalo.me/0384026089';

  // --- 1. DỮ LIỆU BẢNG GIÁ ƯỚC TÍNH THAM KHẢO ---
  const routePriceMatrix = {
    'ha-noi': {
      name: 'Hải Dương ⇄ Hà Nội',
      ghep: '200.000đ - 250.000đ / ghế',
      bao4: '500.000đ - 600.000đ / xe',
      bao7: '650.000đ - 750.000đ / xe',
      hang: '100.000đ - 150.000đ / kiện'
    },
    'noi-bai': {
      name: 'Hải Dương ⇄ Sân Bay Nội Bài',
      ghep: '250.000đ - 300.000đ / ghế',
      bao4: '650.000đ - 750.000đ / xe',
      bao7: '800.000đ - 900.000đ / xe',
      hang: '150.000đ - 200.000đ / kiện'
    },
    'hung-yen': {
      name: 'Hải Dương ⇄ Hưng Yên',
      ghep: '200.000đ - 250.000đ / ghế',
      bao4: '450.000đ - 550.000đ / xe',
      bao7: '600.000đ - 700.000đ / xe',
      hang: '100.000đ - 150.000đ / kiện'
    },
    'thai-binh': {
      name: 'Hải Dương ⇄ Thái Bình',
      ghep: '250.000đ - 400.000đ / ghế',
      bao4: '500.000đ - 650.000đ / xe',
      bao7: '700.000đ - 850.000đ / xe',
      hang: '150.000đ - 200.000đ / kiện'
    },
    'nam-dinh': {
      name: 'Hải Dương ⇄ Nam Định',
      ghep: '350.000đ - 500.000đ / ghế',
      bao4: '800.000đ - 950.000đ / xe',
      bao7: '1.000.000đ - 1.200.000đ / xe',
      hang: '200.000đ - 250.000đ / kiện'
    },
    'ha-nam': {
      name: 'Hải Dương ⇄ Hà Nam',
      ghep: '350.000đ - 400.000đ / ghế',
      bao4: '700.000đ - 800.000đ / xe',
      bao7: '850.000đ - 1.000.000đ / xe',
      hang: '200.000đ / kiện'
    },
    'ninh-binh': {
      name: 'Hải Dương ⇄ Ninh Bình',
      ghep: '400.000đ - 500.000đ / ghế',
      bao4: '1.000.000đ - 1.200.000đ / xe',
      bao7: '1.300.000đ - 1.500.000đ / xe',
      hang: '200.000đ - 250.000đ / kiện'
    },
    'thanh-hoa': {
      name: 'Hải Dương ⇄ Thanh Hóa',
      ghep: '500.000đ - 700.000đ / ghế',
      bao4: 'Từ 8.000đ - 9.000đ / km',
      bao7: 'Từ 10.000đ - 12.000đ / km',
      hang: '250.000đ - 350.000đ / kiện'
    },
    'bac-ninh': {
      name: 'Hải Dương ⇄ Bắc Ninh / Bắc Giang',
      ghep: '250.000đ - 350.000đ / ghế',
      bao4: '550.000đ - 650.000đ / xe',
      bao7: '700.000đ - 850.000đ / xe',
      hang: '150.000đ - 200.000đ / kiện'
    },
    'hai-phong': {
      name: 'Hải Dương ⇄ Hải Phòng / Quảng Ninh',
      ghep: '200.000đ - 350.000đ / ghế',
      bao4: '500.000đ - 750.000đ / xe',
      bao7: '700.000đ - 900.000đ / xe',
      hang: '150.000đ - 200.000đ / kiện'
    }
  };

  // --- 2. MOBILE MENU & HEADER ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Đóng menu khi nhấp vào bất kỳ link nào
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });

    // Đóng khi click ngoài
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mainNav.classList.remove('open');
      }
    });
  }

  // --- 3. SCROLL EFFECTS & BACK TO TOP ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  const headerMain = document.querySelector('.header-main');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header shadow on scroll
    if (headerMain) {
      if (scrollY > 50) {
        headerMain.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
      } else {
        headerMain.style.boxShadow = 'var(--shadow-sm)';
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 4. ROUTE CATEGORY FILTER TABS ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const routeCards = document.querySelectorAll('.route-card');

  function applyRouteFilter(filter) {
    routeCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      if (filter === 'all' || category === filter || category.includes(filter)) {
        card.style.display = 'flex';
        card.style.animation = 'cardFadeIn 0.35s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'lien-tinh';
      applyRouteFilter(filter);
    });
  });

  // Kích hoạt mặc định danh mục Liên Tỉnh khi tải trang
  applyRouteFilter('lien-tinh');

  // Thêm tuyến nội tỉnh và các tuyến mở rộng vào routePriceMatrix
  routePriceMatrix['noi-tinh'] = {
    name: 'Hải Dương ⇄ Nội tỉnh Hải Dương',
    ghep: '100.000đ - 180.000đ / ghế',
    bao4: '300.000đ - 450.000đ / xe',
    bao7: '400.000đ - 550.000đ / xe',
    hang: '80.000đ - 120.000đ / kiện'
  };
  routePriceMatrix['bac-giang'] = routePriceMatrix['bac-ninh'];

  // --- KHO DỮ LIỆU ĐỊA ĐIỂM CHI TIẾT (LẤY TỪ PRICING-DATA.JS) ---
  const LOCATIONS_DB = typeof FULL_LOCATIONS_DATABASE !== 'undefined' ? FULL_LOCATIONS_DATABASE : [];

  // Hàm chuyển tiếng Việt có dấu sang không dấu
  function removeVietnameseTones(str) {
    if (!str) return '';
    str = String(str);
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    str = str.replace(/\u02C6|\u0306|\u031B/g, '');
    return str.toLowerCase().trim();
  }

  // Hàm tìm kiếm địa điểm thông minh (hỗ trợ có dấu và không dấu, viết tắt)
  function searchLocations(query, isPickup = false) {
    const rawQuery = (query || '').trim();
    const cleanQuery = removeVietnameseTones(rawQuery);

    // Khi chưa gõ gì: hiển thị gợi ý theo ngữ cảnh
    if (!cleanQuery) {
      if (isPickup) {
        // Lấy ngẫu nhiên 12 địa điểm từ toàn bộ danh sách
        const shuffled = [...LOCATIONS_DB].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 12);
      } else {
        // Gợi ý ngẫu nhiên 12 địa điểm từ toàn bộ danh sách
        const shuffled = [...LOCATIONS_DB].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 12);
      }
    }

    const queryWords = cleanQuery.split(/\s+/).filter(Boolean);

    // Tính điểm phù hợp cho từng địa điểm
    const scored = [];
    LOCATIONS_DB.forEach(loc => {
      const nameClean = removeVietnameseTones(loc.name);
      const subClean = removeVietnameseTones(loc.sub || '');
      const kwClean = removeVietnameseTones(loc.keywords || '');
      const fullText = `${nameClean} ${subClean} ${kwClean}`;

      // Kiểm tra tất cả các từ trong query có xuất hiện không
      const matchAllWords = queryWords.every(word => fullText.includes(word));
      if (!matchAllWords) return;

      let score = 0;
      if (nameClean.startsWith(cleanQuery)) {
        score += 100;
      } else if (nameClean.includes(cleanQuery)) {
        score += 60;
      } else if (subClean.includes(cleanQuery)) {
        score += 40;
      } else {
        score += 20;
      }

      // Ưu tiên theo bối cảnh ô đón / trả
      if (isPickup && loc.province === 'Hải Dương') {
        score += 25;
      } else if (!isPickup && loc.province !== 'Hải Dương') {
        score += 15;
      }

      scored.push({ loc, score });
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.map(item => item.loc).slice(0, 15);
  }

  // Highlight từ khóa khớp
  function highlightText(text, query) {
    if (!query || !query.trim()) return text;
    const cleanQuery = removeVietnameseTones(query);
    const cleanText = removeVietnameseTones(text);
    const index = cleanText.indexOf(cleanQuery);
    if (index === -1) return text;
    const originalPart = text.substring(index, index + query.length);
    return text.substring(0, index) + '<mark>' + originalPart + '</mark>' + text.substring(index + query.length);
  }

  // --- 5. TÍNH BÁO GIÁ NHANH TRÊN FORM WIDGET & AUTOCOMPLETE ---
  const quickBookingForm = document.getElementById('quickBookingForm');
  const quickPickupInput = document.getElementById('quickPickupInput');
  const quickPickup = document.getElementById('quickPickup');
  const clearPickupBtn = document.getElementById('clearPickupBtn');
  const pickupDropdown = document.getElementById('pickupDropdown');

  const quickDropoffInput = document.getElementById('quickDropoffInput');
  const quickDropoff = document.getElementById('quickDropoff');
  const clearDropoffBtn = document.getElementById('clearDropoffBtn');
  const dropoffDropdown = document.getElementById('dropoffDropdown');

  const quickType = document.getElementById('quickType');
  const estimateResult = document.getElementById('estimateResult');
  const estimateRouteName = document.getElementById('estimateRouteName');
  const estimatePrice = document.getElementById('estimatePrice');
  const btnEstimateZalo = document.getElementById('btnEstimateZalo');

  const estimateAreaSub = document.getElementById('estimateAreaSub');
  const estimateServiceTypeName = document.getElementById('estimateServiceTypeName');
  const estimateSurchargeNotice = document.getElementById('estimateSurchargeNotice');

  // Hàm tính giá cước ước tính tra cứu từ PROVINCES_DATA (bảng giá Hoàng Thắng đi 10 tỉnh)
  function calculateQuickPrice() {
    if (!quickPickupInput || !quickDropoffInput || !quickType || !estimateResult) return;

    const pickupText = quickPickupInput.value.trim();
    const dropoffText = quickDropoffInput.value.trim();

    // BẮT BUỘC PHẢI CÓ CẢ ĐIỂM ĐÓN VÀ ĐIỂM TRẢ
    if (!pickupText || !dropoffText) {
      estimateResult.style.display = 'none';
      return;
    }

    // Xác định pricingKey của điểm đến và điểm đón
    let dropoffKey = quickDropoff ? quickDropoff.value : '';
    let pickupKey = quickPickup ? quickPickup.value : '';

    // Nếu chưa có key (do gõ tự do chưa click dropdown), tự động dò tìm vị trí khớp nhất
    if (!dropoffKey) {
      const matchDrop = searchLocations(dropoffText, false)[0];
      dropoffKey = matchDrop ? (matchDrop.pricingKey || 'hn_noi_thanh') : 'hn_noi_thanh';
      if (quickDropoff) quickDropoff.value = dropoffKey;
    }

    if (!pickupKey) {
      const matchPick = searchLocations(pickupText, true)[0];
      pickupKey = matchPick ? (matchPick.pricingKey || 'hd_noi_tinh') : 'hd_noi_tinh';
      if (quickPickup) quickPickup.value = pickupKey;
    }

    // Xác định khu vực tính giá mục tiêu:
    let targetPricingKey = dropoffKey;
    if (dropoffKey === 'hd_noi_tinh') {
      if (pickupKey === 'hd_noi_tinh') {
        targetPricingKey = 'hd_noi_tinh';
      } else {
        targetPricingKey = pickupKey; // Khách đi từ tỉnh ngoài về Hải Dương
      }
    }

    // Tra cứu dữ liệu từ PROVINCES_DATA (pricing-data.js)
    const areaData = (typeof PROVINCES_DATA !== 'undefined' && PROVINCES_DATA[targetPricingKey])
      ? PROVINCES_DATA[targetPricingKey]
      : (typeof PROVINCES_DATA !== 'undefined' ? PROVINCES_DATA['hn_noi_thanh'] : null);

    const typeKey = quickType.value || 'ghep';
    let priceText = '';
    let typeLabel = '';

    if (areaData) {
      if (typeKey === 'ghep') {
        priceText = areaData.ghep;
        typeLabel = 'Đi ghép ghế (Tiết kiệm)';
      } else if (typeKey === 'bao4') {
        priceText = areaData.bao4;
        typeLabel = 'Bao trọn xe 4 chỗ';
      } else if (typeKey === 'bao7') {
        priceText = areaData.bao7;
        typeLabel = 'Bao trọn xe 7 chỗ';
      } else if (typeKey === 'hang') {
        priceText = areaData.hang;
        typeLabel = 'Gửi đồ / Hàng hỏa tốc';
      }
    } else {
      priceText = 'Liên hệ hotline';
      typeLabel = 'Dịch vụ xe';
    }

    // Lược bỏ phần ngoặc đơn trong điểm đón/trả (dùng split để tránh lỗi ngoặc lồng nhau)
    const displayPickup = pickupText.split('(')[0].trim();
    const displayDropoff = dropoffText.split('(')[0].trim();

    // Hiển thị lộ trình (không ghép chung loại dịch vụ ở đây)
    estimateRouteName.textContent = `${displayPickup} → ${displayDropoff}`;
    estimatePrice.textContent = priceText;

    // Hiển thị loại hình dịch vụ thành dòng riêng
    if (estimateServiceTypeName) {
      estimateServiceTypeName.textContent = typeLabel;
    }

    // Ẩn tên khu vực chi tiết (Bảng giá áp dụng) theo yêu cầu
    if (estimateAreaSub) {
      estimateAreaSub.style.display = 'none';
    }

    // Hiển thị ghi chú phụ phí bán kính và lưu ý riêng
    if (estimateSurchargeNotice) {
      let noticeHtml = `<div style="font-weight: 700; margin-bottom: 2px;">⚠️ Ghi chú & Phụ phí cước:</div>`;
      noticeHtml += `<div>• Các huyện/khu vực lân cận bán kính ≤10km thêm 50k, trên 10km thêm 100k.</div>`;
      if (areaData && areaData.note) {
        noticeHtml += `<div style="margin-top: 2px; color: #b45309;">• ${areaData.note}</div>`;
      }
      estimateSurchargeNotice.innerHTML = noticeHtml;
      estimateSurchargeNotice.style.display = 'block';
    }

    estimateResult.style.display = 'block';

    // Cập nhật link Zalo kèm tin nhắn soạn sẵn
    if (btnEstimateZalo) {
      const msg = encodeURIComponent(
        `Chào Xe Ghép Hải Dương 24H, tôi cần đặt xe:\n` +
        `• Điểm đón: ${displayPickup}\n` +
        `• Điểm trả: ${displayDropoff}\n` +
        `• Hình thức: ${typeLabel}\n` +
        `• Giá ước tính: ${priceText}\n` +
        `Vui lòng xác nhận và xếp xe đón tôi!`
      );
      btnEstimateZalo.href = `https://zalo.me/${HOTLINE_NUMBER}?text=${msg}`;
    }
  }

    // Khởi tạo thành phần Autocomplete thông minh
  function initAutocomplete({ input, hidden, clearBtn, dropdown, isPickup }) {
    if (!input || !dropdown) return;

    let selectedIndex = -1;
    let currentResults = [];

    // Render danh sách gợi ý vào dropdown nổi
    function renderDropdown(items, query) {
      currentResults = items;
      selectedIndex = -1;

      if (!items || items.length === 0) {
        dropdown.innerHTML = `
          <div class="autocomplete-empty">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            <span>Không tìm thấy địa điểm phù hợp. Bạn vẫn có thể gõ trực tiếp địa chỉ cụ thể của mình.</span>
          </div>
        `;
        dropdown.classList.add('open');
        return;
      }

      let html = '';
      const sectionHeader = query.trim()
        ? `Kết quả gợi ý (${items.length})`
        : (isPickup ? 'Gợi ý điểm đón ngẫu nhiên' : 'Gợi ý điểm trả ngẫu nhiên');

      html += `<div class="autocomplete-section-title">${sectionHeader}</div>`;

      items.forEach((item, idx) => {
        const highlightedName = highlightText(item.name, query);
        html += `
          <div class="autocomplete-item" data-index="${idx}">
            <div class="autocomplete-item-left">
              <div class="autocomplete-item-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="autocomplete-item-info">
                <span class="autocomplete-main-name">${highlightedName}</span>
                <span class="autocomplete-sub-name">${item.sub}</span>
              </div>
            </div>
            <span class="autocomplete-tag ${item.tagClass}">${item.tag}</span>
          </div>
        `;
      });

      dropdown.innerHTML = html;
      dropdown.classList.add('open');

      // Gắn sự kiện click cho từng item
      const itemElements = dropdown.querySelectorAll('.autocomplete-item');
      itemElements.forEach(elem => {
        elem.addEventListener('mousedown', (e) => {
          e.preventDefault(); // Tránh blur input trước khi chọn
          const index = parseInt(elem.getAttribute('data-index'), 10);
          selectItem(currentResults[index]);
        });
      });
    }

    // Xử lý khi người dùng chọn 1 địa điểm
    function selectItem(item) {
      if (!item) return;

      // Hiển thị tên địa điểm đầy đủ và thân thiện
      input.value = item.name + (item.sub && !item.name.includes(item.sub) ? ` (${item.sub})` : '');
      if (hidden) hidden.value = item.pricingKey || item.regionKey;

      if (clearBtn) clearBtn.classList.add('show');
      closeDropdown();

      // TỰ ĐỘNG CẬP NHẬT GIÁ ƯỚC TÍNH NGAY LẬP TỨC
      calculateQuickPrice();
    }

    // Đóng dropdown nổi
    function closeDropdown() {
      dropdown.classList.remove('open');
      selectedIndex = -1;
    }

    // Cập nhật trạng thái item đang active khi dùng phím mũi tên
    function updateActiveItem() {
      const items = dropdown.querySelectorAll('.autocomplete-item');
      items.forEach((item, idx) => {
        if (idx === selectedIndex) {
          item.classList.add('active');
          item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else {
          item.classList.remove('active');
        }
      });
    }

    // Sự kiện gõ phím vào ô input
    input.addEventListener('input', () => {
      const query = input.value;
      if (clearBtn) {
        if (query.trim().length > 0) {
          clearBtn.classList.add('show');
        } else {
          clearBtn.classList.remove('show');
        }
      }

      // Xóa hidden value cũ để mapping lại
      if (hidden) hidden.value = '';

      // Nếu ô này bị xóa trắng thì lập tức ẩn kết quả giá
      if (!query.trim()) {
        if (estimateResult) estimateResult.style.display = 'none';
      }

      const results = searchLocations(query, isPickup);
      renderDropdown(results, query);
    });

    // Sự kiện focus vào ô input
    input.addEventListener('focus', () => {
      const query = input.value;
      const results = searchLocations(query, isPickup);
      renderDropdown(results, query);
    });

    // Bàn phím điều hướng (ArrowDown, ArrowUp, Enter, Escape)
    input.addEventListener('keydown', (e) => {
      if (!dropdown.classList.contains('open')) {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
          const results = searchLocations(input.value, isPickup);
          renderDropdown(results, input.value);
        }
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, currentResults.length - 1);
        updateActiveItem();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        updateActiveItem();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
          selectItem(currentResults[selectedIndex]);
        } else if (currentResults.length > 0) {
          selectItem(currentResults[0]);
        } else {
          closeDropdown();
          calculateQuickPrice();
        }
      } else if (e.key === 'Escape') {
        closeDropdown();
      }
    });

    // Xử lý khi click ngoài
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target) && (!clearBtn || !clearBtn.contains(e.target))) {
        closeDropdown();
      }
    });

    // Nút xóa nhanh (icon x)
    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        input.value = '';
        if (hidden) hidden.value = '';
        clearBtn.classList.remove('show');
        input.focus();
        const results = searchLocations('', isPickup);
        renderDropdown(results, '');
        calculateQuickPrice();
      });
    }
  }

  // Khởi tạo Autocomplete cho Điểm đón và Điểm trả
  initAutocomplete({
    input: quickPickupInput,
    hidden: quickPickup,
    clearBtn: clearPickupBtn,
    dropdown: pickupDropdown,
    isPickup: true
  });

  initAutocomplete({
    input: quickDropoffInput,
    hidden: quickDropoff,
    clearBtn: clearDropoffBtn,
    dropdown: dropoffDropdown,
    isPickup: false
  });

  // --- NÚT ĐẢO CHIỀU ĐIỂM ĐÓN VÀ ĐIỂM TRẢ ---
  const btnSwapLocations = document.getElementById('btnSwapLocations');
  if (btnSwapLocations && quickPickupInput && quickDropoffInput) {
    btnSwapLocations.addEventListener('click', (e) => {
      e.preventDefault();

      // Hiệu ứng xoay icon
      btnSwapLocations.classList.toggle('rotated');

      // Hoán đổi giá trị hiển thị (input.value)
      const tempInput = quickPickupInput.value;
      quickPickupInput.value = quickDropoffInput.value;
      quickDropoffInput.value = tempInput;

      // Hoán đổi giá trị ngầm (hidden.value)
      if (quickPickup && quickDropoff) {
        const tempHidden = quickPickup.value;
        quickPickup.value = quickDropoff.value;
        quickDropoff.value = tempHidden;
      }

      // Cập nhật trạng thái hiển thị nút xóa nhanh x
      if (clearPickupBtn) {
        if (quickPickupInput.value.trim().length > 0) {
          clearPickupBtn.classList.add('show');
        } else {
          clearPickupBtn.classList.remove('show');
        }
      }
      if (clearDropoffBtn) {
        if (quickDropoffInput.value.trim().length > 0) {
          clearDropoffBtn.classList.add('show');
        } else {
          clearDropoffBtn.classList.remove('show');
        }
      }

      // Đóng dropdown nếu đang mở
      if (pickupDropdown) pickupDropdown.classList.remove('open');
      if (dropoffDropdown) dropoffDropdown.classList.remove('open');

      // Tự động tính lại giá ước tính theo lộ trình đảo chiều
      calculateQuickPrice();
    });
  }

  // Lắng nghe thay đổi loại xe
  if (quickType) {
    quickType.addEventListener('change', calculateQuickPrice);
  }

  // Submit form kiểm tra giá
  if (quickBookingForm) {
    quickBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateQuickPrice();

      // Cuộn nhẹ tới kết quả nếu có
      if (estimateResult && estimateResult.style.display === 'block') {
        estimateResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // --- 6. NÚT "ĐẶT CHUYẾN NÀY" TỪ CÁC THẺ BẢNG GIÁ ---
  const bookRouteBtns = document.querySelectorAll('.btn-card-book');
  const mainPickupSelect = document.getElementById('formPickup');
  const mainDropoffSelect = document.getElementById('formDropoff');
  const mainBookingSection = document.getElementById('bookingSection');

  const destMapping = {
    'hai-phong': { name: 'Trung tâm TP. Hải Phòng', key: 'hp_trung_tam' },
    'quang-ninh': { name: 'Thành phố Hạ Long', key: 'qn_ha_long' },
    'bac-ninh': { name: 'Thành phố Bắc Ninh', key: 'bn_trung_tam' },
    'bac-giang': { name: 'Thành phố Bắc Giang', key: 'bg_trung_tam' },
    'thai-binh': { name: 'Thành phố Thái Bình', key: 'tb_tp_hung_ha' },
    'nam-dinh': { name: 'Thành phố Nam Định', key: 'nd_tp_nam_dinh' },
    'hung-yen': { name: 'Thành phố Hưng Yên', key: 'hy_toan_tinh' },
    'ha-nam': { name: 'Thành phố Phủ Lý', key: 'hnm_trung_tam' },
    'ninh-binh': { name: 'Thành phố Ninh Bình', key: 'nb_ninh_binh_hoa_lu' },
    'thanh-hoa': { name: 'Thành phố Thanh Hóa', key: 'th_nhom1' }
  };

  bookRouteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const destKey = btn.getAttribute('data-dest');
      const target = destMapping[destKey];

      // Tự động điền vào widget ước tính giá nhanh và tính giá ngay
      if (quickDropoffInput && target) {
        // Tự động điền điểm đón mặc định nếu đang trống
        if (quickPickupInput && !quickPickupInput.value.trim()) {
          quickPickupInput.value = 'TP. Hải Dương';
          if (quickPickup) quickPickup.value = 'hd_noi_tinh';
          if (clearPickupBtn) clearPickupBtn.classList.add('show');
        }

        quickDropoffInput.value = target.name;
        if (quickDropoff) quickDropoff.value = target.key;
        if (clearDropoffBtn) clearDropoffBtn.classList.add('show');

        calculateQuickPrice();

        if (quickBookingForm) {
          quickBookingForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });

  // --- 7. FORM ĐẶT XE CHÍNH & MODAL XÁC NHẬN ---
  const mainBookingForm = document.getElementById('mainBookingForm');
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSummary = document.getElementById('modalSummary');
  const modalZaloConfirm = document.getElementById('modalZaloConfirm');
  const modalPhoneConfirm = document.getElementById('modalPhoneConfirm');

  if (mainBookingForm) {
    mainBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim() || 'Quý khách';
      const phone = document.getElementById('formPhone')?.value.trim() || '';
      const pickupElem = document.getElementById('formPickup');
      const dropoffElem = document.getElementById('formDropoff');
      const serviceElem = document.getElementById('formService');
      const time = document.getElementById('formTime')?.value || 'Sớm nhất';
      const note = document.getElementById('formNote')?.value.trim() || 'Không';

      if (!phone) {
        alert('Vui lòng nhập số điện thoại để nhà xe liên hệ đón bạn.');
        return;
      }

      const pickup = pickupElem ? pickupElem.options[pickupElem.selectedIndex].text : 'Hải Dương';
      const dropoff = dropoffElem ? dropoffElem.options[dropoffElem.selectedIndex].text : 'Liên tỉnh';
      const service = serviceElem ? serviceElem.options[serviceElem.selectedIndex].text : 'Xe ghép';

      // Nội dung xác nhận
      if (modalSummary) {
        modalSummary.innerHTML = `
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 15px 0; text-align: left; font-size: 0.95rem; border: 1px solid #e2e8f0;">
            <p style="margin-bottom: 6px;"><strong>Họ tên:</strong> ${name}</p>
            <p style="margin-bottom: 6px;"><strong>Số điện thoại:</strong> <span style="color:#e74c3c; font-weight:700;">${phone}</span></p>
            <p style="margin-bottom: 6px;"><strong>Điểm đón:</strong> ${pickup}</p>
            <p style="margin-bottom: 6px;"><strong>Điểm đến:</strong> ${dropoff}</p>
            <p style="margin-bottom: 6px;"><strong>Hình thức:</strong> ${service}</p>
            <p style="margin-bottom: 6px;"><strong>Thời gian:</strong> ${time}</p>
            ${note !== 'Không' ? `<p style="margin-bottom: 6px;"><strong>Ghi chú:</strong> ${note}</p>` : ''}
          </div>
        `;
      }

      // Chuẩn bị tin nhắn Zalo gửi trực tiếp cho tổng đài
      const zaloMessage = encodeURIComponent(
        `[ĐẶT XE GHÉP HẢI DƯƠNG 24H]\n` +
        `Khách hàng: ${name}\n` +
        `SĐT: ${phone}\n` +
        `Lộ trình: ${pickup} ⇄ ${dropoff}\n` +
        `Hình thức: ${service}\n` +
        `Thời gian đi: ${time}\n` +
        `Ghi chú: ${note}`
      );

      if (modalZaloConfirm) {
        modalZaloConfirm.href = `https://zalo.me/${HOTLINE_NUMBER}?text=${zaloMessage}`;
      }

      if (modalPhoneConfirm) {
        modalPhoneConfirm.href = `tel:${HOTLINE_NUMBER}`;
      }

      // Mở modal
      if (bookingModal) {
        bookingModal.classList.add('open');
      }

      mainBookingForm.reset();
    });
  }

  // Đóng modal
  if (modalCloseBtn && bookingModal) {
    modalCloseBtn.addEventListener('click', () => {
      bookingModal.classList.remove('open');
    });

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('open');
      }
    });
  }

  // --- 8. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Đóng các item khác
        faqItems.forEach(i => i.classList.remove('active'));

        // Toggle item hiện tại
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Tự động gán ngày giờ hiện tại + 1 tiếng làm placeholder cho ô thời gian
  const formTimeInput = document.getElementById('formTime');
  if (formTimeInput) {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    const localIso = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    formTimeInput.value = localIso;
  }
});
