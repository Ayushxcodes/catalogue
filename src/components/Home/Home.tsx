import React from 'react'

import ArtGallery from './Features/Features'
import Hero from './Hero/Hero'
import ColorGallery from './ColorGallery/ColorGallery'

const Home = () => {
  return (
    <div>
      <Hero />
      <ArtGallery />
      <ColorGallery />
    </div>
  )
}

export default Home