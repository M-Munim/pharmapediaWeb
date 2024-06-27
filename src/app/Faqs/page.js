"use client"
import { faqs } from '../data';

import Image from 'next/image'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const page = () => {

  return (
    <main>
      <section className='w-10/12 m-auto bg-red-300 flex items-center justify-center'>
        <div className="left w-1/2">
          <Image src="/faqImg.svg" alt="Scroll down button" width={40} height={40} className='w-[730px]' />
        </div>
        <div className="right w-1/2">
          <div className="">
            <h1 className="">Frequently <br /> <span>Ask Questions</span></h1>

            {/* <div className="">
              <div className="flex items-start justify-center gap-3">
                <div className="w-1/12 bg-green-400">01</div>
                <div className="w-8/12 p-2 bg-green-300">
                  <h2 className='question'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, aliquam.</h2>
                  <p className="answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt obcaecati quos, nisi vitae, autem illum nulla facilis culpa officia repellendus eius quod laudantium, sapiente nemo quae impedit harum totam?</p>
                </div>
                <div className="w-2/12">
                  <FaPlus />
                  <FaMinus />
                </div>
              </div>
            </div> */}

            <Accordion
              className='accordion'
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {
                faqs.map((item, i) => {
                  const [className, setClassName] = useState(null)
                  return (
                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='flex'>

                          <AccordionItemState>
                            {
                              ({ expanded }) =>
                                expanded ? setClassName("expanded")
                                  : setClassName("collapsed")
                            }
                          </AccordionItemState>

                          <div className="flex items-start justify-center gap-3 bg-orange-400 w-full">
                            <div className="w-1/12 bg-green-400">01</div>
                            <div className="w-8/12 p-2 bg-green-300">
                              <h2 className='question'>{item.question}</h2>
                            </div>
                            <div className="w-2/12">
                              <FaPlus />
                              <FaMinus />
                            </div>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p className="secondaryText">{item.ans}</p>
                      </AccordionItemPanel>
                    </AccordionItem>)
                })
              }
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page

// import Image from 'next/image';
// import React, { useState } from 'react';
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';
// import "react-accessible-accordion/dist/fancy-example.css";
// import { FaPlus, FaMinus } from "react-icons/fa";

// // Sample FAQ data

// const Page = () => {
//   const [expanded, setExpanded] = useState(null); // State to track expanded accordion item

//   const handleAccordionClick = (index) => {
//     if (expanded === index) {
//       setExpanded(null); // Collapse if clicked again on the same accordion
//     } else {
//       setExpanded(index); // Expand accordion item
//     }
//   };

//   return (
//     <main>
//       <section className='w-10/12 m-auto bg-red-300 flex items-center justify-center'>
//         <div className="left w-1/2">
//           <Image src="/faqImg.svg" alt="Scroll down button" width={40} height={40} className='w-[730px]' />
//         </div>
//         <div className="right w-1/2">
//           <div className="">
//             <h1 className="">Frequently <br /> <span>Ask Questions</span></h1>

//             <div className="">
//               <Accordion allowMultipleExpanded>
//                 {faqs.map((faq, index) => (
//                   <AccordionItem key={index}>
//                     <AccordionItemHeading>
//                       <AccordionItemButton onClick={() => handleAccordionClick(index)}>
//                         <div className="flex items-center gap-3">
//                           <div className="w-1/12 bg-green-400">{index + 1}</div>
//                           <div className="w-8/12 p-2 bg-green-300">
//                             <h2 className='question'>{faq.question}</h2>
//                           </div>
//                           <div className="w-2/12">
//                             {expanded === index ? <FaMinus /> : <FaPlus />}
//                           </div>
//                         </div>
//                       </AccordionItemButton>
//                     </AccordionItemHeading>
//                     <AccordionItemPanel>
//                       <p className="answer">{faq.answer}</p>
//                     </AccordionItemPanel>
//                   </AccordionItem>
//                 ))}
//               </Accordion>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Page;
