"use client";

import Input from "@/components/general/input";
import { loginInputs } from "@/constants/inputs";
import { LoginSchemaType, loginSchema } from "@/constants/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => console.log(data);

  console.log(errors);

  return (
    <form>
      {loginInputs.map((input) => (
        <Input
          name={input.name}
          key={input.name}
          register={register}
          errors={errors}
          placeholder={input.placeholder}
        />
      ))}
      <p>
        Register for early sale access plus tailored new arrivals and discounts.
      </p>
      <button className="btn-main" onClick={handleSubmit(onSubmit)}>
        Register
      </button>
      <p>
        You don't have an account?
        <Link href="/register" className="btn-primary">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginClient;
