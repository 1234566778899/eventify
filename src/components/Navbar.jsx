import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span onClick={() => navigate('/')}
                    style={{ cursor: 'pointer', fontSize: '1.3rem', fontWeight: 'bold' }}>Eventify</span >
                <input onClick={() => navigate('/explore')} className='ms-5' type="text" placeholder='¿Qué estas buscando?' />
            </div>
            <div className='option-nav' >
                <ul >
                    <li onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>Trabaja con nosotros</li>
                    <li><button onClick={() => navigate('/login')} className='btn-inicio'>Inicio</button></li>
                    <li><button onClick={() => navigate('/profile')} className='btn-dark btn'>Cuenta</button></li>
                </ul>
            </div>
        </nav>
    )
}
