export const WEDDING_DATA = {
  bride: {
    firstName: 'Tú Lan',
    lastName: 'Nguyễn',
    fullName: 'Nguyễn Thị Tú Lan',
  },
  groom: {
    firstName: 'Xuân Anh',
    lastName: 'Vũ',
    fullName: 'Vũ Xuân Anh',
  },
  date: '2026-04-18T17:00:00',
  groomSide: {
    date: '2026-04-18T17:00:00',
    dayLabel: 'Thứ Bảy & Chủ Nhật, 18-19/04/2026',
    title: 'Lễ Cưới Nhà Trai',
    venue: 'Nhà Văn Hoá Thôn Đồng Vang',
    address: 'Thôn Đồng Vang, Xã Hà Bắc, TP. Hải Phòng',
    reception: { time: '17:00 Thứ Bảy & 08:00 Chủ Nhật', label: 'Tiệc Cưới' },
    ceremony: { time: '10:00 Chủ Nhật', label: 'Lễ Thành Hôn' },
    mapQuery: 'Thôn Đồng Vang, Xã Hà Bắc, Hải Phòng',
  },
  brideSide: {
    date: '2026-04-18T17:00:00',
    dayLabel: 'Thứ Bảy & Chủ Nhật, 18-19/04/2026',
    title: 'Lễ Cưới Nhà Gái',
    venue: 'Nhà Văn Hoá Thôn Đức Hiệp',
    address: 'Thôn Đức Hiệp, Phường Song Liễu, Tỉnh Bắc Ninh',
    reception: { time: '17:00 Thứ Bảy & 08:00 Chủ Nhật', label: 'Tiệc Cưới' },
    ceremony: { time: '10:00 Chủ Nhật', label: 'Lễ Thành Hôn' },
    mapQuery: 'Thôn Đức Hiệp, Phường Song Liễu, Bắc Ninh',
  },
  loveStory: [
    {
      date: 'Tháng 3, 2020',
      title: 'Lần Đầu Gặp Gỡ',
      description:
        'Chúng mình gặp nhau tại một quán cà phê nhỏ ở Sài Gòn. Cuộc gặp gỡ tình cờ ấy đã trở thành hàng giờ trò chuyện và tiếng cười.',
      icon: 'coffee',
    },
    {
      date: 'Tháng 6, 2020',
      title: 'Buổi Hẹn Đầu Tiên',
      description:
        'Cùng nhau dạo bước bên bờ sông Sài Gòn lúc hoàng hôn. Chúng mình biết rằng có điều gì đó rất đặc biệt giữa hai người.',
      icon: 'heart',
    },
    {
      date: 'Tháng 12, 2021',
      title: 'Về Chung Một Nhà',
      description:
        'Sau một năm hẹn hò, chúng mình quyết định tiến thêm một bước và xây dựng tổ ấm đầu tiên cùng nhau tại Quận 2.',
      icon: 'home',
    },
    {
      date: 'Tháng 2, 2024',
      title: 'Lời Cầu Hôn',
      description:
        'Trong một buổi tối kỳ diệu tại Đà Lạt, giữa những bông hoa và ánh nến lung linh, Xuân Anh đã quỳ gối và nói lời cầu hôn.',
      icon: 'ring',
    },
    {
      date: 'Tháng 4, 2026',
      title: 'Đám Cưới',
      description:
        'Và giờ đây, chúng mình trân trọng kính mời bạn đến chung vui trong ngày trọng đại, mở ra chương mới của câu chuyện tình yêu.',
      icon: 'celebration',
    },
  ],
  gallery: [
    { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Ảnh cưới đôi', category: 'portrait' },
    { id: 2, src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80', alt: 'Hoa cưới', category: 'details' },
    { id: 3, src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', alt: 'Khoảnh khắc lãng mạn', category: 'candid' },
    { id: 4, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', alt: 'Nhẫn đính hôn', category: 'details' },
    { id: 5, src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80', alt: 'Dạo bước cùng nhau', category: 'candid' },
    { id: 6, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', alt: 'Địa điểm cưới', category: 'venue' },
    { id: 7, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', alt: 'Tiệc cưới', category: 'candid' },
    { id: 8, src: 'https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=800&q=80', alt: 'Chi tiết cưới', category: 'details' },
  ],
} as const;

export type WeddingData = typeof WEDDING_DATA;
