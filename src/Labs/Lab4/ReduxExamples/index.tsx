import React from 'react'
import HelloRedux from './HelloRedux'
import CounterRedux from './CounterRedux'
import AddRedux from './AddRedux.tsx'
import TodoList from './todos/Todolist'

export default function () {
  return (
    <div>
        <h1>Redux Examples</h1> 
        <HelloRedux/> 
        <CounterRedux/> 
        <AddRedux/> 
        <TodoList/>
    </div>
  )
}
