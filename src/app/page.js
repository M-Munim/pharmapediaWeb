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

export default function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <main className='bg-bg_1'>
      <section className="w-11/12 mx-auto relative bg-bg_1 py-8 flex justify-center items-center flex-col">
        <div className="bg-red-200 text-center h-72 flex justify-center items-center flex-col gap-4 max-w-3xl">
          <h1 className="font-light text-6xl text-heading_blue">Pharmapedia</h1>
          <p className="text-t_grey text-xl px-4">
            Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.
          </p>
          <div>
            <button className="button-filled">
              About us
            </button>
          </div>
        </div>

        <div className="bg-red-300 w-full">
          <Image src='/MainImg.svg' width={1728} height={698} layout="responsive" alt="Main Image" priority />
        </div>
      </section>
      <Image src='./Ellipse 42.svg' width={116} height={116} alt="Ellipse Image" />

      <section className="w-full mx-auto bg-green-200 h-96">
        <div className="w-10/12 mx-auto flex justify-center items-center h-full">
          <div className="left w-1/2 flex justify-center">
            <div className="circle bg-bg_1 h-96 w-96 rounded-full">
              <Image
                src="/aboutImg.svg"
                width={304}
                height={304}
                alt="About Image"
                className="rounded-full"
                priority
              />
            </div>
          </div>

          <div className="right w-1/2 text-white flex flex-col justify-center items-start gap-6">
            <h2 className="font-light text-5xl">About us</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Eu egestas libero viverra
              vulputate amet nunc lectus non ac. Arcu diam nullam ultrices
              consectetur. Gravida enim in sagittis mauris aliquam duis.
            </p>
            <button className="button-filled">
              About us
            </button>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto bg-red-400 my-28">
        <div className="flex flex-col items-start gap-4" style={{ width: "677px" }}>
          <h2 className="text-5xl text-heading_blue font-light">OUR PRODUCTS</h2>
          <p className="text-xl text-t_grey">
            Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.
          </p>
          <button className="button-filled">
            Explore More
          </button>
        </div>

        {/* Products */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          {products.map((data, i) => (
            <div key={i}>
              <Image
                src={data.image}
                width={676}
                height={362}
                alt="Products Image"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue my-28" style={{ height: "716px" }}>
        <div className=" flex h-full w-11/12 m-auto">
          <div className="left w-1/2">
            {/* <Image src='./Downloadapp2.svg' width={382} height={785}/> */}
            <img src="./Downloadapp2.svg" alt="DownloadApp" />

            <div className="txt w-10/12 m-auto bg-orange-200 text-white flex flex-col gap-3">
              <h2 className="font-medium text-5xl uppercase">Download App Now</h2>
              <p className="text-2xl">The content in this smartphone application is verified by qualified and registered healthcare professionals.!</p>

              <div className="download-imgs flex justify-start items-center gap-8">
                <Image src='./download2.svg' width={202} height={60} />
                <Image src='./download1.svg' width={202} height={60} />
              </div>
            </div>
          </div>
          <div className="right w-1/2 flex justify-center items-end">
            <img src="./Downloadapp1.svg" alt="DownloadApp2" />

          </div>
        </div>
      </section>


      <section className="w-10/12 m-auto my-28">
        <div className="w-7/12 bg-red-200 text-center m-auto pb-12 ">
          <h3 className="uppercase font-medium text-xl">News& Events</h3>
          <h1 className="uppercase font-light text-6xl text-heading_blue mb-6">Our Blogs</h1>
          <p className="text-xl text-t_grey mb-5">Lorem ipsum dolor sit amet consectetur. Morbi in vulputate id tellus. Et scelerisque consequat egestas volutpat semper pretium morbi amet.</p>
          <button className="button-filled">
            Explore More
          </button>
        </div>

        <div className="flex items-center justify-center my-10 relative">
          <div className="w-2/6 bg-slate-400 flex flex-col gap-16">
            <div className="text-end">
              <p className="text-lightBlue text-2xl font-medium mb-2">Premium Book <br /> Marketing Services</p>
              <p className="text-xl text-t_grey">Targeted advertising across platforms for maximum book visibility.</p>
            </div>

            <div className="text-end">
              <p className="text-lightBlue text-2xl font-medium mb-2">Certified <br />
                Marketing Experts</p>
              <p className="text-xl text-t_grey">Experienced team employing diverse digital strategies for success.</p>
            </div>
          </div>

          <div className="w-2/6 bg-purple-200 flex justify-center items-center">
            <img src='./blogImg.svg' alt="" />
          </div>

          <div className="w-2/6 bg-pink-300  flex flex-col gap-16">
            <div className="text-start">
              <p className="text-lightBlue text-2xl font-medium mb-2">Innovative Approach</p>
              <p className="text-xl text-t_grey">Utilizing technology and creativity to boost book sales.</p>
            </div>

            <div className="">
              <p className="text-lightBlue text-2xl font-medium mb-2">Next Bestseller Guarantee</p>
              <p className="text-xl text-t_grey">Dedicated to making your book stand out in the market.</p>
            </div>
          </div>
          <Image src='./Ellipse 45.svg' width={132} height={132} alt="Ellipse Image" className='absolute bottom-0 left-0' />
        </div>
      </section>

      <section className="my-28 w-10/12 m-auto">
        <div className="w-7/12 bg-red-200 text-center m-auto pb-12 ">
          <h3 className="uppercase font-medium text-xl">Reviews</h3>
          <h1 className="uppercase font-light text-6xl text-heading_blue mb-6">Testimonials</h1>
        </div>


        <Swiper
          className="swiper-container pt-40 mx-auto"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1} // Default for large screens
          navigation
          pagination={{ clickable: true }}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 1,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 2,
          //     spaceBetween: 30,
          //   },
          //   1024: {
          //     slidesPerView: 3,
          //     spaceBetween: 40,
          //   },
          // }}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className=''>
            <div className="bg-red-100 w-3/6 m-auto">
              <div className="">
                <p className="text-center">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>

                <div className="">
                  <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="bg-red-100 w-3/6 m-auto">
              <div className="">
                <p className="text-center">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>

                <div className="">
                  <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className=''>
            <div className="bg-red-100 w-3/6 m-auto">
              <div className="">
                <p className="text-center">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>

                <div className="">
                  <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="">
              <div className="">
                <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>

                <div className="">
                  <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
              <div className="">
                <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>

                <div className="">
                  <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
              <div className="">
                <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>

                <div className="">
                  <p className="">Lorem ipsum dolor sit amet consectetur. Laoreet pharetra vitae diam porttitor. Sit id vel vitae leo nunc vitae tellus lacus.</p>
                </div>
              </div>
            </div>
          </SwiperSlide> */}

        </Swiper>
      </section>
    </main >
  );
}
