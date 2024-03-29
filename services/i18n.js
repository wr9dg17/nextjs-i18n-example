const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
    defaultLanguage: "az",
    otherLanguages: ["en", "ru"],
    localeSubpaths: {
        ru: "ru",
        en: "en",
    },
    browserLanguageDetection: false,
    serverLanguageDetection: false,
});
