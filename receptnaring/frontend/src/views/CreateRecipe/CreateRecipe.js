import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { StyledRow } from './StyledCreateRecipe';

class CreateRecipe extends Component {

  render() {
    return (
      <Container>
        <StyledRow className="text-center">
          <Col md="6" sm="12">HELLO</Col>
          <Col md="6" sm="12">HELLO</Col>
        </StyledRow>
        <Row className="text-center">
          <Col md="6" sm="12">HELLO</Col>
          <Col md="6" sm="12">HELLO</Col>
        </Row>
      </Container>
    )
  }
};

export default CreateRecipe;