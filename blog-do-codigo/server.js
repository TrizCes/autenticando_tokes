require('dotenv').config();

const app = require('./app');
const port = 3000;
const db = require('./database');
require('./redis/black-list.js');

const routes = require('./rotas');
routes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
