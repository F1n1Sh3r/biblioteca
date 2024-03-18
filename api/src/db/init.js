"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var models_1 = require("./models");
var isDev = process.env.NODE_ENV === 'development';
var isTest = process.env.NODE_ENV !== 'test';
var dbInit = function () { return Promise.all([
    models_1.Livros.sync({ alter: isDev || isTest })
]); };
exports.default = dbInit;
