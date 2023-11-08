"use client";

import Input from "@/components/general/input";
import { loginInputs } from "@/constants/inputs";
import { LoginSchemaType, loginSchema } from "@/constants/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const LoginClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      axios
        .post("/api/login")
        .then((error) => {
          router.refresh();
          toast.success("Successfully Logged In");
        })
        .catch((error) => {
          toast.error("Something went wrong");
          return;
        })
        .finally(() => setIsLoading(false));

      if (callback?.error) {
        toast.success(callback?.error);
      }
    });
  };

  return (
    <form>
      {loginInputs.map((input) => (
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
      <button className="btn-main" onClick={handleSubmit(onSubmit)}>
        {isLoading ? (
          <Image src={"/loader.gif"} width={30} height={30} alt="register" />
        ) : (
          <span>Log In</span>
        )}
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
