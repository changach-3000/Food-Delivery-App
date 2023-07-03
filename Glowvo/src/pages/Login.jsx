import React from 'react'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <div className='40-w p-5 rounded bg-white mx-3 mx-sm-1'>
                <form>
                    <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter email' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-checkbox' id='check' />
                        <label htmlFor='check' className='custom-input-label ms-2'>Remember Me?</label>
                    </div>
                    <div className='d-grid'>
                        <button style={{ backgroundColor: '#FFC244FF', borderColor:'#FFC244FF'}} className='btn btn-primary'>Sign in</button>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                        <p className='text-end'>
                            Forgot <a style={{color:'#00a082ff'}} href=''>Password?</a>
                        </p>
                        <Link to='/signup' style={{color:'#00a082ff'}} className='ms-2'>Sign Up</Link>
                    </div>
                </form>
            </div>

        </div>
  )
}

export default Login