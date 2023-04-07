import axios from 'axios';
import { getProducts } from '../products.service';
import { Product } from '../types';

const mockData: Product[] = [
  {
    createdAt: '2022-12-09T10:20:00.909Z',
    product: 'Product item 1',
    points: 100,
    image: 'image',
    is_redemption: false,
    id: '1',
  },
  {
    createdAt: '2022-12-08T10:20:00.909Z',
    product: 'Product item 2',
    points: 50,
    image: 'image',
    is_redemption: true,
    id: '2',
  },
  {
    createdAt: '2022-12-07T10:20:00.909Z',
    product: 'Product item 3',
    points: 200,
    image: 'image',
    is_redemption: false,
    id: '3',
  },
  {
    createdAt: '2022-12-06T10:20:00.909Z',
    product: 'Product item 4',
    points: 100,
    image: 'image',
    is_redemption: true,
    id: '4',
  },
];

describe('Product service', () => {
  describe('getProducts()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('returns an array of products', async () => {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData });
      const result = await getProducts();
      expect(result).toStrictEqual(mockData);
    });

    it('throws an error if api fails', async () => {
      const error = new Error('Error');
      (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce({ error });
      await expect(() => getProducts()).rejects.toStrictEqual({ error });
    });
  });
});
