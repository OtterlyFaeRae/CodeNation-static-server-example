const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.listen(5000, ()=>{
    console.log('Listening on port 5000 now, chief.')
});
