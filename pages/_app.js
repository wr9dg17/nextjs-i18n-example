import App from "next/app";
import { appWithTranslation } from "../services/i18n";
import Layout from "../hoc/layout";
import "../public/scss/style.scss";

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp);
