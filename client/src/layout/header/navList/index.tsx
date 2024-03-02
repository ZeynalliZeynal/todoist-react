import navList from '../../../data/navList.tsx'
import NavItem from './NavItem'

export default function NavList() {
  return (
    <ul className="justify-end gap-0.5">
      {navList.map((item, index) => (
        <NavItem props={item} key={index} />
      ))}
    </ul>
  )
}
