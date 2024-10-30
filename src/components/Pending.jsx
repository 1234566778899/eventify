import React from 'react';
import { Navbar } from './Navbar';

export const Pending = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '20px' }}>
                <h2>Pago pendiente</h2>
                <p>Estamos procesando tu pago. Te notificaremos cuando se complete.</p>
            </div>
        </div>
    );
};
