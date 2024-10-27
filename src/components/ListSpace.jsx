import React from 'react'
import { Navbar } from './Navbar'

export const ListSpace = () => {
    return (
        <>
            <Navbar />
            <div className="inter container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className='card p-3 my-3'>
                            <div>
                                <h3 className='fw-bold text-center'>Agregar un Nuevo Espacio</h3>
                            </div>
                            <div>
                                <form className="mt-4">
                                    <div className="mt-3">
                                        <label htmlFor="name">Nombre del espacio</label>
                                        <input className='input-main' id="name" placeholder="Ej: Salón Elegante" required />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="location">Ubicación</label>
                                        <input className='input-main' id="location" placeholder="Dirección completa" required />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="capacity">Capacidad máxima</label>
                                        <input className='input-main' id="capacity" type="number" placeholder="Número de personas" required />
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <label htmlFor="price">Precio por evento</label>
                                        <input className='input-main' id="price" type="number" placeholder="Precio en $" required />
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <label htmlFor="event-type">Tipo de evento</label>
                                        <select className='input-main'>
                                            <option placeholder="Selecciona el tipo de evento" />
                                            <option value="wedding">Boda</option>
                                            <option value="conference">Conferencia</option>
                                            <option value="party">Fiesta</option>
                                            <option value="other">Otro</option>
                                        </select>
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <label htmlFor="description">Descripción</label>
                                        <textarea className='input-main' id="description" placeholder="Describe tu espacio..." required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="images">Imágenes</label>
                                        <input className='input-main' id="images" type="file" multiple accept="image/*" />
                                    </div>
                                    <button type="submit" className="mt-3 btn-main w-100">Publicar Espacio</button>
                                    <br />
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
}
