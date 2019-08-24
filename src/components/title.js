import React, { Component } from 'react';
import styled from 'styled-components';

const Titlediv = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    text-align: center;
    margin: 50px;
  }
  p{
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
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
