<?php
define("DATA_TABLES_PRODUCT_VARS", [
  "KEY" => [
    "NAME" => "key",
    "DATA_TYPE" => "INT",
    "SPECIALS" => "NOT NULL AUTO_INCREMENT",
  ],
  "NAME" => [
    "NAME" => "name",
    "DATA_TYPE" => "VARCHAR(255)",
    "SPECIALS" => "NOT NULL",
  ],
  "TYPE" => [
    "NAME" => "type",
    "DATA_TYPE" => "VARCHAR(100)",
    "SPECIALS" => "NOT NULL",
  ],
  "SKU" => [
    "NAME" => "sku",
    "DATA_TYPE" => "VARCHAR(100)",
    "SPECIALS" => "NOT NULL",
  ],
  "PRICE" => [
    "NAME" => "price",
    "DATA_TYPE" => "DECIMAL(13,2)",
    "SPECIALS" => "NOT NULL"
  ],
  "VALUE" => [
    "NAME" => "value",
    "DATA_TYPE" => "VARCHAR(255)",
    "SPECIALS" => "NOT NULL"
  ],

  "__PRIMARY__" => ["key", "sku"]
]);
