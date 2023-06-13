<?php  
	include "connect.php";
	$tensanpham=$_GET['tensanpham'];
	$soluong=$_GET['soluong'];
	$gia=$_GET['gia'];
	$anh=$_GET['anh'];
	$mota=$_GET['mota'];
	$iddanhmuc=$_GET['iddanhmuc'];
	if (strlen($tensanpham)>0&&strlen($soluong)>0&& strlen($gia)>0 ) {
		$query="INSERT INTO hanghoa(tenhang,soluong,dongia,anh,mota,iddanhmuc) VALUES ('$tensanpham',$soluong,$gia,'$anh','$mota',$iddanhmuc)";
		if (mysqli_query($connect,$query)) {
		    echo "Thành công";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>