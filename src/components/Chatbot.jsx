import React, { useState } from 'react'

export const Chatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! Soy el asistente virtual de Eventify. ¿En qué puedo ayudarte hoy?", sender: "bot" }
    ])
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    return (
        <div className='chat'>
            {
                !isOpen && (<div onClick={() => setIsOpen(true)} className='icon-bot'>
                    <i className="fa-solid fa-robot"></i>
                </div>)
            }
            {
                isOpen && (
                    <div className='shadow-sm card p-3 inter' style={{ width: '280px', }}>
                        <div style={{ display: 'flex', fontSize: '0.9rem', justifyContent: 'space-between' }}>
                            <div>
                                <i className="fa-regular fa-user"></i>
                                <span className='ms-3'>Soporte Eventify</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className='btn-cerrar'><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className='mt-2' style={{ display: 'flex' }}>
                            <div>
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <div className='ms-3 message-chat'>¡Hola! Soy el asistente virtual de Eventify. ¿En qué puedo ayudarte hoy?</div>
                        </div>
                        <div style={{ height: '200px' }}>

                        </div>
                        <div className='d-flex mt-3'>
                            <input type="text" className='input-main' placeholder='Escribe un mensaje' style={{ fontSize: '0.9rem' }} />
                            <button className='ms-1 btn btn-dark'><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
