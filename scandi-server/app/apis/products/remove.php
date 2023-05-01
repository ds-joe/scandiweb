<?php
$product_model = $data["product_model"];
$req_data = $data['data'];


if (isset($req_data['sku_keys'])) {

  foreach ($req_data['sku_keys'] as $key) {
    $product_model->remove_products($key);
  }
  send_response(true, [], "Products Removed.");
  exit();

} else {
  send_response(false, [], "You Missed Some Data.");
  exit();
}
