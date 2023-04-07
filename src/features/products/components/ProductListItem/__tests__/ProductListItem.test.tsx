import { fireEvent, render, screen } from '../../../../../utils/testing';
import ProductListItem from '../ProductListItem';

const mockProduct = {
  createdAt: '2022-12-09T10:20:00.909Z',
  product: 'Product item 1',
  points: 100,
  image: 'image',
  is_redemption: false,
  id: '1',
};

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<ProductListItem />', () => {
  it('renders a product correctly', () => {
    render(<ProductListItem item={mockProduct} />);
    const productDate = screen.getByLabelText('product date');
    const productPoints = screen.getByLabelText('product points');
    const button = screen.getByLabelText('pressable item');
    fireEvent.press(button);
    expect(productDate).toHaveTextContent('09 de diciembre , 2022');
    expect(productPoints).toHaveTextContent('+ 100.00');
    expect(mockedNavigate).toHaveBeenCalledWith('ProductDetails', { product: mockProduct });
  });
});
