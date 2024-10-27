import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const [optionActive, setoptionActive] = useState('3')
    const navigate = useNavigate();
    return (
        <div className='container inter'>
            <Navbar />
            <br />
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 4fr', gap: '20px' }}>
                <div className="card p-3">
                    <div className='d-flex'>
                        <img style={{ width: '60px', height: '60px' }} className='img-fluid' src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=" alt="img" />
                        <div className='ms-3'>
                            <h4 className='fw-bold'>Usuario Nombre</h4>
                            <p>usuario@email.com</p>
                        </div>
                    </div>
                    <br />
                    <p>Miembro desde: Enero 2023</p>
                    <button className='btn btn-outline-secondary'>Editar perfil</button>
                </div>
                <div >
                    <div className='option-profile'>
                        <button onClick={() => setoptionActive('1')}
                            className={`${optionActive == '1' && 'btn-active'}`}>Información personal</button>
                        <button
                            className={`${optionActive == '2' && 'btn-active'}`}
                            onClick={() => setoptionActive('2')}>Mis reservas</button>
                        <button
                            className={`${optionActive == '3' && 'btn-active'}`}
                            onClick={() => setoptionActive('3')}>Mis listados</button>
                    </div>
                    {
                        optionActive == '1' && (
                            <div className="card mt-3 p-3">
                                <h3 className='fw-bold'>Información personal</h3>
                                <div className="mt-3">
                                    <label>Nombre</label>
                                    <input className='input-main mt-1' type="text" defaultValue={'Nombre de usuario'} />
                                </div>
                                <div className="mt-3">
                                    <label>Correo electrónico</label>
                                    <input className='input-main mt-1' type="text" defaultValue={'Nombre de usuario'} />
                                </div>
                                <div className="mt-3">
                                    <label>Teléfono</label>
                                    <input className='input-main mt-1' type="text" defaultValue={'Nombre de usuario'} />
                                </div>
                                <button className='mt-3 btn-main'>Guardar cambios</button>
                            </div>
                        )
                    }

                    {
                        optionActive == '2' && (
                            <div className="card mt-3 p-3">
                                <h4 className='fw-bold'>Mis reservas</h4>
                                <p style={{ color: 'gray', fontSize: '0.9rem' }}>Aquí puedes ver tus reservas actuales y pasadas.</p>
                                <p>No tienes reservas actualmente.</p>
                            </div>
                        )
                    }
                    {
                        optionActive == '3' && (
                            <div className="card mt-3 p-3">
                                <h4 className='fw-bold'>Mis espacios</h4>
                                <p style={{ color: 'gray', fontSize: '0.9rem' }}>Administra tus espacios listados aqui.</p>
                                <p>No tienes espacios listados actualmente.</p>
                                <button onClick={() => navigate('/listspace')} className='btn btn-dark w-25'>Añadir nuevo espacio</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
