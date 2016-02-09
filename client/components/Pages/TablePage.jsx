import React, { PropTypes } from 'react';
import '../styles/pages.css';
import '../styles/tablepage.css';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';
import HandlePetForm from '../Parts/HandlePetForm';
import HandleTable from '../Parts/HandleTable';
import { connect } from 'react-redux';

export const TablePage = (props) => {
  return (
    <div>
      <SubHeader header={'Table demo'} description={'Created using reactable library'} />
      <div className='content'>
        <div className='content-subheader'>
          {'Pets table.'}
        </div>
        {props.username && <HandlePetForm />}
        <HandleTable username={props.username} />
      </div>
    </div>
  );
};

TablePage.propTypes = {
  username: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    username: state.authReducer.username
  };
};

export default connect(mapStateToProps)(ContentLayout(TablePage));
