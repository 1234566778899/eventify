import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextApp';

export const Navbar = () => {
    const navigate = useNavigate();
    const { user, auth, userInfo } = useContext(AuthContext);
    return (
        <div className='shadow-sm inter'>
            <div className="container">
                <nav>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span onClick={() => navigate('/')}
                            style={{ cursor: 'pointer', fontSize: '1.3rem', fontWeight: 'bold' }}>Eventify</span >
                        <input onClick={() => navigate('/explore')} className='ms-5' type="text" placeholder='¿Qué estas buscando?' />
                    </div>
                    <div className='option-nav' >
                        <ul >
                            {!user && (<li onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>Trabaja con nosotros</li>)}
                            {user && userInfo && userInfo.subscribed && (<li onClick={() => navigate('/orders')} style={{ cursor: 'pointer' }}>Solicitudes</li>)}
                            {user && userInfo && !userInfo.subscribed && (<li onClick={() => navigate('/suscribing')} style={{ cursor: 'pointer' }}>Subscripción</li>)}
                            {!user && (<li><button onClick={() => navigate('/login')} className='btn-inicio'>Inicio</button></li>)}
                            {
                                user && (<li><button onClick={() => navigate('/profile')} className='btn-dark btn'>
                                    <i className="fa-solid fa-user me-2"></i>
                                    {user.email.split('@')[0]}</button></li>)
                            }
                            {
                                user && (<a className='btn btn-outline-dark' href="#" onClick={() => auth.signOut()}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </a>)
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
