<?php  
	include "connect.php";
	?>
	
	<?php
	$query = "SELECT * FROM danhmuc";
	$data = mysqli_query($connect,$query);
	$mangloaisp= array();
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangloaisp, new Loaisp(
			$row['id'],
			$row['tendanhmuc'],
			$row['anh']));
	}
	$mangloaisp = [ 
		"data" => $mangloaisp 
	];

	echo json_encode($mangloaisp);
	class Loaisp{
		function __construct($id,$tenloaisp,$hinhloaisp){
			$this->id=$id;
			$this->tenloaisp=$tenloaisp;
			$this->hinhloaisp=$hinhloaisp;
		}
	}
?>