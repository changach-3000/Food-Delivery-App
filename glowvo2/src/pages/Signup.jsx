import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Signup() {
  const {signup} = useContext(AuthContext)

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const[profile_picture,setProfilePicture] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(username,email,profile_picture,password)
    setUsername(" ")
    setPassword("")
    setEmail("")
    setProfilePicture("")
 }
  return (
    <div className='login template vh-100'>
    <div className ='p-5 rounded bg-white mx-3 mx-sm-1' style={{ width: '40%' }}>
      <form onSubmit={handleSubmit}>
        <h3 className='text-center'>Sign Up</h3>
        
        <div className='mb-3'>
          <label htmlFor='lname'>UserName</label>
          <input type='text' placeholder='Enter last name' className='form-control' onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter email' className='form-control' onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='lname'>Profile Photo</label>
          <input type='text' placeholder='Enter Image URL' className='form-control' onChange={(e)=> setProfilePicture(e.target.value)}/>
        </div>
       
        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Enter Password' className='form-control' onChange={(e)=> setPassword(e.target.value)}/>
        </div>
  
        <div className='d-grid'>
          <button style={{ backgroundColor: '#FFC244FF', borderColor: '#FFC244FF' }} className='btn btn-primary'>Sign Up</button>
        </div>
        <div className='d-flex justify-content-between mt-2'>
          <p className='text-end'>Already Registered?</p>
          <Link to='/login' style={{ color: '#00a082ff' }} className='ms-2'>Sign in</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup