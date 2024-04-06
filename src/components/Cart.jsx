import React from 'react'

const Cart = ({cart}) => {

    if(cart.length === 0)
    return;

  return (
    <div className='border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Sepet</h2>
        <ul>
            <li>
                <span className='mt-2 flex justify-between'>Ürün adı</span>
                <span>Fiyat</span>
                <hr className='my-4'/>
                <p className='font-semibold text-xl'>Toplam:100TL</p>
                <button className='bg-red-500 text-white py-2 rounded w-full hover:bg-red-600 transition-all mt-4'>Sepeti Bosalt</button>

            </li>
        </ul>
    </div>
  )
}

export default Cart
