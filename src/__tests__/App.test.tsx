import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  it('should render correclty', () => {
    render(<App />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
