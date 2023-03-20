import router, {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import React from "react";

export default function Event_url({football}) {
    console.log('j',football)
    // console.log(router)
    const {query} = useRouter()

    console.log(query)
    console.log('j',football)
  

    return (
        <>
            <div className='container'>
            <div className={'row'}>
        <div className='container text-white bg-dark col-8 rounded-3'>
            hhh
            {/*<h3>query - {query.uuid}</h3>*/}
            {/*<h3>event - {query.event_url}</h3>*/}

            {/* bread crumbs */}
            {/*<Link href={`american_football/${football.pageProps.breadCrumbs.name}`}><a>football</a></Link>*/}

<br/>
            <h5 className={'text-center fw-bolder'}>{football.pageProps.metaTags.league_name}</h5>
<br/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <img src={`https://jokerlivestream-admin-7x4sa.ondigitalocean.app/${football.pageProps.metaTags.participantHome_logo}`}
                             width={30} height={30}/>
                        {football.pageProps.metaTags.participantHome_name}
                    </div>
                    <div  className="col">
                        <button type="button" className="btn btn-light">{new Intl.DateTimeFormat('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                        }).format(football.pageProps.metaTags.start_time)}</button>

                    </div>
                    <div className="col">
                        <img src={`https://jokerlivestream-admin-7x4sa.ondigitalocean.app/${football.pageProps.metaTags.participantAway_logo}`}
                             width={30} height={30}/>
                        {football.pageProps.metaTags.participantAway_name}
                    </div>
                </div>

            <br/>
            <div className={'text-center'}>{new Intl.DateTimeFormat('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    }).format(football.pageProps.metaTags.start_time)}</div>

            <div className={'text-center'}> {new Intl.DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
            }).format(football.pageProps.metaTags.start_time)}</div>
        </div>
        </div>
        <div className='container text-white col-3 text-center'>
            any text
        </div>
            </div>
            </div>
        </>
)
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
    const response = await fetch(
        `https://jokerlivestream-front-3uc7j.ondigitalocean.app/_next/data/n7VtitpfhcYBYjnv_Weao/en/${params.event_url}/${params.uuid}.json?gameMatchName=${params.event_url}`)
        // `https://jokerlivestream-front-3uc7j.ondigitalocean.app/_next/data/n7VtitpfhcYBYjnv_Weao/en/baseball/${params.event_url}/${params.uuid}.json?gameMatchName=${params.event_url}`)
    const football = await response.json()
    return {
        props: {football},
    }
}
//jokerlivestream-front-3uc7j.ondigitalocean.app/_next/data/n7VtitpfhcYBYjnv_Weao/en/${params.event_url}/${params.uuid}.json?gameMatchName=${params.event_url}&leagueNameMatchId=${params.uuid}


    // export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
    //     const response = await fetch(
    //         `https://jokerlivestream-dev-api-bg7bk.ondigitalocean.app/events/match-event/${params.event_url}/${params.uuid}`)
    //     const football = await response.json()
    //     return {
    //         props: {football},
    //     }
    // }

// export async function getServerSideProps({params, req, data}) {

//     const axios = require('axios');
//     axios.get(`https://jokerlivestream-front-3uc7j.ondigitalocean.app/_next/data/SihDalePLEQfn8nkPKtov/en/red-arrows-vs-buildcon-live-stream/adb604d6.json?gameMatchName=red-arrows-vs-buildcon-live-stream&leagueNameMatchId=adb604d6`, {
//         params: {
//             gameMatchName: `red-arrows-vs-buildcon-live-stream`,
//             leagueNameMatchId: `adb604d6`
//         }
//     })
//         .then(res => console.log('d', data))
// console.log('data2', data);
//     return {
//         props: {
//             data: data || {},
//         },
//         //revalidate: 1,
//     }
// }