import NavList from './navList'
import Registration from './registration'
import Logo from '../../components/Logo.tsx'

export default function Header() {
  return (
    <header>
      <nav className="h-[72px] text-[15px]">
        <div className="w-full px-6 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="w-5/12">
              <Logo />
            </div>
            <div className="w-7/12">
              <div className="flex justify-end items-center h-6">
                <NavList />
                <div className="w-[1px] h-full mx-2 bg-gray-700-300"></div>
                <Registration />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
