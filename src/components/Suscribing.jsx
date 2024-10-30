import { initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import { CONFIG } from "../config";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { PaymentApp } from "./PaymentApp";
import { showInfoToast } from "../utils/ShowInfoToast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextApp";


const Suscribing = () => {
    const [openPayment, setOpenPayment] = useState(false);
    const closePayment = () => setOpenPayment(false);
    const { userInfo, setUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const confirm = () => {
        showInfoToast('El pago se completó con éxito');
        setUserInfo(prev => ({ ...prev, subscribed: true }));
        axios.put(`${CONFIG.uri}/users/${userInfo.email}`, { subscribed: true });
        navigate('/profile');
    }
    return (
        <div>
            <Navbar />
            <div className="container inter">
                <br />
                <h4>Suscripción a Eventify - <span className="fw-bold">S/ 10.00/mes</span></h4>
                <hr />
                <p>
                    **Suscríbete a Eventify por solo S/. 10.00 al mes y disfruta de beneficios exclusivos:**
                </p>
                <ul>
                    <li><strong>Acceso Prioritario:</strong> Sé el primero en enterarte de los próximos eventos y obtén acceso anticipado para reservar tus lugares favoritos.</li>
                    <li><strong>Descuentos Especiales:</strong> Aprovecha descuentos exclusivos en boletos y mercancía de eventos seleccionados.</li>
                    <li><strong>Contenido Exclusivo:</strong> Disfruta de contenido adicional, como entrevistas con organizadores y artistas, y acceso a transmisiones en vivo.</li>
                    <li><strong>Soporte Premium:</strong> Recibe atención prioritaria de nuestro equipo de soporte para resolver cualquier consulta o inconveniente rápidamente.</li>
                </ul>
                <p>
                    ¡Únete hoy y mejora tu experiencia con Eventify!
                </p>

                <button className="btn btn-dark" onClick={() => setOpenPayment(true)}>Realizar pago</button>
            </div>
            {
                openPayment && (<PaymentApp close={closePayment} amount={10} onConfirm={confirm} />)
            }
        </div>
    );
};

export default Suscribing;

