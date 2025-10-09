import React from 'react'
import { Link } from 'react-router'

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" >
        <Link id="wd-signin-link" to="/Kanbas/Account/Signin" > Sign In </Link> <br/>
        <Link id="wd-signup-link" to="/Kanbas/Account/Signup" > Sign Up </Link> <br/>
        <Link id="wd-profile-link" to="/Kanbas/Account/Profile" > Profile </Link> <br />
    </div>
  )
}
