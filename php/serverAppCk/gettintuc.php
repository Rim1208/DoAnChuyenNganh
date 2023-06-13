<?php  
	include "connect.php";
	?>
	
	<?php
	$query = "SELECT * FROM tintuc";
	$data = mysqli_query($connect,$query);
	$mangcuahang= array();
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangcuahang, new cuahang(
			$row['id'],
			$row['tentt'],
			$row['mota'],
			$row['anh']));
	}
	$mangcuahang = [ 
	
		"data" => $mangcuahang 
	];

	echo json_encode($mangcuahang);
	class cuahang{
		function __construct($id,$tentt,$mota,$anh){
			$this->id=$id;
			$this->tentt=$tentt;
			$this->mota=$mota;
			$this->anh=$anh;
		}
	}
?>