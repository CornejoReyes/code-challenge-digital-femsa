import '@testing-library/jest-native/extend-expect';
import axios from 'axios';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android', // or 'ios'
  select: jest.fn(),
}));
jest.mock('axios');
(axios.create as jest.MockedFunction<typeof axios.create>).mockImplementation(() => axios);
