import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  //dropdown-menu
  handleChangeType = (e) => {
    console.log("changed")
    this.setState({filters:{type: e.target.value}})
  }

  onFindPetsClick = () => {
    let url = "/api/pets"
    if (this.state.filters.type === "cat") {
      url += "?type=cat"
    } else if (this.state.filters.type === "dog") {
      url += "?type=dog"
    } else if (this.state.filters.type === "micropig") {
      url += "?type=micropig"
    }
    
    fetch(url)
    .then(resp => resp.json())
    .then(json => this.setState({pets: json}) )
  }

  onAdoptPet = (id) => {
    let filteredPet = this.state.pets.filter(pet => pet.id === id)
    filteredPet[0].isAdopted = true

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.handleChangeType} 
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
