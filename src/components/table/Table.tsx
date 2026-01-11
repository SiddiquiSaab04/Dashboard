import DataTable from "react-data-table-component";
import type { TableProps } from "../interface/Table";

const Table = <T extends Record<string, any>>({
  columns,
  data,
  actions,
  customStyles,
}: TableProps<T>) => {
  return (
    <DataTable
      columns={columns as []}
      data={data as []}
      actions={actions as []}
      customStyles={customStyles}
    />
  );
};

export default Table;
