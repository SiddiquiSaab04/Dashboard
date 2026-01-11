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
    <div className="flex flex-col w-full">
      {label && (
        <label className="block text-lg font-normal text-secondary dark:text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name as string)}
        error={error}
        className="border border-secondary  rounded-lg py-1.5 px-1 text-secondary w-full focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
};

export default Input;
