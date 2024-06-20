import CartWidget from "./CartWidget"
import { Link , NavLink } from "react-router-dom"

function NavBar(props){
    if (props.isHeader == true) {
    return(
        <nav className="flex gap-4 text-lg">
            <NavLink to="/about">About me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/categoria/dibujos">Dibujos</NavLink>
            <NavLink to="/categoria/pinturas">Pinturas</NavLink>
            <NavLink to="/carrito" className="flex items-center gap-2">Carrito<CartWidget/></NavLink>
            <NavLink to="/5">5</NavLink>
        </nav>
    )
} else {
    return(
        <nav className="flex justify-center gap-4 p-2 text-xs">
            <Link to="/facebook">Facebook</Link>
            <Link to="/instagram">Instagram</Link>
            <Link to="/twitter">Twitter</Link>
        </nav>
    )
}
}
export default NavBar