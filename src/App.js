import React from 'react'
import Navbar from './component/Navbar'
import Main from './component/Main'
import Product from './component/Product'
import More from './component/More'
import Funiro from './component/Funiro'
import Footer from './component/Footer'

const App = () => {
  const user = false
  return (
    <div>
    <Navbar />
    <Main />
    <Product />
    <More />
    <Funiro />
    <Footer />
    </div>
  )
}

export default App