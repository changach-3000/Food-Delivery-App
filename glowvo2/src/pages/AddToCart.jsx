import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext'
import { Link } from 'react-router-dom';

function AddToCart() {
  const { selectedFoods,removefromcheckout } = useContext(FoodContext);

  if (selectedFoods.length === 0) {
    return <div>No foods selected</div>;
  }

  return (
    <div className= 'container my-5' style={{backgroundColor:'#FFC244FF', margin:'3%',height:'100vh'}}>
        <h2 className='text-center'>Selected Foods</h2>
      <div className=" row ">
      {selectedFoods && selectedFoods.map((food) => (

         <div key={food.id} className="col-4 mb-3  mr-3 px-3">
         <div className='border bg-light overflow-hidden rounded' style={{ textAlign: 'center' }}> 
           <img className='mt-2' src={food.image}  height={250} alt='loading...'/>
           <h5 style={{textAlign:'center',fontWeight:'lighter'}}>{food.name}</h5>
           {/* style the bot details */}
           <div id="movie-details">
           <p style={{fontWeight:'lighter' ,fontSize:'13px'}}> {food.description}</p>
         <img className='mx-3' src="https://img.icons8.com/ios/20/null/minus.png" onClick={()=>removefromcheckout(food)}/>
        <Link to={`/food/${food.id}`}><button className='btn btn-outline-success btn-sm mb-2 mx-auto'>Proceed To Checkout</button></Link>
         
       </div>
       </div> 
       </div>
       
      ))
      }
    </div>
    </div>
  );
}
    
    

  


export default AddToCart