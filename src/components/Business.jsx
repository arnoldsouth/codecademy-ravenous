import { StarIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  // Button,
  // ButtonGroup,
  Card,
  CardBody,
  // CardFooter,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Business = ({ business }) => {
  return (
    <Box
      mt={10}
      maxW="xs"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={business.image} boxSize="xs" />

      <Box p="4">
        <Box>
          <Badge borderRadius="full" px="2" colorScheme="blue">
            {business.category}
          </Badge>
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

        <Box
          display="flex"
          justifyContent={'space-between'}
          alignItems="baseline"
        >
          <Box>
            <Box color="gray.600" fontSize="sm">
              {business.address}
            </Box>
            <Box color="gray.600" fontSize="sm">
              {business.city}, {business.state} {business.zipCode}
            </Box>
            {/* <Box color="gray.600" fontSize="sm">
              {business.state}
            </Box>
            <Box color="gray.600" fontSize="sm">
              {business.zipCode}
            </Box> */}
            {/* <Box color="gray.600" fontSize="sm">
              {business.displayAddress}
            </Box> */}
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < business.rating ? 'blue.500' : 'gray.400'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {business.reviewCount} reviews
          </Box>
        </Box>

        {/* <Box>
            <Box color="gray.600" fontSize="sm">
              {business.category}
            </Box>
            <Box color="gray.600" fontSize="sm">
              {business.rating}
            </Box>
            <Box color="gray.600" fontSize="sm">
              {business.reviewCount}
            </Box>
          </Box> */}
      </Box>
    </Box>
  );
};

export default Business;
