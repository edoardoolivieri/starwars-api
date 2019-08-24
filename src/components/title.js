import React, { Component } from 'react';
import styled from 'styled-components';

const Titlediv = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    text-align: center;
  }
  p{
    text-align: center;
  }
`

class Title extends Component{
  render(){
    return(
      <Titlediv>
        <h1>Star Wars characters</h1>
        <p>Search by people (Jocasta Nu, Ratts Tyerell, R4-P17 ...) to get their infos.</p>
      </Titlediv>
    );
  }
}

export default Title;
