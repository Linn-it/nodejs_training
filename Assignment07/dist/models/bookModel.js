"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    author: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('book', bookSchema);
