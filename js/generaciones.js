

class Persona {
    constructor(nombre, edad, dni, peso, altura, anio_nacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.peso = peso;
        this.altura = altura;
        this.anio_nacimiento = anio_nacimiento;
    }

    // Getter para el nombre
    get Nombre() {
        return this.nombre;
    }

    // Setter para el nombre
    set Nombre(nombre) {
        this.nombre = nombre;
    }

    // Getter para la edad
    get Edad() {
        return this.edad;
    }

    // Setter para la edad
    set Edad(edad) {
        this.edad = edad;
    }

    set Dni(Dni) {
        this.dni = Dni;
    }

    get Dni() {
        return this.dni;
    }

    set Peso(Peso) {
        this.Peso = Peso;
    }
    get PEso() {
        return this.peso;
    }
    set Altura(Altura) {
        this.altura = Altura;
    }
    get Altura() {
        return this.altura;
    }
    set AnioDeNac(AnioDeNac) {
        this.anio_nacimiento = AnioDeNac;
    }
    get AnioDeNac() {
        return this.anio_nacimiento;
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            window.alert("es mayor de edad");
            return ("Es mayor de edad \n");
        }
        else {
            window.alert("es menor de edad");
            return ("Es Menor de edad /n ");
        }
    }
    generaDNI() {
        this.dni = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
        return ("nuevo :" + this.dni);
    }
    resetDatos() {
        document.getElementById("miFormulario").style.display = "initial";

        document.getElementById("nombreg").value = "";
        document.getElementById("edadg").value = "";
        document.getElementById("pesog").value = "";
        document.getElementById("alturag").value = "";
        document.getElementById("aniog").value = "";
        document.getElementById("dnig").value = "";
        document.getElementById("mostrarDatos").style.display = "none";
        document.getElementById("mostrarGeneracion").style.display = "none";
        document.getElementById("esMayor").style.display = "none";
        document.getElementById("reset").style.display = "none";
    }
    mostrarDatos() {
        let resultado = 2023 - this.edad;
        let mensaje = '';

        mensaje += ("DATOS INGRESADOS \n Nombre: " + this.nombre + "\n Edad: " + this.edad + "\n DNI " + this.generaDNI() + " \n Peso: " + this.peso + "\n Altura: " + this.altura + "\n año de nacimiento: " + this.anio_nacimiento + "\n ");
        window.alert(mensaje);
    }
    mostrarGeneracion() {
        let resultado = 2023 - this.edad;
        let mensaje = '';

        mensaje += ("eres de la ");

        if (resultado <= 2010 && resultado >= 1994) {
            mensaje += (`generacion Z, gracias a la Expancion masiva de intener quizas sean un poco Irreverentes ("quizas") `)
        }
        else if (resultado <= 1993 && resultado >= 1981) {
            mensaje += (`generacion Y, nacieron en el inicio de la digitalizacion, Estan un poco frustrados`)
        }
        else if (resultado <= 1980 && resultado >= 1969) {
            mensaje += (`generacion X, nacieron en plena crisis, por eso tienen una gran obsesion por el exito`)
        }
        else if (resultado <= 1968 && resultado >= 1949) {
            mensaje += (`generacion Baby Boom, nacieron en una epoca de paz y expansion, son muy ambiciosos`)

        }
        else if (resultado <= 1948 && resultado >= 1930) {
            mensaje += (`generacion silent generacion(niños pos guerra), nacieron en pleno conflictos belicos, por eso son muy austeros`)

        }
        window.alert(mensaje);
    }
}

const form3 = document.querySelector('#miFormulario');
const nombre = document.querySelector('#nombreg');
const edad = document.querySelector('#edadg');
const dni = document.querySelector('#dnig');
const peso = document.querySelector('#pesog');
const altura = document.querySelector('#alturag');
const anio = document.querySelector('#aniog');
const cargarDatos = document.querySelector('#cargarDatos');
// Seleccionamos los elementos del DOM
let btnMosrarDatos = document.getElementById("mostrarDatos");
let btnMostrarGeneraciones = document.getElementById("mostrarGeneracion");
let btnEsMayor = document.getElementById("esMayor");
let btnReset = document.getElementById("reset");
let nuevaPersona;


cargarDatos.addEventListener('click', () => {

    const nombre = nombreg.value;
    const edad = parseInt(edadg.value);
    const dni = parseInt(dnig.value);
    const peso = parseInt(pesog.value);
    const altura = parseInt(alturag.value);
    const anio = parseInt(aniog.value);
    nuevaPersona = new Persona(nombre, edad, dni, peso, altura, anio);
    document.getElementById("miFormulario").style.display = "none";
    document.getElementById("mostrarDatos").style.display = "initial";
    document.getElementById("mostrarGeneracion").style.display = "initial";
    document.getElementById("esMayor").style.display = "initial";
    document.getElementById("reset").style.display = "initial";


    window.alert("datos cargados correctamente");
});

btnEsMayor.addEventListener('click', () => {

    nuevaPersona.esMayorDeEdad();
});
btnMosrarDatos.addEventListener('click', () => {
    nuevaPersona.mostrarDatos()
});
btnMostrarGeneraciones.addEventListener('click', () => {
    nuevaPersona.mostrarGeneracion();
});
btnReset.addEventListener('click', () => {
    nuevaPersona.resetDatos();
});