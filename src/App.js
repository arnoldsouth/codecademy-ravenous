import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <ChakraProvider>
      <SearchBar />
      <BusinessList />
    </ChakraProvider>
  );
}

export default App;
