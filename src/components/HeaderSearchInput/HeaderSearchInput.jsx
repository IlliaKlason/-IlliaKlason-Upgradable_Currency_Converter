import { useRef } from 'react';

import Box from '../../utils';
import { Icon, Button, Input, Title } from './HeaderSearchInputStyled';

const HeaderSearchInput = ({ locationChanger, currency, location }) => {
  const locationInput = useRef();

  const handleLocationChanger = e => {
    e.preventDefault();
    const curr = locationInput.current.value.toUpperCase();
    const currencyList = Object.keys(currency);
    currencyList.includes(curr)
      ? locationChanger(curr)
      : alert('Currency not found, please try again.');
    locationInput.current.value = '';
  };

  return (
    <Box
      as="form"
      onSubmit={handleLocationChanger}
      autoComplete="off"
      display="flex"
      gridGap="16px"
      alignItems="center"
    >
      <Title>County currency code: {location}</Title>
      <Box display="flex">
        <Input
          id="locationInput"
          type="text"
          ref={locationInput}
          placeholder="Enter currency code"
          minLength="3"
          maxLength="3"
        />
        <Button type="submit">
          <Icon />
        </Button>
      </Box>
    </Box>
  );
};
export default HeaderSearchInput;
