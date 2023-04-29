function Legumbres (nombre, stock, precio){
    this.nombre= nombre;
    this.stock= stock;
    this.precio=precio;
}

const Legumbre1 = new Legumbres ("soja", 7, 500);
console.log(Legumbre1);
const Legumbre2 = new Legumbres ("alfalfa", 5,2500);
console.log(Legumbre2);


class Producto{
    constructor (nombre, stock, color, precio){
        this.nombre = nombre;
        this.stock = stock;
        this.color = color;
        this.precio = precio;
    }
}

const Arvejas =new Producto ("Arvejas", 5, "Verdes", 300);
const Garbanzos =new Producto ("Garbanzos", 12, "Amarillos", 500);
const Porotos =new Producto ("Porotos", 18, "Marrones", 700);
const Lentejas =new Producto ("Lentejas", 5, "Negras", 520);

const arrayProductos = [Arvejas, Garbanzos, Porotos, Lentejas];
console.log (arrayProductos);


arrayProductos.forEach((producto)=>{
    console.log(producto);
})



productoLista.innerHTML = `<h3>Lista de productos`;

// innerHTML

divContenedor.innerHTML = `<p>NOMBRE: Lentejas</p>
                            <p>PRECIO: 520</p>`;

divContenedorFideos.innerHTML = `<p>NOMBRE: Macarrones</p>
                                <p>PRECIO: 350</p>`;




const btEnvForm = document.getElementById("btnEnviar");
btEnvForm.addEventListener("click", ()=>{
    // alert("Gracias por contactarnos");
})

class Cliente{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}



const arrayClientes= [];  



const form = document.getElementById("formulario");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const name = document.getElementById("nombre");
    const lastname = document.getElementById("apellido");


    const cliente = new Cliente(name.value, lastname.value);
    arrayClientes.push(cliente);
    console.log(arrayClientes);


    formulario.reset();
}) 



const Migue = {
    nombre: "Migue",
    apellido: "Velas",
    edad: 30
};



const migueJson = JSON.stringify(Migue);
console.log(migueJson);


localStorage.setItem("Migue", migueJson);


const personaJson =localStorage.getItem("Migue");
const persona = JSON.parse(personaJson);
console.log(persona);



let a = ["uno", "dos"]
let b = [3,4]

let c = [...a, ...b]
console.log(c)


const inputBase = document.querySelector('#baseImponible');
let inputIVA = document.querySelector('#IVA');
let inputTotal = document.querySelector('#total');
const tipoIVA = 0.21;
function Calcular() {
    const base = Number(inputBase.value);
    const IVA = base * tipoIVA;
    inputIVA.value = IVA; 
    const total = base + IVA;
    inputTotal.value = total;
}
