import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext';
import { Link, NavLink } from 'react-router-dom';

function MyOrders() {
    const { selectedFoods,AddtoOrders } = useContext(FoodContext);

    if (selectedFoods.length === 0) {
      return <div>No foods selected</div>;
    }
  
    return (
      <div className= 'container my-5' style={{backgroundColor:'#FFC244FF', margin:'3%',height:'100vh'}}>
          <h2 className='text-center '>My Orders</h2>
        <div className=" row ">
        {selectedFoods && selectedFoods.map((food) => (
  
           <div key={food.id} className="col-4 mb-3  mr-3 px-3">
           <div className='border bg-light overflow-hidden rounded' style={{ textAlign: 'center' }}> 
             <img className='mt-2' src={food.image} height={250} alt='loading...'/>
             <h5 style={{textAlign:'center',fontWeight:'lighter'}}>{food.name}</h5>
             {/* style the bot details */}
             <div id="movie-details">
             <p style={{fontWeight:'lighter' ,fontSize:'13px'}}> {food.description}</p>
           <NavLink to="/addReview">
              <button style={{backgroundColor: "#00a082ff",borderColor: "#00a082ff"}} className="btn btn-warning mb-2">Add Review</button>
            </NavLink> 
            
         </div>
         </div> 
         </div>
         
        ))
        }
      </div>
      </div>
    );
}

export default MyOrders