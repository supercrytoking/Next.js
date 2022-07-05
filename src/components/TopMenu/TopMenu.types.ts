export type TopMenuProps = {
  onMenuItemClick: (itemUrl: string) => void;
  onLogout: () => void;
  onSettings: () => void;
  activeUrl: string;
};
