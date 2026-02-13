import { useParams } from "react-router-dom";
import lugares from "../data/lugares";
import "./LugarDetalle.css";
import Navbar from "../components/Navbar";

function LugarDetalle() {
    const { id } = useParams();

    const lugar = lugares.find(l => l.id === Number(id));

    if(!lugar) return <h2>Lugar no encontrado</h2>;

    return (
        <>
            <Navbar />
            <div className = "container">
                <div className = "detalle-container">
                    <img src = {lugar.img} alt = {lugar.nombre} style = {{ width: "400px" }}/>
                    <iframe className = "mapa"
                        width = "600"
                        height = "450"
                        style = {{ border: 0 }}
                        loading = "lazy"
                        allowFullScreen
                        src = {`https://maps.google.com/maps?q=${lugar.lat},${lugar.lng}&z=15&output=embed`}
                    />
                </div>

                <div className = "detalle-container">
                    <h1>{lugar.nombre}</h1>
                    <h3>{lugar.tipo}</h3>
                    <p>{lugar.descripcion}</p>
                </div>
            </div>
        </>
    );
}

export default LugarDetalle;