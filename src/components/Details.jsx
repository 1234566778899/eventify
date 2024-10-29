import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from './Navbar';
import axios from 'axios';
import { CONFIG } from '../config';
import { showInfoToast } from '../utils/ShowInfoToast';
import moment from 'moment';

export const Details = () => {
    const { id } = useParams();
    const [order, setorder] = useState(null)
    const getOrder = () => {
        axios.get(`${CONFIG.uri}/reservations/retrieve/${id}`)
            .then(res => {
                setorder(res.data);
            })
            .catch(error => {
                showInfoToast('Error');
            })
    }
    useEffect(() => {
        getOrder();
    }, [])
    return order && (
        <div className='inter'>
            <Navbar />
            <div className="container">
                <br />
                <h4 className='fw-bold'>Detalles de la reserva</h4>
                <hr />
                <table className='table table-bordered mt-4'>
                    <tbody>
                        <tr>
                            <td className='fw-bold'>Cliente</td>
                            <td>{order.user.name} {order.user.lname}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Celular</td>
                            <td>{order.user.cellphone}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Espacio</td>
                            <td>{order.space.name}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Dirección</td>
                            <td>{order.space.address}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Precio</td>
                            <td>{order.space.price}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Tipo de evento</td>
                            <td>{order.space.type}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Fechas</td>
                            <td>{order.dates.map(x => moment(x).format('DD/MM/YYYY')).join(' - ')}</td>
                        </tr>
                        <tr>
                            <td className='fw-bold'>Total</td>
                            <td>S/. {order.space.price * order.dates.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
