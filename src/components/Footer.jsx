import React from 'react'
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='bg-black py-3'>
      <div className="w-10/12 m-auto mt-14">
        <div className="flex justify-center items-start gap-16">
          <div className="w-4/12">
            <Image
              src="/logo.svg"
              alt="Pharmapedia Logo"
              width={270}
              height={95}
              priority
            />

            <p className="text-footerGrey text-lg mt-2 pr-5">
              Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.
            </p>
          </div>

          <div className="w-2/12 pt-10">
            <div className="links flex flex-col items-start justify-start text-lg text-footerGrey gap-3">
              <p className="font-bold text-xl text-white">Quick Links</p>
              <a href="">About Us</a>
              <a href="">Our Products</a>
              <a href="">FAQS</a>
              <a href="">Blogs</a>
            </div>
          </div>
          <div className="w-2/12 pt-10">
            <div className="links flex flex-col items-start justify-start text-lg text-footerGrey gap-3">
              <p className="font-bold text-xl text-white">Customer Care</p>
              <a href="">Contact us</a>
              <a href="">FAQs</a>
            </div>
          </div>
          <div className="w-4/12 pt-10">
            <div className="links flex flex-col items-start justify-start text-lg gap-3 text-white">
              <p className="font-bold text-xl">Address</p>
              <a href="">SAHARBEGUM@PHARMAPEDIA.PRO</a>
              <a href="">+923494428783</a>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center w-7/12 ms-auto">
            <div className="">
              <p className="text-white">Copyright 2024. All Right Reserved.</p>
            </div>
            <div className="flex items-center text-white gap-4">
              <a href="#" className='text-base border-r border-white md:border-r-2 pr-3 py-1' aria-label="Facebook">
                <FaFacebookF className='cursor-pointer' />
              </a>
              <a href="#" className='text-base border-r border-white md:border-r-2 pr-3 py-1' aria-label="YouTube">
                <AiFillInstagram className='cursor-pointer' />
              </a>
              <a href="#" className='text-base border-r border-white md:border-r-2 pr-3 py-1' aria-label="Instagram">
                <FaTwitter className='cursor-pointer' />
              </a>

              <a href="#" className='text-base' aria-label="Instagram">
                <FaYoutube className='cursor-pointer' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer