import React, { useState, useEffect } from 'react';
import { Box, Text } from 'grommet';
import { MdClose } from 'react-icons/md';

import {
  SideRailContainer,
  SideRailOverlay,
  SideRailFooter,
  RoundIconButton,
} from './SideRail.styled';

import { SideRailProps } from './SideRail.types';

const SideRail: React.FC<SideRailProps> = ({
  children,
  open = false,
  title = undefined,
  onClose = undefined,
  description = undefined,
  dimBackground = false,
  width = 'sideRailWidth',
  footer = undefined,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleSideRailClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const renderSideRailHeader = () => (
    <Box
      className="header-header"
      direction="column"
      style={{ minHeight: 'unset', display: 'block' }}
      border={{
        side: 'bottom',
        size: '1px',
        color: '#e0e2e9',
      }}
      margin={{ bottom: '25px' }}
    >
      <Box
        align="center"
        direction="row"
        justify="between"
        pad={{ top: '30px', bottom: '30px', horizontal: 'large' }}
      >
        {title && typeof title === 'string' ? (
          <Box justify="end" direction="column">
            <Text size="30px" weight="bold">
              {title}
            </Text>
            {description && typeof description === 'string' ? (
              <Text size="14px">{description}</Text>
            ) : (
              description
            )}
          </Box>
        ) : (
          <Box fill="horizontal">{title}</Box>
        )}
        <RoundIconButton
          icon={<MdClose size={30} color="#ddd" />}
          onClick={handleSideRailClose}
        />
      </Box>
    </Box>
  );

  return isOpen ? (
    <>
      {dimBackground && <SideRailOverlay></SideRailOverlay>}
      <SideRailContainer
        flex
        fill="vertical"
        overflow="hidden"
        elevation="large"
        direction="column"
        background="sideRailBackground"
        width={width}
        animation={{ type: 'slideLeft', duration: 200 }}
      >
        {renderSideRailHeader()}
        <Box
          pad={{ horizontal: 'large', bottom: footer ? '80px' : '0' }}
          style={{ minHeight: 'unset', display: 'block' }}
        >
          {children}
        </Box>
      </SideRailContainer>
      {footer && (
        <SideRailFooter
          animation={{ type: 'slideLeft', duration: 200 }}
          direction="row"
          align="center"
          width={width}
        >
          {footer}
        </SideRailFooter>
      )}
    </>
  ) : null;
};

export default SideRail;
