import React, { PropTypes } from 'react';
import { Table, Thead, Th } from 'reactable';
import fecha from 'fecha';
import { connect } from 'react-redux';
import { getPets } from '../../actions/getpets';
import Spinner from './Spinner';

export const HandleTable = ({ pets, fetching }) => {
  if(fetching) return <Spinner />;

  pets.map(p => {
    p.location = [ p.lat, p.lng ];
    p.homestatus = p.homestatus ? 'Has home' : 'Homeless';
    p.birthday = fecha.format(new Date(p.birthday), 'DD MMM YYYY');
    p.updated_at = fecha.format(new Date(p.updated_at), 'DD MMM hh:mm:ss');
    p.updated_by = p.updated_by ? p.updated_by : '';
    return p;
  });

  return (
    <div>
      <Table
        className='pure-table pure-table-horizontal table-wrap'
        sortable={true}
        defaultSort={{ column: 'updated_at', direction: 'desc' }}
        noDataText='No matching records found.'
        itemsPerPage={10} pageButtonLimit={10}
        data={pets}
        filterable={['name', 'species', 'updated_by']}
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
            <strong className='updated_at-header'>{'Updated at'}</strong>
          </Th>
          <Th column='updated_by'>
            <strong className='updated_by-header'>{'Updated by'}</strong>
          </Th>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleTable);
