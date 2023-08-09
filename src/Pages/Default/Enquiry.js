import React from 'react'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'

function Enquiry() {
    return (
        <section className="section-margin">
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-5 align-self-center mb-5 mb-lg-0">
                        <div className="search-content">
                            <h2>Search suitable <br className="d-none d-xl-block" /> and affordable plan <br className="d-none d-xl-block" /> for your tour</h2>
                            <p>Confused Where to travel? Our experts will help you find the right destination for you according to the availabe days and plan a efficient travel plan to create new memories on the go</p>
                            {/* <a className="button" href="#">Learn More</a> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 offset-xl-1">
                        <div className="search-wrapper">
                            <h3>Request Assistance</h3>

                            <form className="search-form" action="#">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                        <div className="input-group-append">
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                        <div className="input-group-append">
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Phone" />
                                        <div className="input-group-append">
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Number of Days" />
                                        <div className="input-group-append">
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="Traveller Count" />
                                        <div className="input-group-append">
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <select name="category" id="category">
                                        <option value="disabled" disabled selected>Category</option>
                                        <option value="8 AM">8 AM</option>
                                        <option value="12 PM">12 PM</option>
                                    </select>
                                </div> */}
                               
                                <div className="form-group">
                                    <button className="button border-0 mt-3" type="submit">Send Request</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Enquiry