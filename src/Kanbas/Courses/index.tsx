import { FaAlignJustify } from "react-icons/fa6";
import Assignments from "./Assingments";
import AssignmentEditor from "./Assingments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";


export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />

        Course 1234
      </h2>
      <hr />
            <CoursesNavigation />
          <div>
            <Routes>
              <Route path="Home" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments/>} />
             <Route path="Assignments/:id" element={<AssignmentEditor />} />
            </Routes>
        </div>
    </div>
);}

