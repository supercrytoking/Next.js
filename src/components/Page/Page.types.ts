import { ReactNode } from 'react';
import { BoxProps } from 'grommet';

export interface PageProps
  extends Pick<
    BoxProps,
    | 'align'
    | 'background'
    | 'margin'
    | 'pad'
    | 'fill'
    | 'height'
    | 'direction'
    | 'justify'
  > {
  children: ReactNode;
}
