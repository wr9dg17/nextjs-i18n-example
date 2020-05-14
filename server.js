const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;

const nextI18Next = require("./services/i18n");

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    await nextI18Next.initPromise;
    server.use(nextI18NextMiddleware(nextI18Next));

    server.get("*", (req, res) => handle(req, res));

    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
