//Inicio del programa//
//Compras de componentes de PC//
let nomProducto = "";
let preProducto = "";
let canProducto = "";
let totProducto = 0;
let desProducto = 0;
let preFinal = 0;
let forAbono = "";
let opcCuotas = 0;
let catCuotas = 0;
let recCuotas = 0;
let preCuotas = 0;

//Damos la bienvenida al progama//

alert("Bienvenido al simulador de Componentes de PC");

const validadorInput = (msg) => {
    let input;
    while((input == null ) || (input == "")){
        input = prompt(`${msg}`)
    }
    return input;
}

const cuotas = () => {
    alert(`El total a abonar es de $${totProducto}`)
    do{
    forAbono = validadorInput("Como lo desea abonar? \n 1- Tarjeta de Credito \n 2- Tarjeta de Debito/Efectivo");
    }while(!((forAbono == "1") || (forAbono == "2")))

    if (forAbono == "1"){
        opcCuotas = parseFloat(validadorInput("Con Tarjeta de Credito puedo abonar: \n 1- 1 pago, queda igual que el precio original \n 2- 6 cuotas con 10% de recargo \n 3- 12 cuotas sin interes"));
        if (opcCuotas == 1) {
            catCuotas = 1;
            alert(`El precio a abonar es de $${totProducto};`);
        }
        else if (opcCuotas == 2){
            catCuotas = 3;
            recCuotas = totProducto * 0.15;
            totProducto = totProducto - recCuotas;
            preCuotas = totProducto / 3;
            alert(`El recargo sera de ${recCuotas}, debe abonar ${totProducto}`);
            alert(`Va a abonar ${catCuotas} cuotas de $${preCuotas}`);
        }
        else if(opcCuotas == 3){
            catCuotas = 12;
            preCuotas = totProducto / 12;
            alert(`El precio a abonar es de $${totProducto}`);
            alert(`Va a abonar ${catCuotas} cuotas de $${preCuotas}`)
        }
    }

    else if (forAbono == "2"){
        alert("Eligio abonar con Tarjeta de Debito / Efectivo")
        alert(`El total a abonar entonces es de: $${totProducto}`);
    }
}
const contadorProductos = () => {
    do{
    canProducto = validadorInput(`Por favor ingrese el total de productos: `);
    parseInt(canProducto);
    }while(isNaN(canProducto));
    for(i = 0; i < canProducto; i++){
        nomProducto = validadorInput(`Ingrese el nombre del producto: `)
        preProducto = parseFloat(validadorInput(`Ingrese el precio del producto "${nomProducto}": `));
        alert(`Ingreso ${nomProducto} por un precio de $${preProducto}`);
        console.log(`${nomProducto}: ${preProducto}`);
        totProducto =+ totProducto + preProducto;
        console.log(totProducto)
    }
    if  (totProducto > 100000){
        alert("Supero los $100000, tiene un descuento del 25%")
        desProducto = totProducto * 0.25;
        console.log(desProducto);
        console.log(totProducto);
        totProducto = totProducto - desProducto;
        alert(`El precio final a abonar con el descuento de $${desProducto} es de $${totProducto}`);
    }

    else if (totProducto > 50000){
        alert("Supero los $50000, tiene un descuento del 15%")
        desProducto = totProducto * 0.15;
        console.log(desProducto);
        console.log(totProducto);
        totProducto = totProducto - desProducto;
        alert(`El precio final a abonar con el descuento de $${desProducto} es de $${totProducto}`)
    }

    else if (totProducto > 20000){
        alert("Supero los $20000, tiene un descuento del 10%")
        desProducto = totProducto * 0.10;
        console.log(desProducto);
        console.log(totProducto);
        preFinal = totProducto - desProducto;
        alert(`El precio final a abonar con el descuento de $${desProducto} es de $${preFinal}`)
    }

    else{
        alert(`El precio final a abonar es de $${totProducto}`)
    }

}
contadorProductos();
cuotas();

alert("Gracias por utilizar nuestro servicio!");