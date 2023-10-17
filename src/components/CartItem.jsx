import React from 'react'
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { decrementQty, incrementQty, removeFormCart } from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'


const CartItem = ({id , name , qty  ,price , img}) => {

  const dispatch = useDispatch();

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2'>
      <MdDelete className='absolute right-7 text-gray-600 cursor-pointer' onClick={() => {
        dispatch(removeFormCart({id , img , price ,  name ,qty}))
        toast.success('item removed')
      }}/>
        <img src={img} alt="" className='w-[50px] h-[50px] ' />

        <div>
            <h2 className='font-bold text-gray-800 '>{name}</h2>
            <div className='flex justify-between'>
                <span className='text-green-500 font-bold'>₹{price}</span>
                <div className='flex justify-center items-center gap-2 absolute right-7'>

                <AiOutlineMinus 
                onClick={() =>  qty > 1 ? dispatch(decrementQty({id})) : qty=0}

                className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                <span>{qty}</span>
                <AiOutlinePlus 
                onClick={() => qty >=1 ? dispatch(incrementQty({id})) : qty = 0}
                className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem