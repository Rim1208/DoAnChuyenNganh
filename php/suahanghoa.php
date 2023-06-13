<?php  
	include "connect.php";
	$id=$_GET['id'];
	$tensanpham=$_GET['tensanpham'];
	$soluong=$_GET['soluong'];
	$gia=$_GET['gia'];
	$anh=$_GET['anh'];
	$mota=$_GET['mota'];
	$iddanhmuc=$_GET['iddanhmuc'];
	if (strlen($tensanpham)>0&&strlen($soluong)>0&& strlen($gia)>0 ) {
		$query="UPDATE hanghoa SET tenhang='$tensanpham',soluong=$soluong,dongia=$gia,anh='$anh',mota='$mota',iddanhmuc=$iddanhmuc WHERE id=".$id;
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>