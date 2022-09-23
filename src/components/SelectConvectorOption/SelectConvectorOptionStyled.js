import styled from 'styled-components';

export const Div = styled.div`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.lg};
  background: ${p => p.theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 16px;
  &:first-child {
    background-color: blue;
  }
  &:last-child {
    background-color: yellow;
  }
`;
export const Input = styled.input`
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  outline: none;
  box-sizing: border-box;
  padding-left: ${p => p.theme.space[3]}px;
  width: 200px;
  :disabled {
    background-color:  gray;
  }
  :not(:disabled) {
    :hover,
    :focus {
      border-color: #2684ff;
      border-width: 2px;
      padding-left: 7px;
    }
  }
`;
