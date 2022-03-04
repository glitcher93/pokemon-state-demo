import React from 'react';
import './App.scss';
import Main from './components/Main/Main';
import pokedex from './data/pokedex.json'

class App extends React.Component {
  state = {
    pokedex: pokedex,
    currentPokemon: pokedex[0]
  }
  
  handlePokemonChange = (id) => {
    const newPokemon = this.state.pokedex.find(pokemon => id === pokemon.id)
    this.setState({
      currentPokemon: newPokemon
    })
  }

  render() {
    return (
      <Main 
      pokedex={this.state.pokedex}
      currentPokemon={this.state.currentPokemon}
      handlePokemonChange={this.handlePokemonChange}
      />
    )
  }
}

export default App;
