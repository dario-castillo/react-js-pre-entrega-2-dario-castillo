import { useEffect, useState } from "react";
import Productos from "./Productos"
import { useParams } from "react-router-dom";

function ProductosContainer() {

    const [productos, setProductos] = useState([])
    const [mostrar, setMostrar] = useState(true)
    const params = useParams()

    console.log(params)

    useEffect(()=>{

        if (params.id){
            fetch('https://dummyjson.com/products/category/beauty')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setProductos(data.products)
            })
        } else {
            fetch('https://dummyjson.com/products/category/smartphones')
                .then((res) => {
                     return res.json()
            })
            .then((data) => {
                setProductos(data.products)
            })
        }
    },[params.id])  

    const mostarProductos = () => {
        setMostrar(!mostrar)
    }
    if (mostrar) {
        return (
            <div>
                <button onClick={mostarProductos} className="text-xl text-purple-900">Proximamente DIBUJOS!</button>
                <Productos productos={productos}/>
            </div>
        )
    } else {
        return (
            <div>
            <button onClick={mostarProductos} className="text-xl text-purple-900">¡POR AHORA SON CELULARES!</button>
        </div>
        )
    }
}
export default ProductosContainer
