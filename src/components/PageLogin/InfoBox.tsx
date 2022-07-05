import React from 'react';
import { Box, Text } from 'grommet';

import { InfoBoxContainer } from './LoginPage.styled';

const InfoBox: React.FC = () => (
  <InfoBoxContainer
    flex="grow"
    direction="column"
    justify="center"
    alignSelf="stretch"
  >
    <Box
      direction="column"
      justify="center"
      align="center"
      fill="horizontal"
      margin={{ vertical: 'xlarge' }}
    >
      <Text size="3rem" color="#fff" weight="bold" textAlign="center">
        Intelligent and usable products
      </Text>
      <Text size="3rem" color="#fff" weight="bold" textAlign="center">
        for your team
      </Text>
    </Box>
  </InfoBoxContainer>
);

export default InfoBox;
