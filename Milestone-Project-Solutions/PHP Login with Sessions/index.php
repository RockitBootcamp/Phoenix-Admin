<?php

require_once 'initialize.php';

/**
 * Initial Variables
 */

$userLogin = new UserLogin;
$errors    = new ErrorManager;
$username  = '';
$password  = '';

/**
 * If already Logged
 */

if ($userLogin->isLogged()) {
    header('Location: home.php');
    exit();
}

/**
 * Recursive Form
 */

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Check Username
    if (array_key_exists('username', $_POST)) {

        $username = $_POST['username'];
        $usernameValidator = new UsernameValidator();
        if (!$usernameValidator->isValid($username)) {
            $errors->addError('username', 'Username is not valid');
        }

    } else {    
        $errors->addError('username', 'Please enter a username');
    }

    // Check Password
    if (array_key_exists('password', $_POST)) {

        $password = $_POST['password'];
        $passwordValidator = new PasswordValidator();
        if (!$passwordValidator->isValid($password)) {
            $errors->addError('password', 'Password is not valid');
        }

    } else {
        $errors->addError('password', 'Please enter a password');
    }

    /**
     * If no errors were found
     */
    if (!$errors->hasErrors()) {
        $userLogin->startSession($username);
        header('Location: account.php');
        exit();
    }

}


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="index.php" method="POST">
        <div>
            <label>Username:</label>
            <input type="text" name="username" value="<?php echo $username; ?>">
            <span class="error"><?php echo $errors->getError('username'); ?></span>            
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" value="<?php echo $password; ?>">
            <span class="error"><?php echo $errors->getError('password'); ?></span>            
        </div>

        <button>Login</button>

    </form>
</body>
</html>