"use client";

import Input from "@/components/general/input";
import { contactDetails } from "@/constants/contact";
import { aboutInputs } from "@/constants/inputs";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

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
          {aboutInputs.map((input) => (
            <Input
              name={input.name}
              placeholder={input.placeholder}
              errors={errors}
              register={register}
            />
          ))}
          <textarea placeholder="Your Message..." />
        </form>
      </section>
    </main>
  );
};

export default Contact;
