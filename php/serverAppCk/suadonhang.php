<?php  
	include "connect.php";
	$tenkhachang=$_GET['tenkhachang'];
	$sodienthoai=$_GET['sodienthoai'];
	$email=$_GET['email'];
	$sql_idcuoi="select MAX(id) as iddh from donhang ";
	$query_idcuoi=mysqli_query($connect,$sql_idcuoi);
	$row_idcuoi=mysqli_fetch_assoc($query_idcuoi);
	if (strlen($tenkhachang)>0&&strlen($sodienthoai)>0&& strlen($email)>0 ) {
		$query="UPDATE donhang SET tenuser='$tenkhachang',sodt='$sodienthoai',email='$email' WHERE id=".$row_idcuoi['iddh'];
		if (mysqli_query($connect,$query)) {
			echo "Thành công";
		}else {
			echo "Thất bại";
		}
	}else {
		echo "Bạn hãy kiểm tra lại dữ liệu";
	}
?>