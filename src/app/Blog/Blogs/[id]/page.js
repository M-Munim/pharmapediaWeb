'use client'
import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { PiRanking } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import Image from 'next/image';
import { useRouter } from 'next/router';
const page = ({ params }) => {
  // const router = useRouter();
  // const { id } = router.query;

  // FORM SUBSCRIPTION
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!email) {
  //     setMessage('Please enter a valid email.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('/api/subscribe', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setEmail('');
  //       setMessage('Thank you for subscribing!');
  //     } else {
  //       setMessage(data.error || 'Something went wrong.');
  //     }
  //   } catch (error) {
  //     setMessage('An error occurred. Please try again.');
  //   }
  // };


  return (
    <main>
      {/* <h1>{params.id}</h1> */}
      <section className='h-[577px] flex justify-center items-center' style={{ backgroundImage: "url('/SubBlogMain.svg')" }}>
        <div className="w-10/12 m-auto">
          <div className="text-white mb-3">
            <h2 className="text-6xl font-medium tracking-wider mb-3 mt-20 w-11/12">{params.id} Efficient Rules How to Organize Your Working Place</h2>
            <p className="text-4xl">Relationship tips couples therapists are giving all <br /> the time</p>
          </div>
          <div className="flex items-center justify-between w-1/2 text-white">
            <p className="text-xl">by Joanna Wellick</p>
            <div className="w-6 border-1 border-white"></div>
            <CiClock2 />
            <p className="text-sm">2 minute read</p>
            <div className="w-6 border-1 border-white"></div>
            <PiRanking />
            <p className="text-sm">1.6K views</p>
            <div className="w-6 border-1 border-white"></div>
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <p className="text-sm">1.2K shares</p>
          </div>
        </div>
      </section>

      <section className=''>
        <div className="flex justify-between items-start my-20">
          <div className="h-96 w-1/12">
            <div className="flex flex-col justify-center items-center gap-12" style={{
              color: '#121416'
            }}>
              <div className="flex flex-col justify-center items-center gap-1">
                <PiRanking />
                <p className="">views <br />
                  1.6K </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-1">
                <CiShare2 />
                <p className="">shares <br />
                  996K</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <FaFacebook />
                <p className="">125</p>
                <FaTwitter />
                <FaPinterest />
                <p className="">425</p>
              </div>
            </div>
          </div>
          <div className="w-8/12">
            <div className="">
              <p className="text-lg leading-8 mb-4">Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication luxurious coral print pocket pattern On trend inspired shades.</p>
              <p className="text-lg leading-8 mb-3">Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Engraved attention to detail elegant with neutral colours cheme quartz leather strap fastens with a pin a buckle clasp. Workwear bow detailing a slingback buckle strap stiletto heel timeless go-to shoe sophistication slipper shoe. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.</p>
            </div>

            <div className="flex justify-center items-start gap-5 mt-16 mb-10">
              <Image src="/comma.svg" width={41} height={38} alt='Commas' className='mt-5' />
              <h1 className="text-5xl font-bold leading-tight uppercase">Knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.
              </h1>
            </div>

            <div className="">
              <p className="text-lg leading-8 mb-4">Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design
              </p>
              <p className="text-lg leading-8 mb-3"> Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.</p>
            </div>

            <div className="">
              <div className="mt-16">
                <h1 className="text-4xl font-bold leading-tight uppercase mb-3">Eu ridiculus fringilla aenean</h1>
                <p className="text-lg leading-8 mb-4 ml-2">Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.</p>

                <ul className='ml-24 my-14 list-disc'>
                  <li>Crisp fresh iconic elegant timeless clean perfume</li>
                  <li> Neck straight sharp silhouette and dart detail</li>
                  <li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li>
                </ul>

                <p className="text-lg leading-8 mb-4 ml-2">See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-1/4 flex items-center justify-center gap-2 py-3 border-b">
                  <p className="">694 <span className="font-semibold text-pClr"> Share</span></p>
                </div>

                <div className="w-1/4 flex items-center justify-center gap-2 py-3 border-b border-facebook">
                  <FaFacebook className='text-facebook' />
                  <p className=""><span className='uppercase font-semibold' style={{
                    color: "#3B5998"
                  }} >Share </span>694</p>
                </div>

                <div className="w-1/4 flex items-center justify-center gap-2 py-3 border-b border-twitter">
                  <FaTwitter className='text-twitter' />
                  <p className="">694 <span className='uppercase font-semibold text-twitter'>TWEET</span></p>
                </div>

                <div className="w-1/4 flex items-center justify-center gap-2 py-3 border-b border-pintrest">
                  <FaPinterest className='text-pintrest' />
                  <p className="">694</p>
                </div>
              </div>
              <button className="button-filledext my-20">VIEW COMMENTS (0)</button>
            </div>
          </div>
          <div className="bg-orange-300 w-3/12 px-6">
            <h2 className="font-medium text-2xl mb-6">Follow Us</h2>

            <div className="flex items-center justify-center gap-12  mb-6">
              <div className="">
                <FaFacebook className='text-2xl' />
                <p className="">10</p>
              </div>

              <div className="">
                <FaTwitter className='text-2xl' />
                <p className="">69k</p>
              </div>

              <div className="">
                <FaSquareInstagram className='text-2xl' />
                <p className="">45</p>
              </div>

              <div className="">
                <FaPinterest className='text-2xl' />
                <p className="">69k</p>
              </div>

              <div className="">
                <FaYoutube className='text-2xl' />
                <p className="">69k</p>
              </div>
            </div>

            <div className="">
              <p className="mb-4"><span className='font-semibold'>Subscription</span> Subscribe to our newsletter and receive a selection of cool articles every weeks
              </p>

              {/* <form onSubmit={handleSubmit}> */}
              <form>
                <input
                  type="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className='h-16 w-full rounded-sm bg-transparent p-3 outline-none border-slate-400 border-1'
                />
                <button type="submit" className='block button-filledext2 mt-2 '>Subscribe</button>
              </form>
              {/* {message && <p>{message}</p>} */}

              <div className="flex mb-8 gap-3 items-center justify-start my-6">
                <input type="checkbox" id="myCheckbox" className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded outline-none " />
                <p className="font-medium text-pClr">By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >
    </main >
  )
}

export default page
