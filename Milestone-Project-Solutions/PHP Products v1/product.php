<?php

$name = $_GET['name'];

if ($name == 1) {
	$choice = 'Mac';
} else if ($name == 2) {
	$choice = 'Linux';
} else if ($name == 3) {
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