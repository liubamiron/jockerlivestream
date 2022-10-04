import Link from "next/link";
import Image from "next/image";
import React from "react";
import Header from "./Header";


const Footer = ()=> {

    return (
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
    )
}

export default Footer;