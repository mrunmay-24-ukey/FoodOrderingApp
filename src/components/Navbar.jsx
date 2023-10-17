import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className='flex justify-between flex-col lg:flex-row py-3 mx-6 mb-10'>
        <div >
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='text-2xl font-bold'>Swizoto</h1>

        </div>

        <div>
            <input type="search" name='search' id='' placeholder='Search here' autoComplete='off'
            className='p-3 border border-gray-400 text-sm rounded-md outline-none w-full lg:w-[25vw]'

            onChange={(e) => dispatch(setSearch(e.target.value))}
             />
        </div>
    </nav>
  )
}

export default Navbar