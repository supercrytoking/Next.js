import React from 'react';
import { Box } from 'grommet';
import { render } from '@testing-library/react';

import SideRail from '../SideRail';

describe('SideRail component', () => {
  it('renders without crashing', () => {
    render(
      <SideRail>
        <Box>Side Rail Component Test</Box>
      </SideRail>
    );
  });
});
