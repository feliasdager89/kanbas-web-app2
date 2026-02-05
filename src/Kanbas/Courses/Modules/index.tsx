//import { Module } from "module";
import ModuleControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons"; 
import React, { useState, useEffect } from "react";
import { useParams } from "react-router"; 
import * as db from "../../Database"; 
import * as client from "./client";

import { addModule, editModule, updateModule, deleteModule,setModules}
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import type { Module } from "./reducer";



export default function Modules() { 

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };


  const { cid } = useParams(); 
  //const modules = db.modules;
  //const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState(""); 
  const { modules } = useSelector((state: any) => state.modulesReducer) as { modules: Module[] };
  const dispatch = useDispatch(); 

  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  }; 

  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

   const fetchModules = async () => {
    if (!cid) return;
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, [cid]);


  return (
    <div id="wd-modules">
      <ModuleControls setModuleName={setModuleName} moduleName={moduleName} 
      
      addModule={() => { 
          createModule({ name: moduleName, course: cid });
          //dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} 
      />  
      <br />
      <br />
      <br />
      <br />
      <ul id= "wd-modules" className="mt-2 list-group rounded-0 w-100">
        {Array.isArray(modules) &&
          modules
          .filter((module:any)=>module.course === cid)
          .map((module:any)=>(

          <li 
              key={module._id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            {!module.editing && module.name}
            { module.editing && (
            <input className="form-control w-50 d-inline-block"
                onChange={(e) => {
                   saveModule({ ...module, name: e.target.value });
                //  dispatch(
                 // updateModule({ ...module, name: e.target.value }) 
              //    )
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveModule({ ...module, editing: false });
                   // dispatch(updateModule({ ...module, editing: false }));
                  }
                }}
               value={module.name}/>
         )}
            <ModuleControlButtons moduleId={module._id} 
             deleteModule={(moduleId) => { 
                     removeModule(moduleId);
                    //dispatch(deleteModule(moduleId));
                  }} 
              editModule={(moduleId) => {
                  dispatch(editModule(moduleId));
              }} 
              />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {module.lessons && module.lessons.map((lesson:any) => (<li className="wd-lesson list-group-item p-3 ps-1">
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

