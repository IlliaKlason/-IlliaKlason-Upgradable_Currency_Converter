import { useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Box from '../utils';
import NBU_APIRequest from '../API/NBU_API';
import Header from './Header';
import SelectConverter from './SelectConverter';



interface ICurrency {
  [key: string]:  number;
}
export const App = () => {
  const [currency, setCurrency] = useState<ICurrency>({});

  try {
    const getCurrencies = async () => {
      const { rates } = await NBU_APIRequest();
      delete rates.RUB;
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
      <SelectConverter
        currency={currency}
        title={currency ? 'Currency converter' : 'Sorry, something went wrong'}
      />
      <GlobalStyle />
    </Box>
  );
};
