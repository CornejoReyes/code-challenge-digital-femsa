import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../features/dashboard';
import { Product } from '../features/products';
import type { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="ProductDetails" component={Product} />
    </Navigator>
  );
}
