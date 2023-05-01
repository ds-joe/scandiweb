<?php
/** send_response
 * This function to send response data to front end
 * @param boolean $state
 * @param array $data
 * @param string $message
 * @return string
 */
function send_response(bool $state, array $data = [], string $message = "")
{
  echo json_encode([
    "state" => $state,
    "data" => $data,
    "message" => $message
  ]);
  return json_encode([
    "state" => $state,
    "data" => $data,
    "message" => $message
  ]);
}
