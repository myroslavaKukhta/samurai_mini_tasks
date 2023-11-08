import React from 'react';
import {Menu} from "./Menu.styled";
import styled from "styled-components";
import {StyledBtn, SuperBtn} from "./Button.styled";
import {Link} from "./Link.styled";


type HeaderType = {
    title?: string;
}
export const Header: React.FC<HeaderType> = (props) => {
    return (
        <div>
            <Menu>
                <StyledTitle>{props.title}</StyledTitle>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
                    <StyledBtn as={Link} href={"#"}>LinkComponent
                    </StyledBtn >
                    <StyledBtn as="a" href={"#"}>Link
                    </StyledBtn >
                    <StyledBtn color="blue" fontSize={"20px"}>hello
                    </StyledBtn >
                    <SuperBtn>Super</SuperBtn>
            </Menu>
        </div>
    );
};

const StyledTitle = styled.h1`
    color: blue;
  font-size: 14px;
    `
