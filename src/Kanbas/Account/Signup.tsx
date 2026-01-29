import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };


  return (
    <div id="wd-sign-up-screen" className="container mt-3">
      <h3>Sign Up</h3>

      <input
        className="form-control mb-2"
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <input
        className="form-control mb-2"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <input
        className="form-control mb-2"
        type="text"
        placeholder="First Name"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />

      <input
        className="form-control mb-2"
        type="text"
        placeholder="Last Name"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />

      <input
        className="form-control mb-2"
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <select
        className="form-select mb-3"
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <button
        id="wd-sign-up-button"
        className="btn btn-primary mb-3"
        onClick={signup}
      >
        Create Account
      </button>

      <br />
      <Link id="wd-sign-in-link" to="/Kanbas/Account/Signin">
        Already have an account? Sign In
      </Link>
    </div>
  );
}
function setError(message: any) {
  throw new Error("Function not implemented.");
}

