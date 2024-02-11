import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const business = {
  image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Touka Cafe',
  address: '3126 College Ave',
  city: 'Berkeley',
  state: 'CA',
  zipCode: '94705',
  category: 'Coffee & Tea',
  rating: 5.0,
  reviewCount: 50,
};

const Business = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={business.image} borderRadius="lg" />

        <Stack mt="6" spacing="0">
          <Heading size="md">Living room Sofa</Heading>
          <Text color="blue.500" fontSize="small">
            Address: {business.address}
          </Text>
          <Text color="blue.500" fontSize="small">
            City: {business.city}
          </Text>
          <Text color="blue.500" fontSize="small">
            State: {business.state}
          </Text>
          <Text color="blue.500" fontSize="small">
            Zip Code: {business.zipCode}
          </Text>
          <Text color="blue.500" fontSize="small">
            Category: {business.category}
          </Text>
          <Text color="blue.500" fontSize="small">
            Rating: {business.rating}
          </Text>
          <Text color="blue.500" fontSize="small">
            Review Count: {business.reviewCount}
          </Text>
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
