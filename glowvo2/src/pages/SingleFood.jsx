import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'

function SingleFood() {
  const nav = useNavigate()
  const { id } = useParams()
  const [food, setFood] = useState()
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(food && food.price)

  const handleIncrement = () => {
    setQuantity(quantity + 1)
    setPrice(price * 2)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setPrice(price / 2)
    }
  }

  const handleFinishOrder = () => {
    // Show Sweet Alert message
    nav("/orders")
    Swal.fire({
      title: 'Thank you for ordering!',
      text: 'Your food is on the way!',
      icon: 'success',
      confirmButtonText: 'OK',
    })
  }

  useEffect(() => {
    fetch(`/api/foods/${id}`)
      .then((res) => res.json())
      .then((food) => {
        setFood(food)
        setPrice(food.price)
      })
  }, [])

  return (
    <div className="singlefood m-5">
      {food ? (
        <div key={food.id} className="d-flex flex-wrap justify-content-center align-items-center gap-3 rounded" style={{ backgroundColor: "#FFC244FF" }}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={food.image} className="img-fluid py-4" alt="loading..." />
            
            <h5>Reviews</h5>
            {food.reviews && food.reviews.length > 0 ? (
              food.reviews.map((review) => (
                <div key={review.id}>
                  <p>
                    {review.comment}
                    <br />
                    {review.username}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="bg-details">
              <h2>Food details</h2>
              <h5 className="centered-title">{food.name}</h5>
              <p className="description">{food.description}</p>
              <p style={{ fontSize: '13px' }} className="desc2">
                Quantity: {quantity}
              </p>
              <p style={{ fontSize: '13px' }} className="desc2">
                Price: {price}
              </p>
              <div>
                <button className="btn btn-secondary me-2" onClick={handleDecrement}>-</button>
                <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
              </div>
              <button className='btn btn-success mt-3 mb-2' onClick={handleFinishOrder}>Place Order</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading food details...</p>
      )}
    </div>
  )
}

export default SingleFood