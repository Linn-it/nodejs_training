"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    const { message, data } = err;
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ message, data, status: 0 });
};
