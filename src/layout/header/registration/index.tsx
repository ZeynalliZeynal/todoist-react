import Button from '../../../components/Button.tsx'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
  const navigate = useNavigate()
  return (
    <ul className="gap-2">
      <li>
        <Button onClick={() => navigate('/login')}>Login</Button>
      </li>
      <li>
        <Button variant="red" onClick={() => navigate('/register')}>
          Start for free
        </Button>
      </li>
    </ul>
  )
}
