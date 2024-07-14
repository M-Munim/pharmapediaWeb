"use client"

import React from 'react'
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  // const [moveTo, setMoveTo] = useState("Home");
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className='bg-black py-3 '>
      <div className="w-10/12 m-auto mt-14  relative z-30 bg-transparent">
        <div className="flex flex-col md:flex-row justify-center items-start gap-3 md:gap-16">
          <div className="w-full md:w-4/12">
            <Image
              src="/logo.svg"
              alt="Pharmapedia Logo"
              width={270}
              height={95}
              priority
            />

            <p className="text-footerGrey text-sm md:text-lg mt-2 pr-5">
              Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.
            </p>
          </div>
          <div className="flex w-full md:w-4/12 items-start justify-between">
            <div className="w-1/2 pt-10">
              <div className="links flex flex-col items-start justify-start text-lg text-footerGrey gap-3">
                <p className="font-bold text-lg md:text-xl text-white">Quick Links</p>
                <Link href="/About" className='text-sm md:text-lg'>About us</Link>
                {/* <Link></Link> */}
                {/* <li onClick={() => setMoveTo("About")}>
                  /About className={`${moveTo === "About" ? "text-hover_blue2 font-bold" : ""}`}>About us</Link>
                </li> */}
                <Link href="/Products" className='text-sm md:text-lg'>Our Products</Link>
                <Link href="/Blog" className='text-sm md:text-lg'>Blogs</Link>
              </div>
            </div>
            <div className="w-1/2 pt-10">
              <div className="links flex flex-col items-start justify-start text-lg text-footerGrey gap-3">
                <p className="font-bold text-lg md:text-xl text-white">Customer Care</p>
                <a href="" className='text-sm md:text-lg'>Contact us</a>
                <Link href="/Faqs" className='text-sm md:text-lg'>FAQs</Link>
              </div>
            </div>

          </div>
          <div className="w-4/12 pt-10">
            <div className="links flex flex-col items-start justify-start text-lg gap-1 md:gap-3 text-white">
              <p className="font-bold text-lg md:text-xl">Address</p>
              <a href="" className='text-sm md:text-lg'>SAHARBEGUM@PHARMAPEDIA.PRO</a>
              <a href="" className='text-sm md:text-lg'>+923494428783</a>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center w-full md:w-7/12 ms-auto">
            <div className="">
              <p className="text-xs md:text-base text-white">&copy; Copyright 2024. All Right Reserved.</p>
            </div>
            <div className="flex items-center text-white gap-3 md:gap-4">
              <a href="#" className='text-xs md:text-base border-r border-white md:border-r-2 pr-2 md:pr-3 py-1' aria-label="Facebook">
                <FaFacebookF className='cursor-pointer' />
              </a>
              <a href="#" className='text-xs md:text-base border-r border-white md:border-r-2 pr-2 md:pr-3 py-1' aria-label="YouTube">
                <AiFillInstagram className='cursor-pointer' />
              </a>
              <a href="#" className='text-xs md:text-base border-r border-white md:border-r-2 pr-2 md:pr-3 py-1' aria-label="Instagram">
                <FaTwitter className='cursor-pointer' />
              </a>

              <a href="#" className='text-xs md:text-base' aria-label="Instagram">
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