import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header children={undefined} keywords={'score'} data={undefined} />
            <main>{children}</main>
            <Footer />
        </>
    )
}