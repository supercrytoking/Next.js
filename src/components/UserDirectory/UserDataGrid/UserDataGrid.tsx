import React, { useState } from 'react';
import { DataTable, Text, ColumnConfig, Box } from 'grommet';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

/** Components */

/** Typings */
import { UserDataGridProps, DataGridRow } from './UserDataGrid.types';

dayjs.extend(relativeTime);

export const UserDataGrid: React.FC<UserDataGridProps> = ({
  users,
  onRowClick = undefined,
  placeholder = undefined,
}) => {
  const [selectedRows, setSelectedRows] = useState<DataGridRow[]>([]);

  const rowRenderer = (val: string) => <Text size="14px">{val || 'N/A'}</Text>;

  const columnsConfig: ColumnConfig<any>[] = [
    {
      property: 'name',
      header: (
        <Box pad={{ left: '10px' }}>
          <Text size="14px">Name</Text>
        </Box>
      ),
      render: (datum) => (
        <Box pad={{ left: '10px' }}>{rowRenderer(datum.name.trim())}</Box>
      ),
    },
    {
      property: 'email',
      header: 'Email',
      render: (datum) => rowRenderer(datum.email),
    },
    {
      property: 'status',
      header: 'Status',
      align: 'center',
      render: (datum) => (
        <Box
          background="#e2faec"
          pad={{ horizontal: 'small', vertical: 'xsmall' }}
        >
          <Text size="14px" color="#000">
            {datum.disabled ? 'Inactive' : 'Active'}
          </Text>
        </Box>
      ),
    },
    {
      property: '2faEnabled',
      header: '2 FA Status',
      align: 'center',
      render: (datum) =>
        rowRenderer(
          datum.twoFactorAuthenticationEnabled ? 'Enabled' : 'Disabled'
        ),
    },
    {
      property: 'timeZone',
      header: 'Time Zone',
      align: 'center',
      render: (datum) => rowRenderer(datum.timezone),
    },
    {
      property: 'lastLoginAt',
      header: 'Last Seen',
      align: 'center',
      render: (datum) =>
        rowRenderer(
          datum.lastLoginAt
            ? dayjs(datum.lastLoginAt).format('ddd, DD MMM YYYY')
            : 'N/A'
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
          <Text size="14px">
            {dayjs(datum.createdAt).format('ddd, DD MMM YYYY')}
          </Text>
        </Box>
      ),
    },
  ];

  return (
    <DataTable
      primaryKey="id"
      columns={columnsConfig}
      data={users}
      placeholder={placeholder}
      onClickRow={({ datum }) => {
        setSelectedRows([...selectedRows, datum]);
        onRowClick && onRowClick(datum);
      }}
    />
  );
};
