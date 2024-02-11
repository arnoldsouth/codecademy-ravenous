import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

const sortBy = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = () => {
  const renderSortBy = () => {
    return Object.keys(sortBy).map((key) => {
      let value = sortBy[key];
      return <li key={value}>{key}</li>;
    });
  };

  return (
    <div>
      {/* <ul>{renderSortBy()}</ul> */}

      <RadioGroup onChange={renderSortBy} name="sort_by">
        <Stack spacing={5} direction="row">
          <Radio value="best_match">Best Match</Radio>
          <Radio value="rating">Highest Rated</Radio>
          <Radio value="review_count">Most Reviewed</Radio>
        </Stack>
      </RadioGroup>

      <FormControl>
        <FormLabel>Search...</FormLabel>
        <Input type="text" width="auto" />
        <FormHelperText>Input business search.</FormHelperText>

        <FormLabel>Zip Code</FormLabel>
        <Input type="number" width="auto" />
        <FormHelperText>Input zip code search.</FormHelperText>

        <Button colorScheme="blue">Search</Button>
      </FormControl>
    </div>
  );
};

export default SearchBar;
