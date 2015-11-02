import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App.jsx';
import ReactTestUtils from 'react-addons-test-utils';

describe('App', () => {
  it('should exist', () => {
    var app = ReactTestUtils.renderIntoDocument('<App />');
  });
});
