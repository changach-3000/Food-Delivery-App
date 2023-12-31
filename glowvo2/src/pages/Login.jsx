import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Login() {
    const {login} = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email,password)
        setPassword("")
        setEmail("")
     }
  return (
    <div className='login template 100-w vh-100'>
            <div className='70-w p-5 rounded bg-white mx-3 mx-sm-1' style={{ width: '40%' }}>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center'>Log In</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter email' className='form-control' onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-checkbox' id='check' />
                        <label htmlFor='check' className='custom-input-label ms-2'>Remember Me?</label>
                    </div>
                    <div className='d-grid'>
                        <button style={{ backgroundColor: '#FFC244FF', borderColor:'#FFC244FF'}} className='btn btn-primary'>Log in</button>
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