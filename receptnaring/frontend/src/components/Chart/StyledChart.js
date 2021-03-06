import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

export const StyledChart = styled(Doughnut)`

`;

export const StyledWrapper = styled.div`
margin-top:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

export const StyledSpan = styled.div`
padding:2px;
height:20px;
width:20px;
display:flex;
flex-direction:row;
background-color:${props => props.color};
border-radius:50%;
`;


export const StyledLi = styled.li`
margin:5px;
display:flex;
flex-direction:row;
align-items:center;

`