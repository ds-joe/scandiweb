<?php
class Product extends Database
{
  private $table_name = 'products';

  /** create_product
   *  This Function Used To Create a new Product
   * @param string $sku
   * @param string $name
   * @param string $type
   * @param int|float $price
   * @param string $value
   * @return void
   */
  public function create_product(string $sku, string $name, string $type, int|float $price, string $value)
  {
    $this->query("INSERT INTO `{$this->table_name}`
      (`name`, `sku`, `price`, `value`, `type`) VALUES
      (:name, :sku, :price, :value, :type)
    ");
    $this->bindParam(":name", $name);
    $this->bindParam(":sku", $sku);
    $this->bindParam(":price", $price);
    $this->bindParam(":value", $value);
    $this->bindParam(":type", $type);
    $this->execute();
  }

  /** get_product
   * This Function used to get a product by sku
   * @param string $sku
   * @return array
   */
  public function get_product(string $sku)
  {
    $this->query("SELECT * FROM `{$this->table_name}` WHERE `sku` = :sku");
    $this->bindParam(":sku", $sku);
    return $this->fetch();
  }

  /** get_products
   * This Function Used to get all products
   * @return array
   */

  public function get_products()
  {
    $this->query("SELECT * FROM `{$this->table_name}`");
    return $this->fetchAll();
  }

  /** remove_products
   * This Function used to remove much products
   * @param string $sku_key
   * @return void
   */
  function remove_products(string $sku_key)
  {
    $this->query("DELETE FROM `{$this->table_name}` WHERE `sku` = (:sku_key)");
    $this->bindParam(":sku_key", $sku_key);
    $this->execute();
  }


}
