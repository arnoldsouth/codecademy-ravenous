import {
  // Button,
  // ButtonGroup,
  Card,
  CardBody,
  // CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Business = ({ business }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={business.image} borderRadius="lg" />

        <Stack mt="6" spacing="0">
          <Heading size="md">Living room Sofa</Heading>
          <Text fontSize="small">Address: {business.address}</Text>
          <Text fontSize="small">City: {business.city}</Text>
          <Text fontSize="small">State: {business.state}</Text>
          <Text fontSize="small">Zip Code: {business.zipCode}</Text>
          <Text fontSize="small">Category: {business.category}</Text>
          <Text fontSize="small">Rating: {business.rating}</Text>
          <Text fontSize="small">Review Count: {business.reviewCount}</Text>
        </Stack>
      </CardBody>

      <Divider />

      {/* <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter> */}
    </Card>
  );
};

export default Business;
