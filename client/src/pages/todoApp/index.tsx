import AddedTodos from './addedTodos'
import { useEffect, useState } from 'react'
import AddForm from './addForm'
import { TodoType } from './addedTodos'
import CheckSound from '../../assets/audio/checked_sound.mp3'

export default function TodoApp() {
  const [todoList, setTodoList] = useState<TodoType[]>([])
  const completedTodoList = todoList.filter((todo) => todo.checked).length
  const [checkSoundEffect, setCheckSoundEffect] =
    useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    document.title = 'Today - Todoist'
    const audioElement = new Audio(CheckSound)
    audioElement.load() // Load the audio file

    audioElement.addEventListener('canplaythrough', () => {
      setCheckSoundEffect(audioElement)
    })

    return () => {
      // Cleanup event listener
      audioElement.removeEventListener('canplaythrough', () => {
        setCheckSoundEffect(null)
      })
    }
  }, [])

  function handleCheck(id: string) {
    if (checkSoundEffect) {
      checkSoundEffect.play()
    }

    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    )
  }

  return (
    <>
      <header>sidebar buttons here</header>
      <main>
        <section id="add-todo">
          <div className="max-w-[810px] w-full mx-auto">
            <h1 className="font-bold text-[26px]">Today</h1>
            {completedTodoList === 0 ? null : (
              <>
                <p className="completed-todos text-gray-600 text-[14px] flex items-center gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="siIBvPn"
                    >
                      <path
                        fill="currentColor"
                        d="M8 14.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5.146 8.147a.5.5 0 0 1 .708 0L7 9.294l3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708Z"
                      />
                    </svg>
                  </span>{' '}
                  {completedTodoList} task
                </p>
              </>
            )}{' '}
            <AddedTodos todoList={todoList} onCheck={handleCheck} />
            <AddForm todoList={todoList} setTodoList={setTodoList} />
          </div>
        </section>
      </main>
    </>
  )
}
