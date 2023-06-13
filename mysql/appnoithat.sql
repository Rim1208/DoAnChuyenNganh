-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 12, 2023 lúc 11:45 AM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `appnoithat`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdh`
--

CREATE TABLE `chitietdh` (
  `iddh` int(11) NOT NULL,
  `idsp` int(11) NOT NULL,
  `tensanpham` varchar(500) DEFAULT NULL,
  `soluong` int(11) NOT NULL,
  `dongia` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chitietdh`
--

INSERT INTO `chitietdh` (`iddh`, `idsp`, `tensanpham`, `soluong`, `dongia`) VALUES
(76, 64, NULL, 19, 4541000),
(76, 65, NULL, 13, 2795000),
(77, 64, NULL, 19, 4541000),
(77, 65, NULL, 13, 2795000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cuahang`
--

CREATE TABLE `cuahang` (
  `tenshop` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diachi` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sodt` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cuahang`
--

INSERT INTO `cuahang` (`tenshop`, `diachi`, `sodt`, `email`) VALUES
('ATF SHOP', '10 Nguyen Thi Thap', '0845195357', 'anhvstu@gmail.com');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhgia`
--

CREATE TABLE `danhgia` (
  `id` int(11) NOT NULL,
  `iduser` int(11) DEFAULT NULL,
  `idsp` int(11) DEFAULT NULL,
  `sao` int(11) DEFAULT NULL,
  `ngay` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `danhgia`
--

INSERT INTO `danhgia` (`id`, `iduser`, `idsp`, `sao`, `ngay`) VALUES
(1, 1, 2, 5, '2022-12-01 16:02:31'),
(2, 2, 3, 4, '2022-12-01 16:02:31'),
(3, 1, 5, 5, '2022-12-01 16:02:41'),
(4, 2, 4, 4, '2022-12-01 16:02:41'),
(5, 3, 4, 5, '2022-12-01 16:03:34'),
(6, 2, 5, 4, '2022-12-01 16:03:34'),
(7, 6, 4, 5, '2022-12-01 16:03:52'),
(8, 7, 4, 4, '2022-12-01 16:03:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmuc`
--

CREATE TABLE `danhmuc` (
  `id` int(11) NOT NULL,
  `tendanhmuc` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `anh` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngay` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `danhmuc`
--

INSERT INTO `danhmuc` (`id`, `tendanhmuc`, `anh`, `ngay`) VALUES
(1, 'ĐỒ CHƠI LẮP RÁP', 'https://www.cuahangdochoi.vn/wp-content/uploads/2018/07/%C4%91%E1%BB%93-ch%C6%A1i-l%E1%BA%AFp-r%C3%A1p-cho-b%C3%A9-2.jpg', '2020-12-21 00:00:00'),
(2, 'ĐỒ CHƠI NẤU ĂN', 'https://sudospaces.com/babycuatoi/2020/01/889-63-bep-nau-an-co-lon-cho-be.jpg', '2020-12-21 00:00:00'),
(3, 'ĐỒ CHƠI GIÁO DỤC', 'https://media.shoptretho.com.vn/upload/image/news/20170717/do-choi-giao-duc-2.gif', '2020-12-21 00:00:00'),
(4, 'BÚP BÊ', 'https://cf.shopee.vn/file/0ab59f12d89178e1fa3b5825280ea854', '2020-12-21 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `id` int(11) NOT NULL,
  `idkhachhang` int(11) DEFAULT NULL,
  `ngay` date DEFAULT current_timestamp(),
  `tenkhachhang` varchar(500) NOT NULL,
  `diachi` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sodt` int(11) NOT NULL,
  `email` varchar(5000) NOT NULL,
  `loinhan` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tongsanpham` int(11) DEFAULT NULL,
  `tongtien` double DEFAULT NULL,
  `trangthai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`id`, `idkhachhang`, `ngay`, `tenkhachhang`, `diachi`, `sodt`, `email`, `loinhan`, `tongsanpham`, `tongtien`, `trangthai`) VALUES
(76, 4, '2023-01-10', 'aido', '999', 999, '999', NULL, 999, 10000, 0),
(77, 4, '2023-01-11', '999', '999', 999, '999', NULL, 999, 10000, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giohang`
--

CREATE TABLE `giohang` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idsp` int(11) NOT NULL,
  `tenhang` varchar(30) DEFAULT NULL,
  `soluong` int(11) DEFAULT NULL,
  `soluongmua` int(11) NOT NULL,
  `anh` text DEFAULT NULL,
  `gia` int(11) DEFAULT NULL,
  `mota` varchar(1000) DEFAULT NULL,
  `ngay` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hanghoa`
--

CREATE TABLE `hanghoa` (
  `id` int(11) NOT NULL,
  `tenhang` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `soluong` int(11) NOT NULL,
  `dongia` double NOT NULL,
  `anh` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ngay` datetime DEFAULT current_timestamp(),
  `mota` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iddanhmuc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hanghoa`
--

INSERT INTO `hanghoa` (`id`, `tenhang`, `soluong`, `dongia`, `anh`, `ngay`, `mota`, `iddanhmuc`) VALUES
(42, '$Ráp tàu cướp biển chim cánh cụt 12405', 99, 125000, 'https://dochoitreem.com/wp-content/uploads/2022/04/Rap-tau-cuop-bien-hcim-canh-cut-1240-500x480.jpg', '2022-12-15 08:24:11', 'Ráp tàu cướp biển chim cánh cụt 1240\r\nSản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 2),
(43, 'Lắp ráp robot và xe 2 in 1 7019', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/07/Lap-rap-robot-va-xe-2-in-1-7019-500x480.jpg', '2022-11-30 00:00:00', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(44, 'Lắp ráp tàu chiến đấu 8 in 1 42022', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-tau-chien-dau-8-in-1-42022-500x480.jpg', '2022-11-30 00:00:00', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(45, 'Lắp ráp cho bé D373', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/01/Lap-rap-cho-be-D373-500x480.jpg', '2022-11-30 00:00:00', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(46, 'Lắp ráp lâu đài Moira 20037Q', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2021/05/Lap-rap-lau-dai-Moira-20037Q-500x480.jpg', '2022-11-30 00:00:00', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(47, 'Xe tải đỏ 899-2H', 20, 185000, 'https://dochoitreem.com/wp-content/uploads/2022/09/Xe-tai-do-889-2H-500x480.jpg', '2022-11-30 00:00:00', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(48, 'Lắp ráp Dream 6645B', 20, 85000, 'https://dochoitreem.com/wp-content/uploads/2020/12/Lap-rap-Dream-6645B-500x480.jpg', '2022-12-01 00:00:00', 'Sản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 1),
(54, '\r\nXe đẩy bán kem có nhạc 8822B', 100, 169000, 'https://dochoitreem.com/wp-content/uploads/2022/12/Xe-day-ban-kem-nhac-500x480.png', '2022-12-15 08:23:49', 'Sản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 2),
(55, 'Máy bán nước LOL không pin DN1020', 50, 210, 'https://dochoitreem.com/wp-content/uploads/2022/07/May-ban-nuoc-LOL-500x480.jpg', '2022-12-15 08:23:54', 'Máy bán nước LOL không pin DN1020\r\nSản phẩm được làm từ chất liệu nhựa an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.\r\n\r\n', 2),
(56, 'Kệ đồ chơi nấu ăn 2 in 1 15R05\r\n', 60, 210000, 'https://dochoitreem.com/wp-content/uploads/2022/05/Ke-do-choi-nau-an-2-in-1-15R05-500x480.jpg', '2022-12-15 08:24:19', 'Kệ đồ chơi nấu ăn 2 in 1 15R05\r\nSản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 2),
(57, 'Đồ chơi nấu ăn bếp nướng xiên que cho bé 120453', 30, 179000, 'https://dochoitreem.com/wp-content/uploads/2022/05/Do-choi-nau-an-bep-nuong-xien-que-cho-be-120453-500x480.jpg', '2022-12-15 08:26:48', 'Đồ chơi nấu ăn bếp nướng xiên que cho bé 120453\r\nSản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 2),
(58, 'Bộ ghép chữ cái Puzzle cho bé GB6675-3', 40, 189, 'https://dochoitreem.com/wp-content/uploads/2022/08/Bo-ghep-chu-cai-puzzle-cho-be-GB6675-3-500x480.jpg', '2022-12-15 08:28:40', 'Bộ ghép chữ cái Puzzle cho bé GB6675-3\r\nSản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 3),
(59, 'Học liệu bóc dán thông minh dành cho các bé yêu', 70, 175000, 'https://dochoitreem.com/wp-content/uploads/2022/08/Hoc-lieu-boc-dan-thong-minh-danh-cho-cac-be-yeu-720x480.jpg', '2022-12-15 08:28:40', 'Học liệu bóc dán thông minh dành cho các bé yêu\r\nBộ học liệu bóc dán thông minh dành Cho cả bé trai và bé gái\r\n– Giáo cụ montessori phát triển khả năng toán học và khoa học tiếp nối bộ dành cho bé\r\n– Bộ 16 chủ đề gồm 22 trang và 163 sticker đi kèm với từng chủ đề\r\n\r\nƯU ĐIỂM SẢN PHẨM:\r\n– Học liệu bóc dán giấy ép cứng phủ bóng rất dày\r\n– Bền đẹp giúp bé chơi thoải mái không lo gãy gập.\r\n– Sticker được cắt laze đều mịn, đẹp, có kèm velcro cho bé tự hoàn thiện bộ đồ chơi bóc dán của mình.\r\n– Chủ đề đa dạng giúp giáo dục bé toàn diện và tăng độ thích thú cho bé\r\n– Dùng lại nhiều lần, khi dính gai velcro bị mòn mẹ có thể thay mới giúp bé và lại tiếp tục sử dụng như mới', 3),
(60, 'BỘ HỌC LIỆU BÓC DÁN 17 CHỦ ĐỀ CHO BÉ GB6675', 50, 175000, 'https://dochoitreem.com/wp-content/uploads/2022/06/Bo-boc-dan-17-chu-de-cho-be-GB6675-500x480.jpg', '2022-12-15 08:30:50', 'BỘ HỌC LIỆU BÓC DÁN 17 CHỦ ĐỀ CHO BÉ GB6675\r\nGiai đoạn đầu đời là giai đoạn nhạy cảm xé dán nhất là từ 18 tháng trở đi. Bé vô cùng thích thú việc xé ra rồi dán lại.\r\nHọc liệu bóc dán đem lại lợi ích vô cùng tuyệt vời trong sự phát triển 5 năm đầu đời của bé:\r\nGiúp con học và ghi nhớ nhanh thông qua hình ảnh\r\nTăng vốn từ cho bé chậm nói\r\nNâng cao khả năng tri giác, nhận thức học matching', 3),
(61, 'Ghép hình thay trang phục công chúa nam châm MWZ-966', 55, 185000, 'https://dochoitreem.com/wp-content/uploads/2021/07/Ghep-hinh-thay-trang-phuc-cong-chua-MWZ-966-500x480.jpg', '2022-12-15 08:30:50', 'Ghép hình thay trang phục công chúa nam châm MWZ-966\r\nSản phẩm được làm từ chất liệu an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 3),
(62, 'Búp bê cơ bản EVER AFTER HIGH có khớp chân DLB34C', 50, 349000, 'https://dochoitreem.com/wp-content/uploads/2016/10/Bup-be-Ever-After-high-DLB34C-1-500x480.jpg', '2022-12-15 08:32:13', 'EVER AFTER HIGH búp bê cơ bản DLB34CD\r\n\r\nDòng búp bê  EVER AFTER HIGH là dòng sản phẩm của Công ty Mattel . Sản phẩm đã dựa vào bộ phim ăn khách của cùng công ty , bộ phim tên EVER AFTER HIGH .\r\n\r\nBúp bê  EVER AFTER HIGH búp bê cơ bản DLB34C này có những trang phục lạ mắt và dáng đứng cũng như khuôn mặt và đầu tóc khá độc đáo !\r\n\r\nVới các bé đã xem qua bộ phim này thì đây là sản phẩm không thể bỏ qua !\r\n\r\nCác mẹ có thể an tâm rằng sản phẩm đã được kiểm định chất lượng tuyệt đối an toàn cho các bé yêu, hãy nhanh tay đặt mua để thêm vào bộ sưu tập đồ chơi của bé nhé. Hãy cùng dochoitrem.com dành cho con yêu những gì tốt đẹp nhất.', 4),
(63, 'Búp bê đầm đỏ, tóc dài, mắt thủy tinh LH124-B', 30, 199000, 'https://dochoitreem.com/wp-content/uploads/2022/08/Bup-be-dam-do-toc-dai-mat-thuy-tinh-LH124-B-500x480.jpg', '2022-12-15 08:32:13', 'Búp bê đầm đỏ, tóc dài, mắt thủy tinh LH124-B\r\nSản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 4),
(64, 'Búp bê Barbie nghề nghiệp đầu bếp FXN99/DVF50', 11, 239000, 'https://dochoitreem.com/wp-content/uploads/2020/12/bup-be-barbie-nghe-nghiep-dau-bep-DVF50_FXN99-230x240.jpg', '2022-12-15 08:33:50', 'Búp bê Barbie nghề nghiệp đầu bếp FXN99/DVF50\r\nSản phẩm được làm từ chất liệu nhựa và vải an toàn không gây độc hại cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 4),
(65, 'Búp bê khớp mắt thủy tinh đầm xanh và tủ quần áo 01YBY195A', 37, 215000, 'https://dochoitreem.com/wp-content/uploads/2022/05/Bup-be-khop-mat-thuy-tinh-dam-xanh-va-tu-quan-ao-500x480.jpg', '2022-12-15 08:33:50', 'Búp bê khớp mắt thủy tinh đầm xanh và tủ quần áo 01YBY195A\r\nSản phẩm được làm từ chất liệu an toàn cho trẻ nhỏ, nên quý phụ huynh hoàn toàn có thể yên tâm sẽ không gây ảnh hưởng đến sức khỏe của bé.', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `id` int(11) NOT NULL,
  `tendn` varchar(500) NOT NULL,
  `matkhau` varchar(500) NOT NULL,
  `ngay` date DEFAULT current_timestamp(),
  `email` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sodt` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `diachi` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `anh` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'adn.jpg',
  `vaitro` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '1',
  `trangthai` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`id`, `tendn`, `matkhau`, `ngay`, `email`, `sodt`, `diachi`, `anh`, `vaitro`, `trangthai`) VALUES
(1, 'admin', '123', '2020-12-22', 'tranxp34878@gmail.com', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '0', ''),
(2, 'anhtu', '123', '2020-12-22', 'tranxp34878@gmail.com', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(3, 'anh', '123', '0000-00-00', 'dangleloi102@gmail.com', '1264607869', '100 Huỳnh Văn Nghệ', 'adn.jpg', '0', ''),
(4, 'tu1', '123', '0000-00-00', 'dangleloi102@gmail.com', '1264607869', '100 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(5, 'tu102', '123', '0000-00-00', 'trantuxp34878@gmail.com', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(6, 'tqtu', '123', '0000-00-00', 'tqtu.19it2@vku.udn.vn', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(7, 'admin1', '123', '0000-00-00', 'trantuxp34878@gmail.com', '1264607869', '26Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(8, 'tuananh', '123', '2020-12-23', 'dangleloi102@gmail.com', '1264607869', '26 Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(9, 'p', '123', '2020-12-23', 'dangleloi102@gmail.com', '1264607869', '26Huỳnh Văn Nghệ', 'adn.jpg', '1', ''),
(12, 'tranquoctu', '123', '2021-05-27', NULL, NULL, NULL, 'adn.jpg', '1', NULL),
(14, 'anhtuan', '123', '2021-05-30', NULL, NULL, NULL, 'adn.jpg', '1', NULL),
(17, 'tu', '123', '2022-12-24', NULL, NULL, NULL, 'adn.jpg', '1', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuc`
--

CREATE TABLE `tintuc` (
  `id` int(11) NOT NULL,
  `tentt` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mota` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `anh` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tintuc`
--

INSERT INTO `tintuc` (`id`, `tentt`, `mota`, `anh`) VALUES
(1, 'CÂU CHUYỆN GIÁO DỤC TỪ CÁCH MUA ĐỒ CHƠI CHO CON', 'Mỗi năm một lần, chị Hoa (Hà Nội) đều đưa bé Nam đến làng trẻ Hữu Nghị để mang đồ chơi của mình tặng cho các bạn nhỏ khuyết tật, như một cách để giáo dục...\r\n      ', 'https://dochoitreem.com/wp-content/uploads/2016/02/5956x640.jpg'),
(2, 'LÀM THẾ NÀO ĐỂ DẠY TRẺ THÓI QUEN TỰ LẬP TỪ BÉ', 'Trẻ khi còn nhỏ nếu được ba mẹ nuông chiều sẽ nảy sinh tính ỷ lại, trở nên bướng bỉnh và không nghe lời. Vì vậy, để giáo dục trẻ một cách tốt...\r\n     ', 'https://dochoitreem.com/wp-content/uploads/2015/09/lam-the-nao-de-day-tre-tu-tap-tu-nho-1.jpg'),
(3, 'NHỮNG MẢNG SÁNG TRONG TÍNH CÁCH TRẺ QUA CHỌN ĐỒ CHƠI', 'Lựa chọn đúng loại đồ chơi có ích nhất cho bé thì cha mẹ nào cũng muốn nhưng không hẳn lúc nào cũng được như ý, thế nên đôi khi mua về mà bé còn nhỏ quá ...\r\n', 'https://dochoitreem.com/wp-content/uploads/2016/02/nhung-mang-sang-trong-tinh-cach-tre-qua-chon-do-choi-2.jpg');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chitietdh`
--
ALTER TABLE `chitietdh`
  ADD KEY `iddh` (`iddh`),
  ADD KEY `idsp` (`idsp`);

--
-- Chỉ mục cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idkhachhang` (`idkhachhang`);

--
-- Chỉ mục cho bảng `giohang`
--
ALTER TABLE `giohang`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hanghoa`
--
ALTER TABLE `hanghoa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iddanhmuc` (`iddanhmuc`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danhgia`
--
ALTER TABLE `danhgia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `danhmuc`
--
ALTER TABLE `danhmuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT cho bảng `giohang`
--
ALTER TABLE `giohang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT cho bảng `hanghoa`
--
ALTER TABLE `hanghoa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitietdh`
--
ALTER TABLE `chitietdh`
  ADD CONSTRAINT `chitietdh_ibfk_1` FOREIGN KEY (`iddh`) REFERENCES `donhang` (`id`),
  ADD CONSTRAINT `chitietdh_ibfk_2` FOREIGN KEY (`idsp`) REFERENCES `hanghoa` (`id`);

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`idkhachhang`) REFERENCES `taikhoan` (`id`);

--
-- Các ràng buộc cho bảng `hanghoa`
--
ALTER TABLE `hanghoa`
  ADD CONSTRAINT `hanghoa_ibfk_1` FOREIGN KEY (`iddanhmuc`) REFERENCES `danhmuc` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
