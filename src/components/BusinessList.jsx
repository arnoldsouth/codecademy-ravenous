import React from 'react';
import Business from './Business';

const BusinessList = ({ businesses }) => {
  return (
    <div>
      {businesses.map((business) => {
        return <Business key={business.name} business={business} />;
      })}
    </div>
  );
};

export default BusinessList;
