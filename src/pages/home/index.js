import React from "react";
import './index.css';
import Header from './../../components/header';
import Card from './../../components/card';
import Notice from './../../components/notice';
import GridCards from './../../components/gridCards'

const Home = () => {
    return (
        <>
            <section className="container">
                <Header />
            </section>
            <section className="container">
                <img
                    className="image-banner"
                    src="https://bogota.gov.co/sites/default/files/2023-03/banner-mucho-que-contar-28-marzo_1170x230.jpg"
                    alt="Bogotá tiene mucho que contar"
                />
            </section>
            <section className="container actualidad">
                <h2>Actualidad Bogotá</h2>  
                <div className="actualidad-content">
                    <div className="actualidad-content-item">
                        <Card
                            category='movilidad'
                            color='red-light'
                            image={['https://bogota.gov.co/sites/default/files/styles/560x315/public/2023-04/movilidad-1-1.jpg']}
                            title='¡Pilas! Este domingo 9 de abril hay pico y placa regional para ingresar a Bogotá'
                            text='Consulta aquí los horarios en los que aplica la medida para los vehículos particulares que retornan a la ciudad el Domingo de Pasca'
                            date='08•ABR•2023'
                        />
                    </div>
                    <div className="actualidad-content-item">
                        <Notice />
                    </div>
                </div>
            </section>
            <section className="busqueda">
                <div className="banner">
                    <div className="content-info">
                        <h2 className="title">¿Qué estás buscando?</h2>
                        <div>
                            <input type="text" placeholder=""></input>
                            <button>Buscar</button>
                        </div>
                    </div>
                </div>
                <div className="guia">
                    <h2 className="title">Visita nuestra guía de tramites y servicios</h2>
                </div>
            </section>
            <GridCards />
        </>
        
    );
}

export default Home; 