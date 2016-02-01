import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import { App } from 'client/App';
import style from 'client/style.css';

const setup = () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();
  return { output };
};

describe('tests App component', () => {
  it('renders correctly', () => {
    const { output } = setup();
    expect(output.type).to.eql('div');
    expect(output.props.className).to.eql(style.center);
    expect(output.props.children).to.eql('hello world');
  });
});
