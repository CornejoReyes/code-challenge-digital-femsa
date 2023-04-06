import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { AspectRatio, Box, Button, Factory, StatusBar, Text, useTheme } from 'native-base';
import FastImage from 'react-native-fast-image';
import { RootStackParamList } from '../../../navigation/types';
import { formatNumberAsQuantity } from '../../../utils/numbers';

const Image = Factory(FastImage);

export interface Props extends NativeStackScreenProps<RootStackParamList, 'ProductDetails'> {}

export default function Product({ route, navigation }: Props) {
  const theme = useTheme();
  const product = route.params.product;
  const parsedDate = parseISO(product.createdAt);
  return (
    <>
      <StatusBar backgroundColor={theme.colors.secondary} />
      <Box flex="1">
        <Box bg="secondary" h="10%" justifyContent="flex-end" p="4">
          <Text fontWeight="bold" fontSize="lg">
            {product.product}
          </Text>
        </Box>
        <Box flex="1" p="4">
          <AspectRatio ratio={1} mb="4">
            <Box bg="white" rounded="xl" shadow="4" p="8">
              <Image w="full" h="full" source={{ uri: product.image }} />
            </Box>
          </AspectRatio>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb="4">
            Detalles del producto:
          </Text>
          <Text fontWeight="bold" mb="4">
            Comprado el {format(parsedDate, "dd 'de' MMMM ',' yyyy", { locale: es })}
          </Text>
          <Text fontSize="xs" fontWeight="bold" color="gray.500" mb="4">
            Con esta compra {product.is_redemption ? 'canjeaste' : 'acumulaste'}:
          </Text>
          <Text fontWeight="bold" mb="4">
            {formatNumberAsQuantity(product.points)} puntos
          </Text>
        </Box>
        <Button variant="main" m="4" onPress={navigation.goBack}>
          Aceptar
        </Button>
      </Box>
    </>
  );
}
