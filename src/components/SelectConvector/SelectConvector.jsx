import { useEffect, useState } from 'react';

import Box from '../../utils';
import SelectConvectorOption from 'components/SelectConvectorOption';
import { Title } from './SelectConvectorStyled';

const SelectConvector = ({ title, currency }) => {
  const [leftValue, setLeftValue] = useState(0);
  const [rightValue, setRightValue] = useState(0);
  const [leftCurrency, setLeftCurrency] = useState(0);
  const [rightCurrency, setRightCurrency] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [leftClick, setLeftClick] = useState(false);
  const [rightClick, setRightClick] = useState(false);

  const optionsUpdate = () => {
    if (currency) {
      //   const keys = Object.keys(currency);
      //   //   filter(item => item === 'RUB');
      //   const values = Object.values(currency);
      //   const options = [];
      //   for (let i = 0; i < keys.length; i += 1) {
      //     options.push({ value: values[i], label: keys[i] });
      //   }
      const options = [];
      for (let key in currency) {
        options.push({ value: currency[key], label: key });
      }
      return options.filter(item => item.label !== 'RUB');
    }
  };
  const options = optionsUpdate();

  useEffect(() => {
    if (rightCurrency && leftCurrency) {
      setIsSelected(true);
    }
  }, [leftCurrency, rightCurrency]);

  useEffect(() => {
    if (isSelected && leftClick) {
      setRightValue(((leftValue / leftCurrency) * rightCurrency).toFixed(2));
      setLeftClick(false);
    }
  }, [isSelected, leftClick, leftCurrency, leftValue, rightCurrency]);

  useEffect(() => {
    if (isSelected && rightClick) {
      setLeftValue(((rightValue / rightCurrency) * leftCurrency).toFixed(2));
      setRightClick(false);
    }
  }, [
    isSelected,
    leftClick,
    leftCurrency,
    rightClick,
    rightCurrency,
    rightValue,
  ]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      py="64px"
      bg="#f6f6f6"
      minHeight="calc(100vh - 77px);"
    >
      <Title>{title}</Title>
      <Box
        display="flex"
        px="16px"
        justifyContent="space-between"
        gridGap="32px"
        m="0 auto"
      >
        <SelectConvectorOption
          selectTool={setLeftClick}
          inputValue={leftValue}
          disabled={!isSelected}
          inputChanger={setLeftValue}
          options={options}
          selectChanger={setLeftCurrency}
        />
        <SelectConvectorOption
          selectTool={setRightClick}
          inputValue={rightValue}
          disabled={!isSelected}
          inputChanger={setRightValue}
          options={options}
          selectChanger={setRightCurrency}
        />
      </Box>
    </Box>
  );
};

export default SelectConvector;
