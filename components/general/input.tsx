interface InputProps {
  name: string;
  register: any;
  errors: any;
  placeholder: string;
}

const Input = ({ name, register, errors, placeholder }: InputProps) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="input"
        {...register(name)}
      />
      {errors[name] && <small className="error">{errors[name].message}</small>}
    </>
  );
};

export default Input;
