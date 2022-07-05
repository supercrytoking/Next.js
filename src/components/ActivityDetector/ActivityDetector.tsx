/**
 * Activity detector component.
 *
 * Checks if user is inactive for N seconds
 * Then shows modal with possible actions
 */
import React, { useState, ReactNode } from 'react';
import { Box, Layer, Text } from 'grommet';

import { ButtonInput } from '../Inputs';
import CountDownTimer from './CountDown';

import useDidMountEffect from '../../hooks/useDidMountEffect';

export interface ActivityDetectorProps {
  children: ReactNode;
  timeout: number;
  autoDeclineTimeout: number;
  onDecline: () => void;
  onAccept: () => void;
}

// TODO: think about moving this to a config
const ACTIVITY_EVENTS: Array<string> = [
  'mousemove',
  'keydown',
  'wheel',
  'DOMMouseScroll',
  'mouseWheel',
  'mousedown',
  'touchstart',
  'touchmove',
  'MSPointerDown',
  'MSPointerMove',
  'visibilitychange',
];

const ActivityDetector: React.FC<ActivityDetectorProps> = ({
  children,
  timeout,
  autoDeclineTimeout,
  onDecline,
  onAccept,
}) => {
  let activityTimer = 0;
  const [isInactive, setIsInactive] = useState<boolean>(false);
  const [eventsBound, setEventsBound] = useState<boolean>(false);

  const startActivityTimer = () => {
    activityTimer = window.setTimeout(() => {
      setIsInactive(true);
    }, timeout * 1000);
  };

  const resetActivityTimer = () => {
    clearTimeout(activityTimer);
    startActivityTimer();
  };

  const bindEventListeners = () => {
    if (!eventsBound) {
      ACTIVITY_EVENTS.forEach((event) => {
        window.addEventListener(event, resetActivityTimer, { passive: true });
      });
      setEventsBound(true);
    }
  };

  const unbindEventListeners = (force = false) => {
    if (eventsBound || force) {
      ACTIVITY_EVENTS.forEach((event) => {
        window.removeEventListener(event, resetActivityTimer);
      });
      setEventsBound(false);
    }
  };

  /**
   * ComponentDidMount life cycle hook
   */
  useDidMountEffect(() => {
    startActivityTimer();
    bindEventListeners();

    return () => {
      clearTimeout(activityTimer);
      unbindEventListeners(true);
    };
  });

  const handleAccept = () => {
    setIsInactive(false);
    onAccept();
  };

  const handleDecline = () => {
    setIsInactive(false);
    clearTimeout(activityTimer);
    onDecline();
  };

  const renderConfirmationDialog = () => (
    <Layer>
      <Box fill gap="medium" pad="medium" direction="column">
        <Box>
          <Text size="xlarge">Action required</Text>
        </Box>
        <Box direction="column">
          <Text size="medium">
            We didn't detect any activity from you in last {timeout / 60}{' '}
            minutes.
          </Text>
          <Text>Would you like to continue?</Text>
          <Box direction="row" gap="small" margin={{ top: 'small' }}>
            <Text>You will be automatically logged out in</Text>
            <CountDownTimer seconds={autoDeclineTimeout} onFinish={onDecline} />
          </Box>
        </Box>
        <Box direction="row" gap="small">
          <ButtonInput label="Logout" onClick={handleDecline} />
          <ButtonInput label="Continue" onClick={handleAccept} />
        </Box>
      </Box>
    </Layer>
  );

  return (
    <>
      {children}
      {isInactive && renderConfirmationDialog()}
    </>
  );
};

export default ActivityDetector;
