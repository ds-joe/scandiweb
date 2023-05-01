<?php

class Controller
{

  /** Create New Model
   * @param string $model
   * @return PDO::Object|void
   */
  public function create_model(string $model)
  {
    $model = ucwords($model);
    if (file_exists(APP_ROOT . "models/{$model}.class.php")) {
      require_once(APP_ROOT . "models/{$model}.class.php");
      return new $model();
    }
  }

  /** Create New Api
   * @param string
   * @return void
   */
  public function create_api(string $api, array $data = [])
  {
    if (file_exists(APP_ROOT . "apis/{$api}.php")) {
      require_once(APP_ROOT . "apis/{$api}.php");
    }
  }

}