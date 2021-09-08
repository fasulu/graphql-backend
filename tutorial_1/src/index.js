import { error, success } from 'consola';       // will show clear messages in console

import express from 'express';

// initialize the express server

const app = express();
const PORT = 4000;

const startApp = () => {
    app.listen(PORT, () => success({
        badge: true,
        message: `Server started on port ${PORT}`,
    }));
}

startApp();
