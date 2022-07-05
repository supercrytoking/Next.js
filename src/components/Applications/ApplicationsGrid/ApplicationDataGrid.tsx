import React, { useState } from 'react';
import { DataTable, Text, ColumnConfig, Box } from 'grommet';

/** Typings */
import {
  ApplicationDataGridProps,
  DataGridRow,
} from './ApplicationDataGrid.types';

export const ApplicationDataGrid: React.FC<ApplicationDataGridProps> = ({
  applications,
  onRowClick = undefined,
}) => {
  const [selectedRows, setSelectedRows] = useState<DataGridRow[]>([]);

  const columnsConfig: ColumnConfig<any>[] = [
    {
      property: 'name',
      header: (
        <Box pad={{ left: '10px' }}>
          <Text size="14px">Name</Text>
        </Box>
      ),
      render: (datum) => (
        <Box pad={{ left: '10px' }}>
          <Text size="14px">{datum.name}</Text>
        </Box>
      ),
    },
    {
      property: 'access',
      header: (
        <Box pad={{ left: '10px' }}>
          <Text size="14px">Access</Text>
        </Box>
      ),
      render: (datum) => (
        <Box pad={{ left: '10px' }}>
          <Text size="14px">{datum.access.join(', ')}</Text>
        </Box>
      ),
    },
    {
      property: 'riskScore',
      header: (
        <Box pad={{ left: '10px' }}>
          <Text size="14px">Risk Score</Text>
        </Box>
      ),
      render: (datum) => (
        <Box pad={{ left: '10px' }}>
          <Text size="14px">{datum.riskScore}</Text>
        </Box>
      ),
    },
    {
      property: 'createdAt',
      header: (
        <Box pad={{ right: '10px' }}>
          <Text size="14px">Date Added</Text>
        </Box>
      ),
      align: 'end',
      render: (datum) => (
        <Box pad={{ right: '10px' }}>
          <Text size="14px">{datum.createdAt}</Text>
        </Box>
      ),
    },
  ];

  return (
    <DataTable
      primaryKey="id"
      columns={columnsConfig}
      data={applications}
      onClickRow={({ datum }) => {
        setSelectedRows([...selectedRows, datum]);
        onRowClick && onRowClick(datum);
      }}
    />
  );
};
