import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Business = ({ business }) => {
  return (
    <Box
      mt={10}
      maxW="xs"
      borderWidth="2px"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={business.image} boxSize="xs" />

      <Box p="4">
        <Box>
          <Stack direction="row" display="flex" alignItems="baseline">
            <Badge borderRadius="md" px="2" colorScheme="blue">
              {business.category}
            </Badge>

            <Text color="gray.300" fontSize="sm">
              &bull;
            </Text>
            <Badge borderRadius="md" px="2" colorScheme="green">
              {business.price}
            </Badge>
          </Stack>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {business.name}
        </Box>

        <Box>
          <Box>
            <Box color="gray.600" fontSize="sm">
              {business.address}
            </Box>
            <Box color="gray.600" fontSize="sm">
              {business.city}, {business.state} {business.zipCode}
            </Box>
          </Box>

          <Box display="flex" alignItems="baseline" mt="2">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < business.rating ? 'blue.400' : 'gray.400'}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {business.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Business;
