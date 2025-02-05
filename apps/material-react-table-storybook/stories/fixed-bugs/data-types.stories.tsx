import React from 'react';
import { Meta, Story } from '@storybook/react';
import MaterialReactTable, {
  type MaterialReactTableProps,
  type MRT_ColumnDef,
} from 'material-react-table';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Fixed Bugs/Data Types',
};

export default meta;

type Person = {
  firstName: string | null;
  lastName: string;
  address: string;
  city: string;
  state: string;
  states: string[];
};

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    enableGlobalFilter: true,
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'states',
    header: 'States',
    Cell: ({ cell }) => cell.getValue<string[]>().join(', '),
  },
];

const data = [...Array(66)].map(() => ({
  firstName: Math.random() > 0.5 ? faker.name.firstName() : null,
  lastName: faker.name.lastName(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  states: [faker.address.state(), faker.address.state(), faker.address.state()],
}));

export const NullColumn: Story<MaterialReactTableProps> = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableGlobalFilterModes
      initialState={{ showGlobalFilter: true }}
    />
  );
};
