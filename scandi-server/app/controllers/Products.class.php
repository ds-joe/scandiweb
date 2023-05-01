<?php

class Products extends Controller
{
  public function index()
  {

  }
  /* create_table
   * This function to create packages table in database
   * @return void
   */
  public function create_table()
  {
    $model = $this->create_model("Product");
    $model->createTable("products", DATA_TABLES_PRODUCT_VARS);
    send_response(true, [], "");
  }

  /** create_product
   * This function used to create a product
   * @param array $data
   * @return void
   */
  public function create_product(array $data)
  {
    $product_model = $this->create_model("Product");
    $this->create_api("products/create", [
      "product_model" => $product_model,
      "data" => $data
    ]);
  }

  /** get_products
   * This function used to get all products
   * @return void
   */
  public function get_products()
  {
    $product_model = $this->create_model("Product");
    $this->create_api("products/get", [
      "product_model" => $product_model
    ]);
  }

  /** remove_products
   *  This function used to remove products from database.
   * @param array $data
   * @return void
   */
  public function remove_products(array $data)
  {
    $product_model = $this->create_model("Product");
    $this->create_api("products/remove", [
      "data" => $data,
      "product_model" => $product_model
    ]);
  }

}
