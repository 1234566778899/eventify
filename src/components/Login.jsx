import React, { useContext, useState } from 'react'
import '../styles/Register.css'
import { Navbar } from './Navbar'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { showInfoToast } from '../utils/ShowInfoToast';
import { AuthContext } from '../contexts/AuthContextApp';
export const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { getInfoUser } = useContext(AuthContext);
    const onSubmit = (data) => {
        if (!isLoading) {
            setIsLoading(true);
            signInWithEmailAndPassword(auth, data.email.trim(), data.password.trim())
                .then((res) => {
                    if (res.user.emailVerified) {
                        getInfoUser();
                        navigate('/profile');
                    } else {
                        showInfoToast("Por favor, verifica tu correo antes de iniciar sesión.");
                        setIsLoading(false)
                    }
                })
                .catch((error) => {
                    if (error.code === 'auth/invalid-login-credentials') {
                        showInfoToast("Las credenciales son inválidas");
                    } else if (error.code === 'auth/too-many-requests') {
                        showInfoToast("Demasiados intentos fallidos. Por favor, intenta más tarde.");
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
            <br />
            <br />
            <div className='container inter' style={{ fontSize: '0.9rem' }}>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className='card shadow-sm p-3'>
                            <h4 className='text-center fw-bold'>Iniciar sesión en Eventify</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="mt-3">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input {...register('email')} className='input-main' id="email" type="email" placeholder="tu@email.com" required />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="password">Contraseña</label>
                                    <input {...register('password')} className='input-main' id="password" type="password" placeholder="••••••••" required />
                                </div>

                                <button className="w-100 mt-3 btn-main" type="submit">
                                    {
                                        isLoading && (<i className="fa-solid fa-spinner icon-load me-2"></i>)
                                    }
                                    Iniciar sesión</button>
                            </form>
                            <p className='mt-3 text-center'>
                                ¿Aún no tienes una cuenta?{" "}
                                <a href="#" onClick={() => navigate('/register')} className="text-blue-600 hover:underline">
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
