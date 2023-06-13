<?php  
	include "connect.php";
	$id=$_GET['id'];
	if ($id>0 ) {
		$query="DELETE FROM hanghoa WHERE id=".$id;
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>