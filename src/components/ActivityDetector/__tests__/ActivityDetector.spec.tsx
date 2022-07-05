import React from 'react';
import { render } from '@testing-library/react';

import ActivityDetector from '../ActivityDetector';

const MOCK_TIMEOUT = 5;
const onMockAccept = () => {};
const onMockDecline = () => {};
const MockChildComponent: React.FC<Record<string, unknown>> = () => (
  <div>Mock Child Component</div>
);

describe('ActivityDetector component', () => {
  it('renders without crashing', () => {
    render(
      <ActivityDetector
        timeout={MOCK_TIMEOUT}
        onAccept={onMockAccept}
        onDecline={onMockDecline}
        autoDeclineTimeout={90}
      >
        <MockChildComponent />
      </ActivityDetector>
    );
  });
});
