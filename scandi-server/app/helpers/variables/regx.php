<?php
# Main regular
define("REGX_CONTROLLER", "/^[a-zA-Z]+([0-9]+)?$/");
define("REGX_METHOD", "/[a-zA-Z]+/");


# Number regular
define("REGX_INT", "/^[0-9]+$/");
define("REGX_FLOAT", "/^[0-9]+.[0-9]+$/");
define("REGX_INT_FLOAT", "/^[0-9]+(.[0-9]+)?$/");

# String regular
define("REGX_STRING", "/^[a-zA-Z]+$/");
define("REGX_EMAIL", "/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/");
define("REGX_STRING_ONE_SPACE", "/^[a-zA-Z]+(\s[a-zA-Z]+)?$/");
define("REGX_STRING_TWO_SPACE", "/^[a-zA-Z]+(\s[a-zA-Z]+)?(\s[a-zA-Z]+)?$/");

# Mixed regular
define("REGX_STRING_INT", "/^[a-zA-Z0-9]+$/");
define("REGX_STRING_INT_ONE_SPACE", "/^[a-zA-Z0-9]+(\s[a-zA-Z0-9]+)?$/");
define("REGX_STRING_INT_TWO_SPACE", "/^[a-zA-Z0-9]+(\s[a-zA-Z0-9]+)?(\s[a-zA-Z0-9]+)?$/");
define("REGX_START_STRING_INT", "/^[a-zA-Z]+([0-9]+)?$/");
