import { addService,subService,multiService,divisionService,areaOfCircleService,moduloService,feetInchesToCentiServices } from "../services/services.js";

export const add = (req, res) => {
  addService(req, res);
};

export const sub = (req, res) => {
  subService(req, res);
};

export const multi = (req, res) => {
  multiService(req, res);
};

export const division = (req, res) => {
  divisionService(req, res);
};

export const modulo = (req, res) => {
  moduloService(req, res);
};

export const areaOfCircle = (req, res) => {
  areaOfCircleService(req, res);
};

export const feetInchesToCenti = (req, res) => {
  feetInchesToCentiServices(req, res);
}

