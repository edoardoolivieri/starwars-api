import React, { Component } from 'react';

class Results extends Component{
  render(){
    return(
      <div>
      <p>{this.props.name}</p>
      <p>{this.props.eye_color}</p>
      <p>{this.props.hair_color}</p>
      <p>{this.props.height}</p>
      <p>{this.props.skin_color}</p>
      </div>
    );
  }
}

export default Results;
