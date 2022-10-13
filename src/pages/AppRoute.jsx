import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Main from '../components/Main';

const AppRoute = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default connect()(AppRoute);