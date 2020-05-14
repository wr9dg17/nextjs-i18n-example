import { withTranslation } from "../../services/i18n";

const About = ({ t }) => {
    return <h1>{t("about")}</h1>;
};

About.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

export default withTranslation("common")(About);
