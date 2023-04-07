import { fireEvent, render, screen } from '../../../../utils/testing';
import Product from '../Product';

const mockProduct = {
  createdAt: '2022-12-09T10:20:00.909Z',
  product: 'Product item 1',
  points: 100,
  image: 'image',
  is_redemption: false,
  id: '1',
};

describe('<Product />', () => {
  it('renders a product correctly', () => {
    const route = {
      params: {
        product: mockProduct,
      },
    };
    render(<Product navigation={{} as any} route={route as any} />);

    const date = screen.getByLabelText('product date');
    const transactionLabel = screen.getByLabelText('product transaction label');
    const transaction = screen.getByLabelText('product transaction');

    expect(screen.toJSON()).toMatchSnapshot();
    expect(date).toHaveTextContent('Comprado el 09 de diciembre , 2022');
    expect(transactionLabel).toHaveTextContent('Con esta compra acumulaste');
    expect(transaction).toHaveTextContent('100.00 puntos');
  });

  it('renders a product with redemption correctly', () => {
    const productWithRedemption = {
      ...mockProduct,
      is_redemption: true,
    };
    const route = {
      params: {
        product: productWithRedemption,
      },
    };
    render(<Product navigation={{} as any} route={route as any} />);

    const transactionLabel = screen.getByLabelText('product transaction label');

    expect(screen.toJSON()).toMatchSnapshot();
    expect(transactionLabel).toHaveTextContent('Con esta compra canjeaste');
  });

  it('goes back when button is pressed', () => {
    const mockBack = jest.fn();
    const navigation = {
      goBack: mockBack,
    };
    const route = {
      params: {
        product: mockProduct,
      },
    };
    render(<Product navigation={navigation as any} route={route as any} />);

    const button = screen.getByLabelText('cta');

    fireEvent.press(button);

    expect(mockBack).toHaveBeenCalled();
  });
});
