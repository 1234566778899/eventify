import React, { useContext } from 'react'
import '../styles/Payment.css'
import { CardPayment, initMercadoPago } from '@mercadopago/sdk-react';
import axios from 'axios';
import { CONFIG } from '../config';
import { showInfoToast } from '../utils/ShowInfoToast';

initMercadoPago('TEST-5960c0ba-87b3-400a-9356-54a02e61daf9', {
    locale: 'es-PE'
});
export const PaymentApp = ({ amount, close, onConfirm }) => {
    const onPay = (data) => {
        axios.post(`${CONFIG.uri}/subscription/create_preference`, data)
            .then(res => {
                onConfirm();
            })
            .catch(error => {
                console.log(error);
                showInfoToast('Hubo un error al completar el pago');
                close();
            })
    }
    return (
        <div className='payment-tab' onClick={() => close()} >
            <div style={{ width: '500px', overflowY: 'auto', height: '650px' }} onClick={(e) => e.stopPropagation()}>
                <CardPayment

                    initialization={{
                        amount
                    }}
                    customization={
                        {
                            visual: {
                                style: {
                                    customVariables: {
                                        theme: 'dark'
                                    }
                                }
                            },
                            paymentMethods: {
                                maxInstallments: 1,
                            }
                        }
                    }
                    onSubmit={async (param) => {
                        onPay(param);
                    }}
                />
            </div>
        </div>
    )
}
