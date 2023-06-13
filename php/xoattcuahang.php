<?php  
	include "connect.php";

	$query="DELETE FROM cuahang";
	if (mysqli_query($connect,$query)) {
		echo "Thanh cong";
	}else {
		echo "Thất bại";
	}

?>