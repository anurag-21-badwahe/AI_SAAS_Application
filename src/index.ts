import cors from "cors";
import "dotenv/config";
import express from "express";
import { messageSetPagination } from "stream-chat/dist/types/utils";
import { apiKey, serverClient } from "./serverClient";


const app = express();
app.use(express.json()); // middleware

app.use(cors({origin : "*"}));  // origin = * means it can take request from anywhere

app.get("/",(req,res)=>{

    res.json({
         message: "AI Writing Assistant Server is running",
        apiKey: apiKey,
        // activeAgents: aiAgentCache.size,
    });
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is Runnning at http://localhost : ${port}`);
})
