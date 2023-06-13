<?php  
	include "connect.php";
	$tenshop=$_GET['tenshop'];
	$diachi=$_GET['diachi'];
	$sodt=$_GET['sodt'];
	$email=$_GET['email'];
	if (strlen($tenshop)>0&&strlen($diachi)>0&& strlen($email)>0 ) {
		$query="UPDATE cuahang SET tenshop='$tenshop',diachi='$diachi',sodt='$sodt',email='$email'";
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>