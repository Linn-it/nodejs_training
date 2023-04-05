export const addService = (req, res) => {
  let { num1, num2 } = req.params;
  const add = (num1, num2) => Number(num1) + Number(num2);
  res.send({ addResult: add(num1, num2) });
};

export const subService = (req, res) => {
  let { num1, num2 } = req.params;
  const sub = (num1, num2) => Number(num1) - Number(num2);
  res.send({ subResult: sub(num1, num2) });
};

export const multiService = (req, res) => {
  let { num1, num2 } = req.params;
  const multi = (num1, num2) => Number(num1) * Number(num2);
  res.send({ multiResult: multi(num1, num2) });
};

export const divisionService = (req, res) => {
  let { num1, num2 } = req.params;
  const division = (num1, num2) => Number(num1) / Number(num2);
  res.send({ divisionResult: division(num1, num2) });
};

export const moduloService = (req, res) => {
  let { num1, num2 } = req.params;
  const modulo = (num1, num2) => Number(num1) % Number(num2);
  res.send({ moduloResult: modulo(num1, num2) });
}

export const areaOfCircleService = (req, res) => {
  const pi = Math.PI.toFixed(3);
  const radius = Number(req.params.num);
  const areaOfCircle = radius => pi * radius * radius;
  res.send({ areaOfCircleResult: areaOfCircle(radius) });
};

export const feetInchesToCentiServices = (req, res) => {
  const ft = 30.48;
  const inch = 2.54;
  const { feet, inches } = req.params;
  const feetIntoCenti = (feet, inches) => (Number(feet) * ft + Number(inches) * inch)+'cm';
  res.send({ feetInchestoCentimeter: feetIntoCenti(feet, inches) });
}