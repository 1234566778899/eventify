import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import Calendar from './Calendar';
import axios from 'axios';
import { CONFIG } from '../config';
import { useNavigate, useParams } from 'react-router-dom';
import { showInfoToast } from '../utils/ShowInfoToast';
import { AuthContext } from '../contexts/AuthContextApp';

export const Space = () => {
    const [space, setSpace] = useState(null);
    const { id } = useParams();
    const [imgSelected, setImgSelected] = useState(0);
    const [selectedDates, setSelectedDates] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const getSpace = () => {
        axios.get(`${CONFIG.uri}/spaces/retrieve/${id}`)
            .then(res => {
                setSpace(res.data);
            })
            .catch(error => {
                showInfoToast('Error');
            });
    };

    const reserveSpace = () => {
        if (selectedDates.length === 0) {
            showInfoToast('Por favor seleccione al menos una fecha.');
            return;
        }

        const formattedDates = selectedDates.map(date => date.toISOString());

        axios.post(`${CONFIG.uri}/reservations`, {
            space: id,
            dates: formattedDates,
            email: user.email,
            own: space.user
        })
            .then(res => {
                showInfoToast('Reservación realizada correctamente');
                navigate('/profile')
            })
            .catch(error => {
                console.log(error);
                showInfoToast('Error al realizar la reservación');
            });
    };

    useEffect(() => {
        getSpace();
    }, []);

    return space && (
        <>
            <Navbar />
            <div className='container inter'>
                <div className='mt-3' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <img style={{ height: '400px', width: '100%' }} className='img-fluid' src={space.imgs[imgSelected]} alt="img" />
                        <div className='imgs-preview'>
                            {space.imgs.slice(1, space.imgs.length).map((img, idx) => (
                                <img onClick={() => setImgSelected(idx)} key={idx} src={img} style={{ width: '152px', height: '100px', objectFit: 'cover' }} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className='fw-bold'>{space.name}</h3>
                        <div>
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <span className='ms-2'>{space.address}</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <span className='ms-2'>Capacidad: {space.capacity} personas</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <span className='ms-2'>4.8 (35 Reseñas)</span>
                        </div>
                        <div className='types-event'>
                            <span>{space.type}</span>
                        </div>
                        <p className='mt-3'>{space.description}</p>
                        <div className="mt-3 card p-3">
                            <h5 className='fw-bold'>Detalles de la reserva</h5>
                            <div className='d-flex justify-content-between'>
                                <span>Precio por día</span>
                                <span className='fw-bold'>S/.{space.price}</span>
                            </div>
                        </div>
                        <br />
                        <h5 className='fw-bold text-center'>Seleccione las fechas</h5>
                        <Calendar selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
                        <button onClick={reserveSpace} className="btn btn-dark w-100 mt-4">Reservar ahora</button>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
};
