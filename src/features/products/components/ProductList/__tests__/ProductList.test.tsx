import { render, screen } from '../../../../../utils/testing';
import { Product } from '../../../types';
import ProductList from '../ProductList';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

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

describe('<ProductList />', () => {
  it('renders the data correctly', () => {
    render(<ProductList data={mockData} />);

    const products = screen.getAllByText(/product item/i);
    expect(products).toHaveLength(4);
  });
});
