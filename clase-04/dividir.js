function dividir(a, b) {
  if (b == 0) {
    return "no se puede dividir por 0";
  }
  return a / b;
}

module.exports = dividir;
