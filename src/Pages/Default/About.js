import React from 'react'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'

function About() {
    return (
        <>
        <Header/>
            <section className="hero-banner magic-ball" >
                <div className='row col-12 p-5'>
                    <div className='col-6 p-5'>
                        <img src="img/home/about.png" style={{ width: '650px', height: '400px' }} />
                    </div>
                    <div className='col-6 p-5 '>
                        <h1 className='text-center p-4'>About</h1>
                        <p className='text-justify p-3'>Welcome to Keralaspecial.in, your gateway to the diverse world of Kerala's products, places, and services. We are more than just an e-commerce platform; we are on a mission to offer you an authentic and enriching journey through the wonders of "God's Own Country."</p>
                    </div>
                </div>
                <div className='p-5 m-5'>
                    <h1 className='p-4'>Our Story</h1>
                    <p className='text-justify p-3'>Founded as an established e-commerce platform, Keralaspecial.in has now expanded into the tourism sector, driven by our passion for preserving Kerala's rich culture and promoting responsible tourism practices. With a deep commitment to supporting local artisans, farmers, and tour providers, we aim to be the preferred destination for travelers, seeking genuine experiences in this enchanting land.</p>
                    <button className='button button-hero mx-5' onClick={() => window.open("https://keralaspecial.in/", "_blank", "noreferrer")}>Visit</button>
                </div>

                <div className='p-5 m-5'>
                    <h1 className='p-4'>Our Vision</h1>
                    <p className='text-justify p-3'>At Keralaspecial.in, we envision becoming the go-to platform for tourists looking to delve into the true essence of Kerala. Through a seamless online marketplace, we strive to showcase the region's vibrant culture, time-honoured traditions, and breathtaking natural beauty while contributing to the well-being of local communities.</p>

                </div>

                <div className='p-5 m-5'>
                    <h1 className='p-4'>Our Mission</h1>
                    <p className='text-justify p-3'>Our mission is simple yet powerful – to bridge the gap between curious travellers and reputable tour package providers. We curate offerings that reflect the authentic spirit of Kerala, ensuring that every journey is not only memorable but also leaves a positive impact on the lives of those living here.</p>

                </div>

                <div className='p-5 m-5'>
                    <h1 className='p-4'>Core Values</h1>
                    <p className='text-justify p-3'>
                        <ul className='container-about-core-values'>
                            <li>Authenticity: We take pride in curating and offering only genuine products and experiences that showcase the real essence of Kerala.</li>
                            <li>Responsibility: We believe in promoting responsible tourism practices that respect and protect Kerala's cultural heritage and natural resources.</li>
                            <li>Empowerment: We are committed to empowering local artisans, farmers, and service providers by providing them a platform to reach a wider audience.</li>
                            <li>Customer Delight: Your satisfaction is our top priority. We aim to deliver exceptional service and experiences that exceed your expectations.</li>
                        </ul>
                    </p>

                </div>

                
            </section>
            <Footer/>

        </>
    )
}

export default About