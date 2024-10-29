import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CONFIG } from '../config'
import { AuthContext } from '../contexts/AuthContextApp'
import { showInfoToast } from '../utils/ShowInfoToast'
import { useForm } from 'react-hook-form'
import { Spaces } from './Spaces'
import moment from 'moment'
import { MyOrder } from './MyOrder'

export const Profile = () => {
    const [optionActive, setoptionActive] = useState('3')

    const { register, handleSubmit } = useForm();
    const { user, userInfo, getInfoUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user])
    const editInfo = (data) => {
        if (!isLoading) {
            setIsLoading(true);
            axios.put(`${CONFIG.uri}/users/${user.email}`, data)
                .then(res => {
                    getInfoUser();
                    setIsLoading(false);
                    showInfoToast('Datos actualizados');
                })
                .catch(error => {
                    setIsLoading(false);
                    showInfoToast('Error');
                })
        }
    }
    return userInfo && (
        <div className='inter'>
            <Navbar />
            <div className='container'>

                <br />
                <div className='content-profile'>
                    <div className="card p-3">
                        <div className='d-flex'>
                            <img style={{ width: '60px', height: '60px' }} className='img-fluid' src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=" alt="img" />
                            <div className='ms-3'>
                                <h4 className='fw-bold'>{userInfo.name}</h4>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                        <br />
                        <p>Miembro desde: {moment(userInfo.createdAt).format('DD/MM/YYYY')}</p>
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
                                onClick={() => setoptionActive('3')}>Mis Espacios</button>
                        </div>
                        {
                            optionActive == '1' && (
                                <form onSubmit={handleSubmit(editInfo)} className="card mt-3 p-3">
                                    <h3 className='fw-bold'>Información personal</h3>
                                    <div className="mt-3">
                                        <label>Nombre</label>
                                        <input {...register('name')} className='input-main mt-1' type="text" defaultValue={userInfo.name} />
                                    </div>
                                    <div className="mt-3">
                                        <label>Apellido</label>
                                        <input {...register('lname')} className='input-main mt-1' type="text" defaultValue={userInfo.lname} />
                                    </div>
                                    <div className="mt-3">
                                        <label>Correo electrónico</label>
                                        <input className='input-main mt-1' type="text" defaultValue={userInfo.email} readOnly />
                                    </div>
                                    <div className="mt-3">
                                        <label>Teléfono</label>
                                        <input {...register('cellphone')} className='input-main mt-1' type="text" defaultValue={userInfo.cellphone} />
                                    </div>
                                    <button className='mt-3 btn-main'>
                                        {
                                            isLoading && (<i className="fa-solid fa-spinner icon-load me-2"></i>)
                                        }
                                        Guardar cambios</button>
                                </form>
                            )
                        }

                        {
                            optionActive == '2' && (
                                <MyOrder />
                            )
                        }
                        {
                            optionActive == '3' && (
                                <Spaces />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
