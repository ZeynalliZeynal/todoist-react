import AddedTodo from './addedTodo'

type TodoType = {
  name: string
  description: string
}

const todoData: TodoType[] = [
  {
    name: 'Task 1',
    description: 'Task 1 description',
  },
  {
    name: 'Task 1',
    description: 'Task 1 description',
  },
]

export default function AddedTodos() {
  return (
    <ul className="mt-4 flex-col gap-3">
      {todoData.map((todo, index) => (
        <AddedTodo todo={todo} key={index} />
      ))}
    </ul>
  )
}

export type { TodoType }
