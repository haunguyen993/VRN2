# 🖼️ HƯỚNG DẪN THAY ĐỔI ẢNH

## 📍 VỊ TRÍ CÁC ẢNH TRONG WEBSITE

### 1. ẢNH HERO (Background đỏ ở trang chủ)
**File:** `styles.css`
**Dòng:** Khoảng 153-154
**Tìm kiếm:** `.hero {`

```css
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('ĐỔI URL Ở ĐÂY') center/cover no-repeat;
}
```

**Ảnh hiện tại:** 
- URL: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920`

---

### 2. ẢNH PHẦN BỐI CẢNH
**File:** `index.html`
**Dòng:** 68

```html
<img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" alt="Bản đồ chiến dịch">
```

---

### 3. ẢNH PHẦN HẬU CẦN (4 ảnh)
**File:** `index.html`

**Ảnh 1 - Mở đường** (Dòng ~154):
```html
<img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600" alt="Đường mòn">
```

**Ảnh 2 - Vận chuyển** (Dòng ~172):
```html
<img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600" alt="Vận chuyển">
```

**Ảnh 3 - Pháo binh** (Dòng ~190):
```html
<img src="https://images.unsplash.com/photo-1509909756405-a7e54bb4b2b8?w=600" alt="Pháo binh">
```

**Ảnh 4 - Y tế** (Dòng ~208):
```html
<img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=600" alt="Y tế">
```

---

### 4. ẢNH BA ĐỢT TIẾN CÔNG (3 ảnh)
**File:** `index.html`

**Đợt 1** (Dòng ~243):
```html
<img src="https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=700" alt="Đợt tấn công 1">
```

**Đợt 2** (Dòng ~294):
```html
<img src="https://images.unsplash.com/photo-1552799446-159ba9523315?w=700" alt="Đợt tấn công 2">
```

**Đợt 3** (Dòng ~349):
```html
<img src="https://images.unsplash.com/photo-1580993457988-7a8f7c0e7eef?w=700" alt="Đợt tấn công 3">
```

---

## 🔄 CÁCH 1: THAY ĐỔI BẰNG URL ONLINE

### Bước 1: Tìm ảnh
- Truy cập: https://unsplash.com hoặc https://www.pexels.com
- Tìm kiếm ảnh phù hợp (ví dụ: "vietnam war", "military", "soldiers", "map")

### Bước 2: Lấy link ảnh
- Click chuột phải vào ảnh → **Copy image address**
- Hoặc click vào ảnh → Copy URL từ thanh địa chỉ

### Bước 3: Thay thế trong code
Mở file `index.html` hoặc `styles.css`, tìm dòng có ảnh cần đổi, thay URL cũ bằng URL mới:

**Ví dụ:**
```html
<!-- CŨ -->
<img src="https://images.unsplash.com/photo-ABC123?w=800" alt="Mô tả">

<!-- MỚI -->
<img src="https://link-anh-moi-cua-ban.jpg" alt="Mô tả">
```

---

## 📁 CÁCH 2: SỬ DỤNG ẢNH LOCAL (Khuyến nghị)

### Bước 1: Chuẩn bị ảnh
1. Tải ảnh về máy tính
2. Đổi tên ảnh cho dễ nhớ, ví dụ:
   - `hero-background.jpg`
   - `map.jpg`
   - `logistics-1.jpg`
   - `attack-1.jpg`

### Bước 2: Đặt ảnh vào thư mục
Đã tạo thư mục `images/` trong dự án. Copy ảnh vào đây:

```
VRN3/
├── index.html
├── styles.css
├── script.js
└── images/           👈 Đặt ảnh vào đây
    ├── hero-background.jpg
    ├── map.jpg
    ├── logistics-1.jpg
    ├── logistics-2.jpg
    └── ...
```

### Bước 3: Thay đổi đường dẫn trong code

**Trong file HTML:**
```html
<!-- CŨ -->
<img src="https://images.unsplash.com/photo-ABC123?w=800" alt="Bản đồ">

<!-- MỚI -->
<img src="images/map.jpg" alt="Bản đồ">
```

**Trong file CSS (cho ảnh hero):**
```css
/* CŨ */
background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
            url('https://images.unsplash.com/photo-ABC123?w=1920');

/* MỚI */
background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
            url('images/hero-background.jpg');
```

---

## 🎯 GỢI Ý TÌM ẢNH LỊCH SỬ ĐIỆN BIÊN PHỦ

### Nguồn ảnh lịch sử Việt Nam:
1. **Wikimedia Commons**: https://commons.wikimedia.org
   - Tìm: "Dien Bien Phu", "Vietnam war", "Vietnamese soldiers"

2. **Thư viện ảnh lịch sử**:
   - Báo Tuổi Trẻ, VnExpress, Báo Quân đội Nhân dân
   - Bảo tàng Lịch sử quân sự Việt Nam

3. **Google Images**:
   - Tìm: "Điện Biên Phủ lịch sử", "chiến dịch Điện Biên Phủ ảnh"
   - **Lưu ý**: Kiểm tra bản quyền trước khi sử dụng

### Từ khóa tiếng Anh để tìm ảnh đẹp:
- `vietnam war historical photos`
- `military strategy maps`
- `soldiers carrying supplies mountain`
- `artillery on mountains`
- `vietnam 1954`

---

## 📐 KÍCH THƯỚC ẢNH KHUYẾN NGHỊ

| Vị trí | Kích thước | Tỷ lệ |
|--------|-----------|-------|
| Hero Background | 1920x1080px | 16:9 |
| Ảnh nội dung (ngang) | 800x600px | 4:3 |
| Ảnh Timeline | 700x450px | 3:2 |
| Ảnh Logistics | 600x400px | 3:2 |

**Lưu ý**: Nếu ảnh quá lớn, website sẽ load chậm. Nên dùng ảnh đã được tối ưu.

---

## 🛠️ CÔNG CỤ TỐI ƯU ẢNH

Trước khi sử dụng, nên tối ưu ảnh để website load nhanh hơn:

1. **TinyPNG**: https://tinypng.com - Nén ảnh giữ chất lượng
2. **Squoosh**: https://squoosh.app - Nén và resize ảnh
3. **Online Image Resizer**: https://imageresizer.com

---

## ✅ CHECKLIST SAU KHI THAY ẢNH

- [ ] Kiểm tra ảnh hiển thị đúng
- [ ] Kiểm tra ảnh không bị vỡ/méo
- [ ] Kiểm tra trên mobile (responsive)
- [ ] Kiểm tra tốc độ load trang
- [ ] Đảm bảo ảnh có bản quyền hợp pháp

---

## ❓ TROUBLESHOOTING

### Ảnh không hiển thị?
1. Kiểm tra đường dẫn có đúng không
2. Kiểm tra tên file có đúng (phân biệt hoa thường)
3. Kiểm tra ảnh có trong thư mục `images/` chưa
4. Thử refresh trình duyệt (Ctrl + F5)

### Ảnh bị vỡ/méo?
1. Kiểm tra kích thước ảnh
2. Thử thay đổi `object-fit: cover` trong CSS
3. Đảm bảo ảnh có tỷ lệ phù hợp

### Ảnh load chậm?
1. Nén ảnh bằng TinyPNG
2. Giảm kích thước ảnh
3. Sử dụng format WebP (hiện đại hơn)

---

**Chúc bạn thành công! 🎉**

Nếu cần hỗ trợ thêm, hãy hỏi nhé!

