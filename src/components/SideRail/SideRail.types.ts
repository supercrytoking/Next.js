import { ReactNode, ReactChild } from 'react';

export interface SideRailProps {
  children: ReactNode;
  title?: ReactChild;
  description?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  dimBackground?: boolean;
  width?: string;
  footer?: ReactChild;
}
