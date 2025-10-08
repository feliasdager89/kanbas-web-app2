import React from 'react'
import { FaMagnifyingGlass, FaPlus } from 'react-icons/fa6'

export default function 
() {
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
       <button id="wd-add-module-btn" className="btn btn-md btn-danger me-1 float-end">
                  <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                  Assingment
        </button>
    </div>
  )
}
