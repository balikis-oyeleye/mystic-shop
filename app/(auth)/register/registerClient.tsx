"use client";

import Input from "@/components/general/input";
import { registerInputs } from "@/constants/inputs";
import { RegisterSchemaType, registerSchema } from "@/constants/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

const RegisterClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) =>
    console.log(data);

  console.log(errors);

  return (
    <form>
      {registerInputs.map((input) => (
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
        Already have an account?
        <Link href="/login" className="btn-primary">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterClient;
