import { render, screen } from '../../utils/testing';
import AppNavigator from '../AppNavigator';

describe('<AppNavigator />', () => {
  it('renders correctly', () => {
    render(<AppNavigator />);
    expect(screen.toJSON()).toMatchSnapshot();
    expect(screen.getByText(/bienvenido/i)).toBeOnTheScreen();
  });
});
