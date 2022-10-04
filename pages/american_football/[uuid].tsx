
import React from "react";
import {useRouter} from "next/router";
import axios from "axios";


export default function American_football({data}) {
    const {query} = useRouter()
    const router = useRouter()
    console.log(router)

    const linkBtn = () => {router.push('/football')}

    return <>

        <main className="container">
            <button type="button" className="btn btn-dark live_streams_button"
                    onClick={() => router.push('/live')}
            >LIVE STREAMS</button>
            <button type="button" className="btn btn-dark live_streams_button" onClick={linkBtn}>FOOTBALL</button>

            {/*<div className="d-flex align-items-center p-3 my-3 text-white bg-darkBlueOpacity rounded shadow-sm">*/}
            {/*    <p>Hello {router.query.uuid}</p>*/}
            {/*    <p>{query.uuid}</p>*/}
            {/*    <p>{data.match.name}</p>*/}
            {/*    <p>{data.match.participant_1_name}</p>*/}
            {/*    <p>{data.match.participant_2_name}</p>*/}
            {/*</div>*/}


        </main>
    </>
}

// export async function getServerSideProps({params, req}) {
//     const {data} = await axios.get(`
//     https://jokerlivestream-front-3uc7j.ondigitalocean.app/_next/
//     data/83AWzrouUABj9YW5oILQi/en/guangxi-pingguo-haliao-vs-jiangxi-beidamen-live-stream-469/673ad3d1.json${params.uuid}`)
//     const {data} = await axios.get(`https://jokerlivestream-front-3uc7j.ondigitalocean.app/_next/
//     data/83AWzrouUABj9YW5oILQi/en/guangxi-pingguo-haliao-vs-jiangxi-beidamen-live-stream-469/
//     673ad3d1.json/${params?.gameMatchName}/${params?.leagueNameMatchId}`)
//
//     return {props: {data}}
// }

