// Dependences
import axios from "axios";

async function create_api(controller: string, method: string, params: any) {
  const axios_config = axios.create({
    baseURL: "http://localhost/Projects/scandi-server/public/",
  });
  const response = await axios_config.post("index.php", {
    url: {
      controller,
      method,
      params
    }
  });

  return response;
}


export default create_api;