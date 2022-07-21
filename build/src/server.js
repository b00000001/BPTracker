"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./controllers/index"));
var express_handlebars_1 = require("express-handlebars");
var PORT = process.env.port || 3000;
var app = (0, express_1.default)();
app.use('/', index_1.default);
app.engine('handlebars', (0, express_handlebars_1.engine)());
app.set('view engine', 'handlebars');
app.set('views', path_1.default.join(__dirname, '../../src/views/'));
app.listen(PORT, function () {
    console.log("Server running on http://localhost:" + PORT);
});
