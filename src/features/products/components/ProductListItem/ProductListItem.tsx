import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Factory, HStack, Pressable, Text, VStack } from 'native-base';
import { memo, useMemo } from 'react';
import FastImage from 'react-native-fast-image';
import { DashboardNavigationProp } from '../../../../navigation/types';
import { formatNumberAsQuantity } from '../../../../utils/numbers';
import Caret from '../../assets/caret.svg';
import { Product } from '../../types';

const Image = Factory(FastImage);

export interface Props {
  item: Product;
}

function ProductListItem({ item }: Props) {
  const navigation = useNavigation<DashboardNavigationProp>();
  const parsedDate = useMemo(() => parseISO(item.createdAt), [item.createdAt]);
  const formattedDate = useMemo(() => format(parsedDate, "dd 'de' MMMM ',' yyyy", { locale: es }), [parsedDate]);

  const goToDetails = () => navigation.navigate('ProductDetails', { product: item });

  return (
    <Pressable
      flex="1"
      _pressed={{ bg: 'coolGray.100' }}
      p="2"
      rounded="lg"
      onPress={goToDetails}
      accessibilityLabel="pressable item"
    >
      <HStack space="2" alignItems="center" flex="1">
        <Image source={{ uri: item.image }} w={50} h={50} rounded="md" resizeMode={FastImage.resizeMode.cover} />
        <HStack alignItems="center" justifyContent="space-between" flex="1">
          <VStack flex="1.7">
            <Text w="full" fontWeight="bold" fontSize="sm" numberOfLines={1}>
              {item.product}
            </Text>
            <Text fontSize="10px" accessibilityLabel="product date">
              {formattedDate}
            </Text>
          </VStack>
          <HStack alignItems="center" space="2" flex="1" justifyContent="space-between">
            <Text accessibilityLabel="product points">
              <Text fontSize="md" color={item.is_redemption ? 'red.600' : 'green.600'}>
                {item.is_redemption ? '- ' : '+ '}
              </Text>
              {formatNumberAsQuantity(item.points)}
            </Text>
            <Caret width={20} height={20} />
          </HStack>
        </HStack>
      </HStack>
    </Pressable>
  );
}

export default memo(ProductListItem);
