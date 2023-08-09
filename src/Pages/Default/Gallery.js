import React from 'react'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'

function Gallery() {
    return (
        <section className="hero-banner magic-ball" >
            <Header />
            <div className='row col-12 p-5'>
                <div className='row col-12 p-5'>
                    <h1 className='text-justify'>A collection of our success working with clients from all over the world achieve amazing, proven, and growing results for their business.</h1>
                    <p className='text-justify'>This is a paragraph. You can write your own content here, and fill in the blanks. Tell the world about your business, and make this text yours.</p>
                </div>

                <div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery1.png" className='gallery'></img>
                </div>
                <div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery1.png" className='gallery'></img>
                </div><div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery2.png" className='gallery'></img>
                </div>
                <div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery2.png" className='gallery'></img>
                </div>
                <div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery1.png" className='gallery'></img>
                </div>
                <div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery2.png" className='gallery'></img>
                </div><div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery1.png" className='gallery'></img>
                </div><div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery1.png" className='gallery'></img>
                </div><div className='image-wrapper col-3'>
                    <img src="img/gallery/gallery1.png" className='gallery'></img>
                </div>

                <div className='row col-12'>
                    <h1 className='col-12 justify-content-center row'>Clients</h1>
                    <div className='col-12'>
                        <img src="img/gallery/client1.png"></img>
                        <img src="img/gallery/client2.png"></img>
                    </div>

                </div>
            </div>

            <Footer/>
        </section>
    )
}

export default Gallery