import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'
import { AuthContext } from '../context/AuthContext';


function Homepage() {
const {foods,Addtocheckout,deleteFood} = useContext(FoodContext)
const {currentuser} = useContext(AuthContext)

const groupedProducts = {};
  foods && foods.map((food) => {
    if (groupedProducts[food.restaurant_name]) {
      groupedProducts[food.restaurant_name].push(food);
    } else {
      groupedProducts[food.restaurant_name] = [food];
    }
  });
  return (
    
    <div className='container mt-5 mb-5' style={{ backgroundColor:'#FFC244FF'}}>
    {Object.keys(groupedProducts).map((restaurant_name) => (
      <div key={restaurant_name} className='category-container'>
        <h3 className='category-title py-3' style={{ color: '#00a082ff',fontFamily:'cursive' }}>{restaurant_name}</h3>
        <div className='card-container '>
          {groupedProducts[restaurant_name].map((food) => (
            <div key={food.id} className='card col-4 mb-3  mr-3 px-3 shadow g-2'>
              <div className='mt-2'  style={{ textAlign: 'center' }}>
                <img src={food.image}  height={250} />
                </div>
              <div className='title' style={{ textAlign:'center',fontSize:'15pt'}}>{food.name}</div>
              <div className='description mx-3'>{food.description}</div>
              <div className='price mx-3'>{food.price}</div>
              <div className='d-flex flex-column align-items-start'>
              <button className='btn btn-outline-success btn-sm mb-2 d-block mx-auto' onClick={()=>Addtocheckout(food)}>Add to checkout</button>
              </div>
              {
                currentuser && currentuser.is_admin?
                <>
                 <button className='btn btn-outline-danger btn-sm mb-2 d-block mx-auto' onClick={()=>{deleteFood(food.id)}}>Delete</button>
                </>:""
              }
              
             </div>
          ))}
        </div> 
      </div>
    ))}
  </div>

  )
}

export default Homepage