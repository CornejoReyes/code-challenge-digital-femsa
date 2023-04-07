import { render, screen } from '../../../../../utils/testing';
import Points from '../Points';

describe('<Points />', () => {
  it('renders correctly', () => {
    render(<Points loading={false} title="Test" points={100} />);
    const points = screen.getByText('100.00 pts');
    const title = screen.getByText(/test/i);
    expect(points).toBeOnTheScreen();
    expect(title).toBeOnTheScreen();
  });

  it('shows a spinner if loading instead of points', () => {
    render(<Points loading title="Test" points={100} />);
    const title = screen.getByText(/test/i);
    const spinner = screen.getByLabelText(/spinner/i);
    expect(title).toBeOnTheScreen();
    expect(spinner).toBeOnTheScreen();
  });
});
