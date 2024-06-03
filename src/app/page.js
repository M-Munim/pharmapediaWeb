"use client"
import Image from 'next/image';
import { products } from './data';

export default function Home() {

  return (
    <main className='bg-bg_1'>
      <section className="w-11/12 mx-auto relative bg-bg_1 py-8 flex justify-center items-center flex-col">
        <div className="bg-red-200 text-center h-72 flex justify-center items-center flex-col gap-4 max-w-3xl">
          <h1 className="font-light text-6xl text-heading_blue">Pharmapedia</h1>
          <p className="text-text_grey text-xl px-4">
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

      <section className="w-11/12 mx-auto bg-slate-400 py-16">
        <div className="">
          <div className="flex flex-col justify-start items-start gap-4" style={{ width: "677px" }}>
            <h2 className="text-5xl text-heading_blue font-light">OUR PRODUCTS</h2>
            <p className="text-xl text-text_grey">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>

            <button className="button-filled">
              Explore More
            </button>
          </div>

          {/* Products */}

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            {
              products.map((data, i) => {
                return <div key={i}>

                  <Image
                    src={data.image}
                    width={676}
                    height={362}
                    alt="Products Image"
                  />
                </div>
              })
            }
          </div>
        </div>
      </section>
    </main >
  );
}
