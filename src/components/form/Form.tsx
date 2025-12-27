import { useForm } from "react-hook-form";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormProps } from "../interface/Form";
import type { FieldValues } from "react-hook-form";

const Form = <T extends FieldValues>({
  fields,
  schema,
  onSubmit,
}: FormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<T>({
    resolver: zodResolver(schema as any),
  });

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <Input
            key={field.name as string}
            label={field.label}
            type={field.type}
            register={register}
            name={field.name as string}
          />
        ))}
        <button className="border border-primary rounded-lg py-1.5 mt-4 w-full bg-accent/50 backdrop-blur-xs" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
