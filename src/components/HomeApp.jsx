import React, { useState } from 'react'
import '../styles/Home.css'
export const HomeApp = () => {
    const events = [
        {
            img: 'https://dfmas.df.cl/dfmas/site/artic/20220922/imag/foto_0000002020220922191520/Copia_de_Hyatt_Centric_Lima-050407.jpg',
            address: 'San isidro',
            capacity: 200,
            price: 500,
            avilable: true
        },
        {
            img: 'https://www.sillasmesas.es/blog/wp-content/uploads/2019/05/restaurantes-bistro.jpg',
            address: 'Miraflores',
            capacity: 70,
            price: 200,
            avilable: true
        },
        {
            img: 'https://www.peru.travel/Contenido/General/Imagen/es/1049/1.1/restaurantes-de-lujo-desktop.jpg',
            address: 'San Miguel',
            capacity: 70,
            price: 200,
            avilable: false
        },
        {
            img: 'https://i0.wp.com/placeres.pe/wp-content/uploads/2024/01/7-scaled.jpg?fit=2560%2C1707&ssl=1',
            address: 'Jesús María',
            capacity: 50,
            price: 150,
            avilable: true
        },
        {
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/bb/80/c1/foto-simon-bosch.jpg?w=600&h=-1&s=1',
            address: 'Miraflores',
            capacity: 200,
            price: 600,
            avilable: false
        },
        {
            img: 'https://imgmedia.larepublica.pe/640x374/larepublica/original/2023/06/21/64932a8175f9c93e68054beb.webp',
            address: 'Magdalena',
            capacity: 50,
            price: 150,
            avilable: true
        },
    ]

    return (
        <div className='inter'>
            <div className='container'>
                <nav>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Eventify</span>
                        <input className='ms-5' type="text" placeholder='¿Qué estas buscando?' />
                    </div>
                    <div className='option-nav' >
                        <ul >
                            <li style={{ cursor: 'pointer' }}>Trabaja con nosotros</li>
                            <li><button className='btn-inicio'>Inicio</button></li>
                            <li><button className='btn-cuenta'>Cuenta</button></li>
                        </ul>
                    </div>

                </nav>
                <div className='header'>
                    <div>
                        <h1>Eventify</h1>
                        <p>"Espacios que inspiran, eventos que perduran: tu celebración comienza aquí"</p>
                        <button>Me interesa</button>
                    </div>
                </div>
                <div className='options'>
                    <button className='active'>Frente al mar</button>
                    <button>Casa de campo</button>
                    <button>Locales pequeños</button>
                    <button>Bodas</button>
                    <button className='active'>Fiestas</button>
                </div>
                <br />
                <br />
                <h2 className='fw-bold'>Eventos corporativos</h2>
                <div className='events'>
                    {
                        events.map((event, index) => (
                            <div key={index}>
                                <img src={event.img} alt="img" className='w-100' />
                                <div>
                                    <h6 className='mt-2 fw-bold'>{event.address}</h6>
                                    <span style={{ color: 'gray' }}>Capacidad máxima 200 personas</span>
                                    <p className='fw-bold'>
                                        {
                                            event.avilable ? (<span>Disponible </span>) : (<span className='text-danger'>Agotado </span>)
                                        }
                                        - S/.500</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <br />
                <h1 className='fw-bold'>Bodas y más</h1>
                <br />
                <div className='bodas'>
                    <div>
                        <img style={{ height: '490px', objectFit: 'cover' }} src="https://cdn0.bodas.com.mx/article-vendor/5331/original/1280/jpg/montaje-3_5_325331-168970620353889.jpeg" alt="img" className='w-100' />
                        <h6 className='mt-3 fw-bold'>Local cerca al mar</h6>
                        <span style={{ color: 'gray' }}>Capacidad máxima de 500 personas</span>
                        <p className='fw-bold'>Disponible</p>
                    </div>
                    <div >
                        <div>
                            <img style={{ height: '192px', objectFit: 'cover' }} src="https://i0.wp.com/www.pachaindah.com/html/locales-eventos-lima.jpg?resize=798%2C442&ssl=1" alt="img" className='w-100' />
                            <h6 className='mt-3 fw-bold'>Local ubicado en Chaclacayo</h6>
                            <span style={{ color: 'gray' }}>Capacidad máxima de 500 personas</span>
                            <p className='fw-bold'>Disponible</p>
                        </div>
                        <div>
                            <img style={{ height: '193px', objectFit: 'cover' }} className='w-100' src="https://cdn.prod.website-files.com/64e143fb88168f56d3a2184a/64ed7a477c5af0372734f193_los-10-mejores-lugares-para-bodas-en-la-playa-es-1.jpeg" alt="img" />
                            <h6 className='mt-3 fw-bold'>Local ubicado en San Borja</h6>
                            <span style={{ color: 'gray' }}>Capacidad máxima de 200 personas</span>
                            <p className='fw-bold'>Disponible</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='about'>
                    <div className='w-100'>
                        <h1 className='fw-bold'>Nosotros</h1>
                        <br />
                        <p style={{ fontSize: '1.3rem', color: 'gray' }}>En 2024, un grupo de estudiantes universitarios lanzó Eventify, una innovadora aplicación de alquiler de espacios para eventos.Eventify facilitaba la búsqueda y reserva de lugares para todo tipo de eventos, desde conferencias hasta fiestas, con filtros personalizados y reseñas de usuarios.</p>
                    </div>
                    <div className='w-100 text-center'>
                        <img style={{ width: '300px' }} src={require('../assets/logo.png')} alt="img" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='local'>
                    <div className='w-100'>
                        <img style={{ height: '385px', borderRadius: '5px' }} className='w-100' src="https://elcomercio.pe/resizer/FO_At7GO-9lvWgsVVmqVyKbIefQ=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6MMMODXSTBEWFKOUV4JLOSVJ4I.PNG" alt="img" />
                    </div>
                    <div className='w-100'>
                        <h2 className='fw-bold'>Local para bodas</h2>
                        <p style={{ color: 'gray' }}>Lucar: Chaclacayo</p>
                        <p>Disponible -  S/. 10,000</p>
                        <p style={{ color: 'gray' }}>Local ubicado en Chaclacayo con capacidad para 500 personas, ideal para eventos grandes. Cuenta con amplio estacionamiento para la comodidad de los asistentes.</p>
                        <button className='btn-arrendar'>Habla con el arrendador</button>
                        <div style={{ display: 'flex', textAlign: 'start', marginTop: '20px' }}>
                            <img className='mt-2' style={{ width: '35px', height: '35px', borderRadius: '50%' }} src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
                            <div className='ms-4'>
                                <span style={{ fontSize: '0.9rem' }}>Charles in Group name</span><br />
                                <span style={{ fontSize: '0.9rem', color: 'gray' }}>15 de enero 2024</span><br />
                                <p>Muy buen local, el arrendador súper confiable y muy atento, lo recomienfo 100%.</p>
                                <div style={{ display: 'flex', fontSize: '0.9rem', alignItems: 'center' }}>
                                    <i className="fa-solid fa-heart"></i> <span className='ms-2'>6 likes</span>
                                    <i className="fa-regular fa-message ms-4"></i> <span className='ms-2'>18 comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <h2 className='fw-bold'>Productos similares</h2>
                <br />
                <div className='similares'>
                    <div className='w-100'>
                        <img className='w-100' style={{ borderRadius: '5px' }} src="https://lafabricamarketing.pe/wp-content/uploads/2021/10/Britt18dic19-14-.jpg" alt="img" />
                        <h6 className='mt-3 fw-bold'>Local ubicado en San Borja</h6>
                        <span style={{ color: 'gray' }}>Capacidad máxima de 200 personas</span>
                        <p style={{ fontWeight: 'bold' }}>Disponible</p>
                    </div>
                    <div className='w-100'>
                        <img className='w-100' style={{ borderRadius: '5px' }} src="https://cdn0.matrimonio.com.pe/vendor/7275/3_2/640/jpeg/whatsapp-image-2024-06-13-at-5-03-53-pm_11_107275-171831626555779.jpeg" alt="img" />
                        <h6 className='mt-3 fw-bold'>Casa de eventos Pachacamac</h6>
                        <span style={{ color: 'gray' }}>Capacidad máxima de 1000 personas</span>
                        <p style={{ fontWeight: 'bold' }}>Disponible</p>
                    </div>
                    <div className='w-100'>
                        <img className='w-100' style={{ borderRadius: '5px' }} src="https://cdn0.matrimonio.com.pe/vendor/8550/3_2/1280/jpg/81669668-490830955159058-4952362991849832448-n_11_108550-157858253520622.jpeg" alt="img" />
                        <h6 className='mt-3 fw-bold'>Local de eventos Chaclacayo</h6>
                        <span style={{ color: 'gray' }}>Capacidad máxima de 500 personas</span>
                        <p style={{ fontWeight: 'bold' }}>Disponible</p>
                    </div>
                </div>
            </div>
            <br />
            <hr style={{ color: '#eee' }} />
            <br />
            <div className="container" >
                <div className='footer'>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <h5 className='fw-bold'>2024 Eventify, Inc.</h5>
                        <div className='redes'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <div>
                        <h6 className='fw-bold'>Asistencia</h6>
                        <div className='mt-3' style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li>Centro de ayuda</li>
                            <li>Centro de ayuda</li>
                            <li>Centro de ayuda</li>
                        </div>
                    </div>
                    <div>
                        <h6 className='fw-bold'>Anfitrión</h6>
                        <div className='mt-3' style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li>Pon tu local</li>
                            <li>Asesoría</li>
                            <li>Consultas</li>
                        </div>
                    </div>
                    <div>
                        <h6 className='fw-bold'>Eventify</h6>
                        <div className='mt-3' style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li>Nosotros</li>
                            <li>Integrantes</li>
                            <li>Nuestra historía</li>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}
