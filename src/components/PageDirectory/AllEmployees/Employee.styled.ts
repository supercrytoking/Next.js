import { Text, Box } from 'grommet';
import styled from 'styled-components';

export const StatusText = styled(Text)`
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: #27ae60;
  padding: 5px;
  color: white;
  border-radius: 20px;
`;

export const ProfileImage = styled(Box)`
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
