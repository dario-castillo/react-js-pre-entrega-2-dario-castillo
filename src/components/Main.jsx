import { Route , Routes } from "react-router-dom";
import ProductosContainer from "./ProductosContainer";
import Home from "./Home";
import Carrito from "./Carrito";
import DetalleProducto from "./DetalleProducto";

function Main(){
    return(
        <main className="p-4 bg-purple-300 grow">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<p>Acerca de mi...</p>}/>
                <Route path="/portfolio" element={<p>Portfolio de mis dibujos</p>}/>
                <Route path="/shop" element={<ProductosContainer/>}/>
                <Route path="/categoria/:id" element={<ProductosContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/detalle" element={<DetalleProducto/>}/>
            </Routes>

        </main> 
    )
}
export default Main