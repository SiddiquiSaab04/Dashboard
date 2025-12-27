import type { InputProps } from "../interface/Input";
const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  register,
  name,
  error,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name as string)}
        error={error}
      />
    </div>
  );
};

export default Input;
