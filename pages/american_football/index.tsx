
import {useRouter} from 'next/router'
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {text} from "stream/consumers";


type collection = {
    id: any;
    uuid: number;
    name: string;
    collections: string;
    pagination: any;
    participant_1: any;
    participant_1_name: any;
    participant_1_logo: any;
    start_time: any;
    participant_2_name: any;
    active: boolean;
    start_date: number;
    participant_2_logo: any;
    event_url: string;
    match_uuid: string;
    league_uuid: string;
    league_name: string;
    league_url: string;
};
type props = {
    props: any;
    id: any;
    uuid: number;
    name: string;
    data: any;
    pagination: any;
    collections: any;
    active: boolean;
    start_date: number;

};

type data = {
    uuid: number;
    name: string;
    collection: string;
    pagination: any;
    id: any;
    current_page: number;
    participant_1: any;
    active: boolean;
    league_url: string;
    start_date: number;
};
// type formatDate = {
//     formatDate: any;
//     timestamp: number;
// }
// function formatDate(timestamp){
//     new Intl.DateTimeFormat('en-US').format(timestamp);
// }

const AmericanFootball = ({data}) => {
    // console.log('data', data.pagination.current_page)
     console.log('data', data)

    const linkClick = () => {
        router.push('/live')
    }
    const router = useRouter()

    // const formatDate = () => {
    //     new Intl.DateTimeFormat('en-US').format(timestamp)
    // }
    // let timestamp: any;
    // timestamp = {};

    // formatDate(timestamp: any) {
    //     return new Intl.DateTimeFormat('en-US').format(timestamp);
    // }

    return (
        <div className="container">
         {/*<div className="container d-flex align-items-center p-3 my-3 text-white bg-darkBlueOpacity rounded shadow-sm">*/}
            <button onClick={linkClick} type="button" className="btn btn-dark live_streams_button">LIVE STREAMS
            </button>
            <button type="button" className="btn btn-dark live_streams_button"
                    onClick={() => router.push('/football')}>FOOTBALL
            </button>


            <h3 className={'text-white'}>Live stream</h3>

            {data.collection.map(collection =>
               <div className={'text-white row bg-darkBlueOpacity rounded-pill nav-link'} key={collection.uuid}>

                    <div className={'col-lg-2 col-2'}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96317 0.562918L11.0193 5.99355H15.0223C15.4361 5.97673 15.8159 6.22172 15.9713 6.60569C16.1266 6.98967 16.0239 7.42983 15.7148 7.70547L12.2456 10.1272L14.171 14.5491C14.3433 14.9643 14.2319 15.443 13.8941 15.7395C13.5563 16.036 13.0671 16.0842 12.6779 15.8594L8.02515 13.2429L3.36708 15.8594C2.97785 16.0842 2.48868 16.036 2.15085 15.7395C1.81303 15.443 1.70167 14.9643 1.87399 14.5491L3.7994 10.1272L0.330193 7.70547C0.0202884 7.43109 -0.0836573 6.9915 0.0705329 6.60737C0.224723 6.22324 0.603753 5.97752 1.01736 5.99355H5.02029L7.0818 0.562918C7.2677 0.2163 7.62916 0 8.02248 0C8.41581 0 8.77727 0.2163 8.96317 0.562918Z" fill="#229665"/>
                    </svg> {new Intl.DateTimeFormat('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                    }).format(collection.start_time)}</div>
                    <div className={'col-lg-3 text-center text-capitalize'} key={collection.league_uuid}>
                    <Link href={`american_football/${collection.league_uuid}`}>
                        <a>{collection.name} - {collection.league_url}</a></Link>
                        <Link href='#'>
                            <a>{collection.name} - {collection.league_url}</a></Link>
                    </div>
                    <div className={'col-lg-5 text-capitalize'}>
                        <Link href={`american_football/${collection.match_uuid}/gameMatchName/${collection.event_url}`}><a>
                        <img src={`https://jokerlivestream-admin-7x4sa.ondigitalocean.app/${collection.participant_1_logo}`}
                             width={30} height={30}/> {collection.participant_1_name}  -
                        <img src={`https://jokerlivestream-admin-7x4sa.ondigitalocean.app/${collection.participant_2_logo}`}
                             width={30} height={30}/>  {collection.participant_2_name}</a></Link>
                    </div>
                    <div className={'col-lg-2 text-end'}>
                        <button type="button" className="btn btn-info">Bet</button> <button type="button" className="btn btn-info">Watch</button></div>
                   <div>
                   </div>

               </div>
            )}
            <br></br>
            <h5 className={'text-secondary text-center fw-bolder'}>Football Live Stream</h5>
            <p style={{textAlign:'justify'}} className={'text-secondary'}>
                Football (or soccer in the US) is not just one of the most popular sports globally. It is the most popular sport. In 2018, almost 3.3 billion viewers tuned in to watch FIFA World Cup, whereas the UEFA Champions League final being the most-watched annual sports event in the world, with 380 million people watching it live in 2018. To put it into perspective, the Super Bowl, which is the highest sports event in America, has more than 200 million fewer viewers, with 102 million people tuning in for the 2020 edition. These stats prove that in terms of popularity, no other sport comes close to football. Sure, it might not be as beloved as the NFL in the USA, but it's the unquestionable emperor of team sports in the rest of the world. Especially in Europe, South America, or Africa. And frankly, there's no other sport that comes with such a level of emotions and excitement involved in each game. What's more, since it's so popular, TV stations battle against themselves for the broadcast rights. On the one hand, it makes it much easier to find the broadcast. On the other, it increases the costs of sports packages and live streaming services. And considering how annoying and time consuming looking for a reliable live stream can be, it doesn't leave you with a window of opportunity. But what if we told you there's a way to watch any football game (and much more) you want at a relatively low price? All you need to do is set up an account here, on Joker Live Stream. Our site covers every football league and tournament, allowing you to switch across different competitions. But Joker is much more than just football. On the website, you'll find any sport you like, as we cover everything from football to Formula One.
            </p>
            <br></br>
            <h5 className={'text-secondary text-center fw-bolder'}>How to Live Stream Football</h5>
            <p style={{textAlign:'justify'}} className={'text-secondary'}>
                Thanks to Joker Live Stream, streaming football has never been more straightforward. All you need to do is create an account and pick the right subscription. It will take you less than a minute and give you access to any sports competition you can think of Once you're all set up, it's time to pick the right competition on the toolbar. After you select the competition that interests you, you'll find the list of available games. Click on the match you wish to watch, choose the streaming channel, and you're good to go. All our streams are reliable and high-quality, allowing you to watch sports without any disruptions. You can even share your thoughts on the game with other users who've chosen our website as their source of live streaming. And don't forget to check out our app.
                It's compatible with every system, including gaming consoles. Downloading it will allow you to live stream football matches wherever and whenever you want.
            </p>
            <br></br>
            <h5 className={'text-secondary text-center fw-bolder'}>Competitions to Watch</h5>
            <p style={{textAlign:'justify'}} className={'text-secondary text-align-justify'}>
                One sure thing about football is that fans can't complain about the variety of competition they can watch. Each country has its leagues and cups, and there are also plenty of international and continental tournaments along the way. There are some competitions, though, that every fan of the sport loves.
                You can call them the best of the best, as they're the most fierce, exciting, and intense football competitions in the world.
            </p>
            <br></br>
            <h5 className={'text-secondary text-center fw-bolder'}>Premier League</h5>
            <p style={{textAlign:'justify'}} className={'text-secondary d-flex justify-content-evenly'}>
                English Premier League is the most famous football league in the world. Each season, millions of fans tune in every weekend to watch live some of the world's best teams, including Liverpool, Manchester United, Chelsea, or Arsenal. The EPL is known for its high intensity, excitement, and probably the most loyal fanbase worldwide.
                Aside from the best, it's also the wealthiest league globally, with a $6.5 billion revenue, the most among the top five football leagues.
            </p>
            <br></br>
            <h5 className={'text-secondary text-center fw-bolder'}>La Liga</h5>
            <p style={{textAlign:'justify'}} className={'text-secondary'}>
                Spanish La Liga is the second world's league in terms of popularity. It may not include as many great teams as the EPL, but it has something that the English league doesn't. The battle between the world's two most famous clubs - FC Barcelona and Real Madrid. Each year, millions of football fans worldwide tune in to watch Barca and Madrid game live.
                El Classico (the name of the rivalry) is considered the world's most famous football rivalry, and when you look at the emotions involved, it's hard not to agree with this statement.
            </p>
            <br></br>
            <h5 className={'text-secondary text-center fw-bolder'}>Bundesliga</h5>
            <p style={{textAlign:'justify'}} className={'text-secondary'}>
                German Bundesliga might not be as popular as the Premier League or La Liga. It's also less competitive, with Bayern Munich dominating the league in the past few seasons. Nevertheless, the Bundesliga is improving much faster than the other top five leagues, and each year the quality of football is becoming higher. The most significant advantage of the German league is the massive number of young and talented players. Each club has a fantastic academy, and their scouts are second to none.
                The names of Robert Lewandowski, Erik Haaland, Timo Werner, Joshua Kimmich, or Kevin Haavertz are the best proof for that.
            </p>
            <br></br>
            <h5 className={'text-secondary text-center fw-bolder'}>UEFA Champions League</h5>
            <p style={{textAlign:'justify'}} className={'text-secondary'}>
                Creme de la creme of European football, UEFA Champions League (as the name suggests) involves only Europe's best teams. Every football player dreams of walking out on the pitch with the competition's anthem streaming through the stadium's speakers. Some even claim that they prefer winning the CL to raising the World Cup trophy. The Champions League is played like a classic tournament. Thirty-two teams are divided into eight groups, with four teams per group competing against each other during the first stage. The top two of each group will proceed to the knockout stage. Teams meet each other twice, home and away, throughout the whole tournament.
                The only exception is the final, which takes place on a neutral ground.
            </p>

        </div>

    )
};
export default AmericanFootball;

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://jokerlivestream-dev-api-bg7bk.ondigitalocean.app/events/filter`)
//     const data = await res.json()
//      console.log('h', data)
//      return { props: { data } }
// }


export async function getServerSideProps() {
    const {data} = await axios.post(`https://jokerlivestream-dev-api-bg7bk.ondigitalocean.app/events/filter`)

    return {
        props: {
            data: data || {},
        },

    }
}



// export const getServerSideProps = async () => {
//     const response = await fetch
//     ('http://localhost:3000/collection');
//     const data = await response.json();
//     console.log('data', data);
//     if (!data) {
//         return {
//             notFound:true,
//         }
//     }
//      return {
//         props: {data: data},
//  }
// };

