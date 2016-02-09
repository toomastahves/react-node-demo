import React, { Component, PropTypes } from 'react';
import '../styles/createpetform.css';
import { connect } from 'react-redux';
import { createPet } from '../../actions/createPet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export class HandlePetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBirthday: null
    };
  }

  handleDatepicker = (date) => {
    this.setState({ selectedBirthday: date });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const nameNode = e.target.querySelector('[name="newpet"]');
    const speciesNode = e.target.querySelector('[name="species"]');
    const homestatusNode = e.target.querySelector('[name="homestatus"]');
    const latNode = e.target.querySelector('[name="lat"]');
    const lngNode = e.target.querySelector('[name="lng"]');
    const pet = {
      name: nameNode.value,
      birthday: this.state.selectedBirthday,
      species: speciesNode.value,
      homestatus: homestatusNode.value,
      lat: latNode.value,
      lng: lngNode.value
    };
    this.props.dispatch(createPet(pet));
    nameNode.value = '';
    this.setState({ selectedBirthday: null });
    speciesNode.value = '';
    homestatusNode.value = '0';
    latNode.value = '';
    lngNode.value = '';
  };
  render() {
    return (
      <div className='create-pet-form-wrap'>
        <form onSubmit={this.handleSubmit} className='pure-form'>
          <fieldset>
            <div className='create-pet-input-wrap'>
              <div className='pure-control-group'>
                <input onChange={this.handleChange} className='selectbox-aligned' name='newpet' type='text' placeholder={'Name'} />
              </div>
              <div className='pure-control-group'>
                <DatePicker
                  onChange={this.handleDatepicker}
                  selected={this.state.selectedBirthday}
                  placeholderText='Birthday'
                  className='selectbox-aligned'
                />
              </div>
              <div className='pure-control-group'>
                <select className='selectbox-aligned' name='species'>
                  <option value='n/a'>{'Select species'}</option>
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
                <input className='coordinate-input' type='text' name='lat' placeholder='lat' />
                <input className='coordinate-input' type='text' name='lng' placeholder='lng' />
              </div>
              <div className='pure-control-group'>
                <button className='pure-input-1 pure-button' type='submit'>{'Add'}</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

HandlePetForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(HandlePetForm);
