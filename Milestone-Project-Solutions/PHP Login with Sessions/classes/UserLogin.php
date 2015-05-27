<?php

class UserLogin {

    // Start the User Session
    public function startSession($username) {
        $_SESSION['username'] = $username;
    }

    // Does the user have a session
    public function isLogged() {
        if (array_key_exists('username', $_SESSION)) {
            return true;
        } else {
            return false;
        }
    }

    // Logout
    public function logout() {
        session_destroy();
    }

    // Get Username
    public function getUsername() {
        if ($this->isLogged()) {
            return $_SESSION['username'];
        }
    }

}