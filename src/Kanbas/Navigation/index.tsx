import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
    >
      <a
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University Logo" /> Northeastern
      </a>

      <NavLink
        id="wd-account-link"
        to="/Kanbas/Account"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <FaRegCircleUser className="fs-1 text-danger" />
        <br /> Account
      </NavLink>

      <NavLink
        id="wd-dashboard-link"
        to="/Kanbas/Dashboard"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br /> Dashboard
      </NavLink>

      <NavLink
        id="wd-course-link"
        to="/Kanbas/Courses/1234/Home"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br /> Courses
      </NavLink>

      <NavLink
        id="wd-calendar-link"
        to="/Kanbas/Calendar"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br /> Calendar
      </NavLink>

      <NavLink
        id="wd-labs-link"
        to="/Kanbas/Labs"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br /> Labs
      </NavLink>
    </div>
  );
}

