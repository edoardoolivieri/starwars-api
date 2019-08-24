import React, { Component } from 'react';

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
      <div>
        <form onSubmit={this.props.getStarWars}>
          <input type="text" name="search" placeholder="City" />
          <button>
            search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
