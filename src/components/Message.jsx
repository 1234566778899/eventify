import React from 'react'
import '../styles/Payment.css'
import { useNavigate } from 'react-router-dom'
export const Message = ({ close }) => {
    const navigate = useNavigate();
    return (
        <div className='payment-tab inter' onClick={() => close()}>
            <div style={{ width: '300px' }} onClick={(e) => e.stopPropagation()}>
                <h4 className='text-center'>Hola!</h4>
                <hr />
                <p>Recuerda que, para usar nuestros servicios, necesitas suscribirte al plan mensual de nuestro servicio</p>
                <div className="text-center">
                    <a href="#" onClick={() => navigate('/suscribing')}>Ir a suscribirme</a>
                </div>
            </div>
        </div>
    )
}
