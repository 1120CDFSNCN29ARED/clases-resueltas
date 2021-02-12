const autos = require("./autos");
const concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    let autoBuscado = this.autos.find(function (auto) {
      return patente == auto.patente;
    });

    return autoBuscado;
  },
  venderAuto: function (patente) {
    this.buscarAuto(patente).vendido = true;
  },
};

buscarAuto;
