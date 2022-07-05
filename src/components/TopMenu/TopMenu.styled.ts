import styled from 'styled-components';
import { Button, Box } from 'grommet';

export const MenuButton = styled(Button)`
  height: 100%;
  background: #fff;

  &.active,
  &:hover {
    background: #fff;
    border-bottom: 3px solid #9057e0;
  }
`;

export const UserProfileIconWrapper = styled(Box)`
  border-radius: 60px;
  border: 1px solid #000;
  padding: 10px;
`;
