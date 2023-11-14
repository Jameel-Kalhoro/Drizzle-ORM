const express = require('express');
const businessRoutes = require('./routes/businessRoutes');
//const Connect = require('./database/client');
const app = express();
const PORT = 3000;


app.use(express.json());



app.use('/business', businessRoutes);

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));