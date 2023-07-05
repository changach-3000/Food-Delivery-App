import React, { useContext, useState } from 'react'
import { FoodContext } from '../context/FoodContext'

function AddFood() {
  const { AddFood } = useContext(FoodContext)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [restaurantName, setRestaurantName] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    AddFood(name, description, price, restaurantName, image)
    setName('')
    setDescription('')
    setPrice('')
    setRestaurantName('')
    setImage('')
  }

  const handleRestaurantChange = (e) => {
    setRestaurantName(e.target.value)
  }

  return (
    <div className='login template vh-100'>
      <div className='p-5 rounded bg-white mx-3 mx-sm-1' style={{ width: '40%' }}>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Add Foods</h3>

          <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='Enter name' className='form-control' onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className='mb-3'>
            <label htmlFor='description'>Description</label>
            <input type='text' placeholder='Enter Description' className='form-control' onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>
          <div className='mb-3'>
            <label htmlFor='price'>Price</label>
            <input type='text' placeholder='Enter Price' className='form-control' onChange={(e) => setPrice(e.target.value)} value={price} />
          </div>

          <div className='mb-3'>
            <label htmlFor='restaurant'>Restaurant Name</label>
            <select className='form-control' onChange={handleRestaurantChange} value={restaurantName}>
              <option value=''>Select a restaurant</option>
              <option value='Waterloo'>Waterloo</option>
              <option value='Ontario'>Ontario</option>
              <option value='KFC'>KFC</option>
              <option value='McDonalds'>McDonalds</option>
              <option value='Big Square'>Big Square</option>
              <option value='Chakula Zetu'>Chakula Zetu</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor='image'>Image</label>
            <input type='text' placeholder='Enter Image URL' className='form-control' onChange={(e) => setImage(e.target.value)} value={image} />
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