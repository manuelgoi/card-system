export const rnd = (max: number) => Math.floor(Math.random() * max) + 1;
export function roundDecimal(decimal: number) {
  const integer = Math.floor(decimal);
  const decimals = decimal % 1;

  if (decimals >= 0.5) {
    return integer + 1;
  } else {
    return integer;
  }
}

export function getRandomBgColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
  }
  return color;
}
export function esPar(numero: number) {
  return numero % 2 === 0;
}
export function esPrimo(numero: number) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}
