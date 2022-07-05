import React, { useState } from 'react';
import { Box, Button, Text } from 'grommet';
import styled from 'styled-components';
import { FiLayers, FiFolder } from 'react-icons/fi';
import { useRouter } from 'next/router';

export const SelectableBox = styled(Box)<{ isSelected: boolean }>`
  border-bottom: ${({ theme, isSelected }) =>
    isSelected === true ? `2px solid ${theme.global.colors.black}` : 'none'};
  :hover {
    border-bottom: ${({ theme }) => `2px solid ${theme.global.colors.black}`};
  }
`;

const BUTTON_TYPES = {
  DIRECTORY: 'Directory',
  APPS: 'Apps',
};

const BUTTON_ROUTES = {
  DIRECTORY: '/directory',
  APPS: '/apps',
};

const NavBar: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>(router.pathname);

  const btnClickHandler = (btnType: string) => {
    setCurrentPage(btnType);
    if (btnType === BUTTON_TYPES.DIRECTORY) {
      router.push('/directory');
    } else {
      router.push(`/${btnType.toLowerCase()}`);
    }
  };

  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      pad={{ left: 'small', top: 'small', right: 'medium' }}
      gap="medium"
    >
      <Box
        border={{ color: 'lightGrey1', side: 'bottom' }}
        direction="row"
        flex
        gap="small"
      >
        <Button onClick={() => btnClickHandler(BUTTON_TYPES.DIRECTORY)}>
          <SelectableBox
            isSelected={currentPage === BUTTON_ROUTES.DIRECTORY}
            direction="row"
            align="center"
            gap="small"
            pad="xsmall"
          >
            <FiFolder />
            <Text size="small">{BUTTON_TYPES.DIRECTORY}</Text>
          </SelectableBox>
        </Button>
        <Button onClick={() => btnClickHandler(BUTTON_TYPES.APPS)}>
          <SelectableBox
            isSelected={currentPage === BUTTON_ROUTES.APPS}
            direction="row"
            align="center"
            gap="small"
            pad="xsmall"
          >
            <FiLayers />
            <Text size="small">{BUTTON_TYPES.APPS}</Text>
          </SelectableBox>
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
