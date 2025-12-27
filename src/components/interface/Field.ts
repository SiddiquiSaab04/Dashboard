export interface FieldProps<T> {
    name:keyof T;
    label?:string;
    type?:string;
}