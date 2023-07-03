import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'

function Homepage() {
const {foods} = useContext(FoodContext)

const groupedProducts = {};
  foods && foods.map((food) => {
    if (groupedProducts[food.restaurant_name]) {
      groupedProducts[food.restaurant_name].push(food);
    } else {
      groupedProducts[food.restaurant_name] = [food];
    }
  });
  return (
    <div className='container'>
    {Object.keys(groupedProducts).map((restaurant_name) => (
      <div key={restaurant_name} className='category-container'>
        <h3 className='category-title py-3' style={{ color: '#00a082ff',fontFamily:'cursive' }}>{restaurant_name}</h3>
        <div className='card-container'>
          {groupedProducts[restaurant_name].map((food) => (
            <div key={food.id} className='card'>
              <div><img src={food.image} width={300} height={250}/></div>
              <div>{food.name}</div>
              <div>{food.description}</div>
              <div>{food.price}</div>
             
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
   
  )
}

export default Homepage