import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searched: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemons: data
      })
    })
  }

  handleChange=(e)=>{
    this.setState({
      searched: e.target.value
    })
  }

  addPokemon=(data)=>{
    this.setState({
      pokemons: [...this.state.pokemons, data]
    })
  }

  render() {
   const chosenPokemons =  this.state.pokemons.filter(p => {
              return p.name.includes(this.state.searched)
              })
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={(e) => this.handleChange(e)} />
        <br />
        <PokemonCollection pokemons={chosenPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
