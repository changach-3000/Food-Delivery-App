import React, { useContext, useState } from 'react'
import { ReviewContext } from '../context/ReviewContext';

function UpdateReviewForm() {
 const [comment, setComment] = useState('');
 const {updateReview} = useContext(ReviewContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    updateReview(comment);
    setComment('');
  };

  return (
   
    <div className='login template 100-w vh-100'>
    <div className='70-w p-5 rounded bg-white mx-3 mx-sm-1'>
        <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Update Comment/ Review</h3>
            <div className='mb-2'>
                <textarea type='text' placeholder='Leave Comment' className='form-control' onChange={(e)=> setComment(e.target.value)} />
            </div>
            <div className='d-grid'>
                <button style={{ backgroundColor: '#FFC244FF', borderColor:'#FFC244FF'}} className='btn btn-primary'>Update</button>
            </div>
        </form>
    </div>

</div>
  )
}

export default UpdateReviewForm


 