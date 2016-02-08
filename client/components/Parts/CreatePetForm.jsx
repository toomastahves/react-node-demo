import React from 'react';
import '../styles/createpetform.css';
import { connect } from 'react-redux';
import { createPet } from '../../actions/createPet';

export const CreatePetForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const node = e.target.querySelector('[name="newpet"]');
    props.dispatch(createPet({ name: node.value }));
    node.value = '';
  };
  return (
    <div className='add-form-wrap'>
      <form onSubmit={handleSubmit} className='pure-form pure-g' >
        <div className='pure-u-3-4'>
          <input className='pure-input-1' name='newpet' type='text' placeholder={'New pet name'} />
        </div>
        <div className='pure-u-1-4'>
          <button className='pure-input-1 pure-button' type='submit'>{'Add'}</button>
        </div>
      </form>
    </div>
  );
};


export default connect()(CreatePetForm);
