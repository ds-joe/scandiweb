// Dependences
import { FC, ReactNode } from "react";

// Interface
interface HeaderProps {
  children: ReactNode,
  title: string | number
}

const Header: FC<HeaderProps> = ({ children, title }) => {
  return (
    <div className="navbar border-bottom mb-3">
      <div className="container">
        <h3>{title}</h3>
        <div className="ms-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
export default Header;