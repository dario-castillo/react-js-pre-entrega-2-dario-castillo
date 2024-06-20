import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"

function Header(){
    return(
        <header className="flex justify-between p-4">
            <NavLink to="/" className="text-2xl font-bold">Darío Castillo-Dibujante Freelance</NavLink>
            <NavBar isHeader={true}/> 
        </header>
    )
}

export default Header