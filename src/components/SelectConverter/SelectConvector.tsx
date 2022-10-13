import { useEffect, useState } from 'react';
import { GroupBase, OptionsOrGroups } from 'react-select';

import Box from '../../utils';
import SelectConverterOption from '../SelectConverterOption';
import { Title } from './SelectConvectorStyled'

interface ICurrency {
  [key: string]:  number;
}
interface ISelectConverterProps {
  title: string;
  currency: ICurrency
}
const SelectConverter = ({ title, currency }:ISelectConverterProps) => {
  const [leftValue, setLeftValue] = useState<number>(0);
  const [rightValue, setRightValue] = useState<number>(0);
  const [leftCurrency, setLeftCurrency] = useState<number>(0);
  const [rightCurrency, setRightCurrency] = useState<number>(0);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [leftClick, setLeftClick] = useState<boolean>(false);
  const [rightClick, setRightClick] = useState<boolean>(false);


  interface IOptionsUpdate {
    value: number;
    label: string;
  }

  const optionsUpdate = ():OptionsOrGroups<IOptionsUpdate, GroupBase<IOptionsUpdate>> | undefined  =>  {
    if (currency) {
      // const keys = Object.keys(currency);
      // //   filter(item => item === 'RUB');
      // const values = Object.values(currency);
      // const options = [];
      // for (let i = 0; i < keys.length; i += 1) {
      //   options.push({ value: values[i], label: keys[i] });
      // }
      const options = [];
      for (let key in currency) {
        options.push({ value: currency[key], label: key });
      }
      
      return (
        options
          // .filter(item => item.label !== 'RUB')
          .sort((a, b) => a.label.localeCompare(b.label))
      );
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
      setRightValue(Number(((leftValue / leftCurrency) * rightCurrency).toFixed(2)));
      setLeftClick(false);
    }
  }, [isSelected, leftClick, leftCurrency, leftValue, rightCurrency]);

  useEffect(() => {
    if (isSelected && rightClick) {
      setLeftValue(Number(((rightValue / rightCurrency) * leftCurrency).toFixed(2)));
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
        <SelectConverterOption
          selectTool={setLeftClick}
          inputValue={leftValue}
          disabled={!isSelected}
          inputChanger={setLeftValue}
          options={options}
          selectChanger={setLeftCurrency}
        />
        <SelectConverterOption
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

export default SelectConverter;
