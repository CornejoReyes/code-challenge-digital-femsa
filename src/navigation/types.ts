import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '../features/products/types';

export type RootStackParamList = {
  Dashboard: undefined;
  ProductDetails: { product: Product };
};

export type DashboardNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;
export type ProductDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;
