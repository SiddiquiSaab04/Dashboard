import type { FieldProps } from "./Field";
import { ZodType } from "zod";
export interface FormProps<T> {
    fields: FieldProps<T>[];
    schema: ZodType<T>;
    onSubmit: (data: T) => void;
} 