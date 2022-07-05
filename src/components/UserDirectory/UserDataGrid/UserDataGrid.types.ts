export type DataGridRow = {
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Blocked' | 'Pending';
  lastSeenAt: string;
  createdAt: string;
  updatedAt: string;
};

export type UserDataGridProps = {
  users: DataGridRow[];
  placeholder?: string;
  onRowClick?: (row: DataGridRow) => void;
};
