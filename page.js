

let fruta = parseInt(prompt("ingresa el codigo del producto que llevas\n1- manzana $100\n2- naranja $200\n3- banana $300\n4- cereza $400\n0- Salir del programa"));
let total = 0;
const IVA=0.21;

while(fruta != 0){
    switch(fruta){
        case 1:
            total += 100;
            alert("agregaste manzanas a tu bolsa Total acumulado $" + total);
            break;
        case 2:
            total += 200;
            alert("agregaste naranjas a tu bolsa Total acumulado $" + total);
        case 3:
            total += 300;
            alert("agregaste bananas a tu bolsa Total acumulado $" + total);
            break;
        case 4:
            total += 400;
            alert("agregaste cerezas a tu bolsa Total acumulado $" + total);
            break;
        default:
            alert("codigo incorrecto");
            break;

    }

 fruta = parseInt(prompt("ingresa el codigo del producto que llevas\n1- manzana $100\n2- naranja $200\n3- banana $300\n4- cereza $400\n0- Salir del programa"));

}

let metodoPago = parseInt(prompt("¿Como desea abonar?\n1-Efectivo\n2-tarjeta"));

if (metodoPago == "1"){
    alert("total a pagar $" + Impuestos(IVA,0));
}else if(metodoPago == 2){
    alert("Total a pagar $" + Impuestos(IVA,2));
}else{
    alert ("Opcion invalida");
}

function Impuestos (fisco, recargo){
    let totalConImpuestos = total * (1+fisco);
    let totalConImpuestosYRecargo;
    if(recargo !==0 ){
        totalConImpuestosYRecargo = totalConImpuestos * (1+recargo);
    }else{
        totalConImpuestosYRecargo = totalConImpuestos;
    }
    return totalConImpuestosYRecargo;

}