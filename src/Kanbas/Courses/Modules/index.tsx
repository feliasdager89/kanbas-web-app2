import { Module } from "module";
import ModuleControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons"; 
import React, { useState } from "react";
import { useParams } from "react-router"; 
import * as db from "../../Database";



export default function Modules() {

  const { cid } = useParams(); 
  const modules = db.modules;
  //const [modules, setModules] = useState<any[]>(db.modules);


  return (
    <div id="wd-modules">
      <ModuleControls />
      <br />
      <br />
      <br />
      <br />
      <ul id= "wd-modules" className="mt-2 list-group rounded-0 w-100">
        {modules
        .filter((module)=>module.course === cid)
        .map((module)=>(

          <li 
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            {module.name}
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {module.lessons && module.lessons.map((lesson) => (<li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              {lesson.name}
              <LessonControlButtons />
            </li>))}  
          </ul>
        </li>))}
        
      </ul>
    </div>
  );
}

