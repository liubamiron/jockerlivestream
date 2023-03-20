import React, {Component, useState} from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {GetServerSideProps} from "next";
import {type} from "os";


type data = {
    uuid: string;
    name: string;
    collection: string;
    pagination: any;
    id: any;
    current_page: number;
    participant_1: any;
    active: boolean;
    league_url: string;
    start_date: number;
    league_uuid: string;
};




const Header = ({children, keywords, data, props})=>{

    const [value, setValue] = useState();

    console.log('select value: gmt', value)

    function handleChange(event) {
        setValue(event.target.value);
    }
        return (
            <>
                <Head>
                    <title>Joker</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content={'description, description2'} />
                    <meta name="keywords" content={'key1, key2'+ keywords} />
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
                                &nbsp;
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/*<select value={value} onChange={handleChange}> выводить текст из <option>*/}
                                    <select value={value} onChange={(event)=> setValue((event.target as any).value)}>
                                        <option>GMT</option>
                                        <option value="1">GMT+1</option>
                                        <option value="2">GMT+2</option>
                                        <option value="3">GMT+3</option>
                                    </select>

                                    &nbsp;
                                    <li>
                                        <Link href={'/'}><a className="btn btn-light" role="button">{new Date().getHours() + ':' + new Date().getMinutes()}</a></Link>
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
{/* json for header*/}
{/*                                {data.sports.map(sport =>
<Link href={`/${sport.og_url}`}><a className="nav-link">{sport.name}</a></Link>
)}*/}
                                <Link href={'/football'}><a className="nav-link">Football</a></Link>
                                <Link href={'/basketball'}><a className="nav-link">
                                    Basketball
                                    <span className="badge text-bg-light rounded-pill align-text-bottom">{data}</span>
                                </a></Link>
                                <Link href={'/american_football'}><a className="nav-link">American Football</a></Link>
                                <Link href={'/tennis'}><a className="nav-link">Tennis</a></Link>

                            </nav>
                        </div>
                    </div>
                    <div className="bg-darkBlueOpacity">
                        {/* <span className="border border-top border-white"></span> */}
                        <div style={{borderTop: "1px solid #fff ", marginLeft: 10, marginRight: 10}}></div>
                        <div className='fly_text'><p>Just any text</p></div>
                    </div>
                </header>
            </>
        );
    }

export default Header;



// export const getStaticProps = async () => {
//     const response = await fetch('https://jokerlivestream-front-3uc7j.ondigitalocean.app/_next/data/h5bBHDPNIU4PacUUb5iuj/en/football.json?gameMatchName=football');
//     const data = await response.json();
//     //данная функция возвращяет пропсы для компонента
//
//     if (!data) {
//         return {
//             notFound:true,
//         }
//     }
//     return {
//         props: {header_menu: data},
//     }
// };

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(`http://localhost:3004/collection/`)
    const data = await response.json()

    return {
        props: {data},
    }
}
