import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Layout from '../layout'
import Features from '../pages/features'
import ForTeams from '../pages/forTeams'
import Integrations from '../pages/integrations'
import Templates from '../pages/templates'
import GettingStarted from '../pages/gettingStarted'
import HelpCenter from '../pages/helpCenter'
import Productivity from '../pages/productivity'
import InspirationHub from '../pages/inspirationHub'
import NotFound from '../pages/notFound'
import Pricing from '../pages/pricing'
import Login from '../pages/login'
import Register from '../pages/register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: 'forTeams',
        element: <ForTeams />,
      },
      {
        path: 'integrations',
        element: <Integrations />,
      },
      {
        path: 'templates',
        element: <Templates />,
      },
      {
        path: 'gettingStarted',
        element: <GettingStarted />,
      },
      {
        path: 'helpCenter',
        element: <HelpCenter />,
      },
      {
        path: 'productivity',
        element: <Productivity />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'inspirationHub',
        element: <InspirationHub />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default routes
