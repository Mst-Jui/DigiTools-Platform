import React, { use, useState } from 'react';
import ProductSection from './ProductSection';
import Store from './Store';

const ProductsSection = ({ productsPromise, cart, setCart }) => {
  const productsInformations = use(productsPromise);
  // console.log(productsInformations);



  const [products, setProducts] = useState("products")

  return (
    <div>


      <div className='text-center'>
        <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
        <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

        {/* Toggle btns  */}
        {/* name of each tab group should be unique */}
        <div className='flex justify-center my-12'>
          <div className="tabs tabs-box bg-transparent border-none">
            <input
              onClick={() => setProducts("products")}
              type="radio"
              name="my_tabs_1"
              className={`tab font-bold rounded-full ${products === "products" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`}
              defaultChecked
              aria-label="Products" />

            <input
              onClick={() => setProducts("cart")}
              type="radio"
              name="my_tabs_1"
              className={`tab font-bold rounded-full ${products === "cart" ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`}
              aria-label={`Cart (${cart.length})`} />
          </div>
        </div>



      </div>




      {
        products === "products" ?
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {
              productsInformations.map(productsInfo =>
                <ProductSection
                  key={productsInfo.id}
                  productsInfo={productsInfo}
                  cart={cart}
                  setCart={setCart} />)
            }
          </div> :
          <div className='max-w-6xl mx-auto border border-gray-400 py-2 mb-20'>
            <h2 className='font-bold text-2xl ml-10 mt-2'>Your Cart</h2>
            {
              
                <Store
                  cart={cart}
                  setCart={setCart} />
            }
          </div>
      }


    </div>
  );
};

export default ProductsSection;