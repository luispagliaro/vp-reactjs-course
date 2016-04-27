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

  it('renderedComponent expected to be a DOM Element', () => {
    expect(TestUtils.isDOMComponent(renderedComponent)).toBe(true);
  });

  it('validates the input when an email is not entered', () => {
    let input = ReactDOM.findDOMNode(renderedComponent);
    input.value = 'a';

    TestUtils.Simulate.change(input);

    expect(renderedDocTree.state.valid).toBe(false);
  });

  it('validates the input when an email is entered', () => {
    let input = ReactDOM.findDOMNode(renderedComponent);
    input.value = 'luispagliaro@gmail.com';

    TestUtils.Simulate.change(input);

    expect(renderedDocTree.state.valid).toBe(true);
  });
});