import React, {Component, useEffect} from 'react'
import {useState} from "react";
import Link from "next/link";



interface footballs{
    id: number;
    name: string;
    featuredEvents: any;
    tournament:any;
    category: any;
    footballs: any;
}
interface Teams{
    id: number;
    name: string;
}

const Football = ({footballs}) => {
    function handleClick() {
        console.log("increment like count")
    }

    return (
            <div className="container">
                <button type="button" className="btn btn-dark live_streams_button" onClick={handleClick}>Like</button>
            <h1 className={'text-white'}>List</h1>

                {footballs.map(team =>
                <div className={'text-white row'}>
                    <Link href={`/football/${team.id}`}>
                    <a>{team.name}</a>
                    </Link>
                    </div>
                )}

            </div>
    )
}

export default Football;




export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
 //данная функция возвращяет пропсы для компонента

    if (!data) {
        return {
            notFound:true,
        }
    }
    return {
        props: {footballs: data},
    }
};

// export async function getStaticProps(context) {
//     const response = await fetch('https://api.sofascore.com/api/v1/sport/football/scheduled-events/2022-09-15')
//     const footballs = await response.json()
//     return {
//         props: {footballs}, // will be passed to the page component as props
//     }
// }

//
// export default class football extends Component {
//   render() {
//
//     const Teams = ()=> {
//       const [teams, setTeams] = useState([
//         {id:1, name:"Real Madrid"},
//         {id:2, name:"Lokomotiv"}
//       ])
//     }
//
//     return (
//       <div>
//         <h1>Football teams list</h1>
//         <ul>
//             {teams.map(team =>
//             <li>
//                 {team.name}
//             </li>
//             )}
//         </ul>
//       </div>
//     )
//   }
// }
