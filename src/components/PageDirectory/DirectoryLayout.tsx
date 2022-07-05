import { Box, Button, Text } from 'grommet';
import React, { ReactNode, useState } from 'react';
import { SelectableBox } from '../NavBar/NavBar';
import { FiBookmark, FiUser, FiUsers } from 'react-icons/fi';
import NavBar from 'src/components/NavBar';
import AppLayout from '../AppLayout';
import WithAuth from '../WithAuth';
import { useRouter } from 'next/router';

const SETTINGS_OPTIONS = [
  { title: 'Home', home: 'Home', icon: <FiUser />, url: '' },
  {
    title: 'My Team',
    myteam: 'My Team',
    icon: <FiUsers />,
    url: 'myteam',
  },
  {
    title: 'Bookmarks',
    notifications: 'Bookmarks',
    icon: <FiBookmark />,
    url: 'bookmarks',
  },
  {
    title: 'All Employees',
    allEmployees: 'All Employees',
    icon: <FiUser />,
    url: 'allemployees',
  },
  {
    title: 'Groups',
    notifications: 'Groups',
    icon: <FiBookmark />,
    url: 'groups',
  },
];

interface DirectoryLayoutProps {
  children: ReactNode;
}

const DirectoryLayout = ({ children }: DirectoryLayoutProps) => {
  const [activeLink, setActiveLink] = useState('home');
  const router = useRouter();
  return (
    <AppLayout>
      <WithAuth>
        <Box>
          <NavBar />
          <Box direction="row" overflow="scroll">
            <Box width={'20%'} border={'right'}>
              {SETTINGS_OPTIONS.map((option, index) => {
                const { title, icon, url } = option;
                return (
                  <Button
                    key={index}
                    onClick={() => {
                      setActiveLink(url);
                      router.push(`/directory/${url}`);
                    }}
                  >
                    <SelectableBox
                      isSelected={url === activeLink}
                      direction="row"
                      align="center"
                      gap="small"
                      pad={{
                        left: 'medium',
                        right: 'small',
                        vertical: 'xsmall',
                      }}
                      round="xxsmall"
                    >
                      {icon}
                      <Text size="small">{title}</Text>
                    </SelectableBox>
                  </Button>
                );
              })}
            </Box>
            {/* Right side panel */}
            <Box width="80%" border={'bottom'}>
              {children}
            </Box>
          </Box>
        </Box>
      </WithAuth>
    </AppLayout>
  );
};

export default DirectoryLayout;
