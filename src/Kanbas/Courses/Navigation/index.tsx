import { NavLink, Link, Params } from "react-router-dom"; 
import { useParams } from "react-router";

export default function CoursesNavigation() { 

  const {cid} = useParams(); 

  return (
    <div id="wd-courses-navigation" className="d-none d-md-block list-group rounded-0">
      <NavLink
        id="wd-course-home-link"
        to={`/Kanbas/Courses/${cid}/Home`}
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        id="wd-course-modules-link"
       to={`/Kanbas/Courses/${cid}/Modules`}
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
        }
      >
        Modules
      </NavLink>
      <NavLink
        id="wd-course-piazza-link"
        to={`/Kanbas/Courses/${cid}/Piazza`}
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
        }
      >
        Piazza
      </NavLink>
      <NavLink
        id="wd-course-zoom-link"
      to={`/Kanbas/Courses/${cid}/Zoom`}
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
        }
      >
        Zoom
      </NavLink>
      <NavLink
        id="wd-course-quizzes-link"
        to={`/Kanbas/Courses/${cid}/Assignments`}
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
        }
      >
        Assignments
      </NavLink>
      <NavLink
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/1234/Quizzes"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
        }
      >
        Quizzes
      </NavLink> 

       <NavLink
        id="wd-course-grades-link"
         to={`/Kanbas/Courses/${cid}/People`}
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
        }
      >
        People
      </NavLink>

      <NavLink
        id="wd-course-grades-link"
         to={`/Kanbas/Courses/${cid}/Grades`}
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
        }
      >
        Grades
      </NavLink>
    </div>
  );
}

