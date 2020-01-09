import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    let {name,hp,frontUrl, backUrl} = this.state
    fetch('http://localhost:3000/pokemon',
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,hp,frontUrl, backUrl
      })
    })
    .then(resp => resp.json()) 
    .then(data => {
      this.props.addPokemon(data)
    })
    this.setState({
      name: '', hp: '', frontUrl:'', backUrl:''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e)=> this.handleChange(e)} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e)=> this.handleChange(e)} value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => this.handleChange(e)} value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
