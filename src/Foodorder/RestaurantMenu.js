// import React from 'react'
import { useParams } from 'react-router-dom'
import useRestaurant from './Components/useRestaurant';
import Shimmer from './Components/Shimmer';
import {RES_IMG_CDN} from './Components/Constants'
// import {BiFoodTag} from 'react'

const RestaurantMenu = () => {
  const { resId } = useParams(); /* Read dynamic URL params */


  const restaurant =
    useRestaurant(
      resId
    ); /* Passing resId to Custom Hooks to fetch restaurant details and returns it */


    return !restaurant ? (
      <Shimmer />
    ) : (
      <div className="flex flex-col mx-8 p-6">
        <div className='flex p-2 my-4' >
          <img
            className='w-[650px] mx-4 rounded-lg'
            src={RES_IMG_CDN + restaurant?.info?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className='ml-[170px] mt-[50px]' >
            <h2 className='font-bold text-3xl my-2' >
              {/* <BiFoodTag /> */}
              {restaurant?.info?.name}
            </h2>
            <p className='text-xl my-2' >
              {restaurant?.info?.cuisines.join(",")}
            </p>
            <div>
              <div className='text-xl my-2' >
                {restaurant?.info?.avgRating}
              </div>
              
              <div className='text-xl my-2' >{restaurant?.info?.sla.slaString}</div>
              
              <div className='text-xl my-2' > {restaurant?.info?.costForTwoMessage}</div>
            </div>
          </div>
        </div>
  
       <div>
          <div className='p-4 flex flex-col justify-center items-center' >
            {/* {console.log(restaurant?.menu[0]?.itemCards[1]?.card.info.name)} */}
            <h1 className='text-4xl border border-red-100 p-2 rounded-lg bg-red-100 my-6' >Menu</h1>
            <div className='menu-items' >
              <h2 className='text-xl p-2 my-2  flex justify-between' >
                <h1>{restaurant?.menu[0]?.itemCards[1]?.card?.info?.name}</h1>
                ---
                <h1>  ₹  {restaurant?.menu[0]?.itemCards[1]?.card?.info?.defaultPrice/100}</h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>

                {/* {console.log(restaurant?.menu[0]?.itemCards[1]?.card?.info)} */}
              </h2>
              <h2 className='text-xl p-2 my-2  flex justify-between' >
                <h1>{restaurant?.menu[0]?.itemCards[2]?.card?.info?.name}</h1>
                ---
                <h1>  ₹  {restaurant?.menu[0]?.itemCards[2]?.card?.info?.defaultPrice/100}</h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>
              </h2>
              <h2 className='text-xl p-2 my-2  flex justify-between' >
                <h1>{restaurant?.menu[0]?.itemCards[3]?.card?.info?.name}</h1>
                ---
                <h1>  ₹  {restaurant?.menu[0]?.itemCards[3]?.card?.info?.defaultPrice/100}</h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>
              </h2>
              <h2 className='text-xl p-2 my-2  flex justify-between' >
                <h1>{restaurant?.menu[0]?.itemCards[4]?.card?.info?.name}</h1>
                ---
                <h1>  ₹  {restaurant?.menu[0]?.itemCards[4]?.card?.info?.defaultPrice/100}</h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>
              </h2>
              <h2 className='text-xl p-2 my-2  flex justify-between' >
                <h1>{restaurant?.menu[0]?.itemCards[5]?.card?.info?.name}</h1>
                ---
                <h1>  ₹  {restaurant?.menu[0]?.itemCards[5]?.card?.info?.defaultPrice/100}</h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>

              </h2>
              <h2 className='text-xl p-2 my-2  flex justify-between' >
                <h1>{restaurant?.menu[0]?.itemCards[6]?.card?.info?.name}</h1>
                ---
                <h1>  ₹  {restaurant?.menu[0]?.itemCards[6]?.card?.info?.defaultPrice/100}</h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>

              </h2>
              <h2  className='text-xl p-2 my-2  flex justify-between' >
                <h1>{restaurant?.menu[0]?.itemCards[7]?.card?.info?.name}</h1>
                ---
                <h1>  ₹  {restaurant?.menu[0]?.itemCards[7]?.card?.info?.defaultPrice/100}</h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>

              </h2>
              <h2  className='text-xl p-2 my-2  flex justify-between' >
                <h1>{restaurant?.menu[0]?.itemCards[8]?.card?.info?.name}</h1>
                ---
                <h1>  ₹  {restaurant?.menu[0]?.itemCards[8]?.card.info.defaultPrice/100}</h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>

              </h2>
              <h2  className='text-xl p-2 my-2 flex justify-between' >
                <h1> {restaurant?.menu[0]?.itemCards[9]?.card?.info?.name} </h1>
                ---
                <h1> ₹ {restaurant?.menu[0]?.itemCards[9]?.card?.info?.defaultPrice/100} </h1>

                <button className='bg-green-300 p-1 rounded-lg' >Add</button>

                
              </h2>

              {/* {console.log(restaurant?.menu[0]?.itemCards[9]?.card.info)} */}
            
            </div>
          </div>
       </div>
      </div>
    );
  };
  
  export default RestaurantMenu;