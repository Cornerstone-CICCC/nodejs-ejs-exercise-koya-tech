"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This is your server file :)
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
// Serve static files from the public directory (located in dist)
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist/public')));
// Import and mount routes
const home_1 = __importDefault(require("./routes/home"));
const about_1 = __importDefault(require("./routes/about"));
const contact_1 = __importDefault(require("./routes/contact"));
app.use('/', home_1.default);
app.use('/about', about_1.default);
app.use('/contact', contact_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
