import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, data, pages }) {
    return (
        <>
            {/*<Header children={undefined} keywords={'score'} data={data} pages={undefined} />*/}
            <Header children={undefined} keywords={undefined} data={undefined} pages={undefined}/>
            <main>{children}</main>

            <Footer />
        </>
    )
}