import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client"; 
import { useDispatch } from "react-redux";
//import * as db from "../Database";
import { setCurrentUser } from "./reducer";

export default function Signin() {

  const [credentials, setCredentials] = useState<any>({});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  

   const dispatch = useDispatch();
  const signin = async () => {
    try {
      const currentUser = await client.signin(credentials);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };


  
  return (
    <div id = "wd-sign-in-screen">
        <h3>Sign In</h3> 
         {error && <div className="wd-error alert alert-danger">{error}</div>}

        <input defaultValue={credentials.username} onChange={e => setCredentials({...credentials, username: e.target.value})} id="wd-username" type="text" placeholder="Username" className="form-control mb-2"/>
         <input defaultValue={credentials.password} onChange={e => setCredentials({...credentials, password: e.target.value})} id="wd-password" type="password" placeholder="Password" className="form-control mb-2"/>
         <button id="wd-sign-in-button" className="btn btn-primary mb-2" onClick={signin}>Sign In</button>
         <br/>
        <Link id = "wd-sign-up-link"
            to = "/Kanbas/Account/Signup">
                Sign Up
        </Link>
    </div>
  )
}
