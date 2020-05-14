import { withTranslation } from "../../services/i18n";

const Contact = ({ t }) => {
    return <h1>{t("contact")}</h1>;
};

Contact.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

export default withTranslation("common")(Contact);
