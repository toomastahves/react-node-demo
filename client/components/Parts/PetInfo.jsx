import React, { PropTypes } from 'react';
import '../styles/petinfo.css';
import fecha from 'fecha';

export const PetInfo = ({ pet }) => {
  console.log(pet);
  return (
    <div className='petinfo-content'>
      <table className='pure-table pure-table-horizontal'>
        <tbody>
          <tr>
            <td>{'ID'}</td>
            <td>{pet._id}</td>
          </tr>
          <tr>
            <td>{'Name'}</td>
            <td>{pet.name}</td>
          </tr>
          <tr>
            <td>{'Birthday'}</td>
            <td>{fecha.format(new Date(pet.birthday), 'DD MMM YYYY')}</td>
          </tr>
          <tr>
            <td>{'Species'}</td>
            <td>{pet.species}</td>
          </tr>
          <tr>
            <td>{'Homestatus'}</td>
            <td>{pet.homestatus ? 'Has home' : 'Homeless'}</td>
          </tr>
          <tr>
            <td>{'Location'}</td>
            <td>{pet.lat}{','}{pet.lng}</td>
          </tr>
          <tr>
            <td>{'Created'}</td>
            <td>{fecha.format(new Date(pet.created_at), 'DD MMM hh:mm:ss')}</td>
          </tr>
          <tr>
            <td>{'Created by'}</td>
            <td>{pet.created_by}</td>
          </tr>
          <tr>
            <td>{'Updated'}</td>
            <td>{fecha.format(new Date(pet.updated_at), 'DD MMM hh:mm:ss')}</td>
          </tr>
          <tr>
            <td>{'Updated by'}</td>
            <td>{pet.updated_by}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

PetInfo.propTypes = {

};

export default PetInfo;
