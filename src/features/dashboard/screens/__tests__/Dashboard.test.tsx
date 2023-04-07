import axios from 'axios';
import { fireEvent, render, screen, waitFor } from '../../../../utils/testing';
import { Product } from '../../../products/types';
import Dashboard from '../Dashboard';

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

describe('<Dashboard />', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-01-01'));
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders correctly', async () => {
    render(<Dashboard />);

    const welcome = screen.getByText(/bienvenido/i);
    const products = await waitFor(() => screen.getAllByText(/product item/i));
    const points = await waitFor(() => screen.getByLabelText('points container'));

    expect(screen.toJSON()).toMatchSnapshot();
    expect(welcome).toBeOnTheScreen();
    expect(products).toHaveLength(4);
    expect(points).toHaveTextContent('150.00 pts');
  });

  it('updates the list with only redeemed products', async () => {
    render(<Dashboard />);

    const button = await screen.findByLabelText('redeemed cta');

    fireEvent.press(button);

    const products = await screen.findAllByText(/product item/i);
    const points = await screen.findByLabelText('points container');

    expect(screen.toJSON()).toMatchSnapshot();
    expect(products).toHaveLength(2);
    expect(points).toHaveTextContent('-150.00 pts');
  });

  it('updates the list with only accumulated products', async () => {
    render(<Dashboard />);

    const button = await screen.findByLabelText('accumulated cta');

    fireEvent.press(button);

    const points = await screen.findByLabelText('points container');
    const products = await screen.findAllByText(/product item/i);

    expect(screen.toJSON()).toMatchSnapshot();
    expect(products).toHaveLength(2);
    expect(points).toHaveTextContent('300.00 pts');
  });
});
