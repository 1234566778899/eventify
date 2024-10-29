import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { CONFIG } from '../config';
import { showInfoToast } from '../utils/ShowInfoToast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextApp';

export const ListSpace = () => {
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onRegister = (data) => {
        if (!isLoading) {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('user', user.email);
            for (const key in data) {
                if (key !== 'files') {
                    formData.append(key, data[key]);
                }
            }
            const files = data.files;
            for (let i = 0; i < files.length; i++) {
                formData.append('files', files[i]);
            }
            axios.post(`${CONFIG.uri}/spaces/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => {
                    showInfoToast('Espacio agregado correctamente');
                    navigate('/profile');
                })
                .catch(error => {
                    console.log(error);
                    setIsLoading(false);
                    showInfoToast('Error');
                });
        }
    };

    return (
        <>
            <Navbar />
            <div className="inter container" style={{ fontSize: '0.9rem' }}>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className='card p-3 my-3'>
                            <div>
                                <h3 className='fw-bold text-center'>Agregar un Nuevo Espacio</h3>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit(onRegister)} className="mt-4">
                                    <div className="mt-3">
                                        <label htmlFor="name">Nombre del espacio</label>
                                        <input {...register('name', { required: true })} className='input-main' id="name" placeholder="Ej: Salón Elegante" required />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="location">Ubicación</label>
                                        <input {...register('address', { required: true })} className='input-main' id="location" placeholder="Dirección completa" required />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="capacity">Capacidad máxima</label>
                                        <input {...register('capacity', { required: true })} className='input-main' id="capacity" type="number" placeholder="Número de personas" required />
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <label htmlFor="price">Precio por evento</label>
                                        <input {...register('price', { required: true })} className='input-main' id="price" type="number" placeholder="Precio en $" required />
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <label htmlFor="event-type">Tipo de evento</label>
                                        <select {...register('type', { required: true })} className='input-main'>
                                            <option placeholder="Selecciona el tipo de evento" />
                                            <option value="Boda">Boda</option>
                                            <option value="Conferencia">Conferencia</option>
                                            <option value="Fiesta">Fiesta</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <label htmlFor="description">Descripción</label>
                                        <textarea {...register('description', { required: true })} className='input-main' id="description" placeholder="Describe tu espacio..." required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="images">Imágenes</label>
                                        <input {...register('files', { required: true })} className='input-main' id="images" type="file" multiple accept="image/*" />
                                    </div>
                                    <button type="submit" className="mt-3 btn-main w-100">
                                        {
                                            isLoading && (<i className="fa-solid fa-spinner icon-load me-2"></i>)
                                        }
                                        Publicar Espacio</button>
                                    <br />
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
};
