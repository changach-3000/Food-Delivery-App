import React from 'react'

function Signup() {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
    <div className='40-w p-5 rounded bg-white mx-3 mx-sm-1'>
      <form>
        <h3 className='text-center'>Sign Up</h3>
        <div className='mb-2'>
          <label htmlFor='fname'>First Name</label>
          <input type='text' placeholder='Enter first name' className='form-control' />
        </div>
        <div className='mb-2'>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' placeholder='Enter last name' className='form-control' />
        </div>
        <div className='mb-2'>
          <label htmlFor='lname'>Profile Photo</label>
          <input type='text' placeholder='Enter Image url' className='form-control' />
        </div>
        <div className='mb-2'>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter email' className='form-control' />
        </div>
        <div className='mb-2'>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Enter Password' className='form-control' />
        </div>

        <div className='d-grid'>
          <button style={{ backgroundColor: '#FFC244FF' ,borderColor:'#FFC244FF'}} className='btn btn-primary'>Sign Up</button>
        </div>
        <div className='d-flex justify-content-between mt-2'>
          <p className='text-end'>Already Registered?</p>
          <Link to='/' style={{color:'#00a082ff'}} className='ms-2'>Sign in</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup