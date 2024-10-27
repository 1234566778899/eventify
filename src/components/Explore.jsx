import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'

export const Explore = () => {
    const [events, setEvents] = useState([
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        },
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        },
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        },
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        },
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        },
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        },
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        },
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        },
        {
            name: 'Espacio increible 1',
            address: 'Capacidad: 50 personas',
            stars: 4.8,
            type: ['Bodas', 'Conferencias'],
            price: 1200
        }
    ])
    const navigate = useNavigate();
    return (
        <div className='inter container'>
            <Navbar />
            <h2 className='ps-3 mt-3 fw-bold'>Explora espacios</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                <div className='p-3'>
                    <div>
                        <label>Filtros</label>
                        <input type="text" className='input-main' placeholder='Buscar por ubicación' />
                    </div>
                    <div className='mt-3'>
                        <label>Tipo de evento</label>
                        <select className='input-main'>
                            <option value="">Seleccionar tipo</option>
                            <option value="">Todos</option>
                            <option value="">Boda</option>
                            <option value="">Conferencia</option>
                            <option value="">Fiesta</option>
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label>Capacidad</label>
                        <input type="range" className='input-main' />
                        <span>Hasta 50 personas</span>
                    </div>
                    <div className='mt-3'>
                        <label>Precio</label>
                        <input type="range" className='input-main' />
                        <span>Hasta S/.500 soles</span>
                    </div>
                    <button className='btn-dark btn mt-3 w-100'>Aplicar filtros</button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {
                        events.map((x, idx) => (
                            <div key={idx} onClick={() => navigate(`/space/${idx}`)} className='mb-3 card shadow-sm' style={{ width: '300px' }}>
                                <img className='img-fluid' src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=" alt="img" />
                                <div className='p-3'>
                                    <h5>Espacio increible 1</h5>
                                    <div>
                                        <i className="fa-solid fa-location-dot me-2"></i>
                                        <span className='ms-2'>Ciudad Genial, Pais</span>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-location-dot me-2"></i>
                                        <span className='ms-2'>Capacidad: 50 personas</span>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-star"></i>
                                        <span className='ms-2'>4.8 (35 Reseñas)</span>
                                    </div>
                                    <div className='types-event'>
                                        <span>Bodas</span>
                                        <span>Conferencias</span>
                                    </div>
                                    <br />
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '1.2rem' }}>S/.1200/día</span>
                                        <button className='btn-dark btn'>Ver detalles</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
