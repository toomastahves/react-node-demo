import React, { Component } from 'react';

class PetList extends Component {
  render() {
    return(
      <div>
        {this.props.pets.map((pet) =>
          <div key={pet.id}>{pet.name}</div>
        )}
      </div>
    );
  }
}

export default PetList;
