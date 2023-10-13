import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>M.Yosry Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout