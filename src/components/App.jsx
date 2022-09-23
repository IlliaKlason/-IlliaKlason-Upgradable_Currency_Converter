import { useEffect, useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Box from '../utils';
import NBU_APIRequest from '../API/NBU_API';
import Header from './Header';
import SelectConvector from './SelectConvector';

export const App = () => {
  const [currency, setCurrency] = useState();

  useEffect(() => {
    NBU_APIRequest()
      .then(({ rates }) => setCurrency(rates))
      .catch();
  }, []);

  return (
    <Box maxWidth="1200px" m="auto" minHeight="100vh">
      {currency ? (
        <>
          <Header currency={currency} />
          <SelectConvector currency={currency} title="Currency converter" />
        </>
      ) : (
        <h2>Sorry, something went wrong</h2>
      )}

      <GlobalStyle />
    </Box>
  );
};
