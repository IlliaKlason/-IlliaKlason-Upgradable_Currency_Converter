import { useState } from 'react';
import Box from '../../utils';
import HeaderSearchInput from '../HeaderSearchInput/HeaderSearchInput';
import HeaderList from '../HeaderList';


interface ICurrency {
  [key: string]:  number;
}
interface HeaderProps {
  // [key: string]: number;
  currency: ICurrency;
}

const Header = ({ currency }: HeaderProps) => {
  
  const [location, setLocation] = useState<string>('UAH');
  return (
    <Box 
      display="flex"
      justifyContent="space-around"
      bg="#d6d6d6"
      py="16px"
      alignItems="center"
      name="hello"
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
export default Header;
