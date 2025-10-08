import React from 'react'
import { Link } from 'react-router'

export default function Profile() {
  return (
    <div id='"wd-profile-screen'>
        <h3>Profile</h3>
        <input id = "wd-username" value = "alice" placeholder='username'></input>
        <br/>
        <input 
            id = "wd-password"
            value = "123"
            placeholder='password'
            type = "password"
        ></input>
        <br/>
        <input id = "wd-first-name" value = "Alice" placeholder='first name'></input>   
        <br/>
        <input id = "wd-last-name" value = "Wonderland" placeholder='last name'></input>   
        <br/>
        <input id = "wd-phone" value = "+1 (123) 456-7890" placeholder='phone'></input>   
        <br/>
        <input id = "wd-email" value = "alice@wonderland" type="email"/> 
        <br/>
        <select id = "wd-role">
            <option value = "Student">Student</option>
            <option value = "Instructor">Instructor</option>
            <option value = "Admin">Admin</option>
        </select>
        <br/>
        <Link to = "/Kanbas/Account/Signin">Sign Out </Link>
    </div>
  )
}
