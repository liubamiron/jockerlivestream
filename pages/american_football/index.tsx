
import {useRouter} from 'next/router'
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React from "react";


type collection = {
    id: any;
    uuid: number;
    name: string;
    collections: string;
    pagination: any;
    participant_1: any;
    participant_1_name: any;
    participant_1_logo: any;
    start_time: any;
    participant_2_name: any;
    active: boolean;
    start_date: number;
    participant_2_logo: any;
    event_url: string;
};
type props = {
    props: any;
    id: any;
    uuid: number;
    name: string;
    data: any;
    pagination: any;
    collections: any;
    active: boolean;
    start_date: number;

};

type data = {
    uuid: number;
    name: string;
    collection: string;
    pagination: any;
    id: any;
    current_page: number;
    participant_1: any;
    active: boolean;
    league_url: string;
    start_date: number;
};
// type formatDate = {
//     formatDate: any;
//     timestamp: number;
// }
// function formatDate(timestamp){
//     new Intl.DateTimeFormat('en-US').format(timestamp);
// }

const AmericanFootball = ({data}) => {
    // console.log('data', data.pagination.current_page)
     console.log('data', data)

    const linkClick = () => {
        router.push('/live')
    }
    const router = useRouter()

    // const formatDate = () => {
    //     new Intl.DateTimeFormat('en-US').format(timestamp)
    // }
    // let timestamp: any;
    // timestamp = {};

    // formatDate(timestamp: any) {
    //     return new Intl.DateTimeFormat('en-US').format(timestamp);
    // }

    return (
        <div className="container">
         {/*<div className="container d-flex align-items-center p-3 my-3 text-white bg-darkBlueOpacity rounded shadow-sm">*/}
            <button onClick={linkClick} type="button" className="btn btn-dark live_streams_button">LIVE STREAMS
            </button>
            <button type="button" className="btn btn-dark live_streams_button"
                    onClick={() => router.push('/football')}>FOOTBALL
            </button>


            <h3 className={'text-white'}>Live stream</h3>

            {data.collection.map(collection =>
               <div className={'text-white row bg-darkBlueOpacity rounded-pill border border-secondary border-3'} key={collection.uuid}>

                    <div className={'col text-start'}><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96317 0.562918L11.0193 5.99355H15.0223C15.4361 5.97673 15.8159 6.22172 15.9713 6.60569C16.1266 6.98967 16.0239 7.42983 15.7148 7.70547L12.2456 10.1272L14.171 14.5491C14.3433 14.9643 14.2319 15.443 13.8941 15.7395C13.5563 16.036 13.0671 16.0842 12.6779 15.8594L8.02515 13.2429L3.36708 15.8594C2.97785 16.0842 2.48868 16.036 2.15085 15.7395C1.81303 15.443 1.70167 14.9643 1.87399 14.5491L3.7994 10.1272L0.330193 7.70547C0.0202884 7.43109 -0.0836573 6.9915 0.0705329 6.60737C0.224723 6.22324 0.603753 5.97752 1.01736 5.99355H5.02029L7.0818 0.562918C7.2677 0.2163 7.62916 0 8.02248 0C8.41581 0 8.77727 0.2163 8.96317 0.562918Z" fill="#229665"/>
                    </svg> {new Intl.DateTimeFormat('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    }).format(collection.start_time)}</div>
                    <div className={'col text-center text-capitalize'}>
                    <Link href={`/${collection.event_url}/${collection.uuid}`}><a>{collection.name} - {collection.league_url}</a></Link>
                    </div>
                    <div className={'col text-capitalize'}>
                        <Link href={`/${collection.event_url}/${collection.uuid}`}><a>
                        <img src={`https://jokerlivestream-admin-7x4sa.ondigitalocean.app/${collection.participant_1_logo}`}
                             width={30} height={30}/> {collection.participant_1_name}  -
                        <img src={`https://jokerlivestream-admin-7x4sa.ondigitalocean.app/${collection.participant_2_logo}`}
                             width={30} height={30}/>  {collection.participant_2_name}</a></Link>
                    </div>
                    <div className={'col text-end'}><button type="button" className="btn btn-info">Bet</button> <button type="button" className="btn btn-info">Watch</button></div>

               </div>
            )}
        </div>
    )
}
export default AmericanFootball;

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://jokerlivestream-dev-api-bg7bk.ondigitalocean.app/events/filter`)
//     const data = await res.json()
//      console.log('h', data)
//      return { props: { data } }
// }


export async function getServerSideProps() {
    const {data} = await axios.post(`https://jokerlivestream-dev-api-bg7bk.ondigitalocean.app/events/filter`)

    return {
        props: {
            data: data || {},
        },
        //revalidate: 1,
    }
}

// export async function getServerSideProps({params, req, query, uuid, data}) {
//
//     const axios = require('axios');
//     axios.get(`https://jokerlivestream-front-3uc7j.ondigitalocean.app/_next/data/_UGYAh03vPfZVQxla6qVA/en/saudi-arabia-vs-usa-live-stream-453/9ca09f33.json/`, {
//         params: {
//             gameMatchName: `brazil-vs-tunisia-live-stream-454`,
//             leagueNameMatchId: `952bc8b9`
//         }
//     })
//         .then(res => console.log('data', res.data))
// console.log('data', data);
//     return {
//         props: {
//             data: data || {},
//         },
//         //revalidate: 1,
//     }
// }

