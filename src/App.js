import React, { useState } from 'react';
import './App.css'; // You can create an App.css for global styling if needed
import restaurantData from './restaurantData.json';
import Cart from './Cart/Cart';

function App() {
  const [topRatedRestaurants,setTopRatedRestaurants]=useState([]);  

  function topRestaurants() {
    const filteredRestaurants = restaurantData.filter((res) => res.rating > 4);
    setTopRatedRestaurants(filteredRestaurants);
  }

  function resetList() {
    setTopRatedRestaurants([]);
  }

  return (
    <div className='App'>
      <h1>Restaurant List</h1>
      <button onClick={topRestaurants}>Show Top Restaurants</button>
      <button onClick={resetList}>Reset List</button>
      <div className='cart-container'>
        {topRatedRestaurants.length === 0
          ? restaurantData.map((restaurant) => (
              <Cart
                key={restaurant.id}
                resName={restaurant.resName}
                cuisine={restaurant.cuisine}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                imageUrl={restaurant.imageUrl}
              />
            ))
          : topRatedRestaurants.map((restaurant) => (
              <Cart
                key={restaurant.id}
                resName={restaurant.resName}
                cuisine={restaurant.cuisine}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                imageUrl={restaurant.imageUrl}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
