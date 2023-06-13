<?php  
	include "connect.php";
	?>
	
	<?php
	$id=$_GET['id'];
	$query = "SELECT * FROM taikhoan WHERE id=".$id;
	$data = mysqli_query($connect,$query);
	$mangtaikhoan= array();
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangtaikhoan, new taikhoan(
			$row['id'],
			$row['tendn'],
			$row['matkhau'],
			$row['email'],
			$row['sodt'],
			$row['diachi'],
			$row['vaitro']));
	}
	$mangtaikhoan = [ 
		"data" => $mangtaikhoan 
	];

	echo json_encode($mangtaikhoan);
	class taikhoan{
		function __construct($id,$tendn,$matkhau,$email,$sodt,$diachi,$vaitro){
			$this->id=$id;
			$this->tendn=$tendn;
			$this->matkhau=$matkhau;
			$this->email=$email;
			$this->sodt=$sodt;
			$this->diachi=$diachi;
			$this->vaitro=$vaitro;
		
		}
	}
?>