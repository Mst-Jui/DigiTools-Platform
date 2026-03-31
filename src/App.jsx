
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import ProductsSection from './components/ProductsSection'
import StatsSection from './components/StatsSection'
import StartedSteps from './components/StartedSteps'
import TransparentPricing from './components/TransparentPricing'
import WorkFlow from './components/WorkFlow'
import Footer from './components/Footer'

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


      <main>
        <Banner className='max-w-6xl mx-auto' />
        {/* <StatsSection className='max-w-6xl mx-auto' /> */}

        <Suspense fallback={<p>Loading...</p>} className='max-w-6xl mx-auto'>
          <ProductsSection className='max-w-6xl mx-auto'
            productsPromise={productsPromise}
            cart={cart}
            setCart={setCart}
          />
        </Suspense>

        <StartedSteps className='max-w-6xl mx-auto' />
        <TransparentPricing />
        <WorkFlow />
      </main>


      <footer>
        <Footer/>
      </footer>








    </>
  )
}

export default App
