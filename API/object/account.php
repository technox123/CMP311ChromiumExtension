<?php
class Account{
  
    // database connection and table name
    private $conn;
    private $table_name = "accounts";
  
    // object properties
    public $email;
    public $password;
    public $version;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // query function for reading the version of database
    function readVersion(){

        $query = "SELECT
                    version
                FROM
                    " . $this->table_name . "
                LIMIT 1";

        // prepare query statement
        $stmt = $this->conn->prepare($query);
      
        // execute query
        $stmt->execute();
      
        return $stmt;
    }

    // query function for reading all passwords in the database
    function readPassword(){

        $query = "SELECT
                    password
                FROM
                    " . $this->table_name . "";
      
        // prepare query statement
        $stmt = $this->conn->prepare($query);
      
        // execute query
        $stmt->execute();
      
        return $stmt;
    }

    // query function for reading all emails in the database
    function readEmail(){

        $query = "SELECT
                    email
                FROM
                    " . $this->table_name . "";
      
        // prepare query statement
        $stmt = $this->conn->prepare($query);
      
        // execute query
        $stmt->execute();
      
        return $stmt;
    }
}
?>