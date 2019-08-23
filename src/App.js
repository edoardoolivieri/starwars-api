import React, { Component } from 'react';

import Titles from "./components/title";
import Search from "./components/search";

class App extends Component{
  state = {
  }

  getStarWars = async (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    const api_call = await fetch(`https://swapi.co/api/people/?search=${search}`);
    const data = await api_call.json();
    console.log(data);
  }
  render(){
    return(
      <div>
        <Titles />
        <Search getStarWars={this.getStarWars}/>
      </div>
    );
  }
}

export default App;
