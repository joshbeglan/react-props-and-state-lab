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

  handleChangeType = () => {
    console.log("changed")
    //this.setState(filters.type: string)
  }

  onFindPetsClick = () => {
    let url = "/api/pets"
    if (this.state.filters.type === "cat") {
      url += "?type=cat"
    } else if (this.state.filters.type === "dog") {
      url += "?type=dog"
    } else if (this.state.filters.type === "dog") {
      url += "?type=micropig"
    }
    
    fetch(url)
    .then(resp => this.setState({pets: resp}))
  }

  onAdoptPet = (id) => {
    this.state.pets.filter((pet) => {return pet.id === id})
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
              <Filters onChangeType={this.handleChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
