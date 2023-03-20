import router, {useRouter} from "next/router";
import {GetServerSideProps} from "next";




export default function Football({football}) {
    const {query} = useRouter()
    console.log(router)
    console.log('f', football)

    return (
        <div className='container'>
            <div className={"text-white"}>
                <h3>Football team with id {query.id}</h3>
                <p>{football.name}</p>

            </div>
        </div>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.uuid}`)
    const football = await response.json()
    return {
        props: {football},
    }
}

