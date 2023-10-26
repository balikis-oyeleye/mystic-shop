"use client";

import Input from "@/components/general/input";
import { registerInputs } from "@/constants/inputs";
import { RegisterSchemaType, registerSchema } from "@/constants/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then((error) => {
        toast.success("Successfully Registered");
        console.log(error);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form>
      {registerInputs.map((input) => (
        <Input
          name={input.name}
          key={input.name}
          register={register}
          errors={errors}
          placeholder={input.placeholder}
          type={input.type}
        />
      ))}
      <p>
        Register for early sale access plus tailored new arrivals and discounts.
      </p>
      <button
        className="btn-main"
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
      >
        {isLoading ? (
          <Image src={"/loader.gif"} width={30} height={30} alt="register" />
        ) : (
          <span>Register</span>
        )}
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
