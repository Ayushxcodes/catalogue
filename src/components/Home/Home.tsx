import React from 'react'

import ArtGallery from './Features/Features'
import Hero from './Hero/Hero'
import ColorGallery from './ColorGallery/ColorGallery'
import Landing from './Landing/Landing'

const Home = () => {
  return (
    <div>
      <Landing/>
      <Hero />
      <ArtGallery />
      <ColorGallery />
    </div>
  )
}

export default Home