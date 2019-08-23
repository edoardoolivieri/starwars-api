import React, { Component } from 'react';

import Titles from "./components/title";
import Search from "./components/search";
import Results from "./components/results";

class App extends Component{
  state = {
    characters: undefined,
    traits: undefined,
    films: undefined,
  }

  getStarWars = async (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    const api_call = await fetch(`https://swapi.co/api/people/?search=${search}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      characters: data.results[0].name,
      traits: data.results[0].eye_color,
      films: data.results[0].films,
    })
  }
  render(){
    return(
      <div>
        <Titles />
        <Search getStarWars={this.getStarWars}/>
        <Results
          characters={this.state.characters}
          traits={this.state.traits}
          films={this.state.films}
        />
      </div>
    );
  }
}

export default App;
