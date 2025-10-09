import React from 'react'
import GreenCheckmark from './GreenCheckmark'
import { IoEllipsisVertical } from 'react-icons/io5'
import { BsPlus } from 'react-icons/bs'

export default function 
() {
  return (
    <div className='float-end'>
      <GreenCheckmark />
      <BsPlus className='fs-4 me-3'/>
      <IoEllipsisVertical className="fs-4" />
    </div>
  )
}
