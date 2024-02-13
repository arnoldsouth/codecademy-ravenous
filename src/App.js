import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { YelpApi } from './utils/YelpApi';

// const business = {
//   image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'Touka Cafe',
//   address: '3126 College Ave',
//   city: 'Berkeley',
//   state: 'CA',
//   zipCode: '94705',
//   category: 'Coffee & Tea',
//   rating: 5.0,
//   reviewCount: 50,
// };

// const businesses = [business, business, business, business, business, business];

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelpBusinesses = async (searchInput, searchLocation, sortBy) => {
    const businesses = await YelpApi.search(
      searchInput,
      searchLocation,
      sortBy
    );
    setBusinesses(businesses);
  };

  return (
    <ChakraProvider>
      <SearchBar searchYelpBusinesses={searchYelpBusinesses} />
      <BusinessList businesses={businesses} />
    </ChakraProvider>
  );
};

export default App;
