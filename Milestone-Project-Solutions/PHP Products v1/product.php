<?php

$id = $_GET['id'];

if ($id == 1) {
	$choice = 'Mac';
} else if ($id == 2) {
	$choice = 'Linux';
} else if ($id == 3) {
	$choice = 'Windows';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>
	
	<?php include_once('header.php') ?>

	<main>
		<h1>You chose <?php echo $choice; ?></h1>
	</main>

	<?php include_once('footer.php') ?>

</body>
</html>