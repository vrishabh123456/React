import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_cart, remove_cart, empty_cart } from '../redux/reduxCart/CartAction'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { add_wishlist  } from '../redux/reduxWishlist/WishlistAction'
import { FaHeart } from 'react-icons/fa'

const Home = () => {

  const [product, setProduct] = useState([])

  console.log('homeProduct', product);

  useEffect(() => {
    const res = axios.get('http://localhost:3000/ecoproduct')
      .then((res) => {
        setProduct(res.data)
        console.log('homedata', res.data);
      })
  }, [])

  const productData = useSelector((state => state.cart))
  const dispatch = useDispatch()

  console.log('productData', productData);

  return (
    <div>
      <h1 className='heading'>This is Home Page</h1>
      <div className='grid grid-cols-2 gap-5 justify-center items-center px-80'>
        {
          product.map((item) => {
            return (
              <div>
                <div className="w-[300px] rounded-md border my-2 ">
                  <img
                    src={item.image}
                    alt="Laptop"
                    className="h-[200px] p-4 px-20 rounded-md object-cover "
                  />
                  <div className=" ">
                    <h1 className="text-lg font-semibold line-clamp-1">{item.title}</h1>
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                    <div className='w-full flex'>
                    <button
                      onClick={() => dispatch(add_cart(item))}
                      type="button"
                      className="w-1/2 rounded-sm bg-black px-3 mt-6 py-2 flex justify-center  text-[10px] font-semibold text-white shadow-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Add To Cart 
                    </button>
     
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
