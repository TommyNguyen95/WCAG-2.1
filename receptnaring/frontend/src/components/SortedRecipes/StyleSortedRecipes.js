import styled from 'styled-components';
import { Col, Row, CardBody, Spinner, Card } from 'reactstrap';


export const StyledCol = styled(Col)`
  &:hover > div > div > a > p{
    text-decoration: underline !important;
  }
`
export const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledCard = styled(Card) `
  margin-bottom: 30px;
  border:none !important;
`

export const StyledCardBody = styled(CardBody)`
  padding: 0px !important;
  display:flex;
`

export const StyledCardTitle = styled.p`
  height: 65px;
  padding-top: 15px;
  font-weight:bold;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  color:black;
  text-align: center;
`

export const StyledSpinner = styled(Spinner)`
  display:flex !important;
  justify-content: center;
  color:green;
`

export const StyledH3 = styled.h3`
  text-align:center;
  font-size: 3rem;
  letter-spacing: -3px;
  padding-bottom: 15px;
  font-family: 'Open Sans', sans-serif;
`