import React from 'react';
import Business from './Business';

const BusinessList = () => {
  let businesses = [];

  for (let i = 0; i < 6; i++) {
    businesses.push(<Business />);
  }

  return <div>{businesses}</div>;
};

export default BusinessList;
