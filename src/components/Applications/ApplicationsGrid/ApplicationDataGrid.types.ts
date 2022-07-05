import {
  ApplicationAccess,
  ApplicationRiskScore,
} from '../../../types/applications';

export type DataGridRow = {
  name: string;
  access: ApplicationAccess[];
  riskScore: ApplicationRiskScore;
  createdAt: string;
  updatedAt: string;
};

export type ApplicationDataGridProps = {
  applications: DataGridRow[];
  onRowClick?: (row: DataGridRow) => void;
};
