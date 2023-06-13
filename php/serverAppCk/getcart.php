<?php  
	include "connect.php";
	?>
	
	<?php
	$query = "SELECT * FROM giohang";
	$data = mysqli_query($connect,$query);
	$mangcuahang= array();
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangcuahang, new cuahang(
			$row['id'],
			$row['iduser'],
			$row['idsp'],
			$row['tenhang'],
			$row['soluong'],
			$row['soluongmua'],
			$row['anh'],
			$row['gia'],
			$row['mota'],
			$row['ngay']));
	}
	$mangcuahang = [ 
	
		"data" => $mangcuahang 
	];

	echo json_encode($mangcuahang);
	class cuahang{
		function __construct($id,$iduser,$idsp,$tenhang,$soluong,$soluongmua,$anh,$gia,$mota,$ngay){
			$this->id=$id;
			$this->iduser=$iduser;
			$this->idsp=$idsp;
			$this->tenhang=$tenhang;
			$this->soluong=$soluong;
			$this->soluongmua=$soluongmua;
			$this->anh=$anh;
			$this->gia=$gia;
			$this->mota=$mota;
			$this->ngay=$ngay;
		}
	}
?>