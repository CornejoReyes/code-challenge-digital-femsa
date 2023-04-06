import { StatusBar } from 'native-base';
import { AppNavigator } from './navigation';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fcfcfc" />
      <AppNavigator />
    </>
  );
}
