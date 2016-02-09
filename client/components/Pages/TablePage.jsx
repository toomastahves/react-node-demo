import React from 'react';
import '../styles/pages.css';
import '../styles/tablepage.css';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';
import HandlePetForm from '../Parts/HandlePetForm';
import HandleTable from '../Parts/HandleTable';

export const TablePage = () => {
  return (
    <div>
      <SubHeader header={'Table demo'} description={'Created using reactable library'} />
      <div className='content'>
        <div className='content-subheader'>
          {'Pets manager. Sign in to modify data.'}
        </div>
        <HandlePetForm />
        <HandleTable />
      </div>
    </div>
  );
};

export default ContentLayout(TablePage);
