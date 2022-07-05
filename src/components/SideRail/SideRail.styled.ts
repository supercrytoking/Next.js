import styled from 'styled-components';
import { Box, Button } from 'grommet';

export const SideRailContainer = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  min-height: unset;
  z-index: 15;
`;

export const SideRailOverlay = styled(Box)`
  position: fixed;
  overflow: hidden;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.3);
`;

export const SideRailFooter = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 90px;
  background: #fff;
  box-shadow: 0px 2px 10px rgba(58, 89, 124, 0.2);
  z-index: 4;
  min-height: unset;
`;

export const RoundIconButton = styled(Button)`
  padding: 7px;
  background: #f1f3f4;
  border-radius: 6px;
  &:hover {
    background: #eee;
  }
`;
