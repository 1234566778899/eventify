import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CONFIG } from '../config';
import { AuthContext } from '../contexts/AuthContextApp';
import { showInfoToast } from '../utils/ShowInfoToast';
import moment from 'moment';

export const MyOrder = () => {
    const [orders, setorders] = useState(null);
    const { userInfo } = useContext(AuthContext);
    const getOrders = () => {
        axios.get(`${CONFIG.uri}/reservations/retrieve/user/${userInfo._id}`)
            .then(x => {
                setorders(x.data);
            })
            .catch(error => {
                showInfoToast('Error');
            })
    }
    useEffect(() => {
        if (userInfo) {

            getOrders();
        }
    }, [userInfo])
    return orders && (
        <div>
            {
                orders.length == 0 && (
                    <div className="card mt-3 p-3">
                        <h4 className='fw-bold'>Mis reservas</h4>
                        <p style={{ color: 'gray', fontSize: '0.9rem' }}>Aquí puedes ver tus reservas actuales y pasadas.</p>
                        <p>No tienes reservas actualmente.</p>
                    </div>
                )
            }
            <table className='table mt-4'>
                <tbody>
                    <tr className='fw-bold'>
                        <td>Espacio</td>
                        <td>Dirección</td>
                        <td>Precio</td>
                        <td>Fechas</td>
                        <td>Total</td>
                    </tr>
                    {
                        orders.map(x => (
                            <tr key={x._id}>
                                <td>{x.space.name}</td>
                                <td>{x.space.address}</td>
                                <td>S/. {x.space.price}</td>
                                <td>{x.dates.map(x => moment(x).format('DD/MM/YYYY')).join(' - ')}</td>
                                <td>S/. {x.space.price * x.dates.length}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
