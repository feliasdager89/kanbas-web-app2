import { BsGripVertical } from "react-icons/bs";
import AssingmentControls from "./AssingmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons"; 
import "./assingment-styles.css"
import { FaClipboardList, FaTrash } from "react-icons/fa6";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer"; 
import * as client from "./client";
import { useEffect } from "react";

export default function Assignments(
  //{ addAssignmentId }: { addAssignmentId: string } , 
  //{ deleteAssignment }: { deleteAssignment: (assignmentId: string) => void; }
) { 

  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments }: any = useSelector((state: any) => state.assignmentsReducer); 

  const removeAssignment = async (assignmentId: string) => {
      await client.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    };  

    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
      };

    useEffect(() => {
    if (!cid) return;
    client.findAssignmentsForCourse(cid).then((data) => {
      dispatch(setAssignments(data));
    });
  }, [cid, dispatch]);

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
      .filter((assignment: any) => !cid || String(assignment.course) === String(cid))
      .map((assignment: any) => (

        <li 
            key={assignment._id}
            className="wd-assignment-list-item p-3 ps-2  border-gray fs-5">
           <FaClipboardList className="me-2 fs-3" />
           <BsGripVertical className="me-2 fs-3" />
          <NavLink className="wd-assignment-link" 
            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}/Editor`}>
            {assignment && assignment.title}
          </NavLink> 
          
          <div id="wd-assignment-status">
          <span style={{ color: "red" }}>Multiple Modules </span>| Not Available until {assignment.availableFrom} at 12:00 am |
          <LessonControlButtons /> 
          <FaTrash
            className='fs-4 me-2 mb-1'
            role="button"
            title="Delete assignment"
            onClick={() => 
              removeAssignment(assignment._id)}
              //dispatch(deleteAssignment(assignment._id))}
          />
          </div>
          <p id="wd-assignment-due-date">Due {assignment.dueDate} at 11:59pm | 100 </p>
        </li>
        ))}
        {assignments.filter((a: any) => !cid || String(a.course) === String(cid)).length === 0 && (
          <li className="list-group-item">No assignments to display.</li>
        )}
      </ul>
    </div>
);}
