import React, { PropTypes } from 'react';
import '../styles/pages.css';
import '../styles/tablepage.css';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPets } from '../../actions/getpets';
import { deletePet } from '../../actions/deletePet';
import CreatePetForm from '../Parts/CreatePetForm';
import { Table, Thead, Th } from 'reactable';
import fecha from 'fecha';

export const TablePage = (props) => {
  const handleDelete = (_id) => {
    props.deletePet(_id);
  };
  props.pets.map(p => {
    p.updated_at = fecha.format(new Date(p.updated_at), 'DD MMM hh:mm:ss');
    p.remove = <div className='delete-button' onClick={handleDelete.bind(null, p._id)}>{'X'}</div>;
    return p;
  });
  return (
    <div>
      <SubHeader header={'Table demo'} description={'Created using reactable library'} />
      <div className='content'>
        <div className='content-subheader'>
          {'Pets CRUD. Sign in to modify data.'}
        </div>
        <CreatePetForm />
        <div>
          <Table
            className='pure-table pure-table-horizontal table-wrap'
            sortable={true}
            defaultSort={{ column: 'updated_at', direction: 'desc' }}
            noDataText='No matching records found.'
            itemsPerPage={5} pageButtonLimit={3}
            data={props.pets}
            filterable={['name', 'species']}
          >
            <Thead>
              <Th column='name'>
                <strong className='name-header'>{'Name'}</strong>
              </Th>
              <Th column='species'>
                <strong className='species-header'>{'Species'}</strong>
              </Th>
              <Th column='homestatus'>
                <strong className='homestatus-header'>{'Homestatus'}</strong>
              </Th>
              <Th column='updated_at'>
                <strong className='age-header'>{'Updated'}</strong>
              </Th>
              <Th column='remove'>
                <strong className='remove-header'>{'X'}</strong>
              </Th>
            </Thead>
          </Table>
        </div>
      </div>
    </div>
  );
};

TablePage.propTypes = {
  pets: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    pets: state.petReducer.pets
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPets());
  return bindActionCreators(Object.assign({}, { deletePet }), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentLayout(TablePage));
