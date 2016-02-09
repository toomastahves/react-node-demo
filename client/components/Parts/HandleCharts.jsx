import React, { PropTypes } from 'react';
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from 'react-chartjs';
import { connect } from 'react-redux';
import { getPets } from '../../actions/getpets';
import randomcolor from 'randomcolor';

export const HandleCharts = ({ pets }) => {
  if(pets.length === 0) return <div></div>;

  // Data manipulation for first 3 charts
  const combineSpeciesByBirthMonth = new Map();
  for(let i = 0, len = pets.length; i < len; i++) {
    const currMonth = new Date(pets[i].birthday).getMonth() + 1;
    const currentArray = combineSpeciesByBirthMonth.get(pets[i].species) || [0, 0, 0, 0, 0, 0];
    if(currMonth === 1 || currMonth === 2) currentArray[0]++;
    if(currMonth === 3 || currMonth === 4) currentArray[1]++;
    if(currMonth === 5 || currMonth === 6) currentArray[2]++;
    if(currMonth === 7 || currMonth === 8) currentArray[3]++;
    if(currMonth === 9 || currMonth === 10) currentArray[4]++;
    if(currMonth === 11 || currMonth === 12) currentArray[5]++;
    combineSpeciesByBirthMonth.set(pets[i].species, currentArray);
  }
  const datasets = [];
  for (const key of combineSpeciesByBirthMonth.keys()) {
    datasets.push({
      name: key,
      label: key,
      data: combineSpeciesByBirthMonth.get(key),
      fillColor: `${randomcolor({ luminocity: 'light', format: 'rgba' })}`,
      strokeColor: `${randomcolor({ luminocity: 'light', format: 'rgba' })}`,
      pointColor: `${randomcolor({ luminocity: 'light', format: 'rgba' })}`,
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,1)'
    });
  }
  const data2 = {
    labels: ['Jan/Feb', 'Mar/Apr', 'May/Jun', 'Jul/Aug', 'Sep/Oct', 'Nov/Dec'],
    datasets
  };

  // Data manipulation for last 3 charts
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
      color: `${randomcolor({ luminocity: 'light', format: 'rgba' })}`,
      highlight: `${randomcolor({ luminocity: 'light', format: 'rgba' })}`
    });
  }

  return (
    <div className='chart-content'>
      <div className='chart-item'>
        <span>{'Line chart'}</span>
        <Line data={data2}
          options={{
            responsive: true,
            multiTooltipTemplate: `<%= datasetLabel %> - <%= value %>`
          }}
        />
      </div>
      <div className='chart-item'>
        <span>{'Bar chart'}</span>
        <Bar data={data2}
          options={{
            responsive: true,
            multiTooltipTemplate: `<%= datasetLabel %> - <%= value %>`
          }}
        />
      </div>
      <div className='chart-item'>
        <span>{'Radar chart'}</span>
        <Radar data={data2}
          options={{
            responsive: true,
            multiTooltipTemplate: `<%= datasetLabel %> - <%= value %>`
          }}
        />
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

HandleCharts.propTypes = {
  pets: PropTypes.array
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

export default connect(mapStateToProps, mapDispatchToProps)(HandleCharts);
