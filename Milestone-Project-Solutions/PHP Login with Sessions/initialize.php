<?php

// Valdation
require_once 'classes/Validator.php';
require_once 'classes/UsernameValidator.php';
require_once 'classes/PasswordValidator.php';

// Errors
require_once 'classes/ErrorManager.php';

// User Session
session_start();
require_once 'classes/UserLogin.php';