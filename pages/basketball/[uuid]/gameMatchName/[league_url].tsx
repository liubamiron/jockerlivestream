import router, {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import React from "react";
import Link from "next/link";

export default function Basketball({data}) {
    console.log('j',data)
    // console.log(router)
    const {query} = useRouter()

    console.log(query)
    console.log('j',data)
  

    return (
        <>
            <div className='container'>

            {/*<h3>query - {query.uuid}</h3>*/}
            {/*<h3>league_url - {query.league_url}</h3>*/}
            <h3 className={'text-white'}>Live stream</h3>

            {data.map(collection =>
                <div className={'text-white row bg-darkBlueOpacity rounded-pill border border-secondary border-3'} key={collection.uuid}>

                    <div className={'col text-start'}><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.96317 0.562918L11.0193 5.99355H15.0223C15.4361 5.97673 15.8159 6.22172 15.9713 6.60569C16.1266 6.98967 16.0239 7.42983 15.7148 7.70547L12.2456 10.1272L14.171 14.5491C14.3433 14.9643 14.2319 15.443 13.8941 15.7395C13.5563 16.036 13.0671 16.0842 12.6779 15.8594L8.02515 13.2429L3.36708 15.8594C2.97785 16.0842 2.48868 16.036 2.15085 15.7395C1.81303 15.443 1.70167 14.9643 1.87399 14.5491L3.7994 10.1272L0.330193 7.70547C0.0202884 7.43109 -0.0836573 6.9915 0.0705329 6.60737C0.224723 6.22324 0.603753 5.97752 1.01736 5.99355H5.02029L7.0818 0.562918C7.2677 0.2163 7.62916 0 8.02248 0C8.41581 0 8.77727 0.2163 8.96317 0.562918Z" fill="#229665"/>
                    </svg> {new Intl.DateTimeFormat('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    }).format(collection.start_time)}</div>
                    <div className={'col text-center text-capitalize'}>
                        <Link href={`/basketball/${collection.uuid}/gameMatchName/${collection.league_url}`}><a>{collection.name} - {collection.league_url}</a></Link>
                        {/*{collection.name} - {collection.league_url}*/}

                    </div>
                    <div className={'col text-capitalize'}>
                        <Link href={`/basketball/${collection.uuid}`}><a>
                            {collection.participant_1_name}  -
                            {collection.participant_2_name}
                        </a>
                        </Link>
                    </div>
                    <div className={'col text-end'}><button type="button" className="btn btn-info">Bet</button> <button type="button" className="btn btn-info">Watch</button></div>

                </div>
            )}
            </div>
        </>
)
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
    const response = await fetch(`http://localhost:3004/collection/?league_url=${params.league_url}`)
    const data = await response.json()
    return {
        props: {data},
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