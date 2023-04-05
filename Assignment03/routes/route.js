import express from 'express';
import { add,sub,multi,division,areaOfCircle,modulo,feetInchesToCenti } from '../controllers/controller.js';

const router = express.Router();

router.get('/add/:num1/:num2', (req, res) => {
  add(req, res);
});

router.get('/sub/:num1/:num2', (req, res) => {
  sub(req, res);
});

router.get('/multi/:num1/:num2', (req, res) => {
  multi(req, res);
});

router.get('/division/:num1/:num2', (req, res) => {
  division(req, res);
});

router.get('/modulo/:num1/:num2', (req, res) => {
  modulo(req, res);
})

router.get('/areaOfCircle/:num', (req, res) => {
  areaOfCircle(req, res);
});

router.get('/feetIntoCenti/:feet/:inches', (req, res) => {
  feetInchesToCenti(req, res);
})

export default router;