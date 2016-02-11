import React, { PropTypes } from 'react';
import { Table, Thead, Th } from 'reactable';
import fecha from 'fecha';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPets } from '../../actions/getpets';
import { deletePet } from '../../actions/deletePet';

export const HandleTable = ({ pets, username, fetching, deletePet }) => {
  if(fetching) return <div>{'Loading...'}</div>;

  const handleDelete = (_id) => {
    deletePet(_id);
  };
  pets.map(p => {
    p.location = [ p.lat, p.lng ];
    p.homestatus = p.homestatus ? 'Has home' : 'Homeless';
    p.birthday = fecha.format(new Date(p.birthday), 'DD MMM YYYY');
    p.updated_at = fecha.format(new Date(p.updated_at), 'DD MMM hh:mm:ss');
    p.remove = <div className='delete-button' onClick={handleDelete.bind(null, p._id)}>{'X'}</div>;
    return p;
  });


  return (
    <div>
      <Table
        className='pure-table pure-table-horizontal table-wrap'
        sortable={true}
        defaultSort={{ column: 'updated_at', direction: 'desc' }}
        noDataText='No matching records found.'
        itemsPerPage={5} pageButtonLimit={3}
        data={pets}
        filterable={['name', 'species']}
      >
        <Thead>
          <Th column='name'>
            <strong className='name-header'>{'Name'}</strong>
          </Th>
          <Th column='birthday'>
            <strong className='birthday-header'>{'Birthday'}</strong>
          </Th>
          <Th column='species'>
            <strong className='species-header'>{'Species'}</strong>
          </Th>
          <Th column='homestatus'>
            <strong className='homestatus-header'>{'Homestatus'}</strong>
          </Th>
          <Th column='location'>
            <strong className='location-header'>{'Location'}</strong>
          </Th>
          <Th column='updated_at'>
            <strong className='age-header'>{'Updated'}</strong>
          </Th>
          {() => {
            if(username !== '')
              <Th column='remove'>
                <strong className='remove-header'>{'X'}</strong>
              </Th>;
          }}
        </Thead>
      </Table>
    </div>
  );
};

HandleTable.propTypes = {
  pets: PropTypes.array.isRequired,
  username: PropTypes.string,
  fetching: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    pets: state.petReducer.pets,
    fetching: state.petReducer.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPets());
  return bindActionCreators(Object.assign({}, { deletePet }), dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleTable);
