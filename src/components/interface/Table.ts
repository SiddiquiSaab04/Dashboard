  
import {
  type TableColumn,
  type TableStyles,
} from "react-data-table-component";

export interface ActionHandlers<T> {
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}

export interface TableProps<T> {
  columns?: TableColumn<T>[] | [];
  data?: T[];
  actions?: ActionHandlers<T> | [] | React.ReactNode ;
  customStyles?: TableStyles;
}
  