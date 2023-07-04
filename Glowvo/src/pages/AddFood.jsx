import React, { useContext, useState } from 'react'
import { FoodContext } from '../context/FoodContext'


function AddFood() {
  const {AddFood} = useContext(FoodContext)

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const[price,setPrice] = useState()
  const [restaurant_name, setRestaurantName] = useState()
  const [image, setImage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    AddFood(name,description, price,restaurant_name,image)
    setName(" ")
    setDescription("")
    setPrice("")
    setRestaurantName("")
    setImage("")
  }
  return (
    <div className='login template vh-100'>
    <div className ='p-5 rounded bg-white mx-3 mx-sm-1' style={{ width: '40%' }}>
      <form onSubmit={handleSubmit}>
        <h3 className='text-center'>Add Foods</h3>
        
        <div className='mb-3'>
          <label htmlFor='lname'>Name</label>
          <input type='text' placeholder='Enter name' className='form-control' onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Description</label>
          <input type='text' placeholder='Enter Description' className='form-control' onChange={(e)=> setDescription(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='lname'>Price</label>
          <input type='text' placeholder='Enter Price' className='form-control' onChange={(e)=> setPrice(e.target.value)}/>
        </div>
       
        <div className='mb-3'>
          <label htmlFor='password'>Restaurant Name</label>
          <input type='text' placeholder='Enter Restaurant Name' className='form-control' onChange={(e)=> setRestaurantName(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>Image</label>
          <input type='text' placeholder='Enter Image URL' className='form-control' onChange={(e)=> setImage(e.target.value)}/>
        </div>
  
        <div className='d-grid'>
          <button style={{ backgroundColor: '#FFC244FF', borderColor: '#FFC244FF' }} className='btn btn-primary'>Add Food</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddFood