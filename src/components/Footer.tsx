import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            Hello, world!
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
display: flex;
  justify-content: center;
  background-color: deepskyblue;
`
