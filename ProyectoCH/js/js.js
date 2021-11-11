class Prestamo{
    constructor(v,c){
            this.valor=v;
            this.cuota=c;
            this.Vtotal=0;
            this.Vcuota=0;
        }
    valorCuo(){
        const cuota1=1;
        const cuota3=1.10;
        const cuota6=1.30;
        const cuota9=1.40;
        const cuota12=1.50;
    switch(this.cuota){
        case 1:
            let uno=((this.valor*cuota1)/this.cuota);
            this.Vcuota=uno;
            this.Vtotal=this.valor*cuota1;
        break;
        case 3:
            let tres=((this.valor*cuota3)/this.cuota);
            this.Vcuota=tres;
            this.Vtotal=this.valor*cuota3;
        break;
        case 6:
            let seis=((this.valor*cuota6)/this.cuota);
            this.Vcuota=seis;
            this.Vtotal=this.valor*cuota6;
        break;
        case 9:
            let nueve=((this.valor*cuota9)/this.cuota);
            this.Vcuota=nueve;
            this.Vtotal=this.valor*cuota9;
        break;
        case 12:
            let doce=((this.valor*cuota12)/this.cuota);
            this.Vcuota=doce;
            this.Vtotal=this.valor*cuota12;
        break;
        default:
            console.log("Algo no se ingreso bien");
        break;
    }
    }
    informar(){
        console.log("El valor total del credito es:"+" "+this.Vtotal.toFixed(2))
        console.log("El valor de la cuota es:"+" "+this.Vcuota.toFixed(2))
    }
}


alert("Bienvenido a su proximos prestamos");

let valorPresta=Number(prompt("Ingrese el valor que quiero solicitar"));
let cantidadCuotas=Number(prompt("Ingrese la cantidad de cuotas que quiere realizar 1,3,6,9,12"));
const presta=new Prestamo(valorPresta,cantidadCuotas);
presta.valorCuo();
presta.informar();
