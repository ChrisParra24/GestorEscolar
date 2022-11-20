const dotenv = require('dotenv');
dotenv.config({ path : './config.env' });

const app = require('./app');

const PORT = process.env.PORT;

app.listen(PORT , ()=>{
    console.log(`App running on port ${PORT}`);
    // console.log(`Pass de BD: ${process.env.DATABASE_PASSWORD.concat('#')}`);
});