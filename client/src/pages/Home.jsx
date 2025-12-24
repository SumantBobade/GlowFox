import React from 'react'
import HeroPage from '../components/HeroPage'
import CompanyPage from '../components/CompanyPage'
import AboutPage from '../components/AboutPage'
import Games from '../components/Games'

function Home() {
  return (
      <div>
          <HeroPage />
          <AboutPage />
          <CompanyPage />
          <Games/>
          
    </div>
  )
}

export default Home