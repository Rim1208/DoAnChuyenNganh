	
	
	<?php
	include "connect.php";

	$mangsp= array();
	$query = "SELECT * FROM hanghoa  ";
	$data = mysqli_query($connect,$query);
	
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangsp, new Sanpham(
			$row['id'],
			$row['tenhang'],
			$row['soluong'],
			$row['dongia'],
			$row['anh'],
			$row['ngay'],
			$row['mota'],
			$row['iddanhmuc']));
	}
	$mangsp = [ 
		"data" => $mangsp 
	];


	echo json_encode($mangsp);
	class Sanpham{
		function __construct($id,$tenhang,$soluong,$dongia,$anh,$ngay,$mota,$iddanhmuc){
			$this->id=$id;
			$this->tenhang=$tenhang;
			$this->soluong=$soluong;
			$this->dongia=$dongia;
			$this->anh=$anh;
			$this->ngay=$ngay;
			$this->mota=$mota;
			$this->iddanhmuc=$iddanhmuc;
		}
	}
?>