"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import emailjs from "@emailjs/browser";
const Email = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_kbg71gm",
        "template_gz9wfea",
        form.current,
        "Bq7ZhvvkGOZCsP0Fq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
          if (form.current) {
            form.current.reset();
          }
        },

        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <label className=" font-normal text-base my-2">Name</label>
        <br />
        <input
          type="text"
          name="user_name"
          placeholder="Enter your Name"
          {...register("user_name", { required: true })}
          className="w-full md:w-[360px] h-[38px] bg-gray-300 font-normal text-base p-2 my-2 rounded-md outline-none"
        />
        {errors.user_name && (
          <p className=" block text-[12px] text-[#ff0000]">Name is required</p>
        )}
        <br />
        <label className=" font-normal text-base my-2">Email</label>
        <br />
        <input
          type="email"
          name="user_email"
          placeholder="Enter your Email"
          {...register("user_email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter Valid email address",
            },
          })}
          className="w-full md:w-[360px] h-[38px] bg-gray-300 font-normal text-base p-2 my-2 rounded-md outline-none"
        />
        {errors.user_email && (
          <p className="text-[#ff0000] block text-[12px]">
            {errors.user_email.message}
          </p>
        )}
        <br />
        <label className=" font-normal text-base">Message</label>
        <br />
        <textarea
          name="message"
          {...register("message", { required: true })}
          placeholder="Write Message"
          className="w-full md:w-[360px] h-[60px] bg-gray-300 font-normal text-base p-2 my-2 rounded-md outline-none"
        />
        {errors.message && (
          <p className="text-[#ff0000] text-[12px] block">
            Message is required
          </p>
        )}
        <br />
        <button
          type="submit"
          value="Send"
          className="w-[200px] bg-[#ff004f] hover:text-white text-base font-normal rounded-md border-2 border-solid px-4 py-2"
        >
          Send
        </button>
        <br />
      </form>
    </div>
  );
};

export default Email;
