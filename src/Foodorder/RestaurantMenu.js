// import React from 'react'
import { useParams } from 'react-router-dom'
import useRestaurant from './Components/useRestaurant';
import Shimmer from './Components/Shimmer';
import {RES_IMG_CDN} from './Components/Constants'

const RestaurantMenu = () => {
  const { resId } = useParams(); /* Read dynamic URL params */


  const restaurant =
    useRestaurant(
      resId
    ); /* Passing resId to Custom Hooks to fetch restaurant details and returns it */


    return !restaurant ? (
      <Shimmer />
    ) : (
      <div className="container">
        <div >
          <img
            src={RES_IMG_CDN + restaurant?.info?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div >
            <h2 >
              {restaurant?.info?.name}
            </h2>
            <p >
              {restaurant?.info?.cuisines.join(",")}
            </p>
            <div>
              <div>
                {restaurant?.info?.avgRating}
              </div>
              
              <div>{restaurant?.info?.sla.slaString}</div>
              
              <div>{restaurant?.info?.costForTwoMessage}</div>
            </div>
          </div>
        </div>
  
       <div>
          <div>
            {/* {console.log(restaurant?.menu[0]?.itemCards[1]?.card.info.name)} */}
            <h1>Menu</h1>
            <div className='menu-items' >
              <h2>
                {restaurant?.menu[0]?.itemCards[1]?.card.info.name}
              </h2>
              <h2>
                {restaurant?.menu[0]?.itemCards[2]?.card.info.name}
              </h2>
              <h2>
                {restaurant?.menu[0]?.itemCards[3]?.card.info.name}
              </h2>
              <h2>
                {restaurant?.menu[0]?.itemCards[4]?.card.info.name}
              </h2>
              <h2>
                {restaurant?.menu[0]?.itemCards[5]?.card.info.name}
              </h2>
              <h2>
                {restaurant?.menu[0]?.itemCards[6]?.card.info.name}
              </h2>
              <h2>
                {restaurant?.menu[0]?.itemCards[7]?.card.info.name}
              </h2>
              <h2>
                {restaurant?.menu[0]?.itemCards[8]?.card.info.name}
              </h2>
              <h2>
                {restaurant?.menu[0]?.itemCards[9]?.card.info.name}
              </h2>
            
            </div>
          </div>
       </div>
      </div>
    );
  };
  
  export default RestaurantMenu;