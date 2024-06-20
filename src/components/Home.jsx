import ItemListContainer from "./ItemListContainer";

function Home(){
    return (
        <div>
            <h2 className="mb-3 text-xl text-purple-800">Bienvenidos a mi página</h2>
            <p className="mb-2 text-purple-950">Desde acá vas a tener acceso a todo mi material, desde bocetos, pasando por trabajos en proceso, hasta dibujos terminados. En “About me” vas a encontrar una reseña de mi trayectoria y en “Portfolio” vas a poder ver todos mis dibujos, incluso los que ya no están a la venta. En “Shop” te voy a ir dejando todo lo que podés ordenar para comprar. Al pie de esta página tenés todas mis redes para que puedas seguirme y estar al tanto de todo lo que estoy haciendo 😉 Te dejo un acceso directo para que puedas recibir mi newsletter en tu e-mail. ¡Saludos!</p>
            <ItemListContainer greeting="Quiero mi Newsletter"/>
        </div>
    )
}
export default Home