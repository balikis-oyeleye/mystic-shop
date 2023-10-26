interface InputProps {
  name: string;
  register: any;
  errors: any;
  placeholder: string;
  type: string;
}

const Input = ({ name, register, errors, placeholder, type }: InputProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="input"
        {...register(name)}
      />
      {errors[name] && <small className="error">{errors[name].message}</small>}
    </>
  );
};

export default Input;
