

	<?php  
	include "connect.php";
	$id=$_GET['id'];
	$trangthaicu=$_GET['trangthai'];
	$trangthaimoi=$trangthaicu+1;
	
	if (strlen($id)>0&&strlen($trangthaimoi)>0 ) {
		$sqlup="UPDATE donhang SET trangthai=$trangthaimoi WHERE id=".$id;
		if (mysqli_query($connect,$sqlup)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>