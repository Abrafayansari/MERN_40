import { useState } from 'react'
import './App.css'

function Task() {
  const [employee, setemployee] = useState("")
  const [task, settask] = useState("")
  const [tasklist, settasklist] = useState([])

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={employee} onChange={(e) => setemployee(e.target.value)
        } type="text" />
        <input value={task} onChange={(e) => settask(e.target.value)
        } type="text" />

        <button  type = "submit"onClick={() => {
          let tasks = [...tasklist, {
            employee: employee,
            task: task
          }];
          settasklist(tasks)
        }}>
          Add
        </button>


      </form>
      {tasklist.map((item, index) => {
        return (
          <div index={index}>
            Employee: <span>{item.employee}</span>
            Task: <span>{item.task}</span>
            <button onClick={(e) => {
              let tasks = [...tasklist]
              let i = Number(e.target.parentNode.getAttribute("index"))
              tasks.splice(i, 1)
              settasklist(tasks)
            }}>
              Delete</button>
          </div>
        )
      })}
    </>

  )
}

export default Task
