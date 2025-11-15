import React from 'react'
import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6'
import { NavLink, useParams } from 'react-router-dom'

export default function AssignmentControls(
  //{addAssignmentId}:
  //{ addAssignmentId: string; }
) {

  const {cid} = useParams();

  return (
    <div id='wd-assingment-controls' style={{display: "flex", alignItems: "center",float: "right", marginBottom: "20px"}}>
         <FaMagnifyingGlass className='position-relative me-2' style={{bottom: "1px"}} />
        <input id="wd-search-assignment"
             placeholder="Search..." 
        />
       <button id="wd-publish-all-btn" className="btn btn-md btn-secondary "
                type="button" style={{marginLeft: "15px"}}>
                <FaPlus className='position-relative me-2' style={{bottom: "1px"}} />
                Publish All
        </button>
       {cid && (
         <NavLink id="wd-add-module-btn" className="btn btn-md btn-danger me-1 float-end" to={`/Kanbas/Courses/${cid}/Assignments/Editor`}>
                  <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                  Assignment
         </NavLink>
       )}
    </div>
  )
}
