import DataTable from 'react-data-table-component';
import type { TableProps } from '../interface/Table';

const Table = <T extends Record<string, []>>({columns , data , actions , customStyles }: TableProps<T>) => {
  return (
    <DataTable columns={columns} data={data} actions={actions as [] } customStyles={customStyles} />
  )
}

export default Table