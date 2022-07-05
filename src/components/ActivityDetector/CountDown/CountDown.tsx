import React, { useState } from 'react';
import { Text, Box } from 'grommet';

import useDidMountEffect from '../../../hooks/useDidMountEffect';

interface CountDownProps {
  seconds: number;
  onFinish?: () => void;
}

const CountDown: React.FC<CountDownProps> = ({ onFinish, seconds }) => {
  let countDownTimer = 0;
  let secondsLast = 0;

  const [secondsRemaining, setSecondsRemaining] = useState<number>(seconds);
  const [minutesRemaining, setMinutesRemaining] = useState<number>(0);

  const start = () => {
    countDownTimer = window.setInterval(tick, 1000);
  };

  const stop = () => {
    secondsLast = 0;
    clearInterval(countDownTimer);
    onFinish && onFinish();
  };

  const tick = () => {
    secondsLast++;
    const countedSeconds = secondsRemaining - secondsLast;
    const countedMinutes = Math.floor(countedSeconds / 60);
    setMinutesRemaining(countedMinutes);
    setSecondsRemaining(countedSeconds - countedMinutes * 60);

    if (countedSeconds === 0) {
      stop();
    }
  };

  useDidMountEffect(() => {
    start();
    return () => {
      clearInterval(countDownTimer);
    };
  });

  const renderTime = (time: number) => (
    <Text>{time < 10 ? `0${time}` : time.toString()}</Text>
  );

  return (
    <Box direction="row">
      {renderTime(minutesRemaining)}
      <Text>:</Text>
      {renderTime(secondsRemaining)}
    </Box>
  );
};

export default CountDown;
