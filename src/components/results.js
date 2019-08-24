import React, { Component } from 'react';
import styled from 'styled-components';

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
        {this.props.name && <p>Name: {this.props.name}</p>}
        {this.props.eye_color &&<p>Eye Color: {this.props.eye_color}</p>}
        {this.props.hair_color &&<p>Hair Color: {this.props.hair_color}</p>}
        {this.props.height &&<p>Height: {this.props.height}cm</p>}
        {this.props.skin_color &&<p>Skin Color: {this.props.skin_color}</p>}
        {this.props.error &&<p>Error! {this.props.error}</p>}
      </Resultspeople>
    );
  }
}

export default Results;
