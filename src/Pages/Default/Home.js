import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'

function Home() {

    const scrollPage = () => {
        window.scrollTo({ top: "875 ", left: "0", behavior: 'smooth' })

    }
    return (


        <>
            <Header />
            <section className="hero-banner magic-ball" >
                <div className="row-6 p-5 " style={{ background: `url("img/home/home.png")`, height: "620px" }}>
                    <div className="container " >
                        <div className="row align-items-center text-center ">
                            <div className="">
                                <h1 className='pt-5'>Kerala Special</h1>
                                <h4 className='p-5 justify-content-center'>With a focus on preserving culture, promoting responsible tourism, and supporting local artisans, Keralaspecial.in aims to become the go-to destination for travellers seeking authentic experiences in "God's Own Country."</h4>
                                <button className="button button-hero mt-4 mr-4" onClick={() => scrollPage()} >Get Started</button>
                                <Link className="button button-hero mt-4" to="/enquiry">Send Enquiry Request</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="home-section generic-margin">
                <div className='row col-12 '>
                    <div className='col-5 pl-5'>
                        <h1></h1>
                    </div>
                    <div className='col-7 pl-5'>
                        <img src='img/home/home1.png' style={{ width: '750px', height: '600px' }} />
                    </div>
                </div>
                <div className='container-welcome row  col-6 p-5' >
                    <div className='col-12 p-3'>
                        <h1>Welcome To KeralaSpecial</h1>
                    </div>
                    <div>
                        <h2 className='p-2'>LEARN MORE ABOUT WHAT WE DO</h2>
                        <p className='text-justify p-1'>Welcome to Keralaspecial.in, an e-gateway designed for your journey into the diverse world of Kerala's products, places, and services. We present a seamless online marketplace that serves as a perfect connection between tourists and trustworthy package providers, offering a glimpse of Kerala's vibrant culture, time-honored traditions, and breathtaking natural beauty.
                            Get ready to explore the wonders of Kerala like never before!</p>
                        <Link to="/about" className='button button-hero'>About</Link>
                    </div>
                </div>
            </section>


            <section className="section-margin generic-margin">
                <div className="container">
                    <div className="section-intro text-center pb-90px">
                        <i className="fa fa-location-dot" style={{ fontSize: '75px', color: "#49CF28" }}></i>
                        <h2>Our Popular Destinations</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="card-blog">
                                <img className="card-img rounded-0" src="./img/demo/Alleppey.jpg" alt="" />
                                <div className="card-blog-body">
                                    <a href="#">
                                        <h4>Forest responds to consultation smoking in al fresco.</h4>
                                    </a>
                                    {/* <ul className="card-blog-info">
                                    <li><a href="#"><span className="align-middle"><i className="ti-notepad"></i></span>Jan 03, 2018</a></li>
                                    <li><a href="#"><span className="align-middle"><i className="ti-comments-smiley"></i></span>03 Comments</a></li>
                                </ul> */}
                                    <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p>
                                    <button className="btn btn-success border-0 mt-3" type="submit">Send Enquiry</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="card-blog">
                                <img className="card-img rounded-0" src="./img/demo/Cochin.jpg" alt="" />
                                <div className="card-blog-body">
                                    <a href="#">
                                        <h4>Forest responds to consultation smoking in al fresco.</h4>
                                    </a>
                                    {/* <ul className="card-blog-info">
                                    <li><a href="#"><span className="align-middle"><i className="ti-notepad"></i></span>Jan 03, 2018</a></li>
                                    <li><a href="#"><span className="align-middle"><i className="ti-comments-smiley"></i></span>03 Comments</a></li>
                                </ul> */}
                                    <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p>

                                    <button className="btn btn-success border-0 mt-3" type="submit">Send Enquiry</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="card-blog">
                                <img className="card-img rounded-0" src="./img/demo/munnar.jpg" alt="" />
                                <div className="card-blog-body">
                                    <a href="#">
                                        <h4>Forest responds to consultation smoking in al fresco.</h4>
                                    </a>
                                    {/* <ul className="card-blog-info">
                                        <li><a href="#"><span className="align-middle"><i className="ti-notepad"></i></span>Jan 03, 2018</a></li>
                                        <li><a href="#"><span className="align-middle"><i className="ti-comments-smiley"></i></span>03 Comments</a></li>
                                    </ul> */}
                                    <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p>
                                    <button className="btn btn-success border-0 mt-3" type="submit">Send Enquiry</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray section-padding magic-ball magic-ball-testimonial pb-xl-5">
                <div className="container">
                    <div className="section-intro text-center pb-90px">
                        <h2>Our client says</h2>
                    </div>

                    <div id="carouselExampleControls" className="carousel slide p-5" data-ride="carousel" style={{ background: '#4536c6', borderRadius: '5px', width: '100%', height: "300px%" }}>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className='text-center'>
                                    <i className="fa fa-quote-right text-light" style={{ fontSize: "100px" }}></i>
                                </div>
                                <p className=' text-center'>THIS IS WHERE THE CLENTS OF PACKEAGE PROVIDERS' TESTIMONIALS WILL BE UPDATED 1</p>
                                <p className='text-center pl-5'>-Arun Das</p>
                            </div>
                            <div className="carousel-item">
                                <div className='text-center'>
                                    <i className="fa fa-quote-right text-light" style={{ fontSize: "100px" }}></i>
                                </div>
                                <p className=' text-center'>THIS IS WHERE THE CLENTS OF PACKEAGE PROVIDERS' TESTIMONIALS WILL BE UPDATED 1</p>
                                <p className='text-center pl-5'>-Arun Das</p>
                            </div>
                            <div className="carousel-item">
                                <div className='text-center'>
                                    <i className="fa fa-quote-right text-light" style={{ fontSize: "100px" }}></i>
                                </div>
                                <p className=' text-center'>THIS IS WHERE THE CLENTS OF PACKEAGE PROVIDERS' TESTIMONIALS WILL BE UPDATED 1</p>
                                <p className='text-center pl-5'>-Arun Das</p>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </section >
            <Footer />

        </>
    )
}

export default Home