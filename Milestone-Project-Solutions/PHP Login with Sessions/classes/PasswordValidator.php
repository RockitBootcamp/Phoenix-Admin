<?php 

class PasswordValidator extends Validator {
    protected $regex = '/^[a-zA-Z0-9!@#$%^&*\(\)]{5,}$/'; 
}
