import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Box, Button, HStack, Text } from 'native-base';
import { useMemo, useState } from 'react';
import { ProductList, getProducts } from '../../products';
import { Greeting, Points } from '../components';

type Transaction = 'all' | 'redeemed' | 'accumulated';

export default function Dashboard() {
  const [today] = useState<Date>(new Date());
  const [transactionType, setTransactionType] = useState<Transaction>('all');
  const formattedDate = useMemo(() => format(today, 'MMMM', { locale: es }), [today]);
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  const products = useMemo(
    () =>
      transactionType !== 'all'
        ? data?.filter(product => {
            if (transactionType === 'accumulated') {
              return !product.is_redemption;
            }
            return product.is_redemption;
          })
        : data,
    [transactionType, data],
  );

  const points = useMemo(
    () =>
      products?.reduce((total, product) => {
        if (product.is_redemption) {
          return total - product.points;
        }
        return total + product.points;
      }, 0),
    [products],
  );

  const handleTransactionFilter = (type: Transaction) => () => {
    setTransactionType(type);
  };

  return (
    <Box p="4" flex="1">
      <Greeting name="Fernando Cornejo" />
      <Box my="6">
        <Text fontSize="xs" fontWeight="bold" color="gray.500" mb="4">
          TUS PUNTOS
        </Text>
        <Points loading={isLoading} title={formattedDate} points={points!} />
      </Box>
      <Box flex="1">
        <Text fontSize="xs" fontWeight="bold" color="gray.500" mb="4">
          TUS MOVIMIENTOS
        </Text>
        <Box bg="white" rounded="lg" flex="1" p="2" mb="4">
          <ProductList data={products || []} />
        </Box>
        <HStack space="4">
          {transactionType === 'all' ? (
            <>
              <Button flex="1" variant="main" onPress={handleTransactionFilter('accumulated')}>
                Ganados
              </Button>
              <Button flex="1" variant="main" onPress={handleTransactionFilter('redeemed')}>
                Canjeados
              </Button>
            </>
          ) : (
            <Button flex="1" variant="main" onPress={handleTransactionFilter('all')}>
              Todos
            </Button>
          )}
        </HStack>
      </Box>
    </Box>
  );
}
