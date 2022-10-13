import React, { Dispatch, SetStateAction } from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import { Div, Input } from './SelectConvectorOptionStyled';
interface IOptions{
  value: number; label: string;
}

interface SelectProps
 {
  selectTool: (arg: boolean)=> void;
  inputValue: number | string;
  disabled: boolean;
  inputChanger: Dispatch<SetStateAction<number>>;
  options: OptionsOrGroups<IOptions, GroupBase<IOptions>> | undefined;
  selectChanger: Dispatch<SetStateAction<number>>;
}
const SelectConverterOption = ({
  selectTool,
  inputValue,
  disabled,
  inputChanger,
  options,
  selectChanger,
}:SelectProps) => {
  const selectUpdateChanger = (e: number) => {
    selectChanger(e);
    selectTool(true);
  };

  return (
    <Div onChange={() => selectTool(true)}>
      <Input
        type="number"
        min="0"
        value={inputValue}
        disabled={disabled}
        onChange={(e: React.SyntheticEvent<HTMLInputElement>)  => inputChanger(+(e.target as HTMLInputElement).value)}
      />
      <Select options={options} onChange={(e) => e && selectUpdateChanger(e.value)} />
    </Div>
  );
};
export default SelectConverterOption;
