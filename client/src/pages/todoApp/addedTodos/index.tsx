import AddedTodo from './addedTodo'

type TodoType = {
  id: string
  name: string
  desc: string
  checked: boolean
}
type TodoListPropType = {
  todoList: TodoType[]
  onCheck: (id: string) => void
}

// const todoData: TodoType[] = [
//   {
//     name: 'Task 1',
//     description: 'Task 1 description',
//   },
//   {
//     name: 'Task 1',
//     description: 'Task 1 description',
//   },
// ]

export default function AddedTodos({ todoList, onCheck }: TodoListPropType) {
  return (
    <ul className="mt-4 flex-col gap-3 mb-2">
      {todoList
        .filter((todo) => !todo.checked)
        .map((todo, index) => (
          <AddedTodo todo={todo} key={index} onCheck={onCheck} />
        ))}
    </ul>
  )
}

export type { TodoType }
