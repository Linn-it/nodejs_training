"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const router = express_1.default.Router();
router.route('/books')
    .get(bookController_1.getUser)
    .post(bookController_1.createUser);
router.get('/books/:id', bookController_1.findUser);
router.put('/books/:id', bookController_1.updateUser);
router.delete('/books/:id', bookController_1.deleteUser);
exports.default = router;
