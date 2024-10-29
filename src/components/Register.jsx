import React, { useState } from 'react'
import '../styles/Register.css'
import { Navbar } from './Navbar'
import { showInfoToast } from '../utils/ShowInfoToast';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CONFIG } from '../config';

export const Register = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const onSubmit = (data) => {
        signUp(data);
    };

    const signUp = (data) => {
        if (!isLoading) {
            setIsLoading(true);
            if (!data.terms) {
                showInfoToast('Debe aceptar los terminos y condiciones');
                setIsLoading(false);
                return;
            }
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then(async (res) => {
                    await sendEmailVerification(res.user);
                    showInfoToast("Correo de verificación enviado. Por favor, revisa tu bandeja de entrada.");
                    axios.post(`${CONFIG.uri}/users/register`, data)
                        .then(async (response) => {
                            showInfoToast('Cuenta creada correctamente');
                        })
                        .catch(error => {
                            setIsLoading(false);
                            showInfoToast('Error');
                        })
                    navigate('/login');
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        showInfoToast("Correo electrónico en uso");
                    } else {
                        showInfoToast(error.code.split('/')[1].split('-').join(' '));
                    }
                    setIsLoading(false);
                });
        }
    };
    return (
        <>
            <Navbar />
            <div className='inter' style={{ display: 'flex', justifyContent: 'center', fontSize: '0.9rem' }}>
                <div className='card shadow-sm p-3 my-3' style={{ width: '500px' }}>
                    <h3 className='text-center fw-bold'>Regístrate en Eventify</h3>
                    <form onSubmit={handleSubmit(signUp)} className="space-y-4">
                        <div className="mt-3">
                            <label htmlFor="email">Correo electrónico</label>
                            <input {...register('email', { required: true })} className='input-main' id="email" type="email" placeholder="tu@email.com" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="name">Nombre</label><br />
                            <input {...register('name', { required: true })} className='input-main' id="name" type="text" placeholder="Tu nombre" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="lname">Apellido</label>
                            <input {...register('lname', { required: true })} className='input-main' id="lastname" type="text" placeholder="Tu apellido" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="lname">Celular</label>
                            <input {...register('cellphone', { required: true })} className='input-main' id="lastname" type="text" placeholder="Tu apellido" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password">Contraseña</label>
                            <input {...register('password', { required: true })} className='input-main' id="password" type="password" placeholder="••••••••" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="confirm-password">Confirmar contraseña</label>
                            <input {...register('confirm_password', { required: true })} className='input-main' id="confirm-password" type="password" placeholder="••••••••" required />
                        </div>
                        <div className="mt-3">
                            <input {...register('terms')} type='checkbox' id="terms" />
                            <label htmlFor="terms" className='ms-2'>
                                Acepto los <a href="/terms" className="text-blue-600 hover:underline">términos y condiciones</a>
                            </label>
                        </div>
                        <button className="w-100 mt-3 btn-main" type="submit">
                            {
                                isLoading && (<i className="fa-solid fa-spinner icon-load me-2"></i>)
                            }
                            Registrarse</button>
                    </form>
                    <p className='mt-3 text-center'>
                        ¿Ya tienes una cuenta?{" "}
                        <a href="#" onClick={() => navigate('/login')} className="text-blue-600 hover:underline">
                            Inicia sesión
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
