import express from "express";
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello world")
});
app.get('/twitter',(req,res)=>{
    res.send("you have successfully visited twitter")
})
export default app;