import { render, screen } from '@testing-library/react-native';
import { Text } from 'native-base';
import Providers from '../Providers';

describe('<Providers />', () => {
  it('renders correctly', () => {
    render(
      <Providers>
        <Text>Children</Text>
      </Providers>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
    expect(screen.getAllByText(/children/i)).toHaveLength(1);
  });
});
