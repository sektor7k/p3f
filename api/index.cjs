import express from "express";
import { handleRequest } from "../spark/functions";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

app.post("/", handleRequest);

module.exports.handler = serverless(app);
