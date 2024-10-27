import React from 'react'
import '../styles/Register.css'
import { Navbar } from './Navbar'
export const Register = () => {
    return (
        <>
            <Navbar />
            <div className='inter' style={{ display: 'flex', justifyContent: 'center', fontSize: '0.9rem' }}>
                <div className='card shadow-sm p-3 my-3' style={{ width: '500px' }}>
                    <h3 className='text-center fw-bold'>Regístrate en Eventify</h3>
                    <form className="space-y-4">
                        <div className="mt-3">
                            <label htmlFor="email">Correo electrónico</label>
                            <input className='input-main' id="email" type="email" placeholder="tu@email.com" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="name">Nombre</label><br />
                            <input className='input-main' id="name" type="text" placeholder="Tu nombre" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="lastname">Apellido</label>
                            <input className='input-main' id="lastname" type="text" placeholder="Tu apellido" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password">Contraseña</label>
                            <input className='input-main' id="password" type="password" placeholder="••••••••" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="confirm-password">Confirmar contraseña</label>
                            <input className='input-main' id="confirm-password" type="password" placeholder="••••••••" required />
                        </div>
                        <div className="mt-3">
                            <input type='checkbox' id="terms" />
                            <label htmlFor="terms" className='ms-2'>
                                Acepto los <a href="/terms" className="text-blue-600 hover:underline">términos y condiciones</a>
                            </label>
                        </div>
                        <button className="w-100 mt-3 btn-main" type="submit">Registrarse</button>
                    </form>
                    <p className='mt-3 text-center'>
                        ¿Ya tienes una cuenta?{" "}
                        <a href="/login" className="text-blue-600 hover:underline">
                            Inicia sesión
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
