//esto es un comentario//
/*esto es un comentario muyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
largo (más de un renglón de código)*/ 
//dayra cataño//
const campoNum1 = document.getElementById('num1');
const campoNum2 = document.getElementById('num2');
const botonSumar = document.getElementById('btn-sumar');     
const elementoResultado = document.getElementById('resultado');

//2.definir la funcióm que realiza la suma  y actualiza la página
function realizarSuma (){
    //a. leer los valores de los campos de entrada usando .value
    let valor1= campoNum1.value;
    let valor2= campoNum2.value;

 //es crucial en java script convertir los valores a n[umeros] pues este los detecta como una letra mpas
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);

    ///c. realizar la operación matemática
    const sumaTotal = numero1 + numero2;

    //d. mostrar el resultado en el elemento de salida usando .textContent
    //El resultado final se convierte automáticamente a texto para mostrarse
    elementoResultado.textContent = sumaTotal;

    //opcional: mostrar en consola
    console.log("sumando ${numero1} + ${numero2} = ${sumaTotal}");
}

botonSumar.addEventListener("click", realizarSuma);






