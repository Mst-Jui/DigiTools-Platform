import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Store = ({ cart, setCart }) => {
  // console.log(productsInfo);
  // console.log(cart);
  const handleDelete = (c) => {
    const filterDelete = cart.filter(f => f.id !== c.id);
    setCart(filterDelete)
    toast.success("Removed Successfully!")
  }

  const totalPrice = cart.reduce((sum, c) => sum + c.price, 0);
  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout Successful! Your cart is now empty.")
  }

  return (
    <div className='m-10'>


      {
        cart.length === 0 ?
          <div className='flex items-center justify-center flex-col gap-4'>
            <FiShoppingCart className='text-6xl text-gray-400' />
            <p className='text-gray-400'>Your Cart is Empty</p>
          </div>
          :
          <div>
            {
              cart.map(c => <div className='p-4 bg-[#F9FAFC] rounded-xl flex justify-between items-center mb-4' key={c.id}>
                {/* info  */}
                <div>
                  <div className='flex items-center gap-4'>
                    <div className='p-4 border border-[#f2f2f2] rounded-full w-15 h-15 flex items-center bg-white justify-center'>
                      <img
                        className='w-10 h-10 object-contain'
                        src={c.icon} alt="" />
                    </div>

                    <div>
                      <h2 className='font-semibold text-xl'>{c.name}</h2>
                      <p className='text-[#627382] font-medium'>$ {c.price}</p>
                    </div>
                  </div>
                </div>

                <span
                  onClick={() => handleDelete(c)}
                  className='font-bold text-[#FF3980]'>Remove</span>

              </div>)
            }

            <div className='flex justify-between items-center p-4 '>
              <p className='font-semibold'>Total:</p>
              <p className='font-bold text-2xl'>${totalPrice}</p>
            </div>
            <div className='my-5'>
              <button
                onClick={handleCheckout}
                className='btn w-full rounded-full font-bold text-white border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
            </div>
          </div>
      }
    </div>
  );
};

export default Store;



