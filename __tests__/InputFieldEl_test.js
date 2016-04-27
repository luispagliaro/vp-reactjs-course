// __tests__/LoginCTA-test.js
'use strict';

jest.unmock('../src/loginComponents/InputFieldEl.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import InputFieldEl from '../src/loginComponents/InputFieldEl';

describe('InputFieldEl', () => {

  let inputFieldEl;
  let testDocument;

  beforeEach(function() {
    // Render a LoginCTA with a copy in the document
    inputFieldEl = <InputFieldEl inputId={'emailInput'} inputType={'email'} inputLabel={'E-mail'} inputPlaceholder={'somebody@example.com'} />;
    testDocument = TestUtils.renderIntoDocument(
        inputFieldEl
    );
  });

  it('inputFieldEl expect to be a react element', () => {
    expect(TestUtils.isElement(inputFieldEl)).toEqual(true);
  });

  it('inputFieldEl expect to be of type "InputFieldEl"', () => {
    expect(TestUtils.isElementOfType(inputFieldEl, InputFieldEl)).toEqual(true);
  });

  it('testDocument expect to be a DOM Element', () => {
    expect(TestUtils.isDOMComponent(testDocument)).not.toEqual(true);
  });

  // it('component has got text-center class', () => {
  //   expect(TestUtils.findRenderedDOMComponentWithClass(loginCTA,'text-center')).not.toEqual(false);
  // });

});