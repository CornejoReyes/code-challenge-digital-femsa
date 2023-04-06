import { Box, Center, Spinner, Text } from 'native-base';
import { formatNumberAsQuantity } from '../../../../utils/numbers';
import { capitalize } from '../../../../utils/string';

export interface Props {
  title: string;
  points: number;
  loading: boolean;
}

export default function Points({ title, points, loading }: Props) {
  return (
    <Box py="12" rounded="2xl" bg="main" position="relative" w="80%" shadow="4" mx="auto">
      <Text color="white" fontWeight="bold" fontSize="sm" position="absolute" top="4" left="4">
        {capitalize(title)}
      </Text>
      {loading ? (
        <Center>
          <Spinner size="lg" color="white" />
        </Center>
      ) : (
        <Text color="white" fontSize="2xl" fontWeight="bold" mx="auto">
          {formatNumberAsQuantity(points)} pts
        </Text>
      )}
    </Box>
  );
}
