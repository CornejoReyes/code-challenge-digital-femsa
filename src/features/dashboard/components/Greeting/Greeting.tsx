import { Box, Text } from 'native-base';

export interface Props {
  name: string;
}

export default function Greeting({ name }: Props) {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="lg">
        Bienvenido de vuelta!
      </Text>
      <Text>{name}</Text>
    </Box>
  );
}
