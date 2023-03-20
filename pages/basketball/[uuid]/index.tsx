import {useRouter} from "next/router";
import React from "react";
import {GetServerSideProps} from "next";

export default function Basketball({data}) {
    console.log('j',data)
    const {query} = useRouter()

    console.log(query)
    console.log('j',data)


    return (
        <>
            <p className={'text-white'}>UUid - {query.uuid}</p>

            <br/>
            {data.map((event) => (
                <div className={'text-center fw-bolder text-white container'} key={event.uuid}>
                    <h5>{event.league_name}</h5>
                    <br/>
                    <div className="row">
                        <div className="col">
                            {/*<img*/}
                            {/*    src={`https://jokerlivestream-admin-7x4sa.ondigitalocean.app/${event.participant_1_logo}`}*/}
                            {/*    width={30} height={30}/>*/}
                            {event.participant_1_name}
                        </div>
                        <br/>
                        <div  className="col">
                            <button type="button" className="btn btn-light">{new Intl.DateTimeFormat('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: false,
                            }).format(event.start_time)}</button>
                        </div>

                        <div className="col">
                            {/*<img*/}
                            {/*    src={`https://jokerlivestream-admin-7x4sa.ondigitalocean.app/${event.participant_2_logo}`}*/}
                            {/*    width={30} height={30}/>*/}
                            {event.participant_2_name}
                        </div>
                    </div>
                    <br/>

                    <div className={'text-center'}> {new Intl.DateTimeFormat('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    }).format(event.start_time)}
                    </div>
                </div>



            ))}

        </>
    )}

export const getServerSideProps: GetServerSideProps= async ({params, req}) => {
    const response = await fetch(`http://localhost:3004/collection/?uuid=${params.uuid}`)
    const data = await response.json()
    return {
        props: {data},
    }
}