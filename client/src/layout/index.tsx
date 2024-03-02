import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer'
import Header from './header'

export default function Layout() {
  const location = useLocation()
  const shouldRenderHeader =
    !location.pathname.startsWith('/login') &&
    !location.pathname.startsWith('/register') &&
    !location.pathname.startsWith('/todoApp')

  return (
    <>
      {/* Don't show the header if the path === '/login' and '/register'*/}{' '}
      {shouldRenderHeader ? (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <Outlet />
      )}
    </>
  )
}
