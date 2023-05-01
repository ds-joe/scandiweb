<?php

class Database
{
  private $db_username = "root";
  private $db_password = "";
  private $db_host = "localhost";
  private $db_name = "scandiweb";

  protected $pdo;
  protected $stmt;

  public function __construct()
  {
    try {
      $connect = "mysql:host={$this->db_host};dbname={$this->db_name}";
      $this->pdo = new PDO($connect, $this->db_username, $this->db_password);
      $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING); # Set Error Mode

    } catch (PDOException $error) {
      echo "Error => " . $error;
    }
  }

  public function __destruct()
  {
    $this->pdo !== null ? $this->pdo = null : $this->pdo;
    $this->stmt !== null ? $this->stmt = null : $this->stmt;
  }

  public function query($query)
  {
    $this->stmt = $this->pdo->prepare($query);
  }

  public function bindParam($param, $value, $type = null)
  {
    switch (true) {
      case is_int($value): {
          $type = PDO::PARAM_INT;
          break;
        }
      case is_bool($value): {
          $type = PDO::PARAM_BOOL;
          break;
        }
      case is_null($value): {
          $type = PDO::PARAM_NULL;
          break;
        }
      default: {
          $type = PDO::PARAM_STR;
        }
    }

    $this->stmt->bindParam($param, $value, $type);
  }

  public function execute()
  {
    $this->stmt->execute();
  }

  public function fetch($mode = PDO::FETCH_ASSOC)
  {
    $this->stmt->execute();
    return $this->stmt->fetch($mode);
  }

  public function fetchAll($mode = PDO::FETCH_ASSOC)
  {
    $this->stmt->execute();
    return $this->stmt->fetchAll($mode);
  }


  public function createTable(string $table_name, array $columns)
  {
    $resultQuery = "";
    $primaryKeys = "";
    if (!empty($columns)) {
      # Loop in columns
      foreach ($columns as $column => $value) {
        # Check if this column != primary
        if ($column != "__PRIMARY__") {
          $resultQuery .= "`{$value['NAME']}` {$value['DATA_TYPE']} {$value['SPECIALS']}, ";
        } else if ($column == "__PRIMARY__") {
          # Loop in Keys
          foreach ($value as $key) {
            $primaryKeys .= "`{$key}`, ";
          }
        }
      }
      $primaryKeys = trim($primaryKeys, ", ");
      $primaryKeys = "PRIMARY KEY({$primaryKeys})";
      $this->query("CREATE TABLE IF NOT EXISTS `{$table_name}` (
       {$resultQuery}
       {$primaryKeys}
     )");
      $this->execute();
    }
  }
}


?>
