import Button from './Button.tsx'
import { FormTemplateType } from './FormTemplate.tsx'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { TodoType } from '../pages/todoApp/addedTodos'

type userType = {
  email: string
  password: string
  todos: TodoType[]
}

const labelStyle: string =
  'rounded-[10px] flex flex-col border border-inputBorder focus-within:border-borderFocus px-2 pt-2 pb-1 text-[12px] transition-colors'
const inputStyle: string =
  'text-[1rem] font-bold placeholder:text-gray-500 placeholder:font-light'

export default function Form({ type }: FormTemplateType) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json()

    const foundData = data.find(
      (user: userType) => user.email === email && user.password === password,
    )
    if (foundData)
      navigate(
        `/todoApp/${foundData.email}?todos=${encodeURIComponent(JSON.stringify(foundData.todos))}`,
      )
    else alert('User not found')
  }

  return (
    <form action="#" className="flex gap-4 flex-col" onSubmit={handleSubmit}>
      <label htmlFor="email" className={labelStyle}>
        Email
        <input
          className={inputStyle}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password" className={labelStyle}>
        Password
        <input
          className={inputStyle}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Button variant="submit">
        {type === 'signup' ? 'Sign up with Email' : 'Log in'}
      </Button>
    </form>
  )
}
