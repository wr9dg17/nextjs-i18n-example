import { withTranslation } from "../../services/i18n";
import LanguageSwitcher from './../ui/languageSwitcher';
import ActiveLink from "../ui/activeLink";

const Header = ({ t }) => {
    return (
        <header>
            <ul>
                <li>
                    <ActiveLink href="/">
                        <a>{t("menu_home")}</a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/about">
                        <a>{t("menu_about")}</a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/contact">
                        <a>{t("menu_contact")}</a>
                    </ActiveLink>
                </li>
            </ul>

            <LanguageSwitcher />
        </header>
    );
}
 
export default withTranslation("menu")(Header);