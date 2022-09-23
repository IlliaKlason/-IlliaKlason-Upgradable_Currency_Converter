import styled from "styled-components";
import { DiApple } from 'react-icons/di';

export const Title = styled.h2`
color: yellow;
font-size: ${p => p.theme.fontSizes.l};
background: blue;
padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.lg};
`

export const Input = styled.input`
height: 45px;
min-width: 205px;
border-radius: ${p => p.theme.radii.lg} 0 0 ${p => p.theme.radii.lg} ;
padding: ${p => p.theme.space[3]}px;
border: ${p => p.theme.borders.none};
outline: none;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
`

export const Button = styled.button`
height: 45px;
border-radius: 0 ${p => p.theme.radii.lg} ${p => p.theme.radii.lg} 0 ;
border: ${p => p.theme.borders.none};
`

export const Icon = styled(DiApple)`
   font-size: ${p => p.theme.fontSizes.l};
    transition:transform linear 500ms ;
   :hover{
    transform: scale(1.3);
   }
`