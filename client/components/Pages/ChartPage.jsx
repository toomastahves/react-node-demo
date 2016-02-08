import React from 'react';
import '../styles/pages.css';
import '../styles/chartpage.css';
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from 'react-chartjs';
import ContentLayout from '../Layouts/Content';
import SubHeader from '../Parts/SubHeader';

const chartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Cats',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [1, 3, 6, 8, 3, 1, 0]
    },
    {
      label: 'Dogs',
      fillColor: 'rgba(151,187,205,0.2)',
      strokeColor: 'rgba(151,187,205,1)',
      pointColor: 'rgba(151,187,205,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,1)',
      data: [8, 5, 3, 8, 3, 2, 7]
    }
  ]
};

const data = [
  {
    value: 43,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Cats'
  },
  {
    value: 32,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Dogs'
  },
  {
    value: 98,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Hamsters'
  }
];

export const Chart = () => {
  return (
    <div>
      <SubHeader header={'Chart demo'} description={'Created using react-chartjs library'} />
      <div className='content'>
        <div className='chart-content'>
          <div className='chart-item'>
            <span>{'Line chart'}</span>
            <Line data={chartData} options={{ responsive: true }} />
          </div>
          <div className='chart-item'>
            <span>{'Bar chart'}</span>
            <Bar data={chartData} options={{ responsive: true }} />
          </div>
          <div className='chart-item'>
            <span>{'Radar chart'}</span>
            <Radar data={chartData} options={{ responsive: true }} />
          </div>
          <div className='chart-item'>
            <span>{'PolarArea chart'}</span>
            <PolarArea data={data} options={{ responsive: true }} />
          </div>
          <div className='chart-item'>
            <span>{'Pie chart'}</span>
            <Pie data={data} options={{ responsive: true }} />
          </div>
          <div className='chart-item'>
            <span>{'Doughnut chart'}</span>
            <Doughnut data={data} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout(Chart);
