const serverless = require("serverless-http");
const express = require("express");
const { handleRequest } = require("../spark/functions");

const app = express();

app.use(express.json());

app.post("/", handleRequest);

module.exports.handler = serverless(app);
