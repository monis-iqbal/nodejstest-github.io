const express = require("express");

const app = express();

app.use((req,res)=>{
    res.write("Hello world!! ")
    res.end()
});

app.listen(3000);