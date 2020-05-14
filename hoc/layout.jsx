import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="content">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
