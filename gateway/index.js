const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();
const PORT = 8000;

app.use(morgan("dev"))

app.listen(PORT, () => {
  console.log(`Gateway on port ${PORT}`);
})