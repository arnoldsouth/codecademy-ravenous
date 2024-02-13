import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  List,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = ({ searchYelpBusinesses }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchLocation, setSearchLocation] = useState();
  const [sortBy, setSortBy] = useState('best_match');

  // const getSortByChoice = (sortByOption) => {
  //   if (sortBy === sortByOption) {
  //     return;
  //   }
  // };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    searchYelpBusinesses(searchInput, searchLocation, sortBy);
    console.log({
      searchInput,
      searchLocation,
      sortBy,
    });
  };

  // const renderSortByOptions = () => {
  //   return Object.keys(sortByOptions).map((sortByOption) => {
  //     let optionValue = sortByOptions[sortByOption];
  //     return (
  //       <li key={optionValue} onClick={() => handleSortByChange(optionValue)}>
  //         {sortByOption}
  //       </li>
  //     );
  //   });
  // };

  return (
    <Center>
      <Box>
        {/* <List>{renderSortByOptions()}</List> */}

        <RadioGroup onChange={setSortBy} value={sortBy}>
          <Stack direction="row">
            <Radio value="best_match">Best Match</Radio>
            <Radio value="rating">Highest Rating</Radio>
            <Radio value="review_count">Most Reviewed</Radio>
          </Stack>
        </RadioGroup>

        <form onSubmit={handleSearchSubmit}>
          <FormControl>
            <FormLabel>Search...</FormLabel>
            <Input
              type="text"
              width="auto"
              placeholder="Search"
              size="sm"
              onChange={handleSearchInputChange}
            />

            <FormLabel>Zip Code</FormLabel>
            <Input
              type="text"
              width="auto"
              placeholder="Location"
              size="sm"
              onChange={handleSearchLocationChange}
            />

            <Button type="submit" colorScheme="blue">
              Search
            </Button>
          </FormControl>
        </form>
      </Box>
    </Center>
  );
};

export default SearchBar;
