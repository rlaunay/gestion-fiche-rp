const app = require('./app');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname + '/../config.env')});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
