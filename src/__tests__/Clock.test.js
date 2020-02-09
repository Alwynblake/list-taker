import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Clock from '../Components/Clock/Clock.js';

Enzyme.configure({adapter: new Adapter()});

describe('Testing our Clock component', () => {
  let app = mount(<Clock />);
  it('Clock renders correctly state', () => {
    const renderTree = renderer.create(<Clock />).toJSON();
    expect(app.state()).toHaveProperty('time');
  })
});

