import { useState } from 'react';
import Box from '../../utils';
import HeaderSearchInput from 'components/HeaderSearchInput';

import HeaderList from '../HeaderList';
const Header = ({ currency }) => {
  const [location, setLocation] = useState('UAH');

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      bg="#d6d6d6"
      py="16px"
      alignItems="center"
    >
      <HeaderSearchInput
        locationChanger={setLocation}
        currency={currency}
        location={location}
      />
      <HeaderList currency={currency} location={location} />
    </Box>
  );
};
export default Header
