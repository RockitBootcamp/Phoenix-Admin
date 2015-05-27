# M4 Project Discussion Points

## Project review
- Look at code organization
- Look at indentation
- Naming Conventions
- Ensure clean separation between HTML/PHP
- Ensure separation of concerns between logic (Select Correct Validator vs Validation section)
- Check for redundancy (CSS & PHP)
- Check for Validating Input
- HTML section is template with data mixed in

```php
// Items.php
<?php

require("init.php");
require("Item.php");

$errors = [];

// Validate input
$itemId  = "";
if(isSet($_GET["id"]))
{
	$itemId = $_GET["id"];
}

if(empty($itemId))
{
	// Problem
	// Handle the problem...
	redirect("error.php?error=noId");
}

// Get Single Item
$item = Item::getItem($itemId);

// Get All items
$items = Item::getItems();

?>
<html>
<body>

	<table>
		<tr>
			<td>Name</td>
			<td>Price</td>	
		</tr>

	<?php
	foreach($items as $item)
	{
	?>
		<tr>
			<td><?=$item->name?></td>
			<td><?=$item->price?></td>	
		</tr>

	<?php
	}
	?>
	</table>
</body>
</html>
```


## Item Class

This class shows how to static methods as manager methods

```
// Item.php
<?php







Class Item {

	private $name;
	private $price;
	private $id;

	public function _construct($row) 
	{
		$this->name = $row['name'];
		$this->price = $row['price'];
		$this->id = $row['id'];
	}

	public static update($item){
		// ... update item

	}

	public static getItem($id)
	{
		$sql = "Select * From Items where id=:id";
		//....
		return new Item($row);
	}

	public static getItems()
	{
		$sql = "Select * from items";

		$items = [];

		foreach($results as $row){
			array_push($items, new Item($row));
		}

		return $items;
	}

	public static removeItem($itemId)
	{
		$sql = "Delete from items where id = :id";
		//.....

	}

}

```