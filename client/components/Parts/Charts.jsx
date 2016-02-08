import React, { PropTypes } from 'react';
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from 'react-chartjs';
import { connect } from 'react-redux';
import { getPets } from '../../actions/getpets';

const chartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Cats',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(193, 158, 158, 1)',
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

export const Charts = ({ pets }) => {
  if(pets.length === 0)
    return <div></div>;

  const countEachSpecies = new Map();
  const agesOfEachSpecies = new Map();

  for(let i = 0, len = pets.length; i < len; i++) {
    const currentCount = countEachSpecies.get(pets[i].species) || 0;
    countEachSpecies.set(pets[i].species, currentCount + 1);
    const ages = agesOfEachSpecies.get(pets[i].species) || [];
    ages.push(pets[i].age);
    agesOfEachSpecies.set(pets[i].species, ages);
  }

  const data1 = [];
  for (const key of countEachSpecies.keys()) {
    data1.push({
      label: key,
      value: countEachSpecies.get(key),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      highlight: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    });
  }
  console.log(data1);





  const data2 = {
    labels: [], // species
    datasets: [] // homestatus count
  };

  for (const key of countEachSpecies.keys()) {
    data2.datasets.push({
      label: key,
      fillColor: 'rgba(151,187,205,0.2)',
      strokeColor: 'rgba(151,187,205,1)',
      pointColor: 'rgba(151,187,205,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,1)'
    });
  }
  for (const key of agesOfEachSpecies.keys()) {
    const ages = agesOfEachSpecies.get(key);
    data2.datasets.data = ages;
  }

















  return (
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
        <PolarArea data={data1} options={{ responsive: true }} />
      </div>
      <div className='chart-item'>
        <span>{'Pie chart'}</span>
        <Pie data={data1} options={{ responsive: true }} />
      </div>
      <div className='chart-item'>
        <span>{'Doughnut chart'}</span>
        <Doughnut data={data1} options={{ responsive: true }} />
      </div>
    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    pets: state.petReducer.pets
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(getPets());
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
