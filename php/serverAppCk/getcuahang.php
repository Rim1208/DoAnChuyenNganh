<?php  
	include "connect.php";
	?>
	
	<?php
	$query = "SELECT * FROM cuahang";
	$data = mysqli_query($connect,$query);
	$mangcuahang= array();
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangcuahang, new cuahang(
			$row['tenshop'],
			$row['diachi'],
			$row['sodt'],
			$row['email']));
	}
	$mangcuahang = [ 
	
		"data" => $mangcuahang 
	];

	echo json_encode($mangcuahang);
	class cuahang{
		function __construct($tenshop,$diachi,$sodt,$email){
			$this->tenshop=$tenshop;
			$this->diachi=$diachi;
			$this->sodt=$sodt;
			$this->email=$email;
		}
	}
?>