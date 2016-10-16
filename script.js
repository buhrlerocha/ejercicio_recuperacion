// ejercicio numero 2 - numero par o impar -

function numero_par_o_impar (a){
	if (a%2==0){
		return a + " " + "es numero par"
	} else {
		return a + " " + "es numero impar"
	}
}
document.write (numero_par_o_impar (5) + "<br>");


// ejercicio numero 3 - ordenando numeros -
function numeros_ordenados (a,b,c){
	var numeros = [a,b,c].sort (a-b);
	return numeros;
}
document.write (numeros_ordenados (3,8,2)  + "<br>");

// ejercicio numero 8 - numero primo -
function numero_primo (a){
	if (a%a == 0 && a%1 ==0){
		return a + " " + "es numero primo"
	} else{
		return a + " " + "no es numero primo"
	}
}
document.write (numero_primo (5) + "<br>");

// ejercicio numero 7 - cuadrado de la suma de dos numeros -
function cuadrado_numeros (a,b){
	var calculo = (a*a)+(b*b);
		return calculo;
	}
document.write (cuadrado_numeros (5,4) + "<br>");

// ejercicio numero 1- el menor de los numeros -
function menor_numero (a,b,c){
	var dato = Math.min (a,b,c);
		return dato;
}
document.write (menor_numero (5,4,10) + "<br>");

// ejercicio numero 5- palindromo -
function palindrome (palabra){
	var primeraLetra = 0;
	var ultimaLetra = palabra.length -1;
	var contador = 0;
	while (ultimaLetra >= 0){
	if (palabra.charAt(primeraLetra)!=palabra.charAt(ultimaLetra)){
		contador++;
	} 
		primeraLetra++;
		ultimaLetra --;
		if(contador > 0){
			return "no es palindrome"
		}
	}
	return "es palindrome";
}
document.write (palindrome ("ana") + "<br>");

// ejercicio numero 4- mayusculas o minusculas -
function may_min(texto){
	var normal= texto;
	var mayuscula= texto.toUpperCase();
	var minuscula= texto.toLowerCase();
	if(normal == mayuscula){
		return texto + "texto solo mayusculas";
	}else if (normal == minusculas){
		return texto + "texto solo minusculas";
	}else{
		return texto + "texto en mayusculas y minusculas";
	}
}
document.write(may_min("hola paulina"));

// ejercicio numero 10- cantidad de digitos  -
function digitos (a){
	var entero = Math.round (a);
	var cadena = entero.toString ().length;
	if (entero >= 0){
		return a + "tiene" + cadena + "digitos";
	}
}
document.write (digitos (2345) + "<br>");