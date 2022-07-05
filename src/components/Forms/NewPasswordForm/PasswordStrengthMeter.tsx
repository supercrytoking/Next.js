import React from 'react';
import zxcvbn from 'zxcvbn';
import ReactTooltip from 'react-tooltip';

import { Box, Meter, Text } from 'grommet';
import { GiInfo } from 'react-icons/gi';
import { FiCheck } from 'react-icons/fi';
import { PasswordInfoCard } from './PasswordInfoCard';

interface IProps {
  password: string;
}

const PasswordStrengthMeter: React.FC<IProps> = ({ password }) => {
  const { score } = zxcvbn(password);

  const createPasswordLabel = (score: number) => {
    switch (score) {
      case 0:
        return 'Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Medium';
      case 3:
        return 'Medium';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  };

  const getColor = (score: number, length: number) => {
    if (length > 0) {
      if (score >= 0 && score <= 2) {
        return 'red';
      } else if (score > 2 && score < 4) {
        return 'yellow';
      } else if (score === 4) {
        return 'green';
      }
    } else {
      return 'grey1';
    }
  };

  return (
    <Box pad={{ vertical: 'xxsmall' }}>
      <Meter
        type="bar"
        values={[
          { value: score * 25, color: getColor(score, password.length) },
        ]}
        thickness="xsmall"
        round
      />
      <Box align="center" direction="row" justify="between" pad="small">
        <Text
          color={getColor(score, password.length)}
          size="xsmall"
          weight={500}
        >
          {password.length ? createPasswordLabel(score) : 'Enter'} Password
        </Text>
        <Box data-tip="password-info">
          <GiInfo color="#B4B7C3" />
          <PasswordInfoCard>
            <ReactTooltip
              className="password-info-card"
              place="right"
              effect="solid"
              arrowColor="#E0E2E9"
            >
              <Box background="white" pad="small">
                <Box align="center" direction="row" gap="small">
                  <FiCheck color="#B4B7C3" />
                  <Text size="small" weight={400}>
                    Must be at least 8 characters long
                  </Text>
                </Box>
                <Box align="center" direction="row" gap="small">
                  <FiCheck color="#B4B7C3" />
                  <Text size="small" weight={400}>
                    At least one lowercase char
                  </Text>
                </Box>
                <Box align="center" direction="row" gap="small">
                  <FiCheck color="#B4B7C3" />
                  <Text size="small" weight={400}>
                    At least one uppercase char
                  </Text>
                </Box>
                <Box align="center" direction="row" gap="small">
                  <FiCheck color="#B4B7C3" />
                  <Text size="small" weight={400}>
                    At least one number
                  </Text>
                </Box>
                <Box>
                  <Box align="center" direction="row" gap="small">
                    <FiCheck color="#B4B7C3" />
                    <Text size="small" weight={400}>
                      At least one special char
                    </Text>
                  </Box>
                  <Box pad={{ left: 'medium' }}>
                    <Text size="small" weight={400}>
                      (~!@#$%^&*()_+[]{}|;,./?)
                    </Text>
                  </Box>
                </Box>
              </Box>
            </ReactTooltip>
          </PasswordInfoCard>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordStrengthMeter;
