import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Container from '../Components/Container/Container.js';

Enzyme.configure({adapter: new Adapter()});

describe('Testing our Container component', () => {
  const expected = ['list'];
  it('matches even if received contains additional elements',()=> {
    expect(['list']).toEqual(expect.arrayContaining(expected));
  });

  it ('Container changes state on Click', ()=> {
    let app = mount(<Container />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state()).toHaveProperty('note','');
  })
});