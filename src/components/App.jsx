import { useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Box from '../utils';
import NBU_APIRequest from '../API/NBU_API';
import Header from './Header';
import SelectConvector from './SelectConvector';

export const App = () => {
  const [currency, setCurrency] = useState(null);

  try {
    const getCurrencies = async () => {
      const { rates } = await NBU_APIRequest();
      setCurrency(rates);
    };
    useEffect(() => {
      getCurrencies();
      // eslint-disable-next-line
    }, []);
  } catch (error) {
    console.log(error);
  }

  return (
    <Box maxWidth="1200px" m="auto" minHeight="100vh">
      <Header currency={currency} />
      <SelectConvector
        currency={currency}
        title={currency ? 'Currency converter' : 'Sorry, something went wrong'}
      />
      <GlobalStyle />
    </Box>
  );
};
