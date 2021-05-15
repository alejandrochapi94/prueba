document.write("hola mudo")
console.log("Declarando strings")
let nombre = "Alejandro";
let apellido = 'Chapi';
let saludo = new String("hola mundo");
console.log(nombre, apellido, saludo);
let frase= "Aquí se escribe un texto de prueba para la búsqueda de datos para buscar con el la propiedad includes"
console.log(nombre.length, apellido.length, saludo.length)
//Imprimir todo el mayúsculas
console.log(nombre.toLocaleUpperCase())
//Imprimir todo en minúsculas
console.log(apellido.toLowerCase())
//Buscar una palabra dentro de un texto
console.log(frase.includes("texto")) //la salida me devuelve true o false
//Quitar espacios en blanco del inicio y el final en el texto
console.log(frase.trim())
//Genera un conjunto de elementos (arreglo) por un separador en específico que YA EXISTA DENTRO DEL TEXTO
console.log(frase.split(" ")) //Si queremos separarlos por comas en el texto deberían haber comas
frase2 = "en este texto sí hay comas, ejemplo, de ello, es las comas."
console.log(frase2.split(",")) //separado por las comas existentes en el texto
//CONCATENACIÓN
let nom = "alejo";
let apodo = "alejito";
let bienvenida = "Hola mi nombre es "+ nom;
console.log(bienvenida); 
console.log("Hola mi nombre es "+nom+" y me llaman "+ apodo);
//INTERPOLACIÒN DE VARIABLES (MEJOR QUE LA CONCATENACIÓN)
//Template String
let bienvenida2 = `Hola mi nombre es ${nom} y me llaman ${apodo}`
console.log(bienvenida2)

//Imprimir la lista desordenada de html con el uso del acento invertido
let ul = `li>Primavera</li>
<li>Verano</li>
<li>Otoño</li>
<li>Invierno</li>
</ul>
</body>
</html>`;
console.log(ul);

//OPCIÓN ADICIONAL POCO CÓMODA
let ul2 = "<ul>";
ul2 += "<ul>Invierno</ul>";
ul2 += "<ul>Verano</ul>";
ul2 += "<ul>Otoño</ul>";
console.log(ul2);

//NÚMEROS ******************
console.log("**********NÚMEROS *********************")
let a= 2;
let b = new Number(4)
let c= 7.19;
let d= "3.14"
console.log(a,b);
console.log(c.toFixed(1)); //Redondea a los números decimales que quieres
console.log(c.toFixed(5)); //Formatea el número para mostrar lo que queremos
console.log(parseInt(c)); //Me devuelve solo la parte entera
console.log(parseFloat(c));
console.log(typeof(c), typeof(d))
console.log(a+parseFloat(d)); //Sugerencia aquí es buscar librerías espcíficas para trabajar con números
u=a+parseFloat(d);
console.log(u.toFixed(3))//Arreglar la cant de decimales
console.log(c+parseFloat(d)) // Cuando sumamos dos float sí se suman
