import React, { Component } from 'react';

import './style/App.scss';

import Titles from "./components/title";
import Search from "./components/search";
import Results from "./components/results";

class App extends Component{
  state = {
    name: undefined,
    eye_color: undefined,
    hair_color: undefined,
    height: undefined,
    skin_color: undefined,
    error: undefined
  }

  getStarWars = async (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    const api_call = await fetch(`https://swapi.co/api/people/?search=${search}`);
    const data = await api_call.json();
    if (search){
      this.setState({
        name: data.results[0].name,
        eye_color: data.results[0].eye_color,
        hair_color: data.results[0].hair_color,
        height: data.results[0].height,
        skin_color: data.results[0].skin_color,
        error: ""
      })
    } else{
      this.setState({
        name: undefined,
        eye_color: undefined,
        hair_color: undefined,
        height: undefined,
        skin_color: undefined,
        error: "Please enter a valid StarWars name."
      })
    }
  }
  render(){
    return(
      <div>
        <Titles />
        <Search getStarWars={this.getStarWars}/>
        <Results
          name={this.state.name}
          eye_color={this.state.eye_color}
          hair_color={this.state.hair_color}
          height={this.state.height}
          skin_color={this.state.skin_color}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
