import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import App from 'App.jsx';

describe('App', () => {
  it('should exists', () => {
      var app = ReactTestUtils.renderIntoDocument(<App />);
      expect(ReactTestUtils.isCompositeComponent(app)).toBeTruthy();
    });
});
