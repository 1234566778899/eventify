import React, { useState } from 'react'
import { Navbar } from './Navbar'
import Calendar from './Calendar'

export const Space = () => {
    const [space, setSpace] = useState({
        name: 'Espacio Increíble',
        address: 'Ciudad Genial, País',
        capacity: 150,
        starts: 4.8,
        description: 'Este espacio increíble es perfecto para tus eventos. Con una ubicación privilegiada y todas las comodidades necesarias, garantizamos una experiencia inolvidable para ti y tus invitados.',
        imgs: ['https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=', 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=', 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=', 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=', 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=']
    })
    return (
        <div className='container inter'>
            <Navbar />
            <div className='mt-3' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                    <img style={{ height: '400px', width: '100%' }} className='img-fluid' src={space.imgs[0]} alt="img" />
                    <div className='d-flex gap-2 mt-2'>
                        {
                            space.imgs.slice(1, space.imgs.length).map(img => (
                                <img src={img} style={{ width: '155px', height: '100px' }} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className='fw-bold'>{space.name}</h3>
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
                    <p className='mt-3'>{space.description}</p>
                    <div className="mt-3 card p-3">
                        <h5 className='fw-bold'>Detalles de la reserva</h5>
                        <div className='d-flex justify-content-between'>
                            <span>Precio por día</span>
                            <span className='fw-bold'>S/.1200</span>
                        </div>
                        <div className='mt-2 d-flex justify-content-between'>
                            <span>Deposito de seguridad</span>
                            <span className='fw-bold'>S/.500</span>
                        </div>
                        <div className='mt-2 d-flex justify-content-between'>
                            <span>Tarifa de Limpieza</span>
                            <span className='fw-bold'>S/.100</span>
                        </div>
                    </div>
                    <br />
                    <h5 className='fw-bold text-center'>Seleccione las fechas</h5>
                    <Calendar />
                    <button className="btn btn-dark w-100 mt-4">Reservar ahora</button>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}
