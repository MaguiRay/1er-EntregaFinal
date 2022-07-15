

let nombre = prompt("ingrese su nombre");
let provinciaNorteSeleccionada;
let personasIngresadas;
let diasIngresados;
let hotelesDispCiudad="";

//funcion saludar
const saludarUsuario=()=>{
 
    alert("Hola "+ nombre + " te damos la bienvenida a Ar.book ");
    
 }
 saludarUsuario();


//objeto - funcion constructora
class Hotel { 
    constructor (nombre, provincia, ciudad, precio){
    this.nombre= nombre;
    this.provincia= provincia;
    this.ciudad= ciudad; 
    this.precio= precio;
    }

    informar() {

    console.log("El hotel  ", this.nombre + " vale ", this.precio + " pesos.");

    }
    resetear() {
        this.nombre= "";
        this.provincia= "";
        this.ciudad= ""; 
        this.precio= 0;    

    }
}   


//arrays 

let regionesArg = ["Norte", "Litoral", "Patagonia","Salir"];
let provinciasNorte = ["Jujuy","Salta"];
let ciudadesNorte=["Tilcara","Purmamarca","Humahuaca"];
let hotelEnCarro=[]
let hotelesJujuyDisp =[

new Hotel("Norte Rupestre","Jujuy","Tilcara",3000),      
new Hotel("Uwa Wasi hotel","Jujuy","Purmamarca",4500),
new Hotel("Luna hotel","Jujuy","Tilcara",4600),
new Hotel("Inti hotel","Jujuy","Humahuaca",4600),

];



// De acuerdo al ingreso de la region norte me muestra las opciones de provincias
const mostrarProvinciasNorte=()=>{
    provinciaNorteSeleccionada = (prompt('Ingrese una provincia:\n' + provinciasNorte.join("\n")));

    switch(provinciaNorteSeleccionada){
        case "Jujuy":
            mostrarHotelesJujuy(); 

           break;
        case "Salta":
            console.log("No hay hoteles disponibles");
        default:
            alert("no existe esa opcion en el menu");
            mostrarProvinciasNorte();
            break;            
    }
   
}
//calcula el precio de acuerdo al ingreso de personas y dias
const calcularPrecio=(cantpersonas,cantdias,preciodia)=>{
    const precioTotal=cantpersonas * cantdias * preciodia;
    return precioTotal;

}



// De acuerdo al ingreso de hotel me muestra el valor
const mostrarHotelesJujuy=()=>{
   
    
    console.log("Hay " + hotelesJujuyDisp.length + " hoteles disponibles");
    
    for (const item of hotelesJujuyDisp) {
        console.log(item.nombre);
    }
   
  //filtro de ciudades  
   do  {
        let city = ciudadesNorte.join(",");
        console.log("las ciudades para filtrar son\n " + city);
        
        ciudadFil = prompt(
            "Ingrese la ciudad en la que desea buscar alojamiento o salir, en caso de que no quiera filtrar por ciudades:\n" );
    

       if (ciudadFil != "salir" && ciudadFil != null) {
                let hotelesFiltradosPorCiudad = hotelesJujuyDisp.filter( 
                (item) => item.ciudad == ciudadFil
                );
                console.log(hotelesFiltradosPorCiudad);

              
                for (let i = 0; i< hotelesFiltradosPorCiudad.length; i++){
                     hotelesDispCiudad += hotelesFiltradosPorCiudad[i].nombre +"\n " +
                     hotelesFiltradosPorCiudad[i].precio + " pesos\n "

                }
                    
        }
    
    } while (ciudadFil =! "salir" && ciudadFil != null);
       


    hotelesJujuy= (prompt('Ingrese el nombre del hotel que desea:\n' + hotelesDispCiudad));

 
    if (hotelesJujuy==="Norte Rupestre"){
        
        
         personasIngresadas=Number(prompt("ingrese cantidad de personas"));
         
         diasIngresados=Number(prompt("ingrese cantidad de dias"));
         
         const preciofinal=calcularPrecio(personasIngresadas,diasIngresados,hotelesJujuyDisp[0].precio);
         
         alert("usted va a pagar " + preciofinal +" pesos"); 
         
        let realizaReserva = parseInt ( prompt("Seleccione segun corresponda, si desea o no reservar el hotel\n" + "1 - si\n" + "2 - no")); 
        
        if(realizaReserva==1){
            hotelEnCarro.push(hotelesJujuy);
            alert("El hotel se agrego al carro")
        }
        else {
            console.log("Hasta pronto");

        }

     }
    
     else if(hotelesJujuy=="Uwa Wasi hotel"){
        alert("Actualmente no hay disponibilidad en hotel Uwa Wasi");
    }
    else if(hotelesJujuy==="Luna hotel"){
       
        personasIngresadas=Number(prompt("ingrese cantidad de personas"));
        
        diasIngresados=Number(prompt("ingrese cantidad de dias"));
        
        const preciofinal=calcularPrecio(personasIngresadas,diasIngresados,hotelesJujuydisp[2].precio);
        
        alert("usted va a pagar " + preciofinal +" pesos");  

        
    
    }
    else if(hotelesJujuy==="Inti hotel"){
        alert("Actualmente no hay disponibilidad en el Inti hotel");
    }
    else {
        alert("No existe ese hotel");
        mostrarHotelesJujuy();
    
    }

}


//menu

do {
    regiones =(prompt('Ingrese una region:\n' + regionesArg.join("\n")));

    switch (regiones){
    
    case "Norte":
        mostrarProvinciasNorte();
        break;
        
    
    case "Litoral":
        console.log("No hay disponibilidad en el Litoral");
        break;
        

    
    case "Patagonia":
        console.log("No hay disponibilidad en la Patagonia");
        break;
        
    
    case "Salir":    
        alert("Hasta pronto");
        break;

    

    default: 
        alert("No corresponde a ninguna región");
        break; 

    }
 
    } while(regiones != "Salir" && regiones != null);




  










