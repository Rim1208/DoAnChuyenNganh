<?php  
	include "connect.php";
	$iduser=$_GET['iduser'];
	$idsp=$_GET['idsp'];
	$tenhang=$_GET['tenhang'];
	$soluong=$_GET['soluong'];
	$soluongmua=$_GET['soluongmua'];
	$gia=$_GET['gia'];
	$anh=$_GET['anh'];
	$mota=$_GET['mota'];

	if (strlen($tenhang)>0&&strlen($soluong)>0&& strlen($gia)>0 ) {
		$query="INSERT INTO giohang(iduser,idsp,tenhang,soluong,soluongmua,gia,anh,mota) VALUES ($iduser,$idsp,'$tenhang',$soluong,$soluongmua,$gia,'$anh','$mota')";
		if (mysqli_query($connect,$query)) {
		    echo "Thành công";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>