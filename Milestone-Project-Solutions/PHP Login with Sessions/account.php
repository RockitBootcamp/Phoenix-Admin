<?php 

require_once 'initialize.php';

// See if user is logged
$userLogin = new UserLogin;
if (!$userLogin->isLogged()) {
    header('Location: index.php');
    exit();
}

// Get username
$username = $userLogin->getUsername();

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
        Hello <?php echo $username; ?>, <a href="logout.php">Logout</a>
    </div>
    <div>This is your account page</div>
</body>
</html>