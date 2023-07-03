import React from 'react'

function Profile() {
  return (
    <div class="profile-page row py-5 px-4"> 
    <div class="col-md-5 mx-auto"> 
    <div class="bg-white shadow rounded overflow-hidden"> 
    <div class="px-4 pt-0 pb-4 cover"> 
    <div class="media align-items-end profile-head"> 
    <div class="profile mr-3">
      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" class="rounded mb-2 img-thumbnail"/>
      </div> <div class="media-body"> 
      <h4 class="mt-0">UserName</h4> 
      <p class="mt-0">UserEmail</p> 
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
            <div class="py-4 px-4">
               <div class="d-flex align-items-center justify-content-between mb-3"> 
               <h5 class="mb-0">My Orders</h5>
               </div> 
               <div class="row"> 
               <div class="col-lg-6 mb-2 pr-lg-1">
                <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/>
                </div> 
                <div class="col-lg-6 mb-2 pl-lg-1">
                  <img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/>
                  </div> 
                  <div class="col-lg-6 pr-lg-1 mb-2">
                    <img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="img-fluid rounded shadow-sm"/>
                    </div>
                     <div class="col-lg-6 pl-lg-1">
                      <img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/>
                      </div> 
                      </div> 
                      </div> 
                      </div> 
                      </div>
</div>
  )
}

export default Profile