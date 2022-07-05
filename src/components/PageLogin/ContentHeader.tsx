import React from 'react';
import { Box, Text } from 'grommet';
import { DOMAIN_NAME } from '../../store/constants';
import { StyledA } from './LoginPage.styled';

const ContentHeader: React.FC<{ logo?: string; organization: string }> = ({
  organization,
  logo = '',
}) => (
  <Box
    pad={{ top: 'medium' }}
    direction="row"
    align="center"
    justify="between"
    fill="horizontal"
  >
    <Text size="large" weight={700} color="black">
      {organization}
    </Text>
    <Box direction="row" gap="xxsmall" align="center">
      {!Boolean(logo) ? (
        <StyledA href={`https://${DOMAIN_NAME}`}>
          <Text size="xsmall" color="grey1" weight={500}>
            powered by&nbsp;
          </Text>
          <Text size="large" color="grey1" weight={700}>
            lyonl
          </Text>
        </StyledA>
      ) : null}
    </Box>
  </Box>
);

export default ContentHeader;
