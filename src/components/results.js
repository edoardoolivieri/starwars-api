import React, { Component } from 'react';

class Results extends Component{
  render(){
    return(
      <div>
      <p>{this.props.characters}</p>
      <p>{this.props.traits}</p>
      <p>{this.props.films}</p>
      </div>
    );
  }
}

export default Results;
