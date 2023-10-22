// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
"use strict";
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(actualiza) {
    // TODO
    if ( isNaN(actualiza) || actualiza <=0) {
        return -1;
        alert("No es un Numero");
    } else 
    presupuesto = actualiza;
    return presupuesto;
}

function mostrarPresupuesto() {
    // TODO
    let mensaje = `Tu presupuesto actual es de ${presupuesto} €`;
    return mensaje;
}

function listarGastos () {
    return gastos;

}
function anyadirGasto (gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function borrarGasto (identificador) {
    for (let i=0; i < gastos.length; i++) {
        if ( gastos.id[i] == identificador) {
            gastos.splice(i , 1)
        }
    }
}
function calcularTotalGastos () {
    let suma = 0;
    for (let i of gastos) {
        suma += i.valor;
    }
    return suma;
}
function calcularBalance () {
    let balance = 0;
    balance = presupuesto - calcularTotalGastos();
    return balance;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    // TODO
    this.descripcion = descripcion;
    this.valor = (valor >= 0 ) ? valor : 0;
    
     this.mostrarGasto = function (mostrarGasto) {
        let mensaje = `Gasto correspondiente a ${descripcion} con valor ${valor} €`;
        return mensaje;
    }
    this.actualizarDescripcion = function (actualizarDescripcion) {
        this.descripcion = actualizarDescripcion;
        return actualizarDescripcion;

    }
    this.actualizarValor = function (actualizarValor) {
        if (!isNaN(actualizarValor) && actualizarValor >= 0) {
            this.valor = actualizarValor;
            return actualizarValor;
        } else valor = valor;
    }
    if(!fecha) {
        fecha = Date.parse(new Date());
        this.fecha = fecha;
    } else {
        fecha = Date.parse(fecha);
        this.fecha = fecha;
    }
    this.etiquetas = [];
    if (etiquetas.length != 0) {
        for (let i in etiquetas) {
            this.etiquetas.push(etiquetas[i]);
        } 
    }else {
            this.etiquetas = [];
    }
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
