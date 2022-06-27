"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const port = process.env.PORT || 5000;
jsonwebtoken_1.default.sign({ foo: 'bar' }, "privateKey", { algorithm: 'RS256' }, function (err, token) {
    console.log(token);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.post("/login", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    if (name === "Moses" && password === "snowden") {
        res.send(`Welcome ${name}`);
        const token = jsonwebtoken_1.default.sign({ name: "name", password: "password" }, "secretkey", { expiresIn: "1h" });
        res.cookie("token", token, {
            httpOnly: true
        });
    }
});
app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});
