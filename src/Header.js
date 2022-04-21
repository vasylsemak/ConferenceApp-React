import React, { useContext } from 'react'
import {  ConfigContext } from './App'
import SignMeUp from './SignMeUp'

const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`)
  }

  const { showSignMeUp } = useContext(ConfigContext)

  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">October 19-20 2019</h6>
          <h6 className="text-uppercase">San Jose, California</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src="/static/SVCClogo.png" alt='logo'/>
          </div>
          <h2>Silicon Valley Code Camp</h2>
          <div className="row col-12 text-lg-right">
            {showSignMeUp && <SignMeUp signupCallback={signupCallback} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header