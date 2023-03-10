console.group("Cuadrado");
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

const calcularCuadrado = (lado) => {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
};

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

console.groupEnd("Cuadrado");

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

const calcularTriangulo = (lado1, lado2, base, altura) => {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
};

const calcularAlturaTriangulo = (lado1, lado2, base) => {
  if (lado1 !== lado2) return "Los lados deben de ser iguales";
  if (base === lado1) return "La base no puede ser igual a los otros lados";
  return {
    altura: Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4),
  };
};

const calcularAlturaTrianguloEsc = (lado1, lado2, lado3) => {
  if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1) return false;
  const s = (lado1 + lado2 + lado3) / 2;
  return (2 / lado1) * Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
};

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd("Triángulo");

console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferenciaCirculo = diametroCirculo * PI;
const areaCirculo = radioCirculo ** 2 * PI;

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);

  return {
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI,
  };
}

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferenciaCirculo,
  areaCirculo,
});
console.groupEnd("Circulo");
