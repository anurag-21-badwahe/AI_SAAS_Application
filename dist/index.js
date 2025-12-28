"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const serverClient_1 = require("./serverClient");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware
app.use((0, cors_1.default)({ origin: "*" })); // origin = * means it can take request from anywhere
app.get("/", (req, res) => {
    res.json({
        message: "AI Writing Assistant Server is running",
        apiKey: serverClient_1.apiKey,
        // activeAgents: aiAgentCache.size,
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is Runnning at http://localhost : ${port}`);
});
//# sourceMappingURL=index.js.map