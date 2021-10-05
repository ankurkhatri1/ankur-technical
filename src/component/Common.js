import React from 'react'


function Common(props) {
    return (
        <div className="homecontainer">
             <section id="header">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className=" col-10 mx-auto">
                            <div className="row">
                            <div className="homepara col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> {props.Name} <strong className="brand-name">{props.Nameone}</strong></h1>
                                <h2 className="my-3">We are the team of talented developer making websites</h2>
                                <div className="mt-3"> <button className="btn-get-started"><a style={{textDecoration:'none',color:'white'}} href="" >{props.BtnName} </a></button></div>
                            </div> 
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img className="img-fluid" src={props.img} alt='home img' />
                                </div> 
                                </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Common
