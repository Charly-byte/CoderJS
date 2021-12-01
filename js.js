let miPrestamo = document.getElementById("formu");

miPrestamo.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    let vcuo=Number();

    let vtot= Number();

    let formulario= e.target
    
    const TotalDatos=[];

    TotalDatos.push(formulario.children[1].value,Number(formulario.children[3].value),Number(formulario.children[5].value),vcuo,vtot);

    valorCuo(TotalDatos[0],TotalDatos[1],TotalDatos[2],TotalDatos[3],TotalDatos[4]);

};

function valorCuo(nombreClie,vaLor,cuota,valorCuota,valorTotal){
    const cuota1=1;

    const cuota3=1.10;

    const cuota6=1.30;

    const cuota9=1.40;

    const cuota12=1.50;
switch(cuota){
    case 1:
        valorCuota=((vaLor*cuota1)/cuota);
        
        valorTotal=vaLor*cuota;
        
        informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;

    case 3:
        valorCuota=((vaLor*cuota3)/cuota);
        
        valorTotal=vaLor*cuota3;
        
       informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;


    case 6:
        valorCuota=((vaLor*cuota6)/cuota);
        
        valorTotal=vaLor*cuota6;
        
        informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;

    case 9:
        valorCuota=((vaLor*cuota9)/cuota);
        
        valorTotal=vaLor*cuota9;
        
        informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;

    case 12:
        valorCuota=((vaLor*cuota12)/cuota);
        
        valorTotal=vaLor*cuota12;
        
        informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;

    default:
        const ul2=document.querySelector(".lista");
        
        const li2=document.createElement("li");
        
        li2.textContent=("Algo no salio bien");
        
        ul2.appendChild(li2);
    break;
}
guarda_Local(valorCuota,valorTotal,cuota,vaLor);
}
 
function informar(v,vt,c,t,n){
    
    const ul5=document.querySelector(".lista");
    
    const li5=document.createElement("li");
    
    li5.textContent=("Señor:"+" "+ n);
    
    ul5.appendChild(li5);


    const ul4=document.querySelector(".lista");
    
    const li4=document.createElement("li");
    
    li4.textContent=("El valor solicitado es:"+" "+"$"+t.toFixed(2));
    
    ul4.appendChild(li4);



    const ul2=document.querySelector(".lista");
    
    const li2=document.createElement("li");
    
    li2.textContent=("El valor de la cuota es:"+" "+"$"+v.toFixed(2));
    
    ul2.appendChild(li2);



    const ul3=document.querySelector(".lista");
    
    const li3=document.createElement("li");
    
    li3.textContent=("La cantidad de cuotas elegidas es:"+" "+c+" "+"cuotas");
    
    ul3.appendChild(li3);


    const ul=document.querySelector(".lista");
    
    const li=document.createElement("li");
    
    li.textContent=("El valor del credito total es:"+" "+"$"+vt.toFixed(2));
    
    ul.appendChild(li);

};



function  guarda_Local(v,vt,c,t){
    let infoCre={
        valorCuota:parseInt(v),
        
        valorTotal:parseInt(vt),
        
        cuota:parseInt(c),
        
        totalPedido:parseInt(t),
    
    };
    localStorage.setItem("InfoCre",JSON.stringify(infoCre));
    
    let obtDato=localStorage.getItem("InfoCre");
    
    console.log(obtDato)
};

function limpiar(){
	
const ul=document.querySelector(".lista");

ul.innerHTML=" ";
};

var boton= document.getElementById("btnClean");

boton.onclick= function () { 
	
    limpiar(); 
    
    limpiarFormulario()
};


function limpiarFormulario() {
	
    document.getElementById("formu").reset();
  };


