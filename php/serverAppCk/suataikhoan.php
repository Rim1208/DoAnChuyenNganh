<?php  
	include "connect.php";
	$id=$_GET['id'];
	$tendn=$_GET['tendn'];
	$diachi=$_GET['diachi'];
	$sodt=$_GET['sodt'];
	$email=$_GET['email'];
	if (strlen($tendn)>0&&strlen($diachi)>0&& strlen($email)>0 ) {
		$query="UPDATE taikhoan SET tendn='$tendn',diachi='$diachi',sodt='$sodt',email='$email' WHERE id=".$id;
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>