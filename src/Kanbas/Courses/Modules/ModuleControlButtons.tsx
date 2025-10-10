import React from 'react'
import GreenCheckmark from './GreenCheckmark'
import { IoEllipsisVertical } from 'react-icons/io5'
import { BsPlus } from 'react-icons/bs' 
import {FaPencil, FaTrash} from 'react-icons/fa6'

export default function ModuleControlButtons 
(
  { moduleId, deleteModule, editModule }:
  { moduleId: string; deleteModule: (ModuleId: string) => void; editModule: (ModuleId: string) => void; }
) {
  return (
    <div className='float-end'> 
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className='fs-4 me-2 mb-1' onClick={()=>deleteModule(moduleId)}/>
      <GreenCheckmark />
      <BsPlus className='fs-4 me-3'/>
      <IoEllipsisVertical className="fs-4" />
    </div>
  )
}
