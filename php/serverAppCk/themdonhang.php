<?php  
	include "connect.php";
	$idkhachhang=$_GET['idkhachhang'];
	$tenkhachhang=$_GET['tenkhachhang'];
	$diachi=$_GET['diachi'];
	$sodt=$_GET['sodt'];
	$email=$_GET['email'];
	$tongsanpham=$_GET['tongsanpham'];
	$tongtien=$_GET['tongtien'];
	if (strlen($tenkhachhang)>0&&strlen($sodt)>0&& strlen($email)>0&&strlen($diachi)>0 && strlen($tongsanpham)>0&&strlen($tongtien)>0) {
		$query="INSERT INTO donhang(idkhachhang,tenkhachhang,diachi,sodt,email,tongsanpham,tongtien,trangthai) VALUES ($idkhachhang,'$tenkhachhang','$diachi',$sodt,'$email',$tongsanpham,$tongtien,1)";
		if (mysqli_query($connect,$query)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
	$row_idcuoi=mysqli_insert_id($connect);
	echo $row_idcuoi;
	$sql1="SELECT * FROM giohang WHERE iduser=".$idkhachhang;
	$query1=mysqli_query($connect,$sql1);
	while($row1=mysqli_fetch_assoc($query1)){
	 		$sql2="INSERT INTO chitietdh(iddh,idsp,soluong,dongia) values(".$row_idcuoi.",".$row1['idsp'].",".$row1['soluongmua'].",".$row1['soluongmua']."*".$row1['gia'].")";
			$query2=mysqli_query($connect,$sql2);
			$sl=$row1['soluong']-$row1['soluongmua'];
			$sql3 = "UPDATE hanghoa SET soluong=$sl WHERE id=".$row1['idsp'];
		$query3=mysqli_query($connect,$sql3);	

	}
	$query_xoagh="DELETE FROM giohang WHERE iduser=".$idkhachhang;
		if (mysqli_query($connect,$query_xoagh)) {
		    echo "Thanh cong";
		}else {
			echo "Thất bại";
		}
?>