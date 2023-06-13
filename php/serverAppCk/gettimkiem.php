<?php
 	include "connect.php";
 	$noidungtim=$_GET["noidungtim"];
 	$mangsanpham= array();
 	$query= "SELECT * FROM hanghoa WHERE tenhang like '%".$noidungtim."%' ";
 	$data= mysqli_query($connect,$query);
	while($row =mysqli_fetch_assoc($data)){
			array_push($mangsanpham, new Sanpham(
				$row['id'],
				$row['tenhang'],
				$row['soluong'],
				$row['dongia'],
				$row['anh'],
				$row['ngay'],
				$row['mota'],
				$row['iddanhmuc']));
		}
	$mangsanpham = [ 
		
		"data" => $mangsanpham 
	];			
		echo json_encode($mangsanpham);

 	Class Sanpham{
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