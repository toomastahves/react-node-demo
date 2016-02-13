import React from 'react';
import ContentLayout from '../Layouts/Content';
import { connect } from 'react-redux';
import SubHeader from '../Parts/SubHeader';

export const ProfilePage = () => {
  return (
    <div>
      <SubHeader header={'User profile page here'} description={'Add content when needed'} />
    </div>
  );
};

export default connect()(ContentLayout(ProfilePage));
