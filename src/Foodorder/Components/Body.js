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
        <div className="flex p-2 my-3">
              <input type="text" className='border border-red-100 w-72 p-1 rounded-lg mx-2' placeholder='search' value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value)
              }}   />

              <button className="p-1 bg-red-200 rounded-lg hover:bg-red-300" onClick={()=>{
                  const data=filterData(searchText,allRestaurants);
                  setFilteredRestaurants(data);
                  // setSearchText(data);
                  
              }} >Search</button>
          </div>
    
      <div className='flex flex-wrap' >
      {
        filteredRestaurants.map((res)=>{
          return (
            <Link to={"/restaurant/" + res.info.id} key={res?.info?.id} className='w-[340px] p-2 h-[300px] m-4 rounded-lg shadow-lg flex flex-col justify-center items-center' >
              <img className='w-[320px] h-[240px] rounded-lg' src={RES_IMG_CDN + res?.info?.cloudinaryImageId} alt="" />
              <h3 className='' >{res?.info?.name}</h3>
            </Link>
          )
        })
      }
    </div>

    </>
  
  )
}

export default Body