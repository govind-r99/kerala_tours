import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <section className="hero-banner magic-ball">
                <div className="container">

                    <div className="row align-items-center text-center text-md-left">
                        <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
                            <h1>Travel More To Discover Yourself</h1>
                            <p>Confused Where to travel? Our experts will help you find the right destination for you according to the availabe days and plan a efficient travel plan to create new memories on the go</p>
                            <Link className="button button-hero mt-4" to="/enquiry">Send Enquiry Request</Link>
                        </div>
                        <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
                            <img className="img-fluid" src="img/home/hero-img.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-margin generic-margin">
                <div className="container">
                    <div className="section-intro text-center pb-90px">
                        <img className="section-intro-img" src="img/home/section-icon.png" alt=""/>
                            <h2>Our Popular Services</h2>
                            <p>Fowl have fruit moveth male they are that place you will lesser</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="service-card text-center">
                                <div className="service-card-img">
                                    <img className="img-fluid" src="img/home/service1.png" alt=""/>
                                </div>
                                <div className="service-card-body">
                                    <h3>Hotel Booking</h3>
                                    <p>Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="service-card text-center">
                                <div className="service-card-img">
                                    <img className="img-fluid" src="img/home/service2.png" alt=""/>
                                </div>
                                <div className="service-card-body">
                                    <h3>Flight Booking</h3>
                                    <p>Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="service-card text-center">
                                <div className="service-card-img">
                                    <img className="img-fluid" src="./img/home/service3.png" alt=""/>
                                </div>
                                <div className="service-card-body">
                                    <h3>Destination Booking</h3>
                                    <p>Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gray section-padding magic-ball magic-ball-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
                            <div className="about-img">
                                <img className="img-fluid" src="./img/home/about-img.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 align-self-center about-content">
                            <h2>Exploration is <br className="d-none d-xl-block"/> really the essence <br className="d-none d-xl-block"/> of the human spirit</h2>
                                <p>Make she'd moved divided air. Whose tree that replenish tone hath own upon them it multiply was blessed is lights make gathering so day dominion so creeping air was made.</p>
                                <a className="button" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
            </section>


            <section className="section-margin pb-xl-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tour-card">
                                <img className="card-img rounded-0" src="./img/home/tour1.png" alt=""/>
                                    <div className="tour-card-overlay">
                                        <div className="media">
                                            <div className="media-body">
                                                <h4>Paris tour offer</h4>
                                                <small>5 days offer</small>
                                                <p>We proper guided our tourist</p>
                                            </div>
                                            <div className="media-price">
                                                <h4 className="text-primary">$65/day</h4>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="tour-content">
                                        <h2>We offer worldwise tour plan recently</h2>
                                        <p>Make she'd moved divided air. Whose tree that hath own upon them it multiply was blessed </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tour-card">
                                <img className="card-img rounded-0" src="./img/home/tour2.png" alt=""/>
                                    <div className="tour-card-overlay">
                                        <div className="media">
                                            <div className="media-body">
                                                <h4>Paris tour offer</h4>
                                                <small>5 days offer</small>
                                                <p>We proper guided our tourist</p>
                                            </div>
                                            <div className="media-price">
                                                <h4 className="text-primary">$65/day</h4>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-7">
                            <div className="tour-card">
                                <img className="card-img rounded-0" src="./img/home/tour3.png" alt=""/>
                                    <div className="tour-card-overlay">
                                        <div className="media">
                                            <div className="media-body">
                                                <h4>Paris tour offer</h4>
                                                <small>5 days offer</small>
                                                <p>We proper guided our tourist</p>
                                            </div>
                                            <div className="media-price">
                                                <h4 className="text-primary">$65/day</h4>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="tour-card">
                                <img className="card-img rounded-0" src="./img/home/tour4.png" alt=""/>
                                    <div className="tour-card-overlay">
                                        <div className="media">
                                            <div className="media-body">
                                                <h4>Paris tour offer</h4>
                                                <small>5 days offer</small>
                                                <p>We proper guided our tourist</p>
                                            </div>
                                            <div className="media-price">
                                                <h4 className="text-primary">$65/day</h4>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-gray section-padding magic-ball magic-ball-testimonial pb-xl-5">
                <div className="container">
                    <div className="section-intro text-center pb-90px">
                        <img className="section-intro-img" src="./img/home/section-icon.png" alt=""/>
                            <h2>Our client says</h2>
                            <p>Fowl have fruit moveth male they are that place you will lesser</p>
                    </div>


                    <div className="owl-carousel owl-theme testimonial pb-xl-5">
                        <div className="testimonial__item">
                            <div className="row">
                                <div className="col-md-3 col-lg-2 align-self-center">
                                    <div className="testimonial__img">
                                        <img className="card-img rounded-0" src="./img/testimonial/t-slider1.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-9 col-lg-10">
                                    <div className="testimonial__content mt-3 mt-sm-0">
                                        <h3>Daniel heart</h3>
                                        <p>Project manager, Nestle</p>
                                        <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had</p>
                                        <span className="testimonial__icon"><i className="ti-quote-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial__item">
                            <div className="row">
                                <div className="col-md-3 col-lg-2 align-self-center">
                                    <div className="testimonial__img">
                                        <img className="card-img rounded-0" src="./img/testimonial/t-slider1.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-9 col-lg-10">
                                    <div className="testimonial__content mt-3 mt-sm-0">
                                        <h3>Daniel heart</h3>
                                        <p>Project manager, Nestle</p>
                                        <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had</p>
                                        <span className="testimonial__icon"><i className="ti-quote-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial__item">
                            <div className="row">
                                <div className="col-md-3 col-lg-2 align-self-center">
                                    <div className="testimonial__img">
                                        <img className="card-img rounded-0" src="./img/testimonial/t-slider1.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-9 col-lg-10">
                                    <div className="testimonial__content mt-3 mt-sm-0">
                                        <h3>Daniel heart</h3>
                                        <p>Project manager, Nestle</p>
                                        <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had</p>
                                        <span className="testimonial__icon"><i className="ti-quote-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 align-self-center mb-5 mb-lg-0">
                            <div className="search-content">
                                <h2>Search suitable <br className="d-none d-xl-block"/> and affordable plan <br className="d-none d-xl-block"/> for your tour</h2>
                                    <p>Make she'd moved divided air. Whose tree that replenish tone hath own upon them it multiply was blessed is lights make gathering so day dominion so creeping</p>
                                    <a className="button" href="#">Learn More</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-xl-1">
                                <div className="search-wrapper">
                                    <h3>Search Package</h3>

                                    <form className="search-form" action="#">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Recipient's username"/>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"><i className="ti-search"></i></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select name="category" id="category">
                                                <option value="disabled" disabled selected>Category</option>
                                                <option value="8 AM">8 AM</option>
                                                <option value="12 PM">12 PM</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <select name="tourDucation" id="tourDuration">
                                                <option value="disabled" disabled selected>Tour duration</option>
                                                <option value="8 AM">8 AM</option>
                                                <option value="12 PM">12 PM</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="date" className="form-control"/>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"><i className="ti-notepad"></i></span>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select name="priceRange" id="priceRange">
                                                <option value="disabled" disabled selected>Price range</option>
                                                <option value="8 AM">8 AM</option>
                                                <option value="12 PM">12 PM</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <button className="button border-0 mt-3" type="submit">Search Package</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
            </section>



            <section className="section-padding bg-gray">
                <div className="container">
                    <div className="section-intro text-center pb-90px">
                        <img className="section-intro-img" src="./img/home/section-icon.png" alt=""/>
                            <h2>From our Blog</h2>
                            <p>Fowl have fruit moveth male they are that place you will lesser</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="card-blog">
                                <img className="card-img rounded-0" src="./img/blog/blog-1.png" alt=""/>
                                <div className="card-blog-body">
                                    <a href="#">
                                        <h4>Forest responds to consultation smoking in al fresco.</h4>
                                    </a>
                                    <ul className="card-blog-info">
                                        <li><a href="#"><span className="align-middle"><i className="ti-notepad"></i></span>Jan 03, 2018</a></li>
                                        <li><a href="#"><span className="align-middle"><i className="ti-comments-smiley"></i></span>03 Comments</a></li>
                                    </ul>
                                    <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="card-blog">
                                <img className="card-img rounded-0" src="./img/blog/blog-2.png" alt="" />
                                <div className="card-blog-body">
                                    <a href="#">
                                        <h4>Forest responds to consultation smoking in al fresco.</h4>
                                    </a>
                                    <ul className="card-blog-info">
                                        <li><a href="#"><span className="align-middle"><i className="ti-notepad"></i></span>Jan 03, 2018</a></li>
                                        <li><a href="#"><span className="align-middle"><i className="ti-comments-smiley"></i></span>03 Comments</a></li>
                                    </ul>
                                    <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="card-blog">
                                <img className="card-img rounded-0" src="./img/blog/blog-3.png" alt="" />
                                <div className="card-blog-body">
                                    <a href="#">
                                        <h4>Forest responds to consultation smoking in al fresco.</h4>
                                    </a>
                                    <ul className="card-blog-info">
                                        <li><a href="#"><span className="align-middle"><i className="ti-notepad"></i></span>Jan 03, 2018</a></li>
                                        <li><a href="#"><span className="align-middle"><i className="ti-comments-smiley"></i></span>03 Comments</a></li>
                                    </ul>
                                    <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home