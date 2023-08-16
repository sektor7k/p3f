import serverless from "serverless-http";
import express from "express";
import { handleRequest } from "../spark/functions";


const app = express();

app.use(express.json());

app.post("/", handleRequest);

module.exports.handler = serverless(app);
