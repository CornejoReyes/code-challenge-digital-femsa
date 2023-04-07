import Main from '../Main';
import { render, screen } from '../utils/testing';

describe('<Main />', () => {
  it('renders correctly', () => {
    render(<Main />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
