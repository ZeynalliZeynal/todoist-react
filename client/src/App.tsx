import { RouterProvider } from 'react-router-dom'
import routes from './router/routes.tsx'

export default function App() {
  return <RouterProvider router={routes} />
}
