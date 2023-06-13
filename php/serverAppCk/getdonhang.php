<?php  
	include "connect.php";
	$trangthai=$_GET['trangthai'];
	$query = "SELECT * FROM donhang WHERE trangthai=".$trangthai;
	$data = mysqli_query($connect,$query);
	$mangtaikhoan= array();
	while($row =mysqli_fetch_assoc($data)){
		array_push($mangtaikhoan, new taikhoan(
			$row['id'],
			$row['idkhachhang'],
			$row['tenkhachhang'],
			$row['diachi'],
			$row['sodt'],
			$row['email'],
			$row['tongsanpham'],
			$row['tongtien'],
			$row['trangthai']));
	}
	$mangtaikhoan = [ 
	
		"data" => $mangtaikhoan 
	];

	echo json_encode($mangtaikhoan);
	class taikhoan{
		function __construct($id,$idkhachhang,$tenkhachhang,$diachi,$sodt,$email,$tongsanpham,$tongtien,$trangthai){
			$this->id=$id;
			$this->idkhachhang=$idkhachhang;
			$this->tenkhachhang=$tenkhachhang;
			$this->diachi=$diachi;
			$this->sodt=$sodt;
			$this->email=$email;
			$this->tongsanpham=$tongsanpham;
			$this->tongtien=$tongtien;
			$this->trangthai=$trangthai;
		
		}
	}
?>