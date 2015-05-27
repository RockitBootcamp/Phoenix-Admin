<?php 

class UsernameValidator extends Validator {
    protected $regex = '/^[a-zA-Z]{5,}$/';
}
