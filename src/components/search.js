import React, { Component } from 'react';

class Search extends Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.getStarWars}>
          <input type="text" name="search" placeholder="City"/>
          <button>
            search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
