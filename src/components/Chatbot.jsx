import React, { useState } from 'react'

export const Chatbot = () => {
    const phoneNumber = '+51995473965';
    const message = 'Hola, estoy interesado en tus servicios.';

    // Función para codificar el mensaje
    const encodeMessage = (msg) => {
        return encodeURIComponent(msg);
    };

    // Enlace completo
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeMessage(message)}`;
    return (
        <a href={whatsappLink} target="_blank" className='chat'>
            <div className='icon-bot'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png' className="img-fluid"></img>
            </div>
        </a>
    )
}
