// __tests__/LoginCTA-test.js
'use strict';

jest.unmock('../src/loginComponents/InputFieldEl.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import InputFieldEl from '../src/loginComponents/InputFieldEl';

describe('InputFieldEl', () => {

  let inputFieldEl,
    renderedDocTree,
    renderedComponent;

  beforeEach(function() {
    // Render a LoginCTA with a copy in the document
    inputFieldEl = <InputFieldEl inputId={'emailInput'} inputType={'email'} inputLabel={'E-mail'} inputPlaceholder={'somebody@example.com'} />;
    renderedDocTree = TestUtils.renderIntoDocument(inputFieldEl);
    renderedComponent = TestUtils.findRenderedDOMComponentWithTag(renderedDocTree, 'input');
  });

  it('inputFieldEl expected to be a react element', () => {
    expect(TestUtils.isElement(inputFieldEl)).toBe(true);
  });

  it('inputFieldEl expected to be of type "InputFieldEl"', () => {
    expect(TestUtils.isElementOfType(inputFieldEl, InputFieldEl)).toBe(true);
  });

  it('testDocument expected to be a DOM Element', () => {
    console.log();
    expect(TestUtils.isDOMComponent(renderedComponent)).toBe(true);
  });

  // it('component has got text-center class', () => {
  //   expect(TestUtils.findRenderedDOMComponentWithClass(loginCTA,'text-center')).not.toEqual(false);
  // });

});