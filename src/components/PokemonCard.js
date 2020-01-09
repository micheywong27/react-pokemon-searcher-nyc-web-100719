import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    frontCard: true
  }
  
  handleClick=()=>{
  this.setState({
    frontCard: !this.state.frontCard
  })
  }

  render() {

    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
          {this.state.frontCard ? <img src={this.props.pokemon.sprites.front} alt="something" /> : <img src={this.props.pokemon.sprites.back} alt="something"/> }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
