import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CONFIG } from '../config';
import { showInfoToast } from '../utils/ShowInfoToast';
import { useForm } from 'react-hook-form';

export const Explore = () => {
    const [events, setEvents] = useState(null);
    const [capacity, setCapacity] = useState(50);
    const [price, setPrice] = useState(100);

    const getEvents = (data = {}) => {
        axios.post(`${CONFIG.uri}/spaces/retrieve`, { filter: data })
            .then(res => {
                setEvents(res.data);
            })
            .catch(error => {
                showInfoToast('Error');
            })
    };

    useEffect(() => {
        getEvents();
    }, []);

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    return events && (
        <>
            <Navbar />
            <div className='inter container' style={{ fontSize: '0.9rem' }}>
                <h2 className='ps-3 mt-3 fw-bold'>Explora espacios</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                    <form onSubmit={handleSubmit(getEvents)} className='p-3'>
                        <div>
                            <label>Filtros</label>
                            <input {...register('address')} type="text" className='input-main' placeholder='Buscar por ubicación' />
                        </div>
                        <div className='mt-3'>
                            <label>Tipo de evento</label>
                            <select {...register('type')} className='input-main'>
                                <option value="">Seleccionar tipo</option>
                                <option value="">Todos</option>
                                <option value="Boda">Boda</option>
                                <option value="Conferencia">Conferencia</option>
                                <option value="Fiesta">Fiesta</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <label>Capacidad</label>
                            <input
                                {...register('capacity')}
                                type="range"
                                className='input-main'
                                min="1"
                                max="2000"
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                            />
                            <span>Hasta {capacity} personas</span>
                        </div>
                        <div className='mt-3'>
                            <label>Precio</label>
                            <input
                                {...register('price')}
                                type="range"
                                className='input-main'
                                min="0"
                                max="10000"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <span>Hasta S/.{price} soles</span>
                        </div>
                        <button className='btn-dark btn mt-3 w-100'>Aplicar filtros</button>
                    </form>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {
                            events.map((x, idx) => (
                                <div key={x._id} onClick={() => navigate(`/space/${x._id}`)} className='mb-3 card shadow-sm' style={{ width: '300px' }}>
                                    <img className='img-fluid' src={x.imgs[0]} alt="img" />
                                    <div className='p-3'>
                                        <h5 className='fw-bold'>{x.name}</h5>
                                        <div>
                                            <i className="fa-solid fa-location-dot me-2"></i>
                                            <span className='ms-2'>{x.address}</span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-location-dot me-2"></i>
                                            <span className='ms-2'>Capacidad: {x.capacity} personas</span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-star"></i>
                                            <span className='ms-2'>4.8 (35 Reseñas)</span>
                                        </div>
                                        <div className='types-event'>
                                            <span>{x.type}</span>
                                        </div>
                                        <br />
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span style={{ fontSize: '1.2rem' }}>S/.{x.price}/día</span>
                                            <button className='btn-dark btn' style={{ fontSize: '0.9rem' }}>Ver detalles</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
