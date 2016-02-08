import React from 'react';
import '../styles/createpetform.css';
import { connect } from 'react-redux';
import { createPet } from '../../actions/createPet';

export const CreatePetForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameNode = e.target.querySelector('[name="newpet"]');
    const ageNode = e.target.querySelector('[name="age"]');
    const speciesNode = e.target.querySelector('[name="species"]');
    const homestatusNode = e.target.querySelector('[name="homestatus"]');
    const pet = {
      name: nameNode.value,
      age: ageNode.value,
      species: speciesNode.value,
      homestatus: homestatusNode.value
    };
    props.dispatch(createPet(pet));
    nameNode.value = '';
    ageNode.value = '';
    speciesNode.value = '';
    homestatusNode.value = '0';
  };
  return (
    <div className='create-pet-form-wrap'>
      <form onSubmit={handleSubmit} className='pure-form'>
        <fieldset>
          <div className='create-pet-input-wrap'>
            <div className='pure-control-group'>
              <input className='selectbox-aligned' name='newpet' type='text' placeholder={'Name'} />
            </div>
            <div className='pure-control-group'>
              <input className='selectbox-aligned' name='age' type='text' placeholder={'Age'} />
            </div>
            <div className='pure-control-group'>
              <select className='selectbox-aligned' name='species'>
                <option value=''>{''}</option>
                <option value='cat'>{'Cat'}</option>
                <option value='dog'>{'Dog'}</option>
                <option value='pony'>{'Pony'}</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <select className='selectbox-aligned' name='homestatus'>
                <option value='0'>{'Homeless'}</option>
                <option value='1'>{'Has home'}</option>
              </select>
            </div>
            <div className='pure-control-group'>
              <button className='pure-input-1 pure-button' type='submit'>{'Add'}</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};


export default connect()(CreatePetForm);
