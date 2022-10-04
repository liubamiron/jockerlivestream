
import 'bootstrap/dist/css/bootstrap.min.css';

// import A from '../components/A';

// type Keywords ={
//     keywords:string;
// }
//
// interface keywords {
//     keywords:string
// }


const Index = () => {
    return (
            <main className="container">
                <button type="button" className="btn btn-dark live_streams_button">LIVE STREAMS</button>
                <button type="button" className="btn btn-dark live_streams_button">FOOTBALL</button>

                <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                    <img className="me-3" src="#" alt="" width="48"
                         height="38"/>
                    <div className="lh-1">
                        <h1 className="h6 mb-0 text-white lh-1">Bootstrap</h1>
                        {/*<small>Since 2011</small>*/}
                    </div>
                </div>
                <div className="my-3 p-3 rounded shadow-sm">

                    <div className="d-flex text-white pt-3">
                        gggg
                    </div>
                </div>
            </main>
    )
}

export default Index;

