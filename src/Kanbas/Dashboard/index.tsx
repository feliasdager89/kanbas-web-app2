import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database"; 


export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; })
 
 { 

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 

       <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add 
          </button>
            <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>

      </h5><br />
       <input value={course.name} className="form-control mb-2"  onChange={(e)=> setCourse({...course, name: e.target.value})}/>
       <textarea value={course.description} className="form-control"   onChange={(e) => setCourse({ ...course, description: e.target.value }) }/><hr /> 

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card">
                <a
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  href={`#/Kanbas/Courses/${course._id}/Home`}
                >
                  <img src="/images/react_logo.png" width="100%" alt={course.name} />
                  <div className="card-body d-flex flex-column justify-content-between" style={{ height: "150px", overflow: "hidden" }}>
                    <div>
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.number} {course.name}
                      </h5>
                      <p className="card-text" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        {course.description}
                      </p>
                    </div>
                    <button className="btn btn-primary mt-auto">Go</button> 
                    <button id="wd-edit-course-click"
                             onClick={(event) => {
                                event.preventDefault();
                              setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                             Edit
                      </button>


                    <button  onClick={(e) => { e.preventDefault(); deleteCourse(course._id); }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                    >Delete
                    </button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
