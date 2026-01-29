import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // 🔹 Fetch the current profile on load
  const fetchProfile = async () => {
    try {
      // if no Redux user, check backend session
      let user = currentUser;
      if (!user) {
        user = await client.profile();
        if (!user) return navigate("/Kanbas/Account/Signin");
        dispatch(setCurrentUser(user));
      }
      setProfile(user);
    } catch (err) {
      console.error("Error fetching profile:", err);
      navigate("/Kanbas/Account/Signin");
    }
  };

  // 🔹 Update user profile (no _id needed)
  const updateProfile = async () => {
  try {
    const updated = await client.updateUser(profile);
    if (!updated || !updated._id) {
      alert("Failed to update profile: server returned null");
      return;
    }
    setProfile(updated);
    dispatch(setCurrentUser(updated));
    alert("Profile updated successfully!");
  } catch (err) {
    console.error("Error updating profile:", err);
  }
};

  // 🔹 Sign out clears local state
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen" className="container mt-3">
      <h3>Profile</h3>
      {profile && (
        <div className="mb-3">
          <input
            className="form-control mb-2"
            value={profile.username || ""}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            placeholder="Username"
          />
          <input
            className="form-control mb-2"
            type="password"
            value={profile.password || ""}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
            placeholder="Password"
          />
          <input
            className="form-control mb-2"
            value={profile.firstName || ""}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
            placeholder="First Name"
          />
          <input
            className="form-control mb-2"
            value={profile.lastName || ""}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
            placeholder="Last Name"
          />
          <input
            className="form-control mb-2"
            type="date"
            value={(function () {
              const v = profile?.dob;
              if (!v) return "";
              // If already YYYY-MM-DD, use as is
              if (typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v)) {
                return v;
              }
              // Try to parse any ISO/date value and format to YYYY-MM-DD
              const d = new Date(v);
              if (isNaN(d.getTime())) return "";
              const yyyy = d.getUTCFullYear().toString().padStart(4, "0");
              const mm = (d.getUTCMonth() + 1).toString().padStart(2, "0");
              const dd = d.getUTCDate().toString().padStart(2, "0");
              return `${yyyy}-${mm}-${dd}`;
            })()}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            className="form-control mb-2"
            type="email"
            value={profile.email || ""}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder="Email"
          />
          <select
            className="form-select mb-3"
            value={profile.role || "USER"}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button
        id="wd-update-profile-button"
        className="btn btn-primary mb-2"
        onClick={updateProfile}
      >
        Update Profile
      </button>
      <br />
      <button
        id="wd-sign-out-button"
        className="btn btn-secondary"
        onClick={signout}
      >
        Sign Out
      </button>
    </div>
  );
}
