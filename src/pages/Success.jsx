import React, { useEffect, useState } from 'react'
import { RotateLoader } from 'react-spinners'

const Success = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    } , 3000)
  } , [])

  return (
    <div className='flex items-center justify-center h-screen flex-col'>
    {
      loading ? <RotateLoader color="#36d7b7" /> : <div>
      
      <h2>Order Successful</h2>
      <p>Your order has been successfully placed</p>
    </div>
    }
    
    </div>
  )
}

export default Success