import { Box } from 'grommet';
import styled from 'styled-components';

export const ContentWrapper = styled(Box)`
  flex-basis: 30%;
  min-width: 360px;

  @media (max-width: 1024px) {
    padding-right: 24px;
    padding-left: 24px;
  }

  @media (max-width: 480px) and (orientation: portrait) {
    min-height: 100vh;
  }
`;
