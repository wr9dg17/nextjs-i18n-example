import { withTranslation } from "../services/i18n";

const Home = ({ t }) => {
    return <h1>{t("home")}</h1>;
};

Home.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

export default withTranslation("common")(Home);
