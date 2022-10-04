import React, {Component} from 'react'
import Image from "next/image";

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Head from "next/head";

// import A from '../components/A';

// type Keywords ={
//     keywords:string;
// }
//
// interface keywords {
//     keywords:string
// }


const Basketball = () => {
    return (

        <>
            <Head>
                <title>Joker</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={'description, description2'} />
                <meta name="keywords" content={'key1, key2'} />
            </Head>
            <header className='App-header'>

                <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Main navigation">
                    <div className="container">
                        {/*<A href={'/'} text="Home"/>*/}
                        <Link href={'/'}><a className="navbar-brand">
                            <Image src='/logo.png' width={70} height={32} alt="joker"/></a></Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search">
                                </input>

                            </form>


                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="client_time dropdown">
                                    <Link href={'/'}><a className="btn btn-light dropdown-toggle" role="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">GMT +3</a></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link href={'/'}><a className="dropdown-item" >Action</a></Link></li>
                                        <li><Link href={'/'}><a className="dropdown-item">Another action</a></Link></li>
                                        <li><Link href={'/'}><a className="dropdown-item">Something else here</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href={'/'}><a className="btn btn-light" role="button">17:00</a></Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href={'/'}><a className="nav-link">DNS</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'/'}><a className="nav-link">Sitemap</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'/'}><a className="nav-link">For webmasters</a></Link>
                                </li>
                            </ul>

                            <div>
                                <Link href={'/'}><a className="btn btn-success add_your_stream_p" role="button">Add your
                                    stream</a></Link>
                                <Link href={'/'}><a className="btn btn-light" role="button">Subscribe</a></Link>
                            </div>

                        </div>
                    </div>
                </nav>

                <div className="nav-scroller bg-darkBlueOpacity shadow-sm">
                    <div className="container text-center">
                        <nav className="nav" aria-label="Secondary navigation">

                            <Link href={'/football'}><a className="nav-link">Football</a></Link>
                            <Link href={'/basketball'}><a className="nav-link">
                                Basketball
                                <span className="badge text-bg-light rounded-pill align-text-bottom">27</span>
                            </a></Link>
                            <Link href={'/'}><a className="nav-link">Explore</a></Link>
                            <Link href={'/'}><a className="nav-link">Suggestions</a></Link>
                            <Link href={'/'}><a className="nav-link">Link</a></Link>
                            <Link href={'/'}><a className="nav-link">Link</a></Link>
                            <Link href={'/'}><a className="nav-link">Link</a></Link>
                            <Link href={'/'}><a className="nav-link">Link</a></Link>
                            <Link href={'/'}><a className="nav-link">Link</a></Link>
                        </nav>
                    </div>
                </div>
                <div className="bg-darkBlueOpacity">
                    {/* <span className="border border-top border-white"></span> */}
                    <div style={{borderTop: "1px solid #fff ", marginLeft: 10, marginRight: 10}}></div>
                    <div className='fly_text'><p>Just any text</p></div>
                </div>
            </header>
            <main className="container">
                <button type="button" className="btn btn-dark live_streams_button">LIVE STREAMS</button>
                <button type="button" className="btn btn-dark live_streams_button">FOOTBALL</button>


                <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                    <img className="me-3" src="/docs/5.2/assets/brand/bootstrap-logo-white.svg" alt="" width="48"
                         height="38"/>
                    <div className="lh-1">
                        <h1 className="h6 mb-0 text-white lh-1">Bootstrap</h1>
                        <small>Since 2011</small>
                    </div>
                </div>

                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
                    <div className="d-flex text-muted pt-3">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#007bff"></rect>
                            <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                        </svg>

                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                            <strong className="d-block text-gray-dark">@username</strong>
                            Some representative placeholder content, with some information about this user. Imagine
                            this being some sort of status update, perhaps?
                        </p>
                    </div>
                    <div className="d-flex text-muted pt-3">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#e83e8c"></rect>
                            <text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text>
                        </svg>

                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                            <strong className="d-block text-gray-dark">@username</strong>
                            Some more representative placeholder content, related to this other user. Another status
                            update, perhaps.
                        </p>
                    </div>
                    <div className="d-flex text-muted pt-3">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#6f42c1"></rect>
                            <text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>
                        </svg>

                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                            <strong className="d-block text-gray-dark">@username</strong>
                            This user also gets some representative placeholder content. Maybe they did something
                            interesting, and you really want to highlight this in the recent updates.
                        </p>
                    </div>
                    <small className="d-block text-end mt-3">
                        <a href="#">All updates</a>
                    </small>
                </div>

                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
                    <div className="d-flex text-muted pt-3">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#007bff"></rect>
                            <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                        </svg>

                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <div className="d-flex justify-content-between">
                                <strong className="text-gray-dark">Full Name</strong>
                                <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                    </div>
                    <div className="d-flex text-muted pt-3">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#007bff"></rect>
                            <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                        </svg>

                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <div className="d-flex justify-content-between">
                                <strong className="text-gray-dark">Full Name</strong>
                                <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                    </div>
                    <div className="d-flex text-muted pt-3">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#007bff"></rect>
                            <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                        </svg>

                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <div className="d-flex justify-content-between">
                                <strong className="text-gray-dark">Full Name</strong>
                                <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                    </div>
                    <small className="d-block text-end mt-3">
                        <a href="#">All suggestions</a>
                    </small>
                </div>
            </main>

            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        {/*<a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">*/}
                        {/*    <svg className="bi me-2" width="40" height="32">*/}
                        {/*        <use xlinkHref="#bootstrap"></use>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        <Link href={'/'}><a className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <Image src='/logo.png' width={70} height={32} alt="joker"/></a></Link>

                        <span className="text-muted">© 2020 JokerLivestream</span>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h6 className={'text-white'}>FOOTBALL</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link href={'/'}><a className="nav-link p-0 text-muted">Home</a></Link>
                            </li>
                            <li className="nav-item mb-2"><Link href={'/'}>
                                <a className="nav-link p-0 text-muted">Features</a></Link>
                            </li>
                            <li className="nav-item mb-2"><Link href={'/faq'}>
                                <a href="#" className="nav-link p-0 text-muted">FAQs</a></Link>
                            </li>
                            <li className="nav-item mb-2"><Link href={'/about'}>
                                <a href="#" className="nav-link p-0 text-muted">About</a></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h6 className={'text-white'}>BASKETBALL</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href={'/basketball'}>
                                <a className="nav-link p-0 text-muted">Basketball</a></Link>
                            </li>


                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h6 className={'text-white'}>TENNIS</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href={'/'}>
                                <a className="nav-link p-0 text-muted">Home</a></Link>
                            </li>
                            <li className="nav-item mb-2"><Link href={'/'}>
                                <a href="#" className="nav-link p-0 text-muted">Features</a></Link>
                            </li>

                        </ul>
                    </div>
                </footer>
            </div>

            <script src="offcanvas.js"></script>

        </>
    )
}

export default Basketball;

