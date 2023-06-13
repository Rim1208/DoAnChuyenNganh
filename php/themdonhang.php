<?php  
	include "connect.php";
	$idkhachhang=$_GET['idkhachhang'];
	$tenkhachhang=$_GET['tenkhachhang'];
	$diachi=$_GET['diachi'];
	$sodt=$_GET['sodt'];
	$email=$_GET['email'];
	$tongsanpham=$_GET['tongsanpham'];
	$tongtien=$_GET['tongtien'];
	if (strlen($tenkhachhang)>0&&strlen($sodt)>0&& strlen($email)>0&&strlen($diachi)>0 && strlen($tongsanpham)>0&&strlen($tongtien)>0) {
		$query="INSERT INTO donhang(idkhachhang,tenkhachhang,diachi,sodt,email,tongsanpham,tongtien,trangthai) VALUES ($idkhachhang,'$tenkhachhang','$diachi',$sodt,'$email',$tongsanpham,$tongtien,1)";
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>