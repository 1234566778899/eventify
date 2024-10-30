import React from 'react';
import { Navbar } from './Navbar';

export const Failure = () => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '20px' }}>
                <h2>Pago rechazado</h2>
                <p>Lamentablemente, tu pago no pudo ser procesado.</p>
            </div>
        </div>
    );
};
