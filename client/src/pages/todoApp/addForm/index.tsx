import Button from '../../../components/Button.tsx'
import React, { useState } from 'react'
import { TodoType } from '../addedTodos'

type AddFormProps = {
  todoList: TodoType[]
  setTodoList: (todoList: TodoType[]) => void
}

export default function AddForm({ todoList, setTodoList }: AddFormProps) {
  const [taskName, setTaskName] = useState('')
  const [taskDesc, setTaskDesc] = useState('')

  function handleTaskName(event: React.ChangeEvent<HTMLInputElement>): void {
    setTaskName(event.target.value)
  }

  function handleTaskDesc(event: React.ChangeEvent<HTMLInputElement>): void {
    setTaskDesc(event.target.value)
  }

  function handleSubmit() {
    const newTask = {
      id: crypto.randomUUID(),
      name: taskName,
      desc: taskDesc,
      checked: false,
    }

    setTodoList([...todoList, newTask])
    setTaskName('')
    setTaskDesc('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className="text-gray-900 border border-inputBorder focus-within:border-borderFocus rounded-[10px] p-2.5 transition-all"
    >
      <div className="border-b border-gray-300 pb-4">
        <input
          value={taskName}
          type="text"
          placeholder="Task name"
          className="text-[14px] font-medium"
          onChange={(e) => handleTaskName(e)}
        />
        <input
          value={taskDesc}
          type="text"
          placeholder="Description"
          className="text-[13px]"
          onChange={(e) => handleTaskDesc(e)}
        />
      </div>
      <div className="buttons flex justify-end gap-2 items-center mt-2">
        <Button variant="form">Cancel</Button>
        <Button variant="form-red">Add task</Button>
      </div>
    </form>
  )
}
