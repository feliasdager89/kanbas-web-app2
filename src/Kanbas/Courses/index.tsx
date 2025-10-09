
import { Navigate, Route, Routes, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assingments";
import AssignmentEditor from "./Assingments/Editor";
import {courses} from "../Database";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
 
export default function Courses({ courses }: { courses: any[];} ) { 
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

    return (
      <div id="wd-courses">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1"/>
          {course && course.name}
        </h2> 
        <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:id" element={<AssignmentEditor/>} /> 
              <Route path="Grades" element={<div>Grades</div>} />
              <Route path="People" element={<PeopleTable/>} />
              <Route path="Piazza" element={<div>Piazza</div>} />
            </Routes>
          </td>
        </tr>
      </table>  

      </div>
  );
}
  