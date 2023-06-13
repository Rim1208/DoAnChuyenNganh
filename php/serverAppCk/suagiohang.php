<?php  
	include "connect.php";
	$id=$_GET['id'];
	$soluongmua=$_GET['soluongmua'];
	if (strlen($id)>0&&strlen($soluongmua)>0 ) {
		$query="UPDATE giohang SET soluongmua=$soluongmua WHERE id=".$id;
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>