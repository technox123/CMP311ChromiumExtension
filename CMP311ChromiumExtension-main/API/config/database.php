<?php
class Database{
  
    //Database Credentials
    private $host = "lochnagar.abertay.ac.uk";
    private $db_name = "sqlcmp311g20eh12";
    private $username = "sqlcmp311g20eh12";
    private $password = "6P64mae3qAw2";
    public $conn;
  
    //Get the database connection
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
  
        return $this->conn;
    }
}
?>