import api from '../../../config/api';
import { Product } from './types';

export async function getProducts(): Promise<Product[]> {
  const response = await api.get<Product[]>('/products');
  const products: Product[] = [];

  response.data.forEach(product => {
    const p: Product = {
      product: product.product,
      points: product.points,
      is_redemption: product.is_redemption,
      image: product.image,
      id: product.id,
      createdAt: product.createdAt,
    };
    products.push(p);
  });

  return products;
}
