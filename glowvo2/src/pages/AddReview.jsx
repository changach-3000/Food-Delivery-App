import React, { useContext, useState } from 'react'

import { ReviewContext } from '../context/ReviewContext'

function AddReview() {
    const {AddReviews} = useContext(ReviewContext)
    const [comment, setComment] = useState()
    const [food_id, setFood_id]= useState()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        AddReviews(comment,food_id)
        setComment("")
        setFood_id("")
    
     }
  return (
    <div className='login template 100-w vh-100'>
            <div className='70-w p-5 rounded bg-white mx-3 mx-sm-1'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center'>Leave Comment/ Review</h3>
                    <div className='mb-2'>
                        <textarea type='text' placeholder='Leave Comment' className='form-control' onChange={(e)=> setComment(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <input type='text' placeholder='food_id' className='form-control' onChange={(e)=> setFood_id(e.target.value)} />
                    </div>
                    <div className='d-grid'>
                        <button style={{ backgroundColor: '#FFC244FF', borderColor:'#FFC244FF'}} className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
  )
}

export default AddReview