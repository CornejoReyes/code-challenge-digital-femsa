import { memo } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Product } from '../../types';
import { ProductListItem } from '../ProductListItem';

export interface Props {
  data: Product[];
}

function ProductList({ data }: Props) {
  const renderItem = ({ item }: ListRenderItemInfo<Product>) => {
    return <ProductListItem item={item} />;
  };

  const getUniqueKey = (item: Product) => item.product + item.id;

  return <FlatList data={data} renderItem={renderItem} keyExtractor={getUniqueKey} removeClippedSubviews />;
}

export default memo(ProductList);
