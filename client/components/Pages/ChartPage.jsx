import React from 'react';
import '../styles/pages.css';
import '../styles/chartpage.css';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';
import HandleCharts from '../Parts/HandleCharts';

export const ChartPage = () => {
  return (
    <div>
      <SubHeader header={'Chart demo'} description={'Created using react-chartjs library'} />
      <div className='content'>
        <HandleCharts />
      </div>
    </div>
  );
};

export default ContentLayout(ChartPage);
