const dotenv = require('dotenv');
dotenv.config({ path : './config.env' });

const app = require('./app');



const PORT = process.env.PORT;

app.listen(PORT , ()=>{
    console.log(`[+] App runing on http://127.0.0.1:${PORT}`);
});