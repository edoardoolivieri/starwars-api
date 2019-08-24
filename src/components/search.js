import React, { Component } from 'react';
import styled from 'styled-components';

const Searchform = styled.div`
  display: flex;
  justify-content: center;
  width: 100%
`

class Search extends Component{
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  handleUpdate = (event) => {
    //Change the state of term
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value);
  };
  render(){
    return(
      <Searchform>
        <form onSubmit={this.props.getStarWars} className="form">
          <input type="text" name="search" placeholder="......" className="form-input"/>
          <button className="button">
            search
          </button>
        </form>
      </Searchform>
    );
  }
}

export default Search;
