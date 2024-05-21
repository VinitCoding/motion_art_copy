import React from 'react'
import Navbar from './Navbar'
import About from './About'

import ApplyPart from './ApplyPart'
import Features from './Features'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div className='xl:w-[1255px] lg:w-auto md:w-auto sm:w-auto w-auto xl:mx-auto lg:mx-3 md:mx-5 sm:mx-4 mx-3 '>

      {/* Navbar */}
      <Navbar />

      {/* About */}
      <About />

      {/* Apply Part */}
      <ApplyPart />

      {/* Features part */}
      <Features />
    </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home