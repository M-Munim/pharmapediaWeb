"use client"
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {

  return (
    <nav className="w-full">
      <div className="h-10 bg-blue w-full flex items-center justify-center">
        <div className="w-9/12 flex m-auto justify-between">
          <div className="icons flex items-center justify-center text-white gap-3">
            <div className='text-base border-r-none border-borderBlue md:border-r-2 pr-3 py-1' >
              <FaFacebookF className='cursor-pointer' />
            </div>
            <div className='text-base border-r-none border-borderBlue md:border-r-2 pr-3 py-1' >
              <FaYoutube className='cursor-pointer' />
            </div>
            <div className='text-base border-r-none' >
              <AiFillInstagram className='cursor-pointer' />
            </div>
          </div>

          <div className="contact-dets flex justify-between items-center text-white w-4/12">
            <p className="font-semibold text-xs">SAHARBEGUM@PHARMAPEDIA.PRO</p>
            <p className="font-semibold text-xs">+923494428783</p>
          </div>
        </div>
      </div>

      <div className="w-10/12 flex justify-between items-center m-auto bg-slate-100 h-28">
        <div className="img">
          <Image
            src="/logo.svg"
            alt="Main Mesh"
            layout="responsive"
            width={289}
            height={87}
            priority
          />
        </div>

        <div className="links">
          <ul className='flex justify-center items-center gap-6 text-1xl'>
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="">About us</a>
            </li>

            <li>
              <a href="">Blogs</a>
            </li>

            <li>
              <a href="">Our Products</a>
            </li>

            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <button className="button-outlined">Contact Us</button>
        </div>
      </div>
    </nav>
  );
}

