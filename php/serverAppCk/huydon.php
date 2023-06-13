<?php  
	include "connect.php";
	$id=$_GET['id'];
	if ($id>0 ) {

		$sqlup="UPDATE donhang SET trangthai=0 WHERE id=".$id;
		if (mysqli_query($connect,$sqlup)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
		// $query="DELETE FROM chitietdh WHERE iddh=".$id;
		// if (mysqli_query($connect,$query)) {
		//     echo "Thanh cong";
		// }else {
		// 	echo "Thất bại";
		// }
		// $query_dh="DELETE FROM donhang WHERE id=".$id;
		// if (mysqli_query($connect,$query_dh)) {
		//     echo "Thanh cong";
		// }else {
		// 	echo "Thất bại";
		// }
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>