
import {useRouter} from 'next/router';
import React from 'react';
import Link from "next/link";
import {GetServerSideProps} from "next";

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

type props = {
    props: any;
    id: any;
    uuid: string;
    name: string;
    data: any;
    pagination: any;
    collections: any;
    active: boolean;
    start_date: number;
    league_uuid: string;

};





const Tennis = ({data}) => {
    // console.log('data', data.pagination.current_page)
    //console.log('data', data)
    console.log('f', data)

    const linkClick = () => {
        router.push('/live')
    }
    const router = useRouter()

    return (
        <div className="container">
            <button onClick={linkClick} type="button" className="btn btn-dark live_streams_button">LIVE STREAMS
            </button>
            <button type="button" className="btn btn-dark live_streams_button"
                    onClick={() => router.push('/football')}>FOOTBALL
            </button>


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
                    <Link href={`tennis/${collection.league_url}`}><a>{collection.name} - {collection.league_url}</a></Link>
                    </div>
                    <div className={'col text-capitalize'}>
                        <Link href={`/tennis/${collection.uuid}`}><a>
                         {collection.participant_1_name}  -
                         {collection.participant_2_name}
                        </a>
                        </Link>
                    </div>
                    <div className={'col text-end'}><button type="button" className="btn btn-info">Bet</button> <button type="button" className="btn btn-info">Watch</button></div>

               </div>
            )}
        </div>
    )
}
export default Tennis;

// export const getStaticProps = async () => {
//     const response = await fetch('http://localhost:3004/collection');
//     const data = await response.json();
//     //данная функция возвращяет пропсы для компонента
//
//     if (!data) {
//         return {
//             notFound:true,
//         }
//     }
//     return {
//         props: {
//             data: data || {},
//         },
//     }
// };

export const getServerSideProps: GetServerSideProps = async ({params, req}) => {
    const response = await fetch(`http://localhost:3004/collection/`)
    const data = await response.json()
    return {
        props: {data},
    }
}


