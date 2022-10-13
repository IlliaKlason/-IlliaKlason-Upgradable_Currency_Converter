import styled, { StyledComponent } from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
} from 'styled-system';

interface BoxProps {
  display: number;
  color: string;
  space: string;
  layout: string;
  flexbox: string;
  grid: string;
  background: string;
  border: string;
  position: string;
}
// React.FunctionComponent<BoxProps>
export const Box: StyledComponent<'div', BoxProps, any> = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);
export default Box;
