<?php  
	include "connect.php";
	?>
	
	<?php
	$query = "SELECT * FROM taikhoan WHERE vaitro=0";
	$data = mysqli_query($connect,$query);
	$mangtaikhoan= array();
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangtaikhoan, new taikhoan(
			$row['id'],
			$row['tendn'],
			$row['matkhau'],
			$row['vaitro']));
	}
	$mangtaikhoan = [ 
	
		"data" => $mangtaikhoan 
	];

	echo json_encode($mangtaikhoan);
	class taikhoan{
		function __construct($id,$tendn,$matkhau,$vaitro){
			$this->id=$id;
			$this->tendn=$tendn;
			$this->matkhau=$matkhau;
			$this->vaitro=$vaitro;
		
		}
	}
?>