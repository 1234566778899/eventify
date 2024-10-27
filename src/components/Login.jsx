import React from 'react'
import '../styles/Register.css'
import { Navbar } from './Navbar'
export const Login = () => {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <div className='container inter' style={{ fontSize: '0.9rem' }}>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className='card shadow-sm p-3'>
                            <h4 className='text-center fw-bold'>Iniciar sesión en Eventify</h4>
                            <form className="space-y-4">
                                <div className="mt-3">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input className='input-main' id="email" type="email" placeholder="tu@email.com" required />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="password">Contraseña</label>
                                    <input className='input-main' id="password" type="password" placeholder="••••••••" required />
                                </div>

                                <button className="w-100 mt-3 btn-main" type="submit">Iniciar sesión</button>
                            </form>
                            <p className='mt-3 text-center'>
                                ¿Aún no tienes una cuenta?{" "}
                                <a href="/register" className="text-blue-600 hover:underline">
                                    Registrate
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}
