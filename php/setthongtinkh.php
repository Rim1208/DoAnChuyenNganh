<?php  
	include "connect.php";
	$tenkhachang=$_GET['tenkhachhang'];
	$diachi=$_GET['diachi'];
	$sodienthoai=$_GET['sodienthoai'];
	$email=$_GET['email'];
	$tongsanpham=$_GET['tongsanpham'];
	$tongtien=$_GET['tongtien'];
	if (strlen($tenkhachang)>0&&strlen($sodienthoai)>0&& strlen($email)>0&&strlen($diachi)>0 ) {
		$query="INSERT INTO donhang(tenuser,diachi,sodt,email,tongsanpham,tongtien) VALUES ('$tenkhachang','$diachi',$sodienthoai,'$email',$tongsanpham,$tongtien)";
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>