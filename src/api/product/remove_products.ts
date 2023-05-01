import create_api from "../create_api";

export const remove_products = (sku_keys: string[]) => {
  return create_api("products", "remove_products", {
    data: {
      sku_keys
    }
  });
};