import React from 'react';
import { Header, Box, Text, Button, DropButton } from 'grommet';
import classnames from 'classnames';
import { FiUser } from 'react-icons/fi';

import { MenuButton, UserProfileIconWrapper } from './TopMenu.styled';
import { TopMenuProps } from './TopMenu.types';

const MENU_ITEMS = [
  {
    key: 'dashboard',
    url: '/dashboard',
    title: 'Dashboard',
  },
  {
    key: 'user-directory',
    url: '/user-directory',
    title: 'User DirectoryLayout',
  },
  {
    key: 'applications',
    url: '/applications',
    title: 'Applications',
  },
  {
    key: 'domains',
    url: '/domains',
    title: 'Domains',
  },
];

const TopMenu: React.FC<TopMenuProps> = ({
  onMenuItemClick,
  activeUrl,
  onLogout,
  onSettings,
}) => {
  const renderUserMenu = () => (
    <Box width="small">
      <Box pad="small">
        <Button plain label="Settings" onClick={onSettings} />
      </Box>
      <Box pad="small">
        <Button plain label="Logout" onClick={onLogout} />
      </Box>
    </Box>
  );

  return (
    <Header
      elevation="xsmall"
      height="topMenuHeight"
      pad={{ horizontal: '30px' }}
      align="center"
      justify="between"
      background={'topMenuBackground'}
      style={{ zIndex: 11, position: 'fixed', top: 0, right: 0, left: 0 }}
    >
      <Box direction="row" align="center" height="100%">
        <Text size="2.2rem" weight="bold">
          Project Miami
        </Text>
      </Box>
      <Box direction="row" gap="40px" fill="vertical" align="center">
        {MENU_ITEMS.map(({ key, url, title }) => {
          const isActive = activeUrl === url;
          return (
            <MenuButton
              plain
              key={key}
              active={isActive}
              onClick={() => onMenuItemClick(url)}
              className={classnames({ active: isActive })}
            >
              {title}
            </MenuButton>
          );
        })}
      </Box>
      <Box direction="row" align="center" gap="10px">
        <DropButton
          plain
          icon={
            <UserProfileIconWrapper>
              <FiUser size="1.2rem" />
            </UserProfileIconWrapper>
          }
          dropContent={renderUserMenu()}
          dropAlign={{ top: 'bottom', left: 'right' }}
          label={<Text>Alex Santos</Text>}
        />
      </Box>
    </Header>
  );
};
export default TopMenu;
