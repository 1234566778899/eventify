import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import axios from 'axios';
import { CONFIG } from '../config';
import { showInfoToast } from '../utils/ShowInfoToast';
import { AuthContext } from '../contexts/AuthContextApp';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export const Orders = () => {
    const [orders, setOrders] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const getOrders = () => {
        axios.get(`${CONFIG.uri}/reservations/${user.email}`)
            .then(res => {
                setOrders(res.data);
            })
            .catch(error => {
                showInfoToast('Error');
            })
    }
    useEffect(() => {
        getOrders();
    }, [])
    return orders && (
        <>
            <Navbar />
            <br />
            <div className='container inter'>
                <h3 className='fw-bold'>Lista de solicitudes</h3>
                <hr />
                <table className='table'>
                    <tbody>
                        <tr className='fw-bold'>
                            <td>Cliente</td>
                            <td>N° de celular</td>
                            <td>Fecha del pedido</td>
                            <td>Espacio</td>
                            <td>Dirección</td>
                            <td>Precio</td>
                            <td>Total</td>
                            <td>Ver detalles</td>
                        </tr>
                        {
                            orders.map(x => (
                                <tr key={x._id}>
                                    <td>{x.user.name}</td>
                                    <td>{x.user.cellphone}</td>
                                    <td>{moment(x.createdAt).format('DD/MM/YYYY')}</td>
                                    <td>{x.space.name}</td>
                                    <td>{x.space.address}</td>
                                    <td>S/. {x.space.price}</td>
                                    <td>S/. {x.space.price * x.dates.length}</td>
                                    <td>
                                        <a href="#" onClick={() => navigate(`/details/${x._id}`)}>Detalles</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
