import React, { useState } from 'react'

const SignMeUp = ({ signupCallback }) => {
  const [email, setEmail] = useState('')

  const handleClick = e => {
    e.preventDefault()
    signupCallback(email)
    alert('signup confirmed ')
    setEmail('')
  }

  return (
    <div className='container'>
      <div className='content'>
        <input 
          placeholder='Enter email'
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          className='bnt'
          type='submit'
          disabled={!email.includes('@')}
          onClick={handleClick}
        >Get Updates</button>
      </div>
    </div>
  )
}

export default SignMeUp