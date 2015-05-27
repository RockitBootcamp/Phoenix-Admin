<?php

// Get Products
require_once('products.php');

/**
 * Validation
 */

// Input Validation
if (isset($_GET['product_id']) && is_numeric($_GET['product_id']) && $_GET['product_id'] >= 0) {
    $product_id = $_GET['product_id'];
} else {
    exit('Product ID must be set');
}

// Input Validation
if (isset($_GET['qty']) && is_numeric($_GET['qty']) && $_GET['qty'] > 0) {
    $qty = $_GET['qty'];
} else {
    exit('Quantity must be set');
}

/**
 * Display the product info
 */

// Max number of Macs
$max = 7;

// If Product Exists
if (array_key_exists($product_id, $products)) {

	// Users cannot order too many macs
	if ($products[$product_id] == 'Macs' && $qty > $max) {
		$message = 'You can\'t order over ' . $max . ' Macs';

	// Display the order request
	} else {
		$message = 'You want to order ' . $qty . ' ' . $products[$product_id];
	}

// If it doesnt exist
} else {
	$message = 'This product doesn\'t exist';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<?php include('head.php') ?>
</head>
<body>
	
	<?php include('header.php') ?>

	<main>
		<h1><?php echo $message; ?></h1>
	</main>

	<?php include('footer.php') ?>

</body>
</html>