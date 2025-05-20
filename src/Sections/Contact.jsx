import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Particles } from '../Components/Particles';

const Contact = () => {
  const [FormData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    try {
      console.log("Form Submitted: FormData");
      await emailjs.send("service_ps54jap", "template_0wwttkk", {
        from_name: FormData.name,
        to_name: "Indrapal",
        from_email: FormData.email,
        to_email: "indrapalkhalsa3@gmail.com",
        message: FormData.message,
      }, "LeDOr2HQZMvXGllyN");

      setisLoading(false);
      alert("Message Sent Successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setisLoading(false);
      console.log(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section className='relative flex items-center justify-center min-h-screen py-20'>
      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Contact form content */}
      <div className='relative z-10 flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
          <h2 className='text-heading'>Wanna Talk?</h2>
          <p className='font-normal text-neutral-400'>
            Whether you're in the market for building, improving your existing project or bringing your ideas to life — I'm here to help.
          </p>
        </div>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='mb-5'>
            <label htmlFor='name' className='field-label'> Full Name</label>
            <input
              id="name"
              name="name"
              type='text'
              className='field-input field-input-focus'
              placeholder='Enter your full name'
              autoComplete="name"
              value={FormData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='field-label'> Email Address</label>
            <input
              id="email"
              name="email"
              type='email'
              className='field-input field-input-focus'
              placeholder='Enter your email address'
              autoComplete="email"
              value={FormData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='message' className='field-label'> Message</label>
            <textarea
              rows={5}
              id="message"
              name="message"
              className='field-input field-input-focus'
              placeholder='Write the message here'
              autoComplete="message"
              value={FormData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
