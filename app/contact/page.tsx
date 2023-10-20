"use client";

import Input from "@/components/general/input";
import { contactDetails } from "@/constants/contact";
import { ContactSchemaType, contactSchema } from "@/constants/contactSchema";
import { contactInputs } from "@/constants/inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchemaType>({ resolver: zodResolver(contactSchema) });

  const onSubmit = () => alert("Port");

  return (
    <main className="contact">
      <h1>Contact Us</h1>
      <p>
        Do you want to make an enquiry? We will be delighted to hear it. Drop us
        a line below, we'd love to talk to you.
      </p>

      <section className="contact-body">
        <div>
          {contactDetails.map((detail) => (
            <div key={detail.title}>
              <h4>{detail.title}</h4>
              <p>{detail.text}</p>
            </div>
          ))}
        </div>
        <form>
          {contactInputs.map((input) => (
            <Input
              name={input.name}
              placeholder={input.placeholder}
              errors={errors}
              register={register}
              key={input.name}
            />
          ))}
          <textarea placeholder="Your Message..." {...register("message")} />
          {errors.message && (
            <small className="error">{errors.message.message}</small>
          )}
          <button className="btn-main" onClick={handleSubmit(onSubmit)}>
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
