import React from 'react';
import { Box } from 'grommet';
import Link from 'next/link';

import { UnderlinedText } from '../common';

const FOOTER_BUTTONS = [
  {
    name: 'Help',
    route: '/help',
  },
  {
    name: 'Privacy Policy',
    route: '/privacy-policy',
  },
  {
    name: 'Terms of Use',
    route: '/terms-of-use',
  },
];

const ContentFooter = ({ disabled = false }: { disabled?: boolean }) => (
  <Box direction="row" gap="medium" pad={{ top: 'medium' }}>
    {FOOTER_BUTTONS.map(({ name, route }) => (
      <Link href={route} passHref key={route}>
        <a className={disabled ? 'disabled' : ''}>
          <UnderlinedText color="black" size="medium">
            {name}
          </UnderlinedText>
        </a>
      </Link>
    ))}
  </Box>
);

export default ContentFooter;
