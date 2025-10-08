import {Link} from "react-router-dom";

export default function Signin() {
  return (
    <div id = "wd-sign-in-screen">
        <h3>Sign In</h3>
        <input id="wd-username" type="text" placeholder="Username" className="form-control mb-2"/>
        <input id="wd-password" type="password" placeholder="Password" className="form-control mb-2"/>
        <Link id ="wd-sign-in-btn"
            to = "/Kanbas/Account/Profile">
                Sign In
        </Link><br/>
        <Link id = "wd-sign-up-link"
            to = "/Kanbas/Account/Signup">
                Sign Up
        </Link>
    </div>
  )
}
