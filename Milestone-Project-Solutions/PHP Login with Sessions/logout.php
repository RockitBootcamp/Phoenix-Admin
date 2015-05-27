<?php 

require_once 'initialize.php';

// Logout
$userLogin = new UserLogin;
$userLogin->logout();

header('refresh:2; url=index.php');

?>
You are being logged out...