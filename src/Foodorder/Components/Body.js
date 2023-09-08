import React, { useEffect, useState } from 'react'
import { RES_IMG_CDN } from './Constants';
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom';
import useOnline from '../../utils/useOnline';




const Body = () => {

    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    // const [search,setSearch]=useState("");
    const [searchText,setSearchText]=useState("")

    function filterData(searchText, restaurants){
      try {
        const filterdata= restaurants.filter(restaurant => restaurant?.info?.name?.toUpperCase()?.includes(searchText?.toUpperCase()));
        return filterdata;
      } catch (error) {
        console.log(error);
      }
       
    }

    

    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant(){
        const data=await fetch("https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999");
        const json=await data.json();
        console.log(json)
        setFilteredRestaurants(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const isOnline=useOnline();

    if(!isOnline){
      return <h1>Please check your internet connection!</h1>
    }

    if(!allRestaurants) return null;

  return allRestaurants?.length===0 ? (
    <Shimmer /> 
  ) : (
    <>
        <div className="search-container">
              <input type="text" className='search-input' placeholder='search' value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value)
              }}   />

              <button className="search-btn" onClick={()=>{
                  const data=filterData(searchText,allRestaurants);
                  setFilteredRestaurants(data);
                  // setSearchText(data);
                  
              }} >Search</button>
          </div>
    
      <div className='restaurant-list' >
      {
        filteredRestaurants.map((res)=>{
          return (
            <Link to={"/restaurant/" + res.info.id} key={res?.info?.id} className='body-container' >
              <img src={RES_IMG_CDN + res?.info?.cloudinaryImageId} alt="" />
              <h3 className='body-h3' >{res?.info?.name}</h3>
            </Link>
          )
        })
      }
    </div>

    </>
  
  )
}

export default Body