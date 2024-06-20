import { NavLink } from "react-router-dom"

function Productos({ productos }) {

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {productos.map((producto,indice)=>{
                return (
                    <article key={indice} className="p-4 text-black transition-all bg-purple-200 rounded-md hover:scale-105">
                        <h2 className="font-bold">{producto.title}</h2>
                        <p>${producto.price}</p>
                        <img src={producto.images[0]} alt={producto.title} 
                        className="object-contain aspect-square"/>
                        <NavLink to="/detalle" className="font-bold text-blue-800">Más info...</NavLink>
                    </article>
                )
            })}
        </section>
    )
}
export default Productos