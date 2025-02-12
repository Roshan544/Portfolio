import React from 'react'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k7kwnfm', 'template_c5qqdfl', form.current, {
        publicKey: 'tMN2YCX59GVIikU3L',
      })
      .then(
        () => {
          toast.success('SUCCESS!');
        },
        (error) => {
          toast.error('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div name="Contact"
        className="contact flex justify-center mt-5 pt-5">
        <div className='flex flex-col justify-center items-center w-[80vw] h-auto'>
          <h2 className='text-lg hover:scale-125 duration-150 hover:text-red-600'>Contect Me</h2>
          <p className='text-xs md:text-sm opacity-80 justify-center items-center'>Please fill out the form below to contact me.</p>

          <div className="form flex flex-col-reverse justify-center md:flex-row md:justify-end items-center md:gap-10">

            <div className="w-[100%] md:w-[50vw] p-5 rounded-2xl mt-5 flex flex-col justify-center items-center">
              <h3 className='mb-3 text-base opacity-70'>Send Your Message</h3>
              <form
                ref={form} onSubmit={sendEmail}
                className='flex flex-col'>
                <div className="name flex flex-col mb-3">
                  <label>Full Name</label>
                  <input
                    className='w-[100%] my-1 rounded-xl px-3 py-1 outline-none bg-slate-900 text-white' type="text" name='from_name' id='name' required placeholder='Enter Your Full Name' />
                </div>
                <div className="email flex flex-col">
                  <label>Email Address</label>
                  <input
                    className='w-[100%] my-1 rounded-xl px-3 py-1 outline-none bg-slate-900 text-white' type="email" name='email' id='email' required placeholder='Enter Your Email Address' />
                </div>
                <div className="message flex flex-col">
                  <label>Message</label>
                  <textarea
                    className='min-w-[100%] my-1 rounded-xl px-3 py-1 outline-none bg-slate-900 text-white h-[20vh] w-[30vw]' type="text" name='message' id='message' required placeholder='Enter Your Message' />
                </div>
              <button className='flex px-5 py-2 mt-4 border justify-center items-center bg-slate-900 hover:bg-red-500 rounded-3xl border-none' type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
