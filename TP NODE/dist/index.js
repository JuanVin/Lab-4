"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000;
const routes_1 = __importDefault(require("./routes"));
app.use(express.json());
//transformar los datos de un formulario html a objetos json 
app.use(express.urlencoded({ extended: false }));
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
