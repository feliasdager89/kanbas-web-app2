import { BsGripVertical } from "react-icons/bs";
import AssingmentControls from "./AssingmentControls";
import GreenCheckmark from "../Modules/GreenCheckmark";
import LessonControlButtons from "../Modules/LessonControlButtons"; 
import "./assingment-styles.css"
import { FaClipboard, FaClipboardList } from "react-icons/fa6";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() { 
 
  const {cid} = useParams();
   const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <AssingmentControls/>
      <br/>
      <br/> 

      <h3 id="wd-assignments-title" className="mbg-secondary p-3 bg-secondary border-gray fs-4">
         <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS 40% of Total
          <button>+</button>
      </h3>

      <ul id="wd-assignment-list" className="list-group rounded-0"> 
         {assignments
        .filter((assignment)=>assignment.course === cid)
        .map((assignment)=>(

        <li 
            key={assignment._id}
            className="wd-assignment-list-item p-3 ps-2  border-gray fs-5">
           <FaClipboardList className="me-2 fs-3" />
           <BsGripVertical className="me-2 fs-3" />
          <a className="wd-assignment-link" 
            href="#/Kanbas/Courses/1234/Assignments/123">
            {assignment && assignment.title}
          </a> 
          <div id="wd-assignment-status">
          <span style={{ color: "red" }}>Multiple Modules </span>| Not Available until {assignment.availableFrom} at 12:00 am |
          <LessonControlButtons />
          </div>
          <p id="wd-assignment-due-date">Due {assignment.dueDate} at 11:59pm | 100 </p>
        </li>
        ))}  
      </ul>
    </div>
);}
