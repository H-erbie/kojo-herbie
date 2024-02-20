'use client'

import React from "react";
import { IoMdMail } from "react-icons/io";

const Contact = () => {

  return (
    <section
      id="contact"
      className="flex items-center justify-center  flex-col gap-y-3"
    >
      <h2 className="w-max flex items-center mx-auto text-3xl font-bold gap-2 mb-4">
        Contact <IoMdMail className="text-green-400 rotate-[-30deg]" />
      </h2>
      <p className="text-lg">I am just a form away!😀</p>
      <form action="" className="grid grid-cols-3 flex-col gap-y-4 gap-x-2">
        <input type="text" placeholder="fullname" />
        <input type="email" placeholder="email" />
        <input type="subject" placeholder="subject" className="outline-green-400"/>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Slap your message here"
          className="gi col-span-3 "
        ></textarea>
      </form>
      <button className="mt-4 rounded-lg border-none px-3 py-2 hover:-translate-y-2 bg-green-500">Get in touch</button>
    </section>
  );
};

export default Contact;
