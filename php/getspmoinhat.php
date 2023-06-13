	
	
	<?php
	include "connect.php";

	$mangspmoinhat= array();
	$query = "SELECT * FROM hanghoa ORDER BY id DESC LIMIT 6";
	$data = mysqli_query($connect,$query);
	
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangspmoinhat, new Sanphammoinhat(
			$row['id'],
			$row['tenhang'],
			$row['soluong'],
			$row['dongia'],
			$row['anh'],
			$row['ngay'],
			$row['mota'],
			$row['iddanhmuc']));
	}
	$mangspmoinhat = [ 
		
		"data" => $mangspmoinhat 
	];


	echo json_encode($mangspmoinhat);
	class Sanphammoinhat{
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