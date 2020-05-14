import { langs } from "../../config/langs";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
    const router = useRouter();

    const insertLangToUrl = (currentUrl, lang) => {
        let paths = currentUrl.split("/").filter((e) => e !== "");

        if (lang === "az") {
            lang = "";
        }

        if (paths.length > 0) {
            if (paths[0].length === 2) {
                paths[0] = lang;
            } else {
                paths.unshift(lang);
            }
        } else {
            paths[0] = lang;
        }

        return paths.join("/").replace(/^\/|\/$/g, "");
    };

    return (
        <ul className="langs">
            {Object.values(langs).map((lang) => {
                let newUrl = insertLangToUrl(router.pathname, lang);

                return (
                    <li key={lang}>
                        <a href={`/${newUrl}`}>{lang.toUpperCase()}</a>
                    </li>
                );
            })}
        </ul>
    );
};

export default LanguageSwitcher;
