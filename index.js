import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res)=>{
    return res.json({
        Message:"Hello I'M CALLING FROM SERVER."
    })
})

app.listen(PORT, ()=>{
    console.log("Server is up and runing on PORT 8000");
})