import React from 'react'
import { NavLink } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
    <div class="hero-section">
  <div class="container col-xxl-8 px-4 my-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-12 col-md-6 col-lg-6">
        <video
          data-v-f4daae2a=""
          data-test-id="animation-video"
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          width="100%"
          height="auto"
          class="animation__element"
        >
          <source
            data-v-f4daae2a=""
            src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm"
            preload="auto"
            type="video/webm"
          />
        </video>
      </div>

      <div class="col-12 col-md-6 col-lg-6">
        <p class="lead fw-lighter">Food Delivery and More</p>
        <p>
          We offer world class food delivery for the lowest prices and for the
          best service. So order with us today for the best food experience at
          the comfort of your home
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
         <NavLink to="/signup" > <button type="button" class="btn btn-outline-success px-4 me-md-2">Sign Up</button></NavLink>
          <NavLink to="/login"><button type="button" class="btn btn-outline-success  px-4">Log In </button></NavLink>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- end of hero section --> */}
<div class="curve"></div>
</div>
  )
}

export default LandingPage