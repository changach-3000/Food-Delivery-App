import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ReviewContext } from '../context/ReviewContext'

function Profile() {
  const {currentuser}= useContext(AuthContext)
  const {reviews}= useContext(ReviewContext)

  return (
    <div class="profile-page row py-5 px-4"> 
    <div class="col-md-5 mx-auto"> 
    <div class="bg-white shadow rounded overflow-hidden"> 
    <div class="px-4 pt-0 pb-4 cover"> 
    <div class="media align-items-end profile-head"> 
    <div class="profile mr-3">
      <img src={currentuser && currentuser.profile_picture} alt="..." width="130" class="rounded mb-2 img-thumbnail"/>
      </div> <div class="media-body"> 
      <h4 class="mt-0">{currentuser && currentuser.username}</h4> 
      <p class="mt-0">{currentuser && currentuser.email}</p> 
      </div>
       </div> 
       </div> 
       <div class="bg-light p-4 d-flex justify-content-end text-center"> 
       <div className="social-links mt-3">
            <a className="twitter" target="_blank"><i class="twitter icon"></i></a>
            <a className="facebook" target="_blank"><i class="facebook f icon"></i></a>
            <a className="instagram" target="_blank"><i class="instagram icon"></i></a>
            <a className="linkedin" target="_blank"><i class="linkedin icon"></i></a>
            <a className="youtube" target="_blank"><i class="youtube icon"></i></a>
          </div>
          </div> 
            {/* <div class="py-4 px-4">
               <div class="d-flex align-items-center justify-content-between mb-3"> 
               <h5 class="mb-0">My Reviews</h5>
               </div> 
               <div class="row"> 
               {
                reviews && reviews.map(review =>{
                  <div class="col-lg-6 pl-lg-1">
                   {review.comment}
               
                      </div> 
                })
              }
               
                      </div>  
            </div> */}
                      </div> 
                      </div>
</div>
  )
}

export default Profile