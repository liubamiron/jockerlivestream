import {useRouter} from "next/router";
import {GetServerSideProps} from "next";




export default function Football({football}) {
    const {query} = useRouter()
    // console.log(router)

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
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const football = await response.json()
    return {
        props: {football},
    }
}

// export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
//     const [metaTagsRes, responseRes, allLeaguesRes] = await Promise.allSettled([
//         metaRepository.fetchMetaByOgUrl(`${params?.gameMatchName}`),
//         eventRepository.eventsWithPagination({
//             sport_name: `${params?.gameMatchName}`.replace(/-/g, "_"),
//             page: 1,
//             items_per_page: 20
//         }),
//         eventRepository.fetchLeagues(`${params?.gameMatchName}`.replace(/-/g, "_")),
//     ]);
//     const metaTags = metaTagsRes.status === "fulfilled" && metaTagsRes.value?.[0];
//     if (metaTags) {
//         const response = responseRes.status === "fulfilled" ? responseRes.value : {} as { pagination: IPagination, collection: IEvent[] };
//         return {
//             props: {
//                 allLeagues: [{
//                     league_name: "All competitions", league_logo: "", league_uuid: "",
//                 }, ...(allLeaguesRes.status === "fulfilled" ? allLeaguesRes.value || [] : [])],
//                 current: response?.pagination?.current_page || 1,
//                 pagination: response?.pagination || null,
//                 events: response?.collection || [],
//                 metaTags: metaTags || null,
//                 breadCrumbsSchema: JSON.stringify({
//                     "@context": "https://schema.org",
//                     "@type": "BreadcrumbList",
//                     itemListElement:
//                         [
//                             {
//                                 "@type": "ListItem",
//                                 position: 1,
//                                 item:
//                                     {
//                                         "@id": `${req.headers.host}/index.html`,
//                                         name: "Live Streams",
//                                     },
//                             },
//                         ],
//                 }),
//             },
//         };
//     }
//}