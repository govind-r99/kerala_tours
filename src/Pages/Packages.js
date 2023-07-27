import React from 'react'

function Packages() {
    return (
        <section className="section-padding bg-gray">
            <div className="container">
                <div className="section-intro text-center pb-90px">
                    <img className="section-intro-img" src="./img/home/section-icon.pn" alt="" />
                    <h2>Our Packages</h2>
                    <p>Browse through a wide range of Kerala holiday packages with exciting offers at Thrillophilia. Book customized Kerala trip packages with exciting deals & offers.</p>
                </div>

                <div className='row justify-content-center'>
                    <div className="input-group rounded m-5 col-4">
                        <input type="search" className="form-control rounded m-1 " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border-0 m-1" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
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
    )
}

export default Packages