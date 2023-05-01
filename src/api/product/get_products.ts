import create_api from "../create_api";

export const get_products = () => {
  return create_api("products", "get_products", {}); 
};