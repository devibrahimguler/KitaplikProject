import React from 'react';
import Provider from './contex/Provider';
import Router from './Router';

const Wrapper = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default Wrapper;
