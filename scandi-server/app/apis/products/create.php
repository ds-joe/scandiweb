<?php
$product_model = $data["product_model"];
$req_data = $data["data"];


if (
  isset($req_data['name']) &&
  isset($req_data['sku']) &&
  isset($req_data['type']) &&
  isset($req_data['value']) &&
  isset($req_data['price'])
) {

  // Check if Product sku key already set
  $check_sku_key = $product_model->get_product($req_data["sku"]);
  if (empty($check_sku_key)) {

    // if no any product set with this sku key create product
    $product_model->create_product(
      $req_data['sku'],
      $req_data['name'],
      $req_data['type'],
      $req_data['price'],
      $req_data['value']
    );

    send_response(true, [], "Product Created.");


  } else {
    send_response(false, [], "SKU key already used.");
  }

  exit();
} else {
  send_response(false, [], "You Missed Some Data.");
  exit();
}
