
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import ProductsSection from './components/ProductsSection'
import StatsSection from './components/StatsSection'

const productsInfoFatch = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const productsPromise = productsInfoFatch();

  const [cart, setCart] = useState([])


  return (
    <>
      <header className='max-w-6xl mx-auto'>
        <Navbar
          cart={cart}
        />
      </header>
      <hr className='text-[#F2F2F2]' />

      <Banner className='max-w-6xl mx-auto' />
      {/* <StatsSection className='max-w-6xl mx-auto' /> */}




      <Suspense fallback={<p>Loading...</p>} className='max-w-6xl mx-auto'>
        <ProductsSection className='max-w-6xl mx-auto'
          productsPromise={productsPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>








    </>
  )
}

export default App
