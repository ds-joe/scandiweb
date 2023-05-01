<?php

class Core
{
  private $controller;
  private $method = "index";
  private $params = [];

  public function __construct()
  {
    if ($this->urlValid()) {

      # Declare Variables
      $url = $_REQUEST["url"];
      $this->controller = trim(ucwords($url["controller"]));
      $this->method = isset($url['method']) ? trim($url['method']) : $this->method;
      $this->params = isset($url["params"]) ? $url["params"] : [];


      # Check if controller file is exists
      if (file_exists(APP_ROOT . "controllers/{$this->controller}.class.php")) {

        # Get controller file
        require_once(APP_ROOT . "controllers/{$this->controller}.class.php");

        # Set Method
        $this->method = method_exists($this->controller, $this->method) ? $this->method : "index";

        # instantiation class
        $this->controller = new $this->controller();
        # Get method
        call_user_func_array([$this->controller, $this->method], $this->params);
      }


    }
  }

  /** Check if user send a valid url
   * @return bool
   */
  public function urlValid()
  {
    if (isset($_REQUEST["url"]) && isset($_REQUEST["url"]["controller"])) {
      if (preg_match(REGX_CONTROLLER, trim($_REQUEST["url"]["controller"]))) {
        $method = isset($_REQUEST["url"]["method"]) ? preg_match(REGX_METHOD, trim($_REQUEST["url"]["method"])) : true;
        $params = isset($_REQUEST["url"]["params"]) ? is_array($_REQUEST["url"]["params"]) : true;
        return $method && $params;

      }
    }
    return false;
  }

}