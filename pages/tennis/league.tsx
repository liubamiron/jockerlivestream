import {GetServerSideProps} from "next";

const League = ({data}) => {
    console.log('f', data)
    return (
        <>
            <p className={'text-white text-center'}>League Name</p>
        </>
    )
}
export default League;

export const getServerSideProps: GetServerSideProps = async ({params, req}) => {
    const response = await fetch(`http://localhost:3004/collection/`)
    const data = await response.json()
    return {
        props: {data},
    }
}