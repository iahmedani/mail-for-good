import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ErrorsList from './ErrorsList';

const mockProps = (overrides) => ({
  errors: [],
  ...overrides
});

const wrapper = shallow(<ErrorsList {...mockProps()} />);

describe('(Component) ErrorsList', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});