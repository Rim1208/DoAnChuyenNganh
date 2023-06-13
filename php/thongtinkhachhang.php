<?php  
	include "connect.php";
	$tenkhachang=$_GET['tenkhachang'];
	$sodienthoai=$_GET['sodienthoai'];
	$email=$_GET['email'];
	if (strlen($tenkhachang)>0&&strlen($sodienthoai)>0&& strlen($email)>0 ) {
		$query="INSERT INTO donhang(tenuser,sodt,email) VALUES ('$tenkhachang',$sodienthoai,'$email')";
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>