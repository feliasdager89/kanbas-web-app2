import React from 'react'
import { Link } from 'react-router'

export default function Signup() {
  return (
    <div id = "wd-sign-up-screen">
        <h3>Sign Up</h3>
        <input id="wd-username" type="text" placeholder="Username" className="form-control mb-2"/><br/>
        <input id="wd-password" type="password" placeholder="Password" className="form-control mb-2"/>
        <input placeholder='verify password' type = "password" className="form-control mb-2"/>
        <Link to = "/Kanbas/Account/Profile"> Sign Up </Link> <br/>
        <Link to = "/Kanbas/Account/Signin"> Sign In </Link>    
    </div>
  )
}
