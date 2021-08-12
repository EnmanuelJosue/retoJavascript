const netflix = document.querySelector("#netflix");
console.log(netflix);
function iniciar(){

    const inputPelisAlMes = document.getElementById("inputPelisAlMes");
    const inputPelisAlMesIngresoValue = inputPelisAlMes.value;
    const costoPelis = inputPelisAlMesIngresoValue * 4;
    inputPelisAlMes.value = '';

    const netflix = document.getElementById("netflix");     

    const amazon = document.getElementById("amazon");

    const disney = document.getElementById("disney");

    const hbo = document.getElementById("hbo");
    
    const suma = checked(netflix,amazon,disney,hbo);
    console.log(suma);
    if(inputPelisAlMesIngresoValue == "" || inputPelisAlMesIngresoValue == 0){
        alert("Ingresa un dato válido");
    }else{
        if(costoPelis > suma){
            alert("Es más economíco ver películas vía streaming");
        }else{
            alert("Es más economíco ir al cine")
        }
    }
  
    
    console.log(inputPelisAlMesIngresoValue);
       
  
} 

function checked(e1,e2,e3,e4){
     const elements = [e1,e2,e3,e4];
     console.log(elements);
     const elementsCheck = elements.filter(element => element.checked); // checked nos muestra el valor del checkbox si esta seleccionado o no
     const elementsTotal = elementsCheck.reduce((suma, item) => suma = suma + Number(item.value), 0);
     return elementsTotal;
     console.log(elementsCheck);
     console.log(elementsTotal);
}