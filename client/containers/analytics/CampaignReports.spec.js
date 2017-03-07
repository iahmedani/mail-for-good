import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CampaignReports from './CampaignReports';

const mockProps = (overrides) => ({
  isGetting: true
});

const wrapper = shallow(<CampaignReports {...mockProps()} />);

describe('(Container) CampaignReports', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});