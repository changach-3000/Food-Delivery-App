import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'


function Homepage() {
const {foods,Addtocheckout} = useContext(FoodContext)

const groupedProducts = {};
  foods && foods.map((food) => {
    if (groupedProducts[food.restaurant_name]) {
      groupedProducts[food.restaurant_name].push(food);
    } else {
      groupedProducts[food.restaurant_name] = [food];
    }
  });
  return (
    
    <div className='container mt-5' style={{ backgroundColor:'#FFC244FF'}}>
    {Object.keys(groupedProducts).map((restaurant_name) => (
      <div key={restaurant_name} className='category-container'>
        <h3 className='category-title py-3' style={{ color: '#00a082ff',fontFamily:'cursive' }}>{restaurant_name}</h3>
        <div className='card-container '>
          {groupedProducts[restaurant_name].map((food) => (
            <div key={food.id} className='card col-4 mb-3  mr-3 px-3 shadow g-2'>
              <div><img src={food.image} width={350} height={250} onClick={()=>Addtocheckout(food)}/></div>
              <div className='title' style={{ textAlign:'center',fontSize:'15pt'}}>{food.name}</div>
              <div className='description mx-3'>{food.description}</div>
              <div className='price mx-3'>{food.price}</div>
             </div>
          ))}
        </div>
      </div>
    ))}
  </div>

  )
}

export default Homepage