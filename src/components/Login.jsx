import React from 'react'
import '../styles/Register.css'
import { Navbar } from './Navbar'
export const Login = () => {
    return (
        <>
            <div className="container">
                <Navbar />
            </div>
            <br />
            <br />
            <div className='inter' style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='card p-3'>
                    <h3 className='text-center fw-bold'>Iniciar sesión en Eventify</h3>
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
        </>
    )
}
