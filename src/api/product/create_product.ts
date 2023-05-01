import create_api from "../create_api";

export const create_product = (sku: string, type: string, name: string, price: number, value: string) => {
  return create_api("products", "create_product", {
    data: {
      name,
      sku,
      price,
      value,
      type
    }
  });
};