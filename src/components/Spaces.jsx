import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CONFIG } from '../config';
import { showInfoToast } from '../utils/ShowInfoToast';
import { AuthContext } from '../contexts/AuthContextApp';

export const Spaces = ({ onConfirm }) => {
    const [spaces, setSpaces] = useState(null);
    const { user } = useContext(AuthContext);
    const getSpaces = () => {
        axios.get(`${CONFIG.uri}/spaces/${user.email}`)
            .then(res => {
                setSpaces(res.data)
            })
            .catch(error => {
                showInfoToast('Error');
            })
    }
    useEffect(() => {
        getSpaces();
    }, [])
    const navigate = useNavigate();
    return spaces && (
        <div>
            {
                spaces.length == 0 && (
                    <div className="card mt-3 p-3">
                        <h4 className='fw-bold'>Mis espacios</h4>
                        <p style={{ color: 'gray', fontSize: '0.9rem' }}>Administra tus espacios listados aqui.</p>
                        <p>No tienes espacios listados actualmente.</p>
                        <button onClick={() => onConfirm()} className='btn btn-dark'>Añadir nuevo espacio</button>
                    </div>
                )
            }
            {
                spaces.length > 0 && (
                    <div className='mt-3'>
                        <div className='text-end'>
                            <button onClick={() => onConfirm()} className='btn btn-dark'>Añadir nuevo espacio</button>
                        </div>
                        <div className='content-table card'>
                            <table className='table'>
                                <tbody>
                                    <tr className='fw-bold'>
                                        <td>N°</td>
                                        <td>Nombre</td>
                                        <td>Dirección</td>
                                        <td>Capacidad</td>
                                        <td>Precio</td>
                                        <td>Tipo</td>
                                    </tr>
                                    {
                                        spaces.map((x, idx) => (
                                            <tr key={x._id} >
                                                <td>{idx + 1}</td>
                                                <td>{x.name}</td>
                                                <td>{x.address}</td>
                                                <td>{x.capacity}</td>
                                                <td>{x.price}</td>
                                                <td>{x.type}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
