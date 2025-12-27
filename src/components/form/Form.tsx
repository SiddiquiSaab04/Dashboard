import { useForm } from "react-hook-form";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormProps } from "../interface/Form";
import type { FieldValues } from "react-hook-form";

const Form = <T extends FieldValues>({ 
  fields, 
  schema, 
  onSubmit 
}: FormProps<T>) => {
  const {
    register,
    handleSubmit,
  } = useForm<T>({
    resolver: zodResolver(schema as any),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <Input
            key={field.name as string}
            label={field.label}
            type={field.type}
            register={register}
            name={field.name as string}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;