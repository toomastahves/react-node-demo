import React, { PropTypes } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/base.css';
import 'react-date-picker/theme/hackerone.css';
import fecha from 'fecha';

export const DatePickerWrapper = ({ resultLocationId }) => {
  const onChange = (dateString, moment) => {
    const birthdayBox = document.getElementById(resultLocationId);
    birthdayBox.value = fecha.format(new Date(moment), 'DD MMM YYYY');
  };
  return (
    <div>
      <DatePicker
        onChange={onChange}
        hideFooter={true}
      />
    </div>
  );
};

DatePickerWrapper.propTypes = {
  resultLocationId: PropTypes.string.isRequired
};

export default DatePickerWrapper;
