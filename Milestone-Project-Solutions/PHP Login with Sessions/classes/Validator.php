<?php 

class Validator {
    public function isValid($value) {
        return preg_match($this->regex, $value);
    }
}