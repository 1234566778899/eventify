import React from 'react';
import { Navbar } from './Navbar';

export const Success = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '20px' }}>
                <h2>¡Pago exitoso!</h2>
                <p>Gracias por suscribirte a nuestros servicios.</p>
            </div>
        </div>
    );
};
