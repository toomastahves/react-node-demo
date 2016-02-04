import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer';
import './pages.css';
import { Table } from 'reactable';
import './table.css';

const pets = [
  { _id: 'asd', name: 'fluffy' },
  { _id: 'fh', name: 'mufflin' },
  { _id: 'sda', name: 'wuffy' },
  { _id: 'gf', name: 'rainbow' },
  { _id: 'asd', name: 'fluffy' },
  { _id: 'fh', name: 'mufflin' },
  { _id: 'sda', name: 'wuffy' },
  { _id: 'gf', name: 'rainbow' },
  { _id: 'asd', name: 'fluffy' },
  { _id: 'fh', name: 'mufflin' },
  { _id: 'sda', name: 'wuffy' },
  { _id: 'gf', name: 'rainbow' },
  { _id: 'asd', name: 'fluffy' },
  { _id: 'fh', name: 'mufflin' },
  { _id: 'sda', name: 'wuffy' },
  { _id: 'gf', name: 'rainbow' },
  { _id: 'asd', name: 'fluffy' },
  { _id: 'fh', name: 'mufflin' },
  { _id: 'sda', name: 'wuffy' },
  { _id: 'gf', name: 'rainbow' }
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
            {'Table'}
          </div>
          <Table className='pure-table pure-table-horizontal'
            sortable={true}
            defaultSort={{ column: 'name', direction: 'asc' }}
            filterable={['name']}
            noDataText='No matching records found.'
            itemsPerPage={5} pageButtonLimit={3}
            data={pets}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TablePage;
