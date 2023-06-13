<?php  
	include "connect.php";
	$tendn=$_GET['tendn'];
	$matkhau=$_GET['matkhau'];

	if (strlen($tendn)>0&&strlen($matkhau)>0 ) {
		$query="INSERT INTO taikhoan(tendn,matkhau) VALUES ('$tendn',$matkhau)";
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>