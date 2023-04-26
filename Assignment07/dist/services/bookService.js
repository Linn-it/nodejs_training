"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.findUserService = exports.createUserService = exports.getUserService = void 0;
const bookModel_1 = __importDefault(require("../models/bookModel"));
const getUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield bookModel_1.default.find();
        res.status(200).json({ msg: 'All Books', data: books, status: 1 });
    }
    catch (err) {
        res.send('An error occured');
    }
});
exports.getUserService = getUserService;
const createUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield new bookModel_1.default(req.body).save();
        res.status(201).json({ msg: 'Create Book Successfully', data: result, status: 1 });
    }
    catch (err) {
        res.send('An error occured');
    }
});
exports.createUserService = createUserService;
const findUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookModel_1.default.findById(req.params.id);
        if (!book) {
            const error = Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        res.json({ data: book, status: 1 });
    }
    catch (err) {
        res.send("An error occured");
    }
});
exports.findUserService = findUserService;
const updateUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookModel_1.default.findById(req.params.id);
        if (!book) {
            const error = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        yield bookModel_1.default.findByIdAndUpdate(book._id, req.body);
        const data = yield bookModel_1.default.findById(req.params.id);
        res.status(200).json({ msg: "Update Book Successfully", data, status: 1 });
    }
    catch (err) {
        res.send("An error occured");
    }
});
exports.updateUserService = updateUserService;
const deleteUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookModel_1.default.findById(req.params.id);
        if (!book) {
            const error = new Error("Not Found!");
            error.statusCode = 404;
            throw error;
        }
        yield bookModel_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: 'Delete Book Successfully', status: 1 });
    }
    catch (err) {
        res.send('An error occured');
    }
});
exports.deleteUserService = deleteUserService;
