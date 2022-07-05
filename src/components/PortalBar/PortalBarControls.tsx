import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalBarControlsProps {
  barName: string;
  children: ReactNode;
}

const PortalBarControls: React.FC<PortalBarControlsProps> = ({
  barName,
  children,
}) => {
  const [portalBarNode, setPortalBarNode] = useState<Element | null>(null);

  useEffect(() => {
    const checkExistsInterval = setInterval(() => {
      const bar = document.querySelector(`#${barName}`);
      if (bar) {
        clearInterval(checkExistsInterval);
        setPortalBarNode(bar);
      }
    }, 100);

    return () => {
      clearInterval(checkExistsInterval);
    };
  });

  return portalBarNode ? createPortal(children, portalBarNode) : null;
};

export default PortalBarControls;
