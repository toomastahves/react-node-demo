import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer';
import './pages.css';
import { Table } from 'reactable';

const pets = [
  { name: 'fluffy' },
  { name: 'mufflin' },
  { name: 'wuffy' },
  { name: 'rainbow' }
];

export const TablePage = () => {
  return (
    <div>
      <Menu />
      <div>
        <div className='header'>
          <h1>{'Table demo'}</h1>
          <h2>{'Basic table demo using reactable library'}</h2>
        </div>
        <div className='content'>
          <div className='content-subheader'>
            {'Front-end'}
          </div>
          <div>
            <Table
              sortable={true}
              defaultSort={{ column: 'name', direction: 'asc' }}
              filterable={['name']}
              noDataText='No matching records found.'
              itemsPerPage={2} pageButtonLimit={5}
              className='table'
              data={pets}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TablePage;
