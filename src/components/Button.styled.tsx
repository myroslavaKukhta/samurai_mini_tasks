import styled from "styled-components";
import { MyAnimation } from "../styles/animations/animations";

type styledBtnPropsType = {
  color?: string
  fontSize?: string
}

export const StyledBtn = styled.button<styledBtnPropsType>`
border: none;
  background-color: ${props => props.color || "orange"};
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  font-size: ${props => props.fontSize};


  &:hover {
background-color: #085233;
  }
`

export const SuperBtn= styled(StyledBtn)`
  border-radius: 5px;
  background-color: red;
  color: greenyellow;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
  
`