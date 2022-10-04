import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import {useRouter} from "next/router";

export default function American_football() {
    const router = useRouter()
    console.log(router)


    return <>

        <main className="container">
            <button type="button" className="btn btn-dark live_streams_button">LIVE STREAMS</button>
            <button type="button" className="btn btn-dark live_streams_button">FOOTBALL</button>

            <div className="d-flex align-items-center p-3 my-3 text-white bg-darkBlueOpacity rounded shadow-sm">
                <p>Hello {router.query.uuid}</p>
                <p>{router.query.name} </p>
            </div>
        </main>

    </>
}