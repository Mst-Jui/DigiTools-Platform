import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

const ProductSection = ({ productsInfo, cart, setCart }) => {
  // console.log(productsInfo)cart info 
  // console.log(cart);



  const handleBuyNowBtn = () => {
    setIsSelected(true);
    const isFound = cart.find((i) => i.id === productsInfo.id);
    if (isFound) {
      toast.error("This item is already in your cart!")
      return;
    }
    setCart([...cart, productsInfo])
    toast.success("Successfully Added to Cart!")
  }



  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className='border border-[#f2f2f2] p-6 rounded-2xl space-y-4'>

      <div className='flex justify-end'>
        <span
          className={`text-sm font-semibold px-2 py-1 rounded-2xl text-right ${productsInfo.tagType === "popular"
            ? "bg-purple-200 text-purple-500"
            : productsInfo.tagType === "best-seller"
              ? "bg-yellow-200 text-yellow-500"
              : productsInfo.tagType === "new"
                ? "bg-green-200 text-green-500"
                : "bg-green-200 text-black"
            }`}
        >
          {productsInfo.tagType === "popular"
            ? "Popular"
            : productsInfo.tagType === "best-seller"
              ? "Best Seller"
              : productsInfo.tagType === "new"
                ? "New"
                : productsInfo.tagType}
        </span>
      </div>
      <div className='p-4 border border-[#f2f2f2] rounded-full w-15 h-15 flex items-center justify-center'>
        <img className='w-10 h-10 object-contain'
          src={productsInfo.icon} alt="" />
      </div>
      <h2 className='text-2xl font-bold'>{productsInfo.name}</h2>
      <p className='text-[#627382]'>{productsInfo.description}</p>
      <p className='text-2xl font-bold text-[#101727]'>${productsInfo.price}
        <span className='text-[#627382] text-[16px] font-normal'>/ {productsInfo.period}</span>
      </p>

      {/* Feature  */}
      <ul>
        {
          productsInfo.features.map((future, index) => (
            <li key={index} className='flex items-center gap-2'>
              <TiTick className='text-green-500' />
              {future}
            </li>
          ))
        }
      </ul>
      <button
        onClick={handleBuyNowBtn}
        className={`btn w-full rounded-full font-bold text-white border-none  
      ${isSelected
            ? "bg-green-500"
            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>
        {isSelected ? "Added to cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductSection;