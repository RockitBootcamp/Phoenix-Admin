<?php 

class ErrorManager {

    private $errors = [];

    public function addError($name, $message) {
        $this->errors[$name] = $message;
    }

    public function getError($name) {
        if(array_key_exists($name, $this->errors)) {
            return $this->errors[$name];
        }
        return '';
    }

    public function hasErrors() {
        return count($this->errors) > 0;
    }
    
}