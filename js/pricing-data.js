/**
 * =========================================================================
 * BẢNG DỮ LIỆU GIÁ CƯỚC XE GHÉP & BAO XE TỪ HẢI DƯƠNG ĐI 10 TỈNH THÀNH
 * (Trích xuất từ bảng giá niêm yết nhà xe - Dịch chuẩn tiếng Việt đầy đủ)
 * =========================================================================
 */

// 1. CẤU HÌNH PHỤ PHÍ VÀ LƯU Ý BÁN KÍNH
const PRICING_CONFIG = {
  radiusSurcharge: {
    under10km: 50000,
    under10kmText: '+50.000đ (bán kính ≤ 10km)',
    over10km: 100000,
    over10kmText: '+100.000đ (bán kính > 10km)',
    bannerText: '⚠️ CÁC HUYỆN LÂN CẬN BÁN KÍNH 10KM ĐỔ LẠI THÊM 50K, TRÊN 10KM THÊM 100K!'
  },
  generalNote: 'Tùy từng điểm đón và trả khách xa hơn gần hơn, đồ gửi to bé, giá có thể tăng giảm nhẹ dựa trên bảng giá niêm yết!'
};

// 2. DỮ LIỆU GIÁ CƯỚC CHI TIẾT THEO TỪNG TỈNH & KHU VỰC
const PROVINCES_DATA = {
  // -------------------------------------------------------------------------
  // 1. HẢI PHÒNG
  // -------------------------------------------------------------------------
  'hp_trung_tam': {
    province: 'Hải Phòng',
    areaName: 'Trung tâm TP. Hải Phòng, Huyện An Dương, Huyện An Lão',
    ghep: '250.000đ / ghế',
    bao4: '500.000đ / chuyến',
    bao7: '600.000đ / chuyến',
    hang: '100.000đ - 150.000đ / kiện',
    note: 'Đón trả tận nơi tại trung tâm TP. Hải Phòng, An Dương, An Lão.'
  },
  'hp_kien_thuy_duong_kinh': {
    province: 'Hải Phòng',
    areaName: 'Huyện Kiến Thụy, Quận Dương Kinh',
    ghep: '300.000đ - 350.000đ / ghế',
    bao4: '550.000đ - 600.000đ / chuyến',
    bao7: '650.000đ - 700.000đ / chuyến',
    hang: '100.000đ - 150.000đ / kiện',
    note: 'Đón trả tận nhà khu vực Kiến Thụy và Dương Kinh.'
  },
  'hp_thuy_nguyen_cat_bi': {
    province: 'Hải Phòng',
    areaName: 'Huyện Thủy Nguyên, Sân bay Quốc tế Cát Bi',
    ghep: '300.000đ / ghế',
    bao4: '500.000đ - 550.000đ / chuyến',
    bao7: '600.000đ - 650.000đ / chuyến',
    hang: '100.000đ - 150.000đ / kiện',
    note: 'Sân bay Cát Bi bao xe 550.000đ; Thủy Nguyên bao xe 500k - 550k.'
  },
  'hp_tien_lang_vinh_bao': {
    province: 'Hải Phòng',
    areaName: 'Huyện Tiên Lãng, Huyện Vĩnh Bảo',
    ghep: '300.000đ / ghế',
    bao4: 'Tính theo km (x10.000đ/km)',
    bao7: 'Tính theo km (x12.000đ/km)',
    hang: '100.000đ - 150.000đ / kiện',
    note: 'Bao xe nguyên chuyến tính cước x10.000đ/km.'
  },
  'hp_do_son_cat_hai': {
    province: 'Hải Phòng',
    areaName: 'Quận Đồ Sơn, Huyện Cát Hải',
    ghep: '350.000đ - 400.000đ / ghế',
    bao4: '650.000đ - 700.000đ / chuyến',
    bao7: '750.000đ - 800.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Đón trả tận bãi tắm Đồ Sơn, phà Gót hoặc cảng Cát Hải.'
  },

  // -------------------------------------------------------------------------
  // 2. QUẢNG NINH (Bao xe chưa gồm vé cao tốc)
  // -------------------------------------------------------------------------
  'qn_dong_trieu_mao_khe': {
    province: 'Quảng Ninh',
    areaName: 'Thị xã Đông Triều, Phường Mạo Khê',
    ghep: '250.000đ / ghế',
    bao4: 'Tính theo km (x10.000đ/km)',
    bao7: 'Tính theo km (x12.000đ/km)',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Bao xe chưa bao gồm vé cao tốc. Gửi đồ từ 150k - 200k trở lên.'
  },
  'qn_uong_bi': {
    province: 'Quảng Ninh',
    areaName: 'Thành phố Uông Bí',
    ghep: '300.000đ / ghế',
    bao4: '600.000đ / chuyến',
    bao7: '750.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Bao xe chưa bao gồm vé cao tốc.'
  },
  'qn_quang_yen': {
    province: 'Quảng Ninh',
    areaName: 'Thị xã Quảng Yên',
    ghep: '350.000đ / ghế',
    bao4: '700.000đ / chuyến',
    bao7: '850.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Bao xe chưa bao gồm vé cao tốc.'
  },
  'qn_bai_chay': {
    province: 'Quảng Ninh',
    areaName: 'Phường Bãi Cháy (TP. Hạ Long)',
    ghep: '350.000đ / ghế',
    bao4: '900.000đ / chuyến',
    bao7: '1.050.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Đón trả tận khu du lịch Bãi Cháy, khách sạn, bãi tắm. Bao xe chưa gồm vé cao tốc.'
  },
  'qn_ha_long': {
    province: 'Quảng Ninh',
    areaName: 'Thành phố Hạ Long (Hòn Gai & Trung tâm)',
    ghep: '400.000đ / ghế',
    bao4: '1.000.000đ / chuyến',
    bao7: '1.200.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Bao xe chưa bao gồm vé cao tốc.'
  },
  'qn_cam_pha': {
    province: 'Quảng Ninh',
    areaName: 'Thành phố Cẩm Phả',
    ghep: '450.000đ / ghế',
    bao4: '1.200.000đ - 1.300.000đ / chuyến',
    bao7: '1.400.000đ - 1.500.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Bao xe chưa bao gồm vé cao tốc.'
  },
  'qn_van_don_ao_tien': {
    province: 'Quảng Ninh',
    areaName: 'Phường Cửa Ông, Huyện Vân Đồn, Cảng Quốc tế Ao Tiên',
    ghep: '500.000đ / ghế',
    bao4: '1.500.000đ / chuyến',
    bao7: '1.700.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Đón trả tận sảnh Cảng Ao Tiên hoặc Sân bay Vân Đồn. Bao xe chưa gồm vé cao tốc.'
  },
  'qn_ba_che_tien_yen': {
    province: 'Quảng Ninh',
    areaName: 'Huyện Ba Chẽ, Huyện Tiên Yên',
    ghep: '600.000đ / ghế',
    bao4: '1.600.000đ - 1.800.000đ / chuyến',
    bao7: '1.800.000đ - 2.000.000đ / chuyến',
    hang: '200.000đ trở lên / kiện',
    note: 'Bao xe liên hệ hotline để nhận báo giá theo lộ trình thực tế.'
  },
  'qn_dam_ha_binh_lieu_hai_ha': {
    province: 'Quảng Ninh',
    areaName: 'Huyện Đầm Hà, Huyện Bình Liêu, Huyện Hải Hà',
    ghep: '650.000đ / ghế',
    bao4: '1.800.000đ - 2.000.000đ / chuyến',
    bao7: '2.000.000đ - 2.200.000đ / chuyến',
    hang: '200.000đ trở lên / kiện',
    note: 'Bao xe liên hệ hotline để nhận báo giá theo lộ trình thực tế.'
  },
  'qn_mong_cai': {
    province: 'Quảng Ninh',
    areaName: 'Thành phố Móng Cái (Cửa khẩu Quốc tế)',
    ghep: '700.000đ / ghế',
    bao4: '2.000.000đ - 2.200.000đ / chuyến',
    bao7: '2.300.000đ - 2.500.000đ / chuyến',
    hang: '200.000đ trở lên / kiện',
    note: 'Đón trả tận cửa khẩu Móng Cái, bãi biển Trà Cổ. Bao xe chưa gồm vé cao tốc.'
  },

  // -------------------------------------------------------------------------
  // 3. BẮC NINH
  // -------------------------------------------------------------------------
  'bn_trung_tam': {
    province: 'Bắc Ninh',
    areaName: 'TP. Bắc Ninh và các huyện (Quế Võ, Tiên Du, Thuận Thành, Gia Bình, Lương Tài)',
    ghep: '250.000đ / ghế',
    bao4: '500.000đ / chuyến (TP. Bắc Ninh) | Huyện x10k/km',
    bao7: '650.000đ / chuyến (TP. Bắc Ninh) | Huyện x12k/km',
    hang: '150.000đ / kiện',
    note: 'Bao xe đi TP. Bắc Ninh: 500k; đi các huyện còn lại tính cước x10.000đ/km.'
  },
  'bn_yen_phong_tu_son': {
    province: 'Bắc Ninh',
    areaName: 'Huyện Yên Phong, Thị xã Từ Sơn',
    ghep: '300.000đ / ghế',
    bao4: '550.000đ - 600.000đ / chuyến',
    bao7: '700.000đ - 750.000đ / chuyến',
    hang: '200.000đ / kiện',
    note: 'Đón trả tận KCN Yên Phong (Samsung) và trung tâm Từ Sơn.'
  },

  // -------------------------------------------------------------------------
  // 4. BẮC GIANG
  // -------------------------------------------------------------------------
  'bg_trung_tam': {
    province: 'Bắc Giang',
    areaName: 'TP. Bắc Giang, Thị xã Việt Yên, Huyện Yên Dũng, KCN Quang Châu',
    ghep: '300.000đ / ghế',
    bao4: '600.000đ / chuyến',
    bao7: '750.000đ / chuyến',
    hang: '200.000đ / kiện',
    note: 'Đón trả tận các KCN Vân Trung, Đình Trám, Quang Châu và TP. Bắc Giang.'
  },
  'bg_luc_nam': {
    province: 'Bắc Giang',
    areaName: 'Huyện Lục Nam',
    ghep: '350.000đ / ghế',
    bao4: '600.000đ / chuyến',
    bao7: '750.000đ / chuyến',
    hang: '200.000đ / kiện',
    note: 'Đón trả tận thị trấn Đồi Ngô và các xã thuộc huyện Lục Nam.'
  },
  'bg_lang_giang': {
    province: 'Bắc Giang',
    areaName: 'Huyện Lạng Giang',
    ghep: '350.000đ / ghế',
    bao4: '650.000đ trở lên / chuyến',
    bao7: '800.000đ trở lên / chuyến',
    hang: '250.000đ trở lên / kiện',
    note: 'Đón trả tận Vôi, Kép và các xã thuộc Lạng Giang.'
  },
  'bg_luc_ngan_hiep_hoa_son_dong': {
    province: 'Bắc Giang',
    areaName: 'Huyện Lục Ngạn, Huyện Hiệp Hòa, Huyện Sơn Động',
    ghep: '400.000đ - 450.000đ / ghế',
    bao4: '650.000đ trở lên / chuyến',
    bao7: '800.000đ trở lên / chuyến',
    hang: '250.000đ trở lên / kiện',
    note: 'Đón trả tận nơi tại Chũ (Lục Ngạn), Thắng (Hiệp Hòa), An Châu (Sơn Động).'
  },
  'bg_tan_yen_yen_the': {
    province: 'Bắc Giang',
    areaName: 'Huyện Tân Yên, Huyện Yên Thế',
    ghep: '350.000đ - 400.000đ / ghế',
    bao4: '650.000đ trở lên / chuyến',
    bao7: '800.000đ trở lên / chuyến',
    hang: '250.000đ trở lên / kiện',
    note: 'Đón trả tận Cao Thượng, Cầu Gồ và các xã lân cận.'
  },

  // -------------------------------------------------------------------------
  // 5. THÁI BÌNH
  // -------------------------------------------------------------------------
  'tb_dong_hung_quynh_phu': {
    province: 'Thái Bình',
    areaName: 'Huyện Đông Hưng, Thị trấn Quỳnh Côi, Huyện Quỳnh Phụ (Phụ Dực)',
    ghep: '250.000đ / ghế',
    bao4: '500.000đ / chuyến',
    bao7: '650.000đ / chuyến',
    hang: '150.000đ / kiện',
    note: 'Gửi đồ từ 150.000đ - 200.000đ trở lên tùy điểm cụ thể.'
  },
  'tb_tp_hung_ha': {
    province: 'Thái Bình',
    areaName: 'Thành phố Thái Bình, Huyện Hưng Hà',
    ghep: '300.000đ / ghế',
    bao4: '600.000đ / chuyến',
    bao7: '750.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Đón trả tận nơi tại TP. Thái Bình, Đền Trần Hưng Hà.'
  },
  'tb_thai_thuy_vu_thu': {
    province: 'Thái Bình',
    areaName: 'Huyện Thái Thụy, Huyện Vũ Thư',
    ghep: '350.000đ / ghế',
    bao4: '650.000đ trở lên / chuyến',
    bao7: '800.000đ trở lên / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Đón trả tận Diêm Điền, Chùa Keo và các xã.'
  },
  'tb_kien_xuong_tien_hai': {
    province: 'Thái Bình',
    areaName: 'Huyện Kiến Xương, Huyện Tiền Hải (Biển Đồng Châu / Cồn Vành)',
    ghep: '350.000đ - 400.000đ / ghế',
    bao4: '650.000đ trở lên / chuyến',
    bao7: '800.000đ trở lên / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Đón trả tận thị trấn Kiến Xương, KCN Tiền Hải, bãi biển.'
  },

  // -------------------------------------------------------------------------
  // 6. NAM ĐỊNH
  // -------------------------------------------------------------------------
  'nd_tp_nam_dinh': {
    province: 'Nam Định',
    areaName: 'Thành phố Nam Định',
    ghep: '350.000đ / ghế',
    bao4: '800.000đ trở lên / chuyến',
    bao7: '950.000đ trở lên / chuyến',
    hang: '200.000đ trở lên / kiện',
    note: 'Đón trả tận nơi trung tâm TP. Nam Định, Đền Trần.'
  },
  'nd_nghia_hung_hai_hau': {
    province: 'Nam Định',
    areaName: 'Huyện Nghĩa Hưng, Huyện Hải Hậu',
    ghep: '500.000đ / ghế',
    bao4: '850.000đ - 1.000.000đ trở lên / chuyến',
    bao7: '1.050.000đ - 1.200.000đ trở lên / chuyến',
    hang: '200.000đ trở lên / kiện',
    note: 'Đón trả tận thị trấn Yên Định, Cồn, Liễu Đề, Quất Lâm.'
  },
  'nd_cac_huyen_con_lai': {
    province: 'Nam Định',
    areaName: 'Huyện Ý Yên, Vụ Bản, Mỹ Lộc, Nam Trực, Trực Ninh, Xuân Trường, Giao Thủy',
    ghep: '400.000đ - 450.000đ / ghế',
    bao4: '800.000đ - 900.000đ trở lên / chuyến',
    bao7: '950.000đ - 1.100.000đ trở lên / chuyến',
    hang: '200.000đ trở lên / kiện',
    note: 'Đón trả tận các huyện lân cận tỉnh Nam Định.'
  },

  // -------------------------------------------------------------------------
  // 7. HƯNG YÊN
  // -------------------------------------------------------------------------
  'hy_toan_tinh': {
    province: 'Hưng Yên',
    areaName: 'Toàn tỉnh Hưng Yên (TP. Hưng Yên, Mỹ Hào, Yên Mỹ, Văn Giang, Văn Lâm, Khoái Châu, Kim Động, Ân Thi, Phù Cừ, Tiên Lữ)',
    ghep: '250.000đ / ghế',
    bao4: '500.000đ / chuyến',
    bao7: '650.000đ / chuyến',
    hang: '150.000đ / kiện',
    note: 'Đón trả tận nơi toàn bộ các huyện và thị xã trong tỉnh Hưng Yên.'
  },

  // -------------------------------------------------------------------------
  // 8. HÀ NAM
  // -------------------------------------------------------------------------
  'hnm_trung_tam': {
    province: 'Hà Nam',
    areaName: 'Thành phố Phủ Lý, Thị xã Duy Tiên (KCN Đồng Văn), Huyện Thanh Liêm, Lý Nhân, Bình Lục',
    ghep: '350.000đ / ghế',
    bao4: '700.000đ / chuyến',
    bao7: '850.000đ / chuyến',
    hang: '200.000đ / kiện',
    note: 'Đón trả tận nơi tại Phủ Lý, Đồng Văn, Vĩnh Trụ...'
  },
  'hnm_kim_bang': {
    province: 'Hà Nam',
    areaName: 'Huyện Kim Bảng (Khu Du Lịch Chùa Tam Chúc, Ba Sao, Quế)',
    ghep: '400.000đ / ghế',
    bao4: '800.000đ / chuyến',
    bao7: '950.000đ / chuyến',
    hang: '200.000đ / kiện',
    note: 'Riêng khu vực Kim Bảng / Chùa Tam Chúc: Ghép 400k, Bao xe 800k.'
  },

  // -------------------------------------------------------------------------
  // 9. NINH BÌNH
  // -------------------------------------------------------------------------
  'nb_ninh_binh_hoa_lu': {
    province: 'Ninh Bình',
    areaName: 'Thành phố Ninh Bình, Huyện Gia Viễn, Huyện Yên Mô, Huyện Hoa Lư (Tràng An, Bái Đính)',
    ghep: '400.000đ - 450.000đ / ghế',
    bao4: '1.000.000đ - 1.100.000đ / chuyến',
    bao7: '1.200.000đ - 1.300.000đ / chuyến',
    hang: '200.000đ - 250.000đ trở lên / kiện',
    note: 'Đón trả tận nơi trung tâm TP. Ninh Bình, điểm du lịch Tràng An, Tam Cốc, Bái Đính.'
  },
  'nb_tam_diep_kim_son': {
    province: 'Ninh Bình',
    areaName: 'Thành phố Tam Điệp, Huyện Kim Sơn (Phát Diệm), Huyện Nho Quan (Cúc Phương), Huyện Yên Khánh',
    ghep: '450.000đ - 500.000đ / ghế',
    bao4: '1.100.000đ - 1.200.000đ / chuyến',
    bao7: '1.300.000đ - 1.400.000đ / chuyến',
    hang: '200.000đ - 250.000đ trở lên / kiện',
    note: 'Đón trả tận nhà tại Tam Điệp, Kim Sơn, Nho Quan, Yên Khánh.'
  },

  // -------------------------------------------------------------------------
  // 10. THANH HÓA (Bao xe x9k/km dưới 200km | x8k/km trên 200km)
  // -------------------------------------------------------------------------
  'th_nhom1': {
    province: 'Thanh Hóa',
    areaName: 'TP. Thanh Hóa, Thị xã Bỉm Sơn, Huyện Hà Trung, Hậu Lộc, Hoằng Hóa, Nga Sơn',
    ghep: '500.000đ / ghế',
    bao4: 'Tính theo km (x9.000đ/km <200km | x8.000đ/km >200km)',
    bao7: 'Tính theo km (x11.000đ/km <200km | x10.000đ/km >200km)',
    hang: '300.000đ trở lên tùy điểm / kiện',
    note: 'Bao xe tính cước theo km: x9k/km dưới 200km, x8k/km trên 200km. Gửi đồ từ 300k trở lên.'
  },
  'th_nhom2': {
    province: 'Thanh Hóa',
    areaName: 'Huyện Thạch Thành, Thiệu Hóa, Cẩm Thủy, Ngọc Lặc',
    ghep: '550.000đ - 600.000đ / ghế',
    bao4: 'Tính theo km (x9.000đ/km <200km | x8.000đ/km >200km)',
    bao7: 'Tính theo km (x11.000đ/km <200km | x10.000đ/km >200km)',
    hang: '300.000đ trở lên tùy điểm / kiện',
    note: 'Bao xe tính cước theo km: x9k/km dưới 200km, x8k/km trên 200km. Gửi đồ từ 300k trở lên.'
  },
  'th_nhom3': {
    province: 'Thanh Hóa',
    areaName: 'Thành phố Sầm Sơn, Huyện Yên Định, Vĩnh Lộc, Quảng Xương, Triệu Sơn',
    ghep: '550.000đ - 600.000đ / ghế',
    bao4: 'Tính theo km (x9.000đ/km <200km | x8.000đ/km >200km)',
    bao7: 'Tính theo km (x11.000đ/km <200km | x10.000đ/km >200km)',
    hang: '300.000đ trở lên tùy điểm / kiện',
    note: 'Bao xe tính cước theo km: x9k/km dưới 200km, x8k/km trên 200km. Đón trả tận bãi biển Sầm Sơn.'
  },
  'th_nhom4': {
    province: 'Thanh Hóa',
    areaName: 'Huyện Nông Cống, Thọ Xuân, Bá Thước, Như Thanh, Lang Chánh, Thị xã Nghi Sơn (Huyện Tĩnh Gia cũ)',
    ghep: '600.000đ - 700.000đ / ghế',
    bao4: 'Tính theo km (x9.000đ/km <200km | x8.000đ/km >200km)',
    bao7: 'Tính theo km (x11.000đ/km <200km | x10.000đ/km >200km)',
    hang: '300.000đ trở lên tùy điểm / kiện',
    note: 'Bao xe tính cước theo km: x9k/km dưới 200km, x8k/km trên 200km. Đón trả tận KKT Nghi Sơn, Sân bay Thọ Xuân.'
  },

  // -------------------------------------------------------------------------
  // 11. HÀ NỘI & SÂN BAY NỘI BÀI (TUYẾN TRỌNG ĐIỂM)
  // -------------------------------------------------------------------------
  'hn_noi_thanh': {
    province: 'Hà Nội',
    areaName: 'Hà Nội (Các quận nội thành & huyện lân cận)',
    ghep: '200.000đ - 250.000đ / ghế',
    bao4: '500.000đ - 600.000đ / chuyến',
    bao7: '650.000đ - 750.000đ / chuyến',
    hang: '100.000đ - 150.000đ / kiện',
    note: 'Đón trả tận ngõ các quận Cầu Giấy, Hoàn Kiếm, Đống Đa, Hai Bà Trưng, Ba Đình, Thanh Xuân, Hoàng Mai, Nam Từ Liêm, Bắc Từ Liêm, Long Biên, Tây Hồ, Hà Đông, bệnh viện, trường học.'
  },
  'hn_noi_bai': {
    province: 'Hà Nội',
    areaName: 'Sân Bay Quốc Tế Nội Bài (Ga T1, Ga T2, Huyện Sóc Sơn)',
    ghep: '250.000đ - 300.000đ / ghế',
    bao4: '650.000đ - 750.000đ / chuyến',
    bao7: '800.000đ - 900.000đ / chuyến',
    hang: '150.000đ - 200.000đ / kiện',
    note: 'Đón trả tận sảnh đến/đi Ga T1 (quốc nội) và Ga T2 (quốc tế), canh giờ bay chuẩn xác, hỗ trợ xách hành lý.'
  },

  // -------------------------------------------------------------------------
  // 12. NỘI TỈNH HẢI DƯƠNG
  // -------------------------------------------------------------------------
  'hd_noi_tinh': {
    province: 'Hải Dương',
    areaName: 'Hải Dương ⇄ Nội tỉnh Hải Dương (Giữa các huyện trong tỉnh)',
    ghep: '100.000đ - 180.000đ / ghế',
    bao4: '300.000đ - 450.000đ / chuyến',
    bao7: '400.000đ - 550.000đ / chuyến',
    hang: '80.000đ - 120.000đ / kiện',
    note: 'Xe đón trả tận nhà giữa các huyện, thị xã và thành phố trong tỉnh Hải Dương.'
  }
};

// 3. DANH SÁCH TẤT CẢ ĐỊA ĐIỂM (CHO AUTOCOMPLETE TÌM KIẾM CẢ CÓ DẤU VÀ KHÔNG DẤU)
// Mỗi địa điểm trỏ tới pricingKey tương ứng để tra giá tức thì
const FULL_LOCATIONS_DATABASE = [
  // =========================================================================
  // I. TỈNH HẢI DƯƠNG (CÁC HUYỆN & THÀNH PHỐ CŨ TRƯỚC SÁP NHẬP)
  // =========================================================================
  { name: 'TP. Hải Dương', sub: 'Thành phố Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'tp hai duong thanh pho hai duong trung tam tphd' },
  { name: 'TP. Chí Linh', sub: 'Huyện / Thị xã Chí Linh cũ, Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'tp chi linh huyen chi linh thi xa chi linh sao do pha lai' },
  { name: 'TX. Kinh Môn', sub: 'Huyện Kinh Môn cũ, Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'tx kinh mon huyen kinh mon an luu phu thu hiep an minh tan' },
  { name: 'Huyện Cẩm Giàng', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen cam giang lai cach cam vu cam giang kcn tan truong vsip phuc dien' },
  { name: 'Huyện Bình Giang', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen binh giang ke sat cho ke sat thai hoc tan hong binh giang' },
  { name: 'Huyện Nam Sách', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen nam sach thi tran nam sach an binh dong lac kcn nam sach' },
  { name: 'Huyện Kim Thành', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen kim thanh phu thai lai vu co dung kcn lai vu' },
  { name: 'Huyện Thanh Hà', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen thanh ha thi tran thanh ha hong lac tan an thanh ha' },
  { name: 'Huyện Gia Lộc', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen gia loc thi tran gia loc doan thuong toan thang yet kieu' },
  { name: 'Huyện Tứ Kỳ', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen tu ky thi tran tu ky quang phuc tan ky dai hop tu ky' },
  { name: 'Huyện Ninh Giang', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen ninh giang thi tran ninh giang nghia an ung hoe ninh giang' },
  { name: 'Huyện Thanh Miện', sub: 'Tỉnh Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'huyen thanh mien thi tran thanh mien doan tung dao co chi lang nam' },
  { name: 'Thị trấn Kẻ Sặt', sub: 'Huyện Bình Giang, Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'thi tran ke sat cho ke sat binh giang' },
  { name: 'Thị trấn Lai Cách', sub: 'Huyện Cẩm Giàng, Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'thi tran lai cach cam giang' },
  { name: 'Thị trấn Phú Thái', sub: 'Huyện Kim Thành, Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'thi tran phu thai kim thanh' },
  { name: 'Phường Sao Đỏ', sub: 'TP. Chí Linh, Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'sao do chi linh dai hoc sao do' },
  { name: 'Phường Phả Lại', sub: 'TP. Chí Linh, Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Hải Dương', tagClass: 'tag-hd', keywords: 'pha lai chi linh nhiet dien pha lai' },

  // =========================================================================
  // II. 10 TỈNH THÀNH LÂN CẬN (THEO BẢNG GIÁ HOÀNG THẮNG XE GHÉP)
  // =========================================================================

  // 1. TỈNH / THÀNH PHỐ HẢI PHÒNG
  { name: 'Trung tâm TP. Hải Phòng', sub: 'Quận Hồng Bàng, Ngô Quyền, Lê Chân, Hải An', province: 'Hải Phòng', pricingKey: 'hp_trung_tam', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'tt tphp trung tam thanh pho hai phong hong bang ngo quyen le chan hai an' },
  { name: 'Huyện An Dương', sub: 'Tỉnh Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_trung_tam', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'an duong huyen an duong hai phong kcn nomura trang due' },
  { name: 'Huyện An Lão', sub: 'Tỉnh Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_trung_tam', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'an lao huyen an lao hai phong' },
  { name: 'Huyện Thủy Nguyên', sub: 'Thành phố Thủy Nguyên, Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_thuy_nguyen_cat_bi', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'thuy nguyen thuy nguyen hai phong nui deo vsip hai phong' },
  { name: 'Sân Bay Cát Bi', sub: 'Sân bay Quốc tế Cát Bi, Quận Hải An, Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_thuy_nguyen_cat_bi', tag: 'Sân Bay', tagClass: 'tag-air', keywords: 'sb cat bi san bay cat bi san bay quoc te cat bi hai phong' },
  { name: 'Huyện Kiến Thụy', sub: 'Tỉnh Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_kien_thuy_duong_kinh', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'kien thuy huyen kien thuy hai phong' },
  { name: 'Quận Dương Kinh', sub: 'TP. Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_kien_thuy_duong_kinh', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'duong kinh quan duong kinh hai phong' },
  { name: 'Huyện Tiên Lãng', sub: 'Tỉnh Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_tien_lang_vinh_bao', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'tien lang huyen tien lang hai phong' },
  { name: 'Huyện Vĩnh Bảo', sub: 'Tỉnh Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_tien_lang_vinh_bao', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'vinh bao huyen vinh bao hai phong den trang trinh' },
  { name: 'Quận Đồ Sơn', sub: 'Bãi biển Đồ Sơn, TP. Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_do_son_cat_hai', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'do son quan do son bai bien do son hai phong' },
  { name: 'Huyện Cát Hải', sub: 'Đảo Cát Bà, Bến phà Gót, Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_do_son_cat_hai', tag: 'Hải Phòng', tagClass: 'tag-other', keywords: 'cat hai huyen cat hai dao cat ba pha got vinfast' },

  // 2. TỈNH QUẢNG NINH
  { name: 'Thị xã Đông Triều', sub: 'Tỉnh Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_dong_trieu_mao_khe', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'dong trieu thi xa dong trieu quang ninh' },
  { name: 'Phường Mạo Khê', sub: 'Thị xã Đông Triều, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_dong_trieu_mao_khe', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'mao khe phuong mao khe dong trieu quang ninh' },
  { name: 'Thành phố Uông Bí', sub: 'Chùa Ba Vàng, Yên Tử, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_uong_bi', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'uong bi thanh pho uong bi chua ba vang yen tu quang ninh' },
  { name: 'Thị xã Quảng Yên', sub: 'Tỉnh Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_quang_yen', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'quang yen thi xa quang yen song bach dang quang ninh' },
  { name: 'Phường Bãi Cháy', sub: 'Khu du lịch Bãi Cháy, TP. Hạ Long, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_bai_chay', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'bai chay phuong bai chay ha long sunworld bai tam quang ninh' },
  { name: 'Thành phố Hạ Long', sub: 'Khu vực Hòn Gai & Trung tâm, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_ha_long', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'ha long thanh pho ha long hon gai quang ninh' },
  { name: 'Thành phố Cẩm Phả', sub: 'Tỉnh Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_cam_pha', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'cam pha thanh pho cam pha quang ninh' },
  { name: 'Phường Cửa Ông', sub: 'Đền Cửa Ông, TP. Cẩm Phả, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_van_don_ao_tien', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'cua ong phuong cua ong den cua ong quang ninh' },
  { name: 'Huyện Vân Đồn', sub: 'Sân bay Vân Đồn, Cảng Quốc tế Ao Tiên, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_van_don_ao_tien', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'van don huyen van don san bay van don cang quoc te ao tien quang ninh' },
  { name: 'Sân Bay Quốc Tế Vân Đồn', sub: 'Huyện Vân Đồn, Tỉnh Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_van_don_ao_tien', tag: 'Sân Bay', tagClass: 'tag-air', keywords: 'sb van don san bay quoc te van don san bay van don vdo cang hang khong quoc te van don quang ninh' },
  { name: 'Cảng Ao Tiên', sub: 'Cảng tàu khách quốc tế Ao Tiên, Vân Đồn', province: 'Quảng Ninh', pricingKey: 'qn_van_don_ao_tien', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'cang ao tien ao tien van don di co to quan lan' },
  { name: 'Huyện Ba Chẽ', sub: 'Tỉnh Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_ba_che_tien_yen', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'ba che huyen ba che quang ninh' },
  { name: 'Huyện Tiên Yên', sub: 'Tỉnh Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_ba_che_tien_yen', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'tien yen huyen tien yen quang ninh' },
  { name: 'Huyện Đầm Hà', sub: 'Tỉnh Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_dam_ha_binh_lieu_hai_ha', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'dam ha huyen dam ha quang ninh' },
  { name: 'Huyện Bình Liêu', sub: 'Sống lưng khủng long Bình Liêu, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_dam_ha_binh_lieu_hai_ha', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'binh lieu song lung khung long cot moc quang ninh' },
  { name: 'Huyện Hải Hà', sub: 'Quảng Hà, Tỉnh Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_dam_ha_binh_lieu_hai_ha', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'hai ha quang ha huyen hai ha quang ninh' },
  { name: 'Thành phố Móng Cái', sub: 'Cửa khẩu Quốc tế Móng Cái, Trà Cổ, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_mong_cai', tag: 'Quảng Ninh', tagClass: 'tag-other', keywords: 'mong cai thanh pho mong cai cua khau mong cai tra co quang ninh' },

  // 3. TỈNH BẮC NINH
  { name: 'Thành phố Bắc Ninh', sub: 'Trung tâm TP. Bắc Ninh', province: 'Bắc Ninh', pricingKey: 'bn_trung_tam', tag: 'Bắc Ninh', tagClass: 'tag-other', keywords: 'tpbn thanh pho bac ninh tp bac ninh' },
  { name: 'Huyện Yên Phong', sub: 'KCN Yên Phong (Samsung Bắc Ninh)', province: 'Bắc Ninh', pricingKey: 'bn_yen_phong_tu_son', tag: 'Bắc Ninh', tagClass: 'tag-other', keywords: 'yen phong huyen yen phong samsung kcn yen phong cho bac ninh' },
  { name: 'Thị xã Từ Sơn', sub: 'Thành phố Từ Sơn cũ, Bắc Ninh (Đền Đô)', province: 'Bắc Ninh', pricingKey: 'bn_yen_phong_tu_son', tag: 'Bắc Ninh', tagClass: 'tag-other', keywords: 'tu son thi xa tu son tp tu son den do dong ky bac ninh' },
  { name: 'Thị xã Quế Võ', sub: 'Huyện Quế Võ cũ, Bắc Ninh (KCN Quế Võ)', province: 'Bắc Ninh', pricingKey: 'bn_trung_tam', tag: 'Bắc Ninh', tagClass: 'tag-other', keywords: 'que vo thi xa que vo huyen que vo kcn que vo pho moi' },
  { name: 'Huyện Tiên Du', sub: 'Tỉnh Bắc Ninh (Chùa Phật Tích, Lim)', province: 'Bắc Ninh', pricingKey: 'bn_trung_tam', tag: 'Bắc Ninh', tagClass: 'tag-other', keywords: 'tien du huyen tien du hoi lim phat tich bac ninh' },
  { name: 'Thị xã Thuận Thành', sub: 'Huyện Thuận Thành cũ, Bắc Ninh (Chùa Dâu, Bút Tháp)', province: 'Bắc Ninh', pricingKey: 'bn_trung_tam', tag: 'Bắc Ninh', tagClass: 'tag-other', keywords: 'thuan thanh thi xa thuan thanh chua dau but thap bac ninh' },
  { name: 'Huyện Gia Bình', sub: 'Tỉnh Bắc Ninh', province: 'Bắc Ninh', pricingKey: 'bn_trung_tam', tag: 'Bắc Ninh', tagClass: 'tag-other', keywords: 'gia binh huyen gia binh bac ninh' },
  { name: 'Huyện Lương Tài', sub: 'Tỉnh Bắc Ninh', province: 'Bắc Ninh', pricingKey: 'bn_trung_tam', tag: 'Bắc Ninh', tagClass: 'tag-other', keywords: 'luong tai huyen luong tai tho coc bac ninh' },

  // 4. TỈNH BẮC GIANG
  { name: 'Thành phố Bắc Giang', sub: 'Tỉnh Bắc Giang', province: 'Bắc Giang', pricingKey: 'bg_trung_tam', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'tp bac giang thanh pho bac giang xuong giang' },
  { name: 'Thị xã Việt Yên', sub: 'Huyện Việt Yên cũ, Bắc Giang (KCN Quang Châu, Đình Trám, Vân Trung)', province: 'Bắc Giang', pricingKey: 'bg_trung_tam', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'viet yen thi xa viet yen huyen viet yen quang chau dinh tram van trung' },
  { name: 'KCN Quang Châu', sub: 'Thị xã Việt Yên, Bắc Giang', province: 'Bắc Giang', pricingKey: 'bg_trung_tam', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'quang chau kcn quang chau viet yen bac giang foxconn' },
  { name: 'Huyện Yên Dũng', sub: 'Tỉnh Bắc Giang (Chùa Vĩnh Nghiêm, Nham Biền)', province: 'Bắc Giang', pricingKey: 'bg_trung_tam', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'yen dung huyen yen dung vinh nghiem neo bac giang' },
  { name: 'Huyện Lục Nam', sub: 'Tỉnh Bắc Giang (Thị trấn Đồi Ngô)', province: 'Bắc Giang', pricingKey: 'bg_luc_nam', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'luc nam huyen luc nam doi ngo suoi mo bac giang' },
  { name: 'Huyện Lạng Giang', sub: 'Tỉnh Bắc Giang (Thị trấn Vôi, Kép)', province: 'Bắc Giang', pricingKey: 'bg_lang_giang', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'lang giang huyen lang giang voi kep bac giang' },
  { name: 'Huyện Lục Ngạn', sub: 'Tỉnh Bắc Giang (Thị trấn Chũ - Vải thiều)', province: 'Bắc Giang', pricingKey: 'bg_luc_ngan_hiep_hoa_son_dong', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'luc ngan huyen luc ngan chu vai thieu bac giang' },
  { name: 'Huyện Hiệp Hòa', sub: 'Tỉnh Bắc Giang (Thị trấn Thắng)', province: 'Bắc Giang', pricingKey: 'bg_luc_ngan_hiep_hoa_son_dong', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'hiep hoa huyen hiep hoa thang bac giang' },
  { name: 'Huyện Sơn Động', sub: 'Tỉnh Bắc Giang (Tây Yên Tử, An Châu)', province: 'Bắc Giang', pricingKey: 'bg_luc_ngan_hiep_hoa_son_dong', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'son dong huyen son dong an chau tay yen tu bac giang' },
  { name: 'Huyện Tân Yên', sub: 'Tỉnh Bắc Giang (Thị trấn Cao Thượng)', province: 'Bắc Giang', pricingKey: 'bg_tan_yen_yen_the', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'tan yen huyen tan yen cao thuong nha nam bac giang' },
  { name: 'Huyện Yên Thế', sub: 'Tỉnh Bắc Giang (Thị trấn Phồn Xương, Cầu Gồ)', province: 'Bắc Giang', pricingKey: 'bg_tan_yen_yen_the', tag: 'Bắc Giang', tagClass: 'tag-other', keywords: 'yen the huyen yen the cau go phon xuong khoi nghia yen the bac giang' },

  // 5. TỈNH THÁI BÌNH
  { name: 'Huyện Đông Hưng', sub: 'Tỉnh Thái Bình', province: 'Thái Bình', pricingKey: 'tb_dong_hung_quynh_phu', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'dong hung huyen dong hung nga ba dong hung thai binh' },
  { name: 'Thị trấn Quỳnh Côi', sub: 'Huyện Quỳnh Phụ, Thái Bình (Canh cá Quỳnh Côi)', province: 'Thái Bình', pricingKey: 'tb_dong_hung_quynh_phu', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'quynh coi thi tran quynh coi canh ca quynh coi quynh phu thai binh' },
  { name: 'Huyện Quỳnh Phụ', sub: 'Huyện Quỳnh Phụ cũ (Phụ Dực), Thái Bình', province: 'Thái Bình', pricingKey: 'tb_dong_hung_quynh_phu', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'quynh phu huyen quynh phu phu phu duc an bai thai binh' },
  { name: 'Thành phố Thái Bình', sub: 'Trung tâm TP. Thái Bình', province: 'Thái Bình', pricingKey: 'tb_tp_hung_ha', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'tp thai binh thanh pho thai binh bo xuyen le hong phong' },
  { name: 'Huyện Hưng Hà', sub: 'Tỉnh Thái Bình (Đền Trần Thái Bình)', province: 'Thái Bình', pricingKey: 'tb_tp_hung_ha', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'hung ha huyen hung ha den tran thai binh tieu lam' },
  { name: 'Huyện Thái Thụy', sub: 'Tỉnh Thái Bình (Thị trấn Diêm Điền)', province: 'Thái Bình', pricingKey: 'tb_thai_thuy_vu_thu', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'thai thuy huyen thai thuy diem dien thuy anh thuy duyen thai binh' },
  { name: 'Huyện Vũ Thư', sub: 'Tỉnh Thái Bình (Chùa Keo)', province: 'Thái Bình', pricingKey: 'tb_thai_thuy_vu_thu', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'vu thu huyen vu thu chua keo thai binh' },
  { name: 'Huyện Kiến Xương', sub: 'Tỉnh Thái Bình', province: 'Thái Bình', pricingKey: 'tb_kien_xuong_tien_hai', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'kien xuong huyen kien xuong thanh ne thai binh' },
  { name: 'Huyện Tiền Hải', sub: 'Tỉnh Thái Bình (Biển Đồng Châu, Cồn Vành)', province: 'Thái Bình', pricingKey: 'tb_kien_xuong_tien_hai', tag: 'Thái Bình', tagClass: 'tag-other', keywords: 'tien hai huyen tien hai dong chau con vanh kcn tien hai thai binh' },

  // 6. TỈNH NAM ĐỊNH
  { name: 'Thành phố Nam Định', sub: 'Tỉnh Nam Định (Đền Trần, Chợ Rồng)', province: 'Nam Định', pricingKey: 'nd_tp_nam_dinh', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'tp nam dinh thanh pho nam dinh den tran cho rong' },
  { name: 'Huyện Nghĩa Hưng', sub: 'Tỉnh Nam Định (Thị trấn Liễu Đề, Quỹ Nhất)', province: 'Nam Định', pricingKey: 'nd_nghia_hung_hai_hau', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'nghia hung huyen nghia hung lieu de quy nhat rang dong nam dinh' },
  { name: 'Huyện Hải Hậu', sub: 'Tỉnh Nam Định (Yên Định, Cồn, Thịnh Long)', province: 'Nam Định', pricingKey: 'nd_nghia_hung_hai_hau', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'hai hau huyen hai hau yen dinh con thinh long nha tho do nam dinh' },
  { name: 'Huyện Ý Yên', sub: 'Tỉnh Nam Định (Thị trấn Lâm - Đúc đồng)', province: 'Nam Định', pricingKey: 'nd_cac_huyen_con_lai', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'y yen huyen y yen thi tran lam duc dong y yen nam dinh' },
  { name: 'Huyện Vụ Bản', sub: 'Tỉnh Nam Định (Phủ Dầy, Chợ Viềng)', province: 'Nam Định', pricingKey: 'nd_cac_huyen_con_lai', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'vu ban huyen vu ban phu day cho vieng gôi nam dinh' },
  { name: 'Huyện Mỹ Lộc', sub: 'Huyện Mỹ Lộc cũ, Nam Định', province: 'Nam Định', pricingKey: 'nd_cac_huyen_con_lai', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'my loc huyen my loc nam dinh' },
  { name: 'Huyện Nam Trực', sub: 'Tỉnh Nam Định', province: 'Nam Định', pricingKey: 'nd_cac_huyen_con_lai', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'nam truc huyen nam truc nam giang nam dinh' },
  { name: 'Huyện Trực Ninh', sub: 'Tỉnh Nam Định (Cổ Lễ)', province: 'Nam Định', pricingKey: 'nd_cac_huyen_con_lai', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'truc ninh huyen truc ninh co le nam dinh' },
  { name: 'Huyện Xuân Trường', sub: 'Tỉnh Nam Định (Tòa giám mục Bùi Chu)', province: 'Nam Định', pricingKey: 'nd_cac_huyen_con_lai', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'xuan truong huyen xuan truong bui chu kien lao nam dinh' },
  { name: 'Huyện Giao Thủy', sub: 'Tỉnh Nam Định (Vườn quốc gia Xuân Thủy, Quất Lâm)', province: 'Nam Định', pricingKey: 'nd_cac_huyen_con_lai', tag: 'Nam Định', tagClass: 'tag-other', keywords: 'giao thuy huyen giao thuy quat lam ngo dong xuan thuy nam dinh' },

  // 7. TỈNH HƯNG YÊN
  { name: 'Thành phố Hưng Yên', sub: 'Tỉnh Hưng Yên (Phố Hiến xưa)', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'tp hung yen thanh pho hung yen pho hien cho gao' },
  { name: 'Thị xã Mỹ Hào', sub: 'Huyện Mỹ Hào cũ, Hưng Yên (Bao Bì, Phố Nối)', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'my hao thi xa my hao pho noi kcn pho noi bao bi hung yen' },
  { name: 'Huyện Yên Mỹ', sub: 'Tỉnh Hưng Yên', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'yen my huyen yen my kcn thang long 2 hung yen' },
  { name: 'Huyện Văn Giang', sub: 'Tỉnh Hưng Yên (KĐT Ecopark, Ocean Park 2, 3)', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'van giang huyen van giang ecopark ocean park 2 ocean park 3 hung yen' },
  { name: 'Huyện Văn Lâm', sub: 'Tỉnh Hưng Yên (Như Quỳnh)', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'van lam huyen van lam nhu quynh kcn nhu quynh hung yen' },
  { name: 'Huyện Khoái Châu', sub: 'Tỉnh Hưng Yên (Chử Đồng Tử)', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'khoai chau huyen khoai chau da hoa da trach hung yen' },
  { name: 'Huyện Kim Động', sub: 'Tỉnh Hưng Yên (Lương Bằng)', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'kim dong huyen kim dong luong bang hung yen' },
  { name: 'Huyện Ân Thi', sub: 'Tỉnh Hưng Yên', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'an thi huyen an thi hung yen' },
  { name: 'Huyện Phù Cừ', sub: 'Tỉnh Hưng Yên (Trần Cao)', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'phu cu huyen phu cu tran cao hung yen' },
  { name: 'Huyện Tiên Lữ', sub: 'Tỉnh Hưng Yên (Vương)', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Hưng Yên', tagClass: 'tag-other', keywords: 'tien lu huyen tien lu vuong hung yen' },

  // 8. TỈNH HÀ NAM
  { name: 'Thành phố Phủ Lý', sub: 'Thị xã Phủ Lý cũ, Tỉnh Hà Nam', province: 'Hà Nam', pricingKey: 'hnm_trung_tam', tag: 'Hà Nam', tagClass: 'tag-other', keywords: 'thanh pho phu ly tp phu ly thi xa phu ly cu ha nam' },
  { name: 'Thị xã Duy Tiên', sub: 'Huyện Duy Tiên cũ, Hà Nam (KCN Đồng Văn 1, 2, 3, 4)', province: 'Hà Nam', pricingKey: 'hnm_trung_tam', tag: 'Hà Nam', tagClass: 'tag-other', keywords: 'duy tien thi xa duy tien huyen duy tien dong van kcn dong van hoa mac ha nam' },
  { name: 'Huyện Kim Bảng', sub: 'Tỉnh Hà Nam (KDL Tam Chúc, Thị trấn Ba Sao, Quế)', province: 'Hà Nam', pricingKey: 'hnm_kim_bang', tag: 'Hà Nam', tagClass: 'tag-other', keywords: 'kim bang huyen kim bang chua tam chuc ba sao que ha nam' },
  { name: 'Huyện Thanh Liêm', sub: 'Tỉnh Hà Nam (Kiện Khê)', province: 'Hà Nam', pricingKey: 'hnm_trung_tam', tag: 'Hà Nam', tagClass: 'tag-other', keywords: 'thanh liem huyen thanh liem kien khe ha nam' },
  { name: 'Huyện Lý Nhân', sub: 'Tỉnh Hà Nam (Thị trấn Vĩnh Trụ)', province: 'Hà Nam', pricingKey: 'hnm_trung_tam', tag: 'Hà Nam', tagClass: 'tag-other', keywords: 'ly nhan huyen ly nhan vinh tru ha nam vu dai' },
  { name: 'Huyện Bình Lục', sub: 'Tỉnh Hà Nam (Bình Mỹ)', province: 'Hà Nam', pricingKey: 'hnm_trung_tam', tag: 'Hà Nam', tagClass: 'tag-other', keywords: 'binh luc huyen binh luc binh my ha nam' },

  // 9. TỈNH NINH BÌNH
  { name: 'Thành phố Ninh Bình', sub: 'Trung tâm TP. Ninh Bình', province: 'Ninh Bình', pricingKey: 'nb_ninh_binh_hoa_lu', tag: 'Ninh Bình', tagClass: 'tag-other', keywords: 'tp ninh binh thanh pho ninh binh thi xa ninh binh cu' },
  { name: 'Huyện Hoa Lư', sub: 'Tỉnh Ninh Bình (Khu DL Tràng An, Tam Cốc, Cố đô Hoa Lư)', province: 'Ninh Bình', pricingKey: 'nb_ninh_binh_hoa_lu', tag: 'Ninh Bình', tagClass: 'tag-other', keywords: 'hoa lu huyen hoa lu trang an tam coc bich dong co do hoa lu ninh binh' },
  { name: 'Huyện Gia Viễn', sub: 'Tỉnh Ninh Bình (Chùa Bái Đính, Đầm Vân Long)', province: 'Ninh Bình', pricingKey: 'nb_ninh_binh_hoa_lu', tag: 'Ninh Bình', tagClass: 'tag-other', keywords: 'gia vien huyen gia vien bai dinh van long me ninh binh' },
  { name: 'Huyện Yên Mô', sub: 'Tỉnh Ninh Bình (Yên Thịnh)', province: 'Ninh Bình', pricingKey: 'nb_ninh_binh_hoa_lu', tag: 'Ninh Bình', tagClass: 'tag-other', keywords: 'yen mo huyen yen mo yen thinh ninh binh' },
  { name: 'Thành phố Tam Điệp', sub: 'Thị xã Tam Điệp cũ, Tỉnh Ninh Bình', province: 'Ninh Bình', pricingKey: 'nb_tam_diep_kim_son', tag: 'Ninh Bình', tagClass: 'tag-other', keywords: 'tam diep thanh pho tam diep thi xa tam diep cu ninh binh' },
  { name: 'Huyện Kim Sơn', sub: 'Tỉnh Ninh Bình (Nhà thờ đá Phát Diệm)', province: 'Ninh Bình', pricingKey: 'nb_tam_diep_kim_son', tag: 'Ninh Bình', tagClass: 'tag-other', keywords: 'kim son huyen kim son phat diem nha tho da phat diem ninh binh' },
  { name: 'Huyện Nho Quan', sub: 'Tỉnh Ninh Bình (Vườn quốc gia Cúc Phương)', province: 'Ninh Bình', pricingKey: 'nb_tam_diep_kim_son', tag: 'Ninh Bình', tagClass: 'tag-other', keywords: 'nho quan huyen nho quan cuc phuong ninh binh' },
  { name: 'Huyện Yên Khánh', sub: 'Tỉnh Ninh Bình (Ninh)', province: 'Ninh Bình', pricingKey: 'nb_tam_diep_kim_son', tag: 'Ninh Bình', tagClass: 'tag-other', keywords: 'yen khanh huyen yen khanh ninh ninh binh' },

  // 10. TỈNH THANH HÓA
  { name: 'Thành phố Thanh Hóa', sub: 'Trung tâm TP. Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'tp thanh hoa thanh pho thanh hoa cau ham rong quang phu' },
  { name: 'Thị xã Bỉm Sơn', sub: 'Tỉnh Thanh Hóa (Xi măng Bỉm Sơn)', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'bim son thi xa bim son thanh hoa' },
  { name: 'Huyện Hà Trung', sub: 'Tỉnh Thanh Hóa (Đò Lèn)', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'ha trung huyen ha trung do len thanh hoa' },
  { name: 'Huyện Hậu Lộc', sub: 'Tỉnh Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'hau loc huyen hau loc thanh hoa' },
  { name: 'Huyện Hoằng Hóa', sub: 'Tỉnh Thanh Hóa (Khu du lịch Biển Hải Tiến)', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'hoang hoa huyen hoang hoa hai tien bien hai tien thanh hoa' },
  { name: 'Huyện Nga Sơn', sub: 'Tỉnh Thanh Hóa (Chiếu cói Nga Sơn, Mai An Tiêm)', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'nga son huyen nga son chieu coi nga son mai an tiem thanh hoa' },

  { name: 'Huyện Thạch Thành', sub: 'Tỉnh Thanh Hóa (Kim Tân, Vân Du)', province: 'Thanh Hóa', pricingKey: 'th_nhom2', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'thach thanh huyen thach thanh kim tan van du thanh hoa' },
  { name: 'Huyện Thiệu Hóa', sub: 'Tỉnh Thanh Hóa (Vạn Hà)', province: 'Thanh Hóa', pricingKey: 'th_nhom2', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'thieu hoa huyen thieu hoa van ha thanh hoa' },
  { name: 'Huyện Cẩm Thủy', sub: 'Tỉnh Thanh Hóa (Suối cá thần Cẩm Lương)', province: 'Thanh Hóa', pricingKey: 'th_nhom2', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'cam thuy huyen cam thuy suoi ca than cam luong thanh hoa' },
  { name: 'Huyện Ngọc Lặc', sub: 'Tỉnh Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom2', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'ngoc lac huyen ngoc lac thanh hoa' },

  { name: 'Thành phố Sầm Sơn', sub: 'Bãi biển Sầm Sơn, FLC Sầm Sơn, Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom3', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'sam son thanh pho sam son thi xa sam son cu bien sam son flc sam son thanh hoa' },
  { name: 'Huyện Yên Định', sub: 'Tỉnh Thanh Hóa (Quán Lào)', province: 'Thanh Hóa', pricingKey: 'th_nhom3', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'yen dinh huyen yen dinh quan lao lam kinh thanh hoa' },
  { name: 'Huyện Vĩnh Lộc', sub: 'Tỉnh Thanh Hóa (Thành Nhà Hồ)', province: 'Thanh Hóa', pricingKey: 'th_nhom3', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'vinh loc huyen vinh loc thanh nha ho thanh hoa' },
  { name: 'Huyện Quảng Xương', sub: 'Tỉnh Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom3', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'quang xuong huyen quang xuong quang linh thanh hoa' },
  { name: 'Huyện Triệu Sơn', sub: 'Tỉnh Thanh Hóa (Giắt)', province: 'Thanh Hóa', pricingKey: 'th_nhom3', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'trieu son huyen trieu son giat thanh hoa' },

  { name: 'Huyện Nông Cống', sub: 'Tỉnh Thanh Hóa (Nông Cống, Chuối)', province: 'Thanh Hóa', pricingKey: 'th_nhom4', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'nong cong huyen nong cong chuoi thanh hoa' },
  { name: 'Huyện Thọ Xuân', sub: 'Tỉnh Thanh Hóa (Sân bay Thọ Xuân, Lam Kinh)', province: 'Thanh Hóa', pricingKey: 'th_nhom4', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'tho xuan huyen tho xuan san bay tho xuan sao vang lam kinh thanh hoa' },
  { name: 'Sân Bay Thọ Xuân', sub: 'Huyện Thọ Xuân, Tỉnh Thanh Hóa (Sân bay Sao Vàng)', province: 'Thanh Hóa', pricingKey: 'th_nhom4', tag: 'Sân Bay', tagClass: 'tag-air', keywords: 'sb tho xuan san bay tho xuan san bay sao vang cang hang khong tho xuan thx tho xuan thanh hoa' },
  { name: 'Huyện Bá Thước', sub: 'Tỉnh Thanh Hóa (Khu bảo tồn Pù Luông)', province: 'Thanh Hóa', pricingKey: 'th_nhom4', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'ba thuoc huyen ba thuoc pu luong can nang thanh hoa' },
  { name: 'Huyện Như Thanh', sub: 'Tỉnh Thanh Hóa (Bến En)', province: 'Thanh Hóa', pricingKey: 'th_nhom4', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'nhu thanh huyen nhu thanh ben en ben sung thanh hoa' },
  { name: 'Huyện Lang Chánh', sub: 'Tỉnh Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom4', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'lang chanh huyen lang chanh thanh hoa' },
  { name: 'Thị xã Nghi Sơn', sub: 'Huyện Tĩnh Gia cũ, Thanh Hóa (KKT Nghi Sơn, Bãi Đông)', province: 'Thanh Hóa', pricingKey: 'th_nhom4', tag: 'Thanh Hóa', tagClass: 'tag-other', keywords: 'nghi son thi xa nghi son huyen tinh gia cu kkt nghi son bai dong thanh hoa' },

  // =========================================================================
  // III. HÀ NỘI & SÂN BAY NỘI BÀI
  // =========================================================================
  { name: 'Hà Nội (Các quận nội thành)', sub: 'Đón trả tận nơi tại tất cả các quận nội thành', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'ha noi noi thanh tat ca cac quan trung tam' },
  { name: 'Sân Bay Nội Bài - Ga T1', sub: 'Ga Quốc Nội T1, Huyện Sóc Sơn, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_bai', tag: 'Sân Bay', tagClass: 'tag-air', keywords: 'san bay noi bai ga t1 quoc noi soc son' },
  { name: 'Sân Bay Nội Bài - Ga T2', sub: 'Ga Quốc Tế T2, Huyện Sóc Sơn, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_bai', tag: 'Sân Bay', tagClass: 'tag-air', keywords: 'san bay noi bai ga t2 quoc te soc son' },
  { name: 'Huyện Sóc Sơn', sub: 'TP. Hà Nội (Khu vực Sân bay Nội Bài)', province: 'Hà Nội', pricingKey: 'hn_noi_bai', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'huyen soc son san bay noi bai ha noi' },
  { name: 'Quận Cầu Giấy', sub: 'TP. Hà Nội (Dịch Vọng, Nghĩa Tân, Mai Dịch, Trung Hòa)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan cau giay dich vong nghia tan mai dich trung hoa duy tan' },
  { name: 'Quận Hoàn Kiếm', sub: 'TP. Hà Nội (Phố Cổ, Hồ Gươm, Tràng Tiền)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan hoan kiem pho co ho guom trang tien hang bai' },
  { name: 'Quận Đống Đa', sub: 'TP. Hà Nội (Láng, Xã Đàn, Chùa Bộc, Ô Chợ Dừa)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan dong da lang xa dan chua boc o cho dua' },
  { name: 'Quận Hai Bà Trưng', sub: 'TP. Hà Nội (Bạch Mai, Minh Khai, Times City)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan hai ba trung bach mai minh khai times city pho hue' },
  { name: 'Quận Ba Đình', sub: 'TP. Hà Nội (Kim Mã, Liễu Giai, Đội Cấn)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan ba dinh kim ma lieu giai doi can giang vo' },
  { name: 'Quận Thanh Xuân', sub: 'TP. Hà Nội (Nguyễn Trãi, Khuất Duy Tiến, Royal City)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan thanh xuan nguyen trai khuat duy tien royal city' },
  { name: 'Quận Hoàng Mai', sub: 'TP. Hà Nội (Linh Đàm, Giáp Bát, Nước Ngầm)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan hoang mai linh dam giap bat nuoc ngam giai phong' },
  { name: 'Quận Nam Từ Liêm', sub: 'TP. Hà Nội (Mỹ Đình, Mễ Trì, Bến xe Mỹ Đình, Smart City)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan nam tu liem my dinh me tri ben xe my dinh smart city huyen tu liem cu' },
  { name: 'Quận Bắc Từ Liêm', sub: 'TP. Hà Nội (Cổ Nhuế, Xuân Đỉnh, Phú Diễn)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan bac tu liem co nhue xuan dinh phu dien huyen tu liem cu' },
  { name: 'Quận Tây Hồ', sub: 'TP. Hà Nội (Lạc Long Quân, Xuân Diệu, Âu Cơ, Hồ Tây)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan tay ho lac long quan xuan dieu au co ho tay' },
  { name: 'Quận Long Biên', sub: 'TP. Hà Nội (Ngọc Lâm, Bồ Đề, Aeon Mall Long Biên)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan long bien ngoc lam bo de aeon mall long bien ben xe gia lam' },
  { name: 'Quận Hà Đông', sub: 'TP. Hà Đông cũ (Tỉnh Hà Tây cũ)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'quan ha dong thanh pho ha dong cu ha tay van quan mo lao' },
  { name: 'Huyện Gia Lâm', sub: 'TP. Hà Nội (Vinhomes Ocean Park 1, Trâu Quỳ)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'huyen gia lam ocean park 1 trau quy yen vien' },
  { name: 'Huyện Đông Anh', sub: 'TP. Hà Nội (Bắc Thăng Long, Cầu Nhật Tân)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'huyen dong anh bac thang long cau nhat tan' },
  { name: 'Huyện Thanh Trì', sub: 'TP. Hà Nội (Văn Điển, BV K Tân Triều)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'huyen thanh tri van dien k tan trieu phan trong tue' },
  { name: 'Huyện Hoài Đức', sub: 'Tỉnh Hà Tây cũ (Trôi, An Khánh, Nam An Khánh)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'huyen hoai duc ha tay cu troi an khanh' },
  { name: 'Huyện Thường Tín', sub: 'Tỉnh Hà Tây cũ (nay thuộc Hà Nội)', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Hà Nội', tagClass: 'tag-hn', keywords: 'huyen thuong tin ha tay cu ha noi' },

  // =========================================================================
  // IV. DANH SÁCH BỆNH VIỆN LỚN TUYẾN TỈNH & TRUNG ƯƠNG
  // =========================================================================

  // 1. BỆNH VIỆN TẠI HẢI DƯƠNG (NỘI TỈNH)
  { name: 'Bệnh viện Đa khoa Tỉnh Hải Dương', sub: 'Đường Nguyễn Lương Bằng, TP. Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh hai duong bv tinh nguyen luong bang tp hai duong' },
  { name: 'Bệnh viện Nhi Hải Dương', sub: 'Đường Quang Trung, TP. Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien nhi hai duong bv nhi quang trung hai duong' },
  { name: 'Bệnh viện Phụ Sản Hải Dương', sub: 'Đường Nguyễn Lương Bằng, TP. Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien phu san hai duong bv san hai duong nguyen luong bang' },
  { name: 'Bệnh viện Quân Y 7 (Hải Dương)', sub: 'Đường Tuệ Tĩnh, TP. Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien quan y 7 vien 7 tue tinh tp hai duong' },
  { name: 'Bệnh viện Phổi Hải Dương', sub: 'Đường Thanh Niên, TP. Hải Dương', province: 'Hải Dương', pricingKey: 'hd_noi_tinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien phoi hai duong bv lao phoi thanh nien' },

  // 2. BỆNH VIỆN TUYẾN TRUNG ƯƠNG TẠI HÀ NỘI
  { name: 'Bệnh viện Bạch Mai', sub: 'Đường Giải Phóng, Quận Đống Đa, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien bach mai giai phong dong da' },
  { name: 'Bệnh viện Việt Đức', sub: 'Phố Tràng Thi, Quận Hoàn Kiếm, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien viet duc trang thi phu doan hoan kiem' },
  { name: 'Bệnh viện K Tân Triều', sub: 'Đường Phan Trọng Tuệ, Huyện Thanh Trì, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien k tan trieu ung buu k co so 3 thanh tri' },
  { name: 'Bệnh viện K Quán Sứ', sub: 'Phố Quán Sứ, Quận Hoàn Kiếm, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien k quan su k co so 1 hoan kiem' },
  { name: 'Bệnh viện Nhi Trung Ương', sub: 'Đường Đê La Thành, Quận Đống Đa, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien nhi trung uong de la thanh dong da' },
  { name: 'Bệnh viện Phụ Sản Trung Ương', sub: 'Phố Triệu Quốc Đạt, Quận Hoàn Kiếm, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien phu san trung uong vien c hoan kiem' },
  { name: 'Bệnh viện Phụ Sản Hà Nội', sub: 'Đường La Thành, Quận Ba Đình, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien phu san ha noi san ha noi ba dinh' },
  { name: 'Bệnh viện Trung Ương Quân Đội 108', sub: 'Đường Trần Hưng Đạo, Quận Hai Bà Trưng, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien 108 quan doi tran hung dao hai ba trung' },
  { name: 'Bệnh viện Quân Y 103', sub: 'Đường Phùng Hưng, Phường Phúc La, Quận Hà Đông, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien 103 quan y phung hung phuc la ha dong' },
  { name: 'Bệnh viện Mắt Trung Ương', sub: 'Phố Bà Triệu, Quận Hai Bà Trưng, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien mat trung uong ba trieu' },
  { name: 'Bệnh viện Tai Mũi Họng Trung Ương', sub: 'Đường Giải Phóng, Quận Đống Đa, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien tai mui hong trung uong giai phong' },
  { name: 'Bệnh viện Huyết Học - Truyền Máu TW', sub: 'Đường Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'vien huyet hoc pham van bach cau giay' },
  { name: 'Bệnh viện Tim Hà Nội', sub: 'Đường Trần Hưng Đạo, Hoàn Kiếm & Cơ sở 2 Võ Chí Công, Tây Hồ', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien tim ha noi tran hung dao vo chi cong' },
  { name: 'Bệnh viện E Hà Nội', sub: 'Đường Trần Cung, Quận Cầu Giấy, Hà Nội', province: 'Hà Nội', pricingKey: 'hn_noi_thanh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien e ha noi tran cung cau giay' },

  // 3. BỆNH VIỆN TẠI HẢI PHÒNG
  { name: 'Bệnh viện Hữu nghị Việt Tiệp (Hải Phòng)', sub: 'Số 1 Nhà Thương, Lê Chân & Cơ sở 2 An Đồng, Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien viet tiep bv viet tiep hai phong nha thuong le chan an dong' },
  { name: 'Bệnh viện Đa khoa Quốc tế Hải Phòng', sub: 'Số 124 Phố Nhà Thương, Quận Lê Chân, Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa quoc te hai phong bv quoc te le chan' },
  { name: 'Bệnh viện Trẻ Em Hải Phòng', sub: 'Đường Tôn Đức Thắng, An Đồng, Huyện An Dương, Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien tre em hai phong bv nhi hai phong an dong an duong ton duc thang' },
  { name: 'Bệnh viện Phụ Sản Hải Phòng', sub: 'Số 19 Trần Tất Văn, Quận Hồng Bàng, Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien phu san hai phong bv san hai phong hong bang' },
  { name: 'Bệnh viện Kiến An (Hải Phòng)', sub: 'Số 35 Trần Tất Văn, Quận Kiến An, Hải Phòng', province: 'Hải Phòng', pricingKey: 'hp_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien kien an bv kien an tran tat van hai phong' },

  // 4. BỆNH VIỆN TẠI QUẢNG NINH
  { name: 'Bệnh viện Đa khoa Tỉnh Quảng Ninh', sub: 'Phố Tuệ Tĩnh, Phường Bạch Đằng, TP. Hạ Long', province: 'Quảng Ninh', pricingKey: 'qn_ha_long', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh quang ninh bv tinh quang ninh ha long hon gai' },
  { name: 'Bệnh viện Bãi Cháy (Quảng Ninh)', sub: 'Phường Giếng Đáy, TP. Hạ Long (Khu Bãi Cháy)', province: 'Quảng Ninh', pricingKey: 'qn_bai_chay', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien bai chay bv bai chay gieng day ha long ung buu' },
  { name: 'Bệnh viện Sản Nhi Quảng Ninh', sub: 'Phường Đại Yên, TP. Hạ Long, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_bai_chay', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien san nhi quang ninh bv san nhi dai yen ha long' },
  { name: 'Bệnh viện Việt Nam - Thụy Điển Uông Bí', sub: 'Đường Tuệ Tĩnh, TP. Uông Bí, Quảng Ninh', province: 'Quảng Ninh', pricingKey: 'qn_uong_bi', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien thuy dien uong bi benh vien viet nam thuy dien uong bi quang ninh' },

  // 5. BỆNH VIỆN TẠI BẮC NINH
  { name: 'Bệnh viện Đa khoa Tỉnh Bắc Ninh', sub: 'Đường Nguyễn Quyền, Phường Võ Cường, TP. Bắc Ninh', province: 'Bắc Ninh', pricingKey: 'bn_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh bac ninh bv tinh bac ninh nguyen quyen vo cuong' },
  { name: 'Bệnh viện Sản Nhi Bắc Ninh', sub: 'Đường Huyền Quang, Phường Võ Cường, TP. Bắc Ninh', province: 'Bắc Ninh', pricingKey: 'bn_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien san nhi bac ninh bv san nhi bac ninh huyen quang' },

  // 6. BỆNH VIỆN TẠI BẮC GIANG
  { name: 'Bệnh viện Đa khoa Tỉnh Bắc Giang', sub: 'Đường Lê Lợi, TP. Bắc Giang', province: 'Bắc Giang', pricingKey: 'bg_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh bac giang bv tinh bac giang le loi' },
  { name: 'Bệnh viện Sản Nhi Bắc Giang', sub: 'Đường Lê Lợi, Dĩnh Kế, TP. Bắc Giang', province: 'Bắc Giang', pricingKey: 'bg_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien san nhi bac giang bv san nhi bac giang dinh ke' },

  // 7. BỆNH VIỆN TẠI THÁI BÌNH
  { name: 'Bệnh viện Đa khoa Tỉnh Thái Bình', sub: 'Số 530 Đường Lý Thường Kiệt, TP. Thái Bình', province: 'Thái Bình', pricingKey: 'tb_tp_hung_ha', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh thai binh bv tinh thai binh ly thuong kiet' },
  { name: 'Bệnh viện Nhi Thái Bình', sub: 'Đường Phan Bá Vành, Phường Quang Trung, TP. Thái Bình', province: 'Thái Bình', pricingKey: 'tb_tp_hung_ha', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien nhi thai binh bv nhi thai binh phan ba vanh' },
  { name: 'Bệnh viện Phụ Sản Thái Bình', sub: 'Đường Lê Lợi, Phường Đề Thám, TP. Thái Bình', province: 'Thái Bình', pricingKey: 'tb_tp_hung_ha', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien phu san thai binh bv san thai binh le loi' },

  // 8. BỆNH VIỆN TẠI NAM ĐỊNH
  { name: 'Bệnh viện Đa khoa Tỉnh Nam Định', sub: 'Số 2 Đường Trần Đăng Ninh / Vị Xuyên, TP. Nam Định', province: 'Nam Định', pricingKey: 'nd_tp_nam_dinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh nam dinh bv tinh nam dinh tran dang ninh vi xuyen' },
  { name: 'Bệnh viện Nhi Nam Định', sub: 'Khu Đô Thị Hòa Vượng, TP. Nam Định', province: 'Nam Định', pricingKey: 'nd_tp_nam_dinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien nhi nam dinh bv nhi nam dinh hoa vuong' },

  // 9. BỆNH VIỆN TẠI HƯNG YÊN
  { name: 'Bệnh viện Đa khoa Tỉnh Hưng Yên', sub: 'Đường Hải Thượng Lãn Ông, Phường An Tảo, TP. Hưng Yên', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh hung yen bv tinh hung yen an tao' },
  { name: 'Bệnh viện Đa khoa Phố Nối (Hưng Yên)', sub: 'Phường Bần Yên Nhân, Thị xã Mỹ Hào, Hưng Yên', province: 'Hưng Yên', pricingKey: 'hy_toan_tinh', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien pho noi bv da khoa pho noi my hao ban yen nhan hung yen' },

  // 10. BỆNH VIỆN TẠI HÀ NAM
  { name: 'Bệnh viện Đa khoa Tỉnh Hà Nam', sub: 'Đường Trường Chinh, Phường Minh Khai, TP. Phủ Lý, Hà Nam', province: 'Hà Nam', pricingKey: 'hnm_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh ha nam bv tinh ha nam phu ly truong chinh' },
  { name: 'Bệnh viện Bạch Mai - Cơ sở 2 Hà Nam', sub: 'Xã Liêm Tuyền, TP. Phủ Lý, Hà Nam (Gần nút giao cao tốc)', province: 'Hà Nam', pricingKey: 'hnm_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien bach mai co so 2 ha nam bach mai 2 liem tuyen phu ly ha nam' },
  { name: 'Bệnh viện Việt Đức - Cơ sở 2 Hà Nam', sub: 'Xã Liêm Tuyền, TP. Phủ Lý, Hà Nam (Gần nút giao cao tốc)', province: 'Hà Nam', pricingKey: 'hnm_trung_tam', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien viet duc co so 2 ha nam viet duc 2 liem tuyen phu ly ha nam' },

  // 11. BỆNH VIỆN TẠI NINH BÌNH
  { name: 'Bệnh viện Đa khoa Tỉnh Ninh Bình', sub: 'Đường Tuệ Tĩnh, Phường Nam Thành, TP. Ninh Bình', province: 'Ninh Bình', pricingKey: 'nb_ninh_binh_hoa_lu', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh ninh binh bv tinh ninh binh tue tinh nam thanh' },
  { name: 'Bệnh viện Sản Nhi Ninh Bình', sub: 'Đường Hải Thượng Lãn Ông, Phường Phúc Thành, TP. Ninh Bình', province: 'Ninh Bình', pricingKey: 'nb_ninh_binh_hoa_lu', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien san nhi ninh binh bv san nhi ninh binh phuc thanh' },

  // 12. BỆNH VIỆN TẠI THANH HÓA
  { name: 'Bệnh viện Đa khoa Tỉnh Thanh Hóa', sub: 'Số 181 Hải Thượng Lãn Ông, Phường Đông Vệ, TP. Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien da khoa tinh thanh hoa bv tinh thanh hoa dong ve' },
  { name: 'Bệnh viện Nhi Thanh Hóa', sub: 'Đường Quang Trung 3, Phường Đông Vệ, TP. Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien nhi thanh hoa bv nhi thanh hoa quang trung dong ve' },
  { name: 'Bệnh viện Phụ Sản Thanh Hóa', sub: 'Số 183 Hải Thượng Lãn Ông, Phường Đông Vệ, TP. Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien phu san thanh hoa bv san thanh hoa dong ve' },
  { name: 'Bệnh viện Ung Bướu Thanh Hóa', sub: 'Đường Trịnh Kiểm, Phường Đông Vệ, TP. Thanh Hóa', province: 'Thanh Hóa', pricingKey: 'th_nhom1', tag: 'Bệnh Viện', tagClass: 'tag-med', keywords: 'benh vien ung buou thanh hoa bv ung buou thanh hoa trinh kiem' }
];

// Gắn toàn cục cho trình duyệt (Window) và Node.js
if (typeof window !== 'undefined') {
  window.PRICING_CONFIG = PRICING_CONFIG;
  window.PROVINCES_DATA = PROVINCES_DATA;
  window.FULL_LOCATIONS_DATABASE = FULL_LOCATIONS_DATABASE;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PRICING_CONFIG,
    PROVINCES_DATA,
    FULL_LOCATIONS_DATABASE
  };
}
