import Button from '../../../components/Button.tsx'
import React, { useState } from 'react'
import { TodoType } from '../addedTodos'

type AddFormProps = {
  todoList: TodoType[]
  setTodoList: (todoList: TodoType[]) => void
  useremail: string | undefined
}

export default function AddForm({ setTodoList, useremail }: AddFormProps) {
  const [taskName, setTaskName] = useState('')
  const [taskDesc, setTaskDesc] = useState('')

  function handleTaskName(event: React.ChangeEvent<HTMLInputElement>): void {
    setTaskName(event.target.value)
  }

  function handleTaskDesc(event: React.ChangeEvent<HTMLInputElement>): void {
    setTaskDesc(event.target.value)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      if (!taskName) return false

      const newTask = {
        id: crypto.randomUUID(),
        name: taskName,
        desc: taskDesc,
        checked: false,
      }

      // Fetch the user by email
      const userResponse = await fetch(
        `http://localhost:3000/users?email=${useremail}`,
      )

      if (!userResponse.ok) {
        console.error('Error fetching user data from API')
        return
      }

      const users = await userResponse.json()
      const foundUser = users[0]

      // If the user is found, update the todos array
      if (foundUser) {
        const userId = foundUser.id

        // Make API request to update user's todos array
        const updateResponse = await fetch(
          `http://localhost:3000/users/${userId}`,
          {
            method: 'PUT', // Use PUT for updating the entire user resource
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...foundUser,
              todos: [...foundUser.todos, newTask],
            }),
          },
        )

        if (updateResponse.ok) {
          // Fetch the updated user data after a successful update
          const fetchDataResponse = await fetch(
            `http://localhost:3000/users/${userId}`,
          )

          if (fetchDataResponse.ok) {
            const updatedUser = await fetchDataResponse.json()
            setTodoList(updatedUser.todos || [])
            setTaskName('')
            setTaskDesc('')
          } else {
            console.error('Error fetching updated user data from API')
          }
        } else {
          console.error('Error updating user data in API')
        }
      }
    } catch (err) {
      console.log(err)
    }
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
