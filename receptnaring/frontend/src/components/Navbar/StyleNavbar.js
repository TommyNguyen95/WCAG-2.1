import styled from 'styled-components';
import { Button } from 'reactstrap';

export const StyledNavbar = styled.div`
  display: flex;
  background-color: white;
  height: 55px;
  background: black;
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled.img`
`
export const StyledPositionDiv = styled.div`
  flex: 1;
  justify-content: flex-start;
  margin-left: 10px;
  align-items: center;
  display: flex;
`
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled(Button)`
 font-family: 'Oswald', sans-serif;
 margin-right: 10px;
 background-color: black !important;
 border: 1px solid #fff !important;
 font-size:1.5rem;
 color:white;
 text-decoration:none;
 width:auto;
 border-radius:10px;
 cursor:pointer;
 border: none;
 @import url('https://fonts.googleapis.com/css?family=Oswald:400,500,700&display=swap');
 @media (max-width: 380px){
  font-size:0.85rem;
}

`;