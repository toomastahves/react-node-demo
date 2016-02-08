import React from 'react';
import './pages.css';
import { Table } from 'reactable';
import './table.css';
import ContentLayout from '../../Layouts/Content';
import SubHeader from '../../SubHeader/SubHeader';

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
      <div>
        <SubHeader header={'Table demo'} description={'Created using reactable library'} />
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
      </div>
    </div>
  );
};

export default ContentLayout(TablePage);
