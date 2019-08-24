import React, { Component } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const Resultspeople = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class Results extends Component{
  render(){
    return(
      <Resultspeople>

        <Card bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Header>{this.props.name && <h2>{this.props.name}</h2>}</Card.Header>
            <Card.Body>
              <Card.Text>
                {this.props.eye_color &&<h5>Eye Color | {this.props.eye_color}</h5>}
                {this.props.hair_color &&<h5>Hair Color | {this.props.hair_color}</h5>}
                {this.props.height &&<h5>Height | {this.props.height}cm</h5>}
                {this.props.skin_color &&<h5>Skin Color | {this.props.skin_color}</h5>}
                {this.props.error &&<h3>Error! {this.props.error}</h3>}
              </Card.Text>
            </Card.Body>
        </Card>

      </Resultspeople>
    );
  }
}

export default Results;
