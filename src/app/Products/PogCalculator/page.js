"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  const scrollToSchools = () => {
    document.getElementById('drop').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section className="flex justify-center items-center h-[627px] relative z-30" style={{
        background: "radial-gradient(circle, #57A8D1 0%, #2980B9 100%)"
      }}>

        <div className="text-white w-9/12 text-center flex bg-red-300 justify-center items-center gap-5 h-[500px] z-40 absolute mt-48">

          <div className="bg-green-200 w-1/2 h-96">POG</div>
          <div className="bg-green-500 w-1/2 h-96"></div>
        </div>
        <Image src="/DownBtn.svg" alt="Scroll down button" width={40} height={40} className='absolute bottom-10 cursor-pointer' onClick={scrollToSchools} />
        <div className="overflow-hidden relative h-[627px] z-30 w-full">
          <div className="w-60 h-60 border-1 rounded-full border-white opacity-15 absolute -bottom-20 -left-44 z-10" aria-hidden="true"></div>
          <div className="w-[350px] h-[350px] border-1 rounded-full border-white opacity-15 absolute -bottom-24 -left-48 z-10"></div>
          <div className="w-[493px] h-[493px] border-1 rounded-full border-white opacity-15 absolute -bottom-28 -left-56 z-10"></div>
          <div className="w-[606px] h-[606px] border-1 rounded-full border-white opacity-15 absolute -bottom-32 -left-60 z-10"></div>

          <div className="w-80 h-80 border-1 rounded-full border-white opacity-15 absolute -top-40 right-10 z-10"></div>
          <div className="w-[452px] h-[452px] border-1 rounded-full border-white opacity-15 absolute -top-48 -right-12 z-10"></div>
          <div className="w-[637px] h-[637px] border-1 rounded-full border-white opacity-15 absolute -top-60 -right-36 z-10"></div>
          <div className="w-[783px] h-[783px] border-1 rounded-full border-white opacity-15 absolute -top-64 -right-56 z-10"></div>
        </div>
      </section>

      <section className="relative">
        <Image
          src="/Group1.svg"
          alt=""
          width={2947.91}
          height={1989.84}
          className="absolute bottom-32 z-10"
        />

      </section>

      {/* FORM */}
      <section className="m-auto overflow-hidden relative">
        <div className="w-10/12 m-auto flex flex-col md:flex-row items-center justify-center gap-20 relative py-28">
          <div className="left w-full md:w-1/2 relative z-30">
            <form action="">
              <div className="flex justify-between items-center gap-2 md:gap-10 mb-4">
                <div className="flex flex-col items-start justify-center gap-1 w-6/12">
                  <label htmlFor="firstName" >First Name</label>
                  <input type="text" name="firstName" id="firstName" placeholder='First Name' className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' required />
                </div>
                <div className="flex flex-col items-start justify-center gap-1 w-6/12">
                  <label htmlFor="lastName" className='text-sm font-medium leading-6'>Last Name</label>
                  <input type="text" name="lastName" id="lastName" placeholder='Last Name' className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' required />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className='text-sm font-medium leading-6'>Email</label>
                <input type="email" name="email" id="email" placeholder='Example@company.com' required className='h-12 w-full rounded-lg p-3 outline-none border-slate-400 border' />
              </div>

              <div className=" mb-4">
                <label htmlFor="phone" className='text-sm font-medium leading-6'>Phone number</label>
                <div className='h-12 w-full rounded-lg outline-none border-slate-400 border phone-input'>
                  <select id="country-code" name="country-code" className='h-11 rounded-l-lg outline-none'>
                    <option value="PK">PK +92</option>
                    <option value="IND">IND +91</option>
                  </select>
                  <input type="tel" id="phone" name="phone" placeholder="Phone number" className='h-11 md:w-10/12 px-3 outline-none' />
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="message" className='text-sm font-medium leading-6'>Message</label>
                <textarea name="message" id="message" className='h-32 w-full rounded-lg p-3 outline-none border-slate-400 border resize-none'></textarea>
              </div>

              <div className="flex mb-8 gap-3 items-center justify-start">
                <input type="checkbox" id="myCheckbox" className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded outline-none " />
                <p className="font-medium text-base">You agree to our friendly <a href="" className='underline'>privacy policy.</a></p>
              </div>

              <button className="button-filledext">
                Send Message
              </button>
            </form>
          </div>

          <div className="right w-full md:w-1/2 relative z-30">
            <div className="flex flex-col gap-4">
              <h2 className="uppercase font-light text-4xl md:text-5xl text-heading_blue tracking-wider">Get in Touch</h2>

              <p className="text-sm md:text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra vulputate amet nunc lectus non ac. Arcu diam nullam ultrices consectetur. Gravida enim in sagittis mauris aliquam duis.</p>

              <button className="button-filled">
                Contact us
              </button>
            </div>
          </div>
        </div>

        <div className="w-96 h-96 border-2 rounded-full border-grey absolute -bottom-60 -right-36  z-10"></div>
        <div className="border-2 rounded-full border-grey  absolute -bottom-60 -right-36 z-10" style={{ width: '456px', height: '456px' }}></div>
        <div className="border-2 rounded-full border-grey opacity-65 absolute -bottom-60 -right-36 z-10" style={{ width: '526px', height: '526px' }}></div>
        <div className="border-2 rounded-full border-grey opacity-65 absolute -bottom-60 -right-36 z-10" style={{ width: '599px', height: '599px' }}></div>

        <Image src='./Ellipse 45.svg' width={116} height={116} alt="Ellipse Image" className='absolute top-1/3 right-0' />
      </section>
    </main>
  )
}

export default Page;