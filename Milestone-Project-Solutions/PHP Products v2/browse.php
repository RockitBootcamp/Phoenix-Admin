<?php

// Get Products
require_once('products.php');

// Build Product List in HTML
$product_list = '';
foreach ($products as $key => $name) {
	$product_list .= '<option value="' . $key . '">' . $name . '</option>';
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
		
		<h1>Browse Products</h1>

		<form action="view.php" method="GET">
			Product:
			<select name="product_id">
				<?php echo $product_list; ?>
			</select>
			Quantity:
			<input type="number" name="qty" value="1">
			<button type="submit">Submit</button>
		</form>

	</main>

	<?php include('footer.php') ?>

</body>
</html>