import { render, screen } from '../../../../../utils/testing';
import Greeting from '../Greeting';

describe('<Greeting />', () => {
  it('renders correctly greeting', () => {
    render(<Greeting name="test" />);
    const greeting = screen.getByText(/bienvenido/i);
    const name = screen.getByText(/test/i);
    expect(greeting).toBeOnTheScreen();
    expect(name).toBeOnTheScreen();
  });
});
