import React from 'react';
import Business from './Business';
import { Center, SimpleGrid } from '@chakra-ui/react';

const BusinessList = ({ businesses }) => {
  return (
    <Center>
      <SimpleGrid columns={3} spacing={10}>
        {businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </SimpleGrid>
    </Center>
  );
};

export default BusinessList;
