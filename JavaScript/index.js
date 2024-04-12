//Simulador interactivo
//Prestamos Online

//Declaraciones de variables
let opcion = -1;
let montoSolicitado = 0;
let moneda = '';
let limite = 0;
let numeroDeCuotas = 0;
let tasaInteresAnual = 0;

//Declaraciones de funciones

//funcion para dar formato a la moneda segun sean dolares o pesos
const formatoMoneda = (moneda) => {
  if (moneda === 'dólares') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
  } else if (moneda === 'pesos') {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    });
  }
}

//funcion para establecer el monto limite de credito dependiendo en la moneda en que se solicite
const montoLimite = (moneda) => {
  if (moneda === 'dólares') {
    return limite = 10000;
  } else if (moneda === 'pesos') {
    return limite = 10000000;
  }
}

//funcion para establecer la tasa de interes anual dependiendo la moneda
const tasaAplicada = (moneda) => {
  if (moneda === 'dólares') {
    return tasaInteresAnual = 21;
  } else if (moneda === 'pesos') {
    return tasaInteresAnual = 150;
  }
}

//funcion para solicitar el monto del prestamo al ususario
const solicitarMonto = (moneda) => {
  while (montoSolicitado === 0) {
    montoSolicitado = parseInt(prompt(`Usted a seleccionado un préstamo en ${moneda}\nPor favor ingrese el monto a solicitar:`))
    if (isNaN(montoSolicitado)) {
      alert('Ingrese un monto válido');
      montoSolicitado = 0;
    }
    if (montoSolicitado > montoLimite(moneda)) {
      alert('Usted ha superado el límite máximo, por favor ingrese un monto menor');
      montoSolicitado = 0;
    }
  }
  return montoSolicitado;
};

//funcion para solicitar la cantidad de cuotas que desea el ususario para el prestamo
const solicitarCuotas = (moneda) => {
  while (numeroDeCuotas === 0) {
    numeroDeCuotas = parseInt(prompt('Usted podrá elegir entre 1 y 12 cuotas.\n' +
      `Recuerde que la tasa de interés anual en ${moneda} es del ${tasaAplicada(moneda)}%\n` +
      'Ingrese el número de cuotas deseado:\n'));
    if (isNaN(numeroDeCuotas)) {
      alert('Ingrese un valor entre 1 y 12');
      numeroDeCuotas = 0;
    } else if (!(numeroDeCuotas > 0 && numeroDeCuotas <= 12)) {
      alert('Ingrese un número de cuotas válido');
      numeroDeCuotas = 0;
    }
  }
  return numeroDeCuotas;
}

//funcion para realizar el calculo del prestamo
const calcularPrestamo = (moneda) => {
  return alert(`Crédito Aprobado\nAcreditamos su préstamo de ${formatoMoneda(moneda).format(montoSolicitado)} ${moneda}\n` +
    `Deberá abonar ${numeroDeCuotas} cuotas de ${formatoMoneda(moneda).format((montoSolicitado * (1 + (tasaAplicada(moneda) / 12 * numeroDeCuotas) / 100)) / numeroDeCuotas)} ${moneda}\n` +
    `Total monto financiado: ${formatoMoneda(moneda).format(montoSolicitado * (1 + (tasaAplicada(moneda) / 12 * numeroDeCuotas) / 100))} ${moneda}`)
}

//funcion saludar despedida
const saludar = () => alert('Gracias por confiar en nosotros!!!');

//funcion principal
const cotizador = (moneda) => {
  solicitarMonto(moneda);
  solicitarCuotas(moneda);
  calcularPrestamo(moneda);
  saludar();
}

//inicio del programa
alert('Bienvenido al simulador de prestamos online');


while (opcion === -1) {
  opcion = parseInt(prompt('Selecione la moneda en que desea solicitar el préstamo \n 1 - dólares\n 2 - pesos\n 0 - para salir'));
  if (isNaN(opcion)) {
    alert('El valor ingresado no es válido');
    opcion = -1;
  } else if (!(opcion >= 0 && opcion <= 2)) {
    alert('Por favor ingrese una opción válida');
    opcion = -1;
  }
  if (opcion === 0) {
    alert('Ha seleccionado salir del programa');
  }
}

switch (opcion) {
  case 1: {
    moneda = 'dólares';
    cotizador(moneda);
    break;
  }
  case 2: {
    moneda = 'pesos';
    cotizador(moneda);
    break;
  }
  default: {

  }
}



