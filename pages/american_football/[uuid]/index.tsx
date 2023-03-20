import {useRouter} from "next/router";

export default function AmericanFootball({football}) {
    console.log('j',football)
    const {query} = useRouter()

    console.log(query)
    console.log('j',football)


    return (
        <div className='container text-white'>
            ggg
            <h3>query - {query.uuid}</h3>

        </div>
    )}