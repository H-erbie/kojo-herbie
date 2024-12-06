"use client";
import { useState } from "react";
import { toast } from "react-toastify"; // For notifications
import emailjs from '@emailjs/browser';
import { IoMdMail } from "react-icons/io";
import { RiLoader5Fill } from "react-icons/ri";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
    subject: ''
  });
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const emailParams = {
        from_name: userInput.name,
        reply_to: userInput.email,
        message: userInput.message,
        from_subject: userInput.subject

      };

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
          subject: ''

        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
    finally{
      setLoading(false)
    }
  };
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
        <input type="text" placeholder="fullname" value={userInput.name} name="name" onChange={handleChange}/>
        <input type="email" placeholder="email" value={userInput.email} name='email' onChange={handleChange}/>
        <input type="subject" placeholder="subject" className="outline-green-400" value={userInput.subject} onChange={handleChange} name="subject" />
        <textarea
          name="message"
          value={userInput.message}
          onChange={handleChange}
          id=""
          cols="30"
          rows="10"
          placeholder="Slap your message here"
          className="gi col-span-3 "
        ></textarea>
      </form>
      <button className="mt-4 rounded-lg border-none px-3 py-2 hover:-translate-y-2 flex gap-x-3 items-center bg-green-500" onClick={handleSubmit}>Get in touch {loading && <RiLoader5Fill className='animate-spin'/>} </button>
    </section>
  );
};

export default Contact;
