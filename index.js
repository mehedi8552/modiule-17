const app = require('./app');
const dotenv = require('dotenv');



dotenv.config({ path: 'config.env' });

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
