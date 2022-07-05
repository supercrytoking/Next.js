import React, { ReactNode } from 'react';

export type ReduxAction = {
  type: string;
  payload?: any;
};

export type ReduxState = {
  [key: string]: any;
};

export type PageProps = {};

export interface PageWithLayoutProps extends React.FC<Record<string, unknown>> {
  getLayout: React.FC<{ children: ReactNode }>;
}

export enum ScreenSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
