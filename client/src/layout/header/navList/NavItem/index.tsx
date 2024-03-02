import { Navigate, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
import Dropdown from './dropdown'
import Button from '../../../../components/Button.tsx'

type NestedType = NavListType[]
type NavListType = {
  to?: string
  text: string
  isNested?: boolean
  nestedList?: NestedType
  description?: string
}

type NavItemProps = {
  props: NavListType
}
export default function NavItem({ props }: NavItemProps) {
  const navigate = useNavigate()

  // const [isMarkdownOpen, setIsMarkdownOpen] = useState(false)

  function handleClick(): void {
    if (!props.isNested && props.to) {
      navigate(props.to)
    }
    // else {
    //
    // }
  }

  return (
    <li className="relative">
      <Button onClick={handleClick}>
        {props.text}{' '}
        {props.isNested && (
          <span className="icon-nested">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
            >
              <path d="M3.47 6.47a.75.75 0 0 1 1.06 0L8 9.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z" />
            </svg>
          </span>
        )}
      </Button>{' '}
      {props.to && !props.isNested && <Navigate to={props.to} />}{' '}
      {props.isNested && <Dropdown />}
    </li>
  )
}

export type { NavListType, NestedType }
