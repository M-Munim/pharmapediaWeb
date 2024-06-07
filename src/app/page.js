"use client"
import Image from 'next/image';
import { products } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


export default function Home() {

  return (
    <main className=''>
      <section className="relative pb-40">
        <div className="w-10/12 mx-auto relative flex justify-center items-center flex-col overflow-hidden">
          <div className="text-center h-72 flex justify-center items-center flex-col gap-4 max-w-3xl relative z-30">
            <h1 className="font-light text-6xl text-heading_blue  tracking-wide">Pharmapedia</h1>
            <p className="text-t_grey text-xl px-4">
              Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.
            </p>
            <div>
              <button className="button-filled">
                About us
              </button>
            </div>
          </div>

          <div className="w-full relative z-10">
            <Image src='/MainImg.svg' width={1728} height={698} layout="responsive" alt="Illustration of Pharmapedia's mobile application development" priority />
          </div>

          <div className="w-[1199px] h-[1199px] border-1 rounded-full border-grey opacity-65 absolute top-[98%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
        </div>
        <Image src='./Ellipse 42.svg' width={116} height={116} alt="Ellipse Image" className='absolute -bottom-10 left-0' />
      </section>

      <section className="w-full mx-auto h-96 relative my-28" style={{
        background: "linear-gradient(#57A8D1 100%, #2980B9 100%)"
      }}>
        <div className="left w-1/2 flex justify-center items-center left-16 absolute -top-12 z-50">
          <div className="circle bg-white rounded-full flex justify-center items-center relative overflow-visible" style={{ width: '500px', height: '500px' }}>
            <Image
              // src="/aboutImg.svg"
              src="/Group1000011108.svg"
              width={304}
              height={624}
              alt="Illustration related to Pharmapedia"
              // className="absolute"
              priority
            />
          </div>
        </div>

        <div className="overflow-hidden relative h-96">


          <div className="w-10/12 mx-auto flex justify-end items-center h-full z-20 relative">
            <div className="right w-1/2 text-white flex flex-col justify-center items-start gap-6">
              <h2 className="font-light text-5xl uppercase  tracking-wide">About us</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra
                vulputate amet nunc lectus non ac. Arcu diam nullam ultrices
                consectetur. Gravida enim in sagittis mauris aliquam duis.
              </p>
              <button className="button-filled">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-52 h-52 border rounded-full border-white opacity-30 absolute -bottom-10 -right-10 z-10"></div>
          <div className="w-72 h-72 border rounded-full border-white opacity-30 absolute -bottom-12 -right-12 z-10"></div>
          <div className="border rounded-full border-white opacity-30 absolute top-20 -right-20 z-10" style={{ width: '406px', height: '406px' }}></div>
          <div className="border rounded-full border-white opacity-30 absolute top-2 -right-24 z-10" style={{ width: '499px', height: '499px' }}></div>

          <div className="border rounded-full border-white opacity-30 absolute -top-48 left-20 z-10" style={{ width: '761px', height: '761px' }}></div>
          <div className="border rounded-full border-white opacity-30 absolute -top-28 left-36 z-10" style={{ width: '605px', height: '605px' }}></div>
        </div>
      </section>

      <section className="w-10/12 mx-auto mb-28 mt-52">
        <div className="flex flex-col items-start gap-4" style={{ maxWidth: "677px" }}>
          <h2 className="text-5xl text-heading_blue font-light tracking-wide">OUR PRODUCTS</h2>
          <p className="text-xl text-t_grey">
            Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.
          </p>
          <button className="button-filled" aria-label="Explore More">
            Explore More
          </button>
        </div>

        {/* Products */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 cursor-pointer">
          {products.map((data, i) => (
            <div key={i}>
              <Image
                src={data.image}
                width={646}
                height={362}
                alt="Products Image"
                className="h-auto hover:scale-95"
                style={{ maxWidth: "627px", transition: ".2s ease-in" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="my-28" style={{ height: "616px", background: "linear-gradient(#57A8D1 100%, #2980B9 100%)" }}>
        <div className="flex h-full w-10/12 mx-auto">
          <div className="left w-1/2 relative overflow-hidden">
            <img src="/downloadapp.svg" alt="Download App Image 2" style={{ width: "511px" }} className='absolute bottom-[65%]'
            />
            {/* <img src="./Downloadapp2.svg" alt="Download App Image" /> */}

            <div className="txt w-10/12 mx-auto text-white flex flex-col gap-3 absolute bottom-[15%]">
              <h2 className="font-medium text-5xl uppercase">Download App Now</h2>
              <p className="leading-9 text-3xl">The content in this smartphone application is verified by qualified and registered healthcare professionals!</p>

              <div className="download-imgs flex justify-start items-center gap-8">
                <Image src='./download2.svg' width={202} height={60} alt="Download Image 1" />
                <Image src='./download1.svg' width={202} height={60} alt="Download Image 2" />
              </div>
            </div>
          </div>
          <div className="right w-1/2 flex justify-center items-end relative overflow-hidden">
            <img src="/phone13.svg" alt="Download App Image 2" style={{ width: "511px" }} className='absolute top-1/4'
            />
          </div>
        </div>
      </section>

      <section className="w-10/12 m-auto">
        <div className="relative py-28">
          <div className="w-7/12 text-center m-auto pb-12 ">
            <h3 className="uppercase font-semibold text-xl tracking-widest">News& Events</h3>
            <h1 className="uppercase font-light text-5xl text-heading_blue mb-5">Our Blogs</h1>
            <p className="text-xl text-t_grey mb-5 leading-7">Lorem ipsum dolor sit amet consectetur. Morbi in vulputate id tellus. Et scelerisque consequat egestas volutpat semper pretium morbi amet.</p>
            <button className="button-filled">
              Explore More
            </button>
          </div>

          <div className="flex items-center justify-center my-10 relative gap-5">
            <div className="w-2/6 flex flex-col justify-end items-end gap-16">
              <div className="text-end w-10/12">
                <p className="text-lightBlue text-2xl font-medium mb-2 leading-8">Premium Book <br /> Marketing Services</p>
                <p className="text-xl text-t_grey leading-7">Targeted advertising across platforms for maximum book visibility.</p>
              </div>

              <div className="text-end w-10/12">
                <p className="text-lightBlue text-2xl font-medium mb-2 leading-8">Certified <br />
                  Marketing Experts</p>
                <p className="text-xl text-t_grey leading-7">Experienced team employing diverse digital strategies for success.</p>
              </div>
            </div>

            <div className="w-2/6">
              <img src='./BlogImg.svg' alt="BlogImg" width={506} height={659} className='block' />
              {/* <Image src='./Ellipse 45.svg' width={132} height={132} alt="Ellipse Image" className='' /> */}
            </div>

            <div className="w-2/6 flex flex-col gap-16">
              <div className="text-start w-10/12">
                <p className="text-lightBlue text-2xl font-medium mb-2 leading-8">Innovative Approach</p>
                <p className="text-xl text-t_grey leading-7">Utilizing technology and creativity to boost book sales.</p>
              </div>

              <div className="w-10/12 text-start">
                <p className="text-lightBlue text-2xl font-medium mb-2">Next Bestseller Guarantee</p>
                <p className="text-xl text-t_grey">Dedicated to making your book stand out in the market.</p>
              </div>
            </div>
          </div>
          <Image src='./Ellipse 45.svg' width={132} height={132} alt="Ellipse Image" className='absolute bottom-0 left-0' />
        </div>
      </section>

      <section className="mb-28 w-10/12 m-auto">
        <div className="w-7/12 text-center m-auto pb-10">
          <h2 className="uppercase font-semibold text-xl tracking-widest mb-2">Reviews</h2>
          <h1 className="uppercase font-light text-5xl text-heading_blue mb-5">Testimonials</h1>
        </div>

        <Swiper
          className="swiper-container pt-40 mx-auto"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='pb-10'>
            <div className=" w-3/6 m-auto">
              <div className="flex flex-col items-center justify-center gap-24">
                <p className="text-center text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                <div className="flex justify-center items-center gap-8">
                  <div className="">
                    <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <h3 className="font-bold text-3xl leading-10 pl-1">Aliyan Baig</h3>
                    <div className="icons text-4xl flex justify-center items-center gap-2">
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#E3E6F0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='pb-10'>
            <div className=" w-3/6 m-auto">
              <div className="flex flex-col items-center justify-center gap-24">
                <p className="text-center text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                <div className="flex justify-center items-center gap-8">
                  <div className="">
                    <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <h3 className="font-bold text-3xl leading-10 pl-1">Aliyan Baig</h3>
                    <div className="icons text-4xl flex justify-center items-center gap-2">
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#E3E6F0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='pb-10'>
            <div className=" w-3/6 m-auto">
              <div className="flex flex-col items-center justify-center gap-24">
                <p className="text-center text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                <div className="flex justify-center items-center gap-8">
                  <div className="">
                    <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <h3 className="font-bold text-3xl leading-10 pl-1">Aliyan Baig</h3>
                    <div className="icons text-4xl flex justify-center items-center gap-2">
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#E3E6F0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='pb-10'>
            <div className=" w-3/6 m-auto">
              <div className="flex flex-col items-center justify-center gap-24">
                <p className="text-center text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                <div className="flex justify-center items-center gap-8">
                  <div className="">
                    <Image src='./testimonialImg.svg' width={92} height={92} alt="Testimonial by Aliyan Baig" className='' />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <h3 className="font-bold text-3xl leading-10 pl-1">Aliyan Baig</h3>
                    <div className="icons text-4xl flex justify-center items-center gap-2">
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#FFA928" }} />
                      <FaStar style={{ color: "#E3E6F0" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="m-auto overflow-hidden relative">
        <div className="w-10/12 m-auto flex items-center justify-center gap-20 relative py-28">
          <div className="left w-1/2 relative z-30">
            <form action="">
              <div className="flex justify-between items-center gap-10 mb-4">
                <div className="flex flex-col items-start justify-center gap-1 w-6/12">
                  <label htmlFor="firstName"  >First Name</label>
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
                  <input type="tel" id="phone" name="phone" placeholder="Phone number" className='h-11 w-10/12 px-3 outline-none' />
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="message" className='text-sm font-medium leading-6'>Message</label>
                <textarea name="message" id="message" className='h-32 w-full rounded-lg p-3 outline-none border-slate-400 border'></textarea>
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

          <div className="right w-1/2 relative z-30">
            <div className="flex flex-col gap-4">
              <h2 className="uppercase font-light text-5xl text-heading_blue tracking-wider">Get in Touch</h2>

              <p className="text-xl text-t_grey">Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra vulputate amet nunc lectus non ac. Arcu diam nullam ultrices consectetur. Gravida enim in sagittis mauris aliquam duis.</p>

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
    </main >
  );
}
