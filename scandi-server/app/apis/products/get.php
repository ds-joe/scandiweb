<?php
$product_model = $data["product_model"];

// Get Products
$products = $product_model->get_products();

if (!empty($products)) {
  send_response(true, $products, "");
} else {
  send_response(true, [], "");
}

exit();
