import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Button, DropButton, Text } from 'grommet';
import { FiHelpCircle } from 'react-icons/fi';
import { authLogoutRequestAction } from '../../store/actions/auth';

const Header: React.FC<Record<string, unknown>> = () => {
  const dispatch = useDispatch();
  const userData = useSelector(({ auth: { userData } }: any) => userData);
  const { userName } = userData;
  const renderUserMenu = () => (
    <Box width="small">
      <Box pad="small">
        <Button
          plain
          label="Logout"
          onClick={() => {
            dispatch(authLogoutRequestAction());
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      align="center"
      direction="row"
      justify="between"
      height="xxsmall"
      pad={{ vertical: 'large' }}
    >
      <Box>
        <Text size="large" weight="bold">
          logotype
        </Text>
        <Text size="xsmall">powered by lyonl</Text>
      </Box>
      <Box direction="row" align="center" gap="small">
        <Button>
          <FiHelpCircle />
        </Button>
        <Box direction="row" align="center" gap="small">
          <DropButton
            plain
            icon={
              <Avatar
                src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                size="small"
              />
            }
            dropContent={renderUserMenu()}
            dropAlign={{ top: 'bottom', left: 'right' }}
            label={<Text>{userName}</Text>}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
