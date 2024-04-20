import './app.js';
import mongoose from "mongoose";
const PORT=3000;
//database connection 
(async ()=>{
    try{
        // database connected successfully
        await mongoose.connect("dbstring");
        // checking app working properly if error found 
        app.on("error",(err)=>{
            console.error("Error",err);
            throw err;
        })
        // listening the app;
        app.listen(PORT,()=>{
            console.log("The app is running at PORT ",PORT);
        })
    }catch(error){
        console.error("Error",err);
        throw err;
    }
})()
/*app.listen(PORT,()=>{
    console.log(`The app is running at Port ${PORT}`);
})*/
