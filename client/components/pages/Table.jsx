import React from 'react';
import { connect } from 'react-redux';
import { getPets } from '../../actions/petActions';
import { Table } from 'reactable';

export const Pets = (props) => {
  return (
    <div>
      <div>{'Table Data'}</div>
      <Table
        sortable={true}
        defaultSort={{ column: 'name', direction: 'asc' }}
        filterable={['name']}
        noDataText='No matching records found.'
        itemsPerPage={2} pageButtonLimit={5}
        className='table'
        data={props.pets}
      />
    </div>
  );
};

Pets.propTypes = {
  pets: React.PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    fetching: state.petReducers.fetching,
    pets: state.petReducers.pets
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPets());
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Pets);
