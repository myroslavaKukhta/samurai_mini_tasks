import React from 'react';
import styled from "styled-components";



type TopCarsType = {
    topCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}

export const Body: React.FC<TopCarsType> = (props) => {
    return (
        <StyledBody>
            <table>
                {props.topCars.map((car, index) => (
                    <tbody>
                    <tr key={index}>
                        <td>Manufacturer:</td>
                        <td>{car.manufacturer}</td>
                    </tr>
                    <tr>
                        <td>Model:</td>
                        <td>{car.model}</td>
                    </tr>
                    </tbody>
                ))}
            </table>
        </StyledBody>
    );
};


const StyledBody = styled.div`
  background-color: antiquewhite;
  width: 100vw;
  height: 100%;
`;