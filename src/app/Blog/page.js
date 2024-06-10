import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <main>
      <section className="bg-red-200 flex justify-center items-center h-96">
        <div className="text-white w-3/6 text-center">
          <h1 className="text-6xl font-light">OUR BLOGS</h1>
          <p className="leading-7 text-xl">Pharmapedia Private Limited is a company specializing in mobile application development. Our focus lies primarily in the education sector, with an emphasis on medical education and STEM (Science, Technology, Engineering, and Mathematics) education.</p>
          <Image src="/DownBtn.svg"
            alt="DownBtn"
            width={40}
            height={40} />
        </div>
      </section>
    </main>
  )
}

export default Blogs