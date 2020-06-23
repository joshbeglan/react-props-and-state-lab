import React from 'react'

class Pet extends React.Component {
  render() {
    let {age, weight, type, name, isAdopted, gender} = this.props.pet
    // console.log(age, weight)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */
              gender === "female" ? '♀' : '♂'
            }
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted 
          ? 
          <button className="ui disabled button">Already adopted</button>
          : 
          <button onClick={() => this.props.onAdoptPet2(this.props.pet.id)} className="ui primary button">Adopt pet</button>
          }        
        </div>
      </div>
    )
  }
}

export default Pet
