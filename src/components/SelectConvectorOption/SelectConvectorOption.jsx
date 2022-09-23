import Select from 'react-select';
import { Div, Input } from './SelectConvectorOptionStyled';

const SelectConvectorOption = ({
  selectTool,
  inputValue,
  disabled,
  inputChanger,
  options,
  selectChanger,
}) => {
  const selectUpdateChanger = e => {
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
        onChange={e => inputChanger(e.target.value)}
      />
      <Select options={options} onChange={e => selectUpdateChanger(e.value)} />
    </Div>
  );
};
export default SelectConvectorOption;
