import express, { json, urlencoded } from 'express'
const app = express();

//FOR JSON 
app.use(json());

//FOR URL
app.use(urlencoded());


export default app;