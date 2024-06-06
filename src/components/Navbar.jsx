"use client";

import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Head from 'next/head';

export default function Navbar() {
  const [moveTo, setMoveTo] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Pharmapedia</title>
        <meta name="description" content="Pharmapedia - Your reliable source for pharmaceutical products and information." />
        <meta name="keywords" content="Pharmapedia, pharmaceutical, products, health, medicine" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.pharmapedia.pro" />
      </Head>
      <nav className="w-full">
        <div className="h-10 bg-blue w-full flex items-center justify-center">
          <div className="w-9/12 flex m-auto justify-between">

            <div className="flex items-center text-white gap-3 text-3xl">
              <a href="https://www.facebook.com" className='sm:text-base text-sm border-r border-borderBlue md:border-r-2 pr-3 py-1' aria-label="Facebook">
                <FaFacebookF className='cursor-pointer' />
              </a>
              <a href="https://www.youtube.com" className='sm:text-base text-sm border-r border-borderBlue md:border-r-2 pr-3 py-1' aria-label="YouTube">
                <FaYoutube className='cursor-pointer' />
              </a>
              <a href="https://www.instagram.com" className='sm:text-base text-sm' aria-label="Instagram">
                <FaInstagram className='cursor-pointer' />
              </a>
            </div>

            <div className="flex-row items-center justify-end text-white gap-6 sm:flex">
              <p className="font-semibold text-xs">SAHARBEGUM@PHARMAPEDIA.PRO</p>
              <p className="font-semibold text-xs">+923494428783</p>
            </div>
          </div>
        </div>
        <div className="w-10/12 flex justify-between items-center m-auto h-28">
          <div className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Pharmapedia Logo"
              width={289}
              height={87}
              priority
            />
          </div>
          <div className="flex-grow hidden lg:flex items-center justify-center">
            <ul className='flex justify-center items-center gap-7 text-base xl:text-lg'>
              <li onClick={() => setMoveTo("Home")}>
                <a href="#home" className={`${moveTo === "Home" ? "text-hover_blue font-bold" : "text-black"}`}>Home</a>
              </li>
              <li onClick={() => setMoveTo("About us")}>
                <a href="#about-us" className={`${moveTo === "About us" ? "text-hover_blue font-bold" : "text-black"}`}>About us</a>
              </li>
              <li onClick={() => setMoveTo("Blogs")}>
                <a href="#blogs" className={`${moveTo === "Blogs" ? "text-hover_blue font-bold" : "text-black"}`}>Blogs</a>
              </li>
              <li onClick={() => setMoveTo("Our Products")}>
                <a href="#our-products" className={`${moveTo === "Our Products" ? "text-hover_blue font-bold" : "text-black"}`}>Our Products</a>
              </li>
              <li onClick={() => setMoveTo("FAQs")}>
                <a href="#faqs" className={`${moveTo === "FAQs" ? "text-hover_blue font-bold" : "text-black"}`}>FAQs</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button className="button-outlined">Contact Us</button>
          </div>
          <div className="lg:hidden text-2xl">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-slate-100 w-full">
            <ul className='flex flex-col items-center gap-4 py-4 text-lg'>
              <li onClick={() => { setMoveTo("Home"); setMenuOpen(false); }}>
                <a href="#home" className={`${moveTo === "Home" ? "text-hover_blue font-bold" : "text-black"}`}>Home</a>
              </li>
              <li onClick={() => { setMoveTo("About us"); setMenuOpen(false); }}>
                <a href="#about-us" className={`${moveTo === "About us" ? "text-hover_blue font-bold" : "text-black"}`}>About us</a>
              </li>
              <li onClick={() => { setMoveTo("Blogs"); setMenuOpen(false); }}>
                <a href="#blogs" className={`${moveTo === "Blogs" ? "text-hover_blue font-bold" : "text-black"}`}>Blogs</a>
              </li>
              <li onClick={() => { setMoveTo("Our Products"); setMenuOpen(false); }}>
                <a href="#our-products" className={`${moveTo === "Our Products" ? "text-hover_blue font-bold" : "text-black"}`}>Our Products</a>
              </li>
              <li onClick={() => { setMoveTo("FAQs"); setMenuOpen(false); }}>
                <a href="#faqs" className={`${moveTo === "FAQs" ? "text-hover_blue font-bold" : "text-black"}`}>FAQs</a>
              </li>
              <li>
                <button className="button-outlined">Contact Us</button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
