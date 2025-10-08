import React from 'react'
import ClickEvent from './ClickEvent'
import PassingDataOnEvent from './PassingDataOnEvent'
import PassingFunctions from './PassingFunctions'
import EventObject from './EventObject'
import Counter from './Counter'
import BooleanStateVariables from './BooleanState'
import StringStateVariables from './StringStateVariables'
import DataStateVariable from './DataStateVariable'
import ObjectStateVariable from './ObjectStateVariable'
import ArrayStateVariable from './ArrayStateVariable'
import ParentStateComponent from './ParentStateComponent'
import ReduxExamples from './ReduxExamples'


export default function index() { 
   
    const sayHello = () => { 
        alert("Hello from Lab 4!")
    }

  return (
    <div id='wd-lab4'>
        <h2>Lab 4</h2>
        <hr/>
        <ClickEvent/> 
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello}/> 
        <EventObject/> 
        <Counter/> 
        <BooleanStateVariables/> 
        <StringStateVariables/> 
        <DataStateVariable/>   
        <ObjectStateVariable/> 
        <ArrayStateVariable/> 
        <ParentStateComponent/> 
        <ReduxExamples/>
    </div>
  )
}
