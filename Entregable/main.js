//Inicio del programa
/*
inicio()

//Funcion de pagina de Inicio
function inicio(){
    alert("Hola, bienvenido al cotizador de seguros!")
    let vehiculo = parseInt(prompt("Ingrese que tipo de vehiculo tiene (Automovil(1) o Moto(2))"));

    if(vehiculo === 1){
        automovil();
    }else if(vehiculo === 2){
        moto();
    }else{
        inicio();
    }
}



//Funcion de la eleccion "AUTOMOVILES"
function automovil(){
    let marcaAuto = parseInt(prompt("Ingrese la marca de su vehiculo (Ford(1), Chevrolet(2), Renault(3))"));

    if(marcaAuto === 1){
        let modeloAuto = parseInt(prompt("Ingrese que modelo es su vehiculo (Focus(1), EcoSport(2), Mustang(3))"));
        while(modeloAuto != "ESC"){
            switch(modeloAuto){
                case 1:
                    alert("El valor asegurado de su vehiculo sera $4.000.000 y la cuota mensual sera $15.000");
                    contratar();

                    inicio();
                    break;
                
                case 2:
                    alert("El valor asegurado de su vehiculo sera $5.500.000 y la cuota mensual sera $20.000");
                    contratar();
                    inicio();
                    break;

                case 3:
                    alert("El valor asegurado de su vehiculo sera U$S 50.000 y la cuota mensual sera U$S 2.000");
                    contratar()
                    inicio()
                    break;
            }
        }
    }else if(marcaAuto === 2){
        let modeloAuto = parseInt(prompt("Ingrese que modelo es su vehiculo (Cruze(1), Tracker(2), Camaro(3))"));
        
        while(modeloAuto != "ESC"){
            switch(modeloAuto){
                case 1:
                    alert("El valor asegurado de su vehiculo sera $5.600.000 y la cuota mensual sera $20.000");
                    contratar()
                    inicio()
                    break;
                
                case 2:
                    alert("El valor asegurado de su vehiculo sera $7.200.000 y la cuota mensual sera $50.000");
                    contratar()
                    inicio()
                    break;

                case 3:
                    alert("El valor asegurado de su vehiculo sera U$S 55.000 y la cuota mensual sera U$S 7.000");
                    contratar()
                    inicio()
                    break;
            }
        }
    }else if(marcaAuto === 3){
        let modeloAuto = parseInt(prompt("Ingrese que modelo es su vehiculo (Focus(1), Sandero(2), MeganeRS(3))"));
        while(modeloAuto != "ESC"){
            switch(modeloAuto){
                case 1:
                    alert("El valor asegurado de su vehiculo sera $3.000.000 y la cuota mensual sera $13.000");
                    contratar()
                    inicio()
                    break;
                
                case 2:
                    alert("El valor asegurado de su vehiculo sera $5.500.000 y la cuota mensual sera $20.000");
                    contratar()
                    inicio()
                    break;

                case 3:
                    alert("El valor asegurado de su vehiculo sera U$S 30.000 y la cuota mensual sera U$S 1.000");
                    contratar()
                    inicio()
                    break;
            }
        }
    }else{
        inicio();
    }

}

//Funcion de la eleccion "MOTOS"
function moto(){
    let marcaMoto = parseInt(prompt("Ingrese la marca de su vehiculo (Yamaha(1), Honda(2), Bajaj(3))"));

    if(marcaMoto === 1){
        let modeloMoto = parseInt(prompt("Ingrese que modelo es su vehiculo (FZ 250(1), R3(2), R1(3))"));
        
        while(modeloMoto != "ESC"){
            switch(modeloMoto){
                case 1:
                    alert("El valor asegurado de su vehiculo sera $1.800.000 y la cuota mensual sera $8.000");
                    contratar()
                    inicio()
                    break;
                
                case 2:
                    alert("El valor asegurado de su vehiculo sera $2.500.000 y la cuota mensual sera $15.000");
                    contratar()
                    inicio()
                    break;

                case 3:
                    alert("El valor asegurado de su vehiculo sera U$S 25.000 y la cuota mensual sera U$S 1.000");
                    contratar()
                    inicio()
                    break;
            }
        }
    }else if(marcaAuto === 2){
        let modeloAuto = parseInt(prompt("Ingrese que modelo es su vehiculo (Twistes(1), CB300(2), CBR1000(3))"));
        while(modeloAuto != "ESC"){
            switch(modeloAuto){
                case 1:
                    alert("El valor asegurado de su vehiculo sera $1.300.000 y la cuota mensual sera $9.000");
                    contratar()
                    inicio()
                    break;
                
                case 2:
                    alert("El valor asegurado de su vehiculo sera $2.300.000 y la cuota mensual sera $13.000");
                    contratar()
                    inicio()
                    break;

                case 3:
                    alert("El valor asegurado de su vehiculo sera U$S 30.000 y la cuota mensual sera U$S 1.100");
                    contratar()
                    inicio()
                    break;
            }
        }
    }else if(marcaAuto === 3){
        let modeloAuto = parseInt(prompt("Ingrese que modelo es su vehiculo (Rouser 160(1), Dominar 250(2), Dominar 400(3))"));
        while(modeloAuto != "ESC"){
            switch(modeloAuto){
                case 1:
                    alert("El valor asegurado de su vehiculo sera $700.000 y la cuota mensual sera $5.000");
                    contratar()
                    inicio()
                    break;
                
                case 2:
                    alert("El valor asegurado de su vehiculo sera $1.100.000 y la cuota mensual sera $9.000");
                    contratar()
                    inicio()
                    break;

                case 3:
                    alert("El valor asegurado de su vehiculo sera $1.600.000 y la cuota mensual sera $ 11.000");
                    contratar()
                    inicio()
                    break;
            }
        }
    }else{
        inicio();
    }

}

*/

inicio()
//Funcion de pagina de Inicio
function inicio(){
    alert("Hola, bienvenido al cotizador de seguros!")
    let vehiculo = parseInt(prompt("Ingrese que tipo de vehiculo tiene (Automovil(1) o Moto(2).)"));

    if(vehiculo === 1){
        automovil();
    }else if(vehiculo === 2){
        moto();
    }else{
        inicio();
    }
}
//Funcion para averigair la marca y el modelo del auto
function automovil(){

    let marcaAuto = parseInt(prompt("Ingrese la marca de su vehiculo (Ford(1), Chevrolet(2), Renault(3).)"))
        if(marcaAuto === 1){
           let modelosFord = [
                {id: 1, modelo: "Focus", precio: 10000, cobertura: 4000000},
                {id: 2, modelo: "EcoSport", precio: 15000, cobertura: 5000000},
                {id: 3, modelo: "Mustang", precio: 50000, cobertura: 130000000},
            ]
            
            let modelo = parseInt(prompt("Ingrese el modelo de su vehiculo (Focus(1), EcoSport(2), Mustang(3).)")); 
            
            let eleccion = modelosFord.find(auto => auto.id === modelo);
            let mensaje = `
                             FORD
            ------------------------------------------------
            El modelo: ${eleccion.modelo} 
            Tiene un valor mensual de: $${eleccion.precio}
            y una cotizacion de: $${eleccion.cobertura}.
            ------------------------------------------------
            `;
            
            alert(mensaje);

            contrato();

        }else if(marcaAuto === 2){
            let modelosChevrolet = [
                {id: 1, modelo: "Cruze", precio: 20000, cobertura: 4000000},
                {id: 2, modelo: "Trucker", precio: 50000, cobertura: 7000000},
                {id: 3, modelo: "Camaro", precio: 90000, cobertura: 150000000},
            ]
            
            let modelo = parseInt(prompt("Ingrese el modelo de su vehiculo (Cruze(1), Trucker(2), Camaro(3).)")); 
            
            let eleccion = modelosChevrolet.find(auto => auto.id === modelo);
            let mensaje = `
                         CHEVROLET
            ------------------------------------------------
            El modelo: ${eleccion.modelo} 
            Tiene un valor mensual de: $${eleccion.precio}
            y una cotizacion de: $${eleccion.cobertura}.
            ------------------------------------------------
            `;

            alert(mensaje);

            contrato();
            
        }else if(marcaAuto === 3){
            let modelosRenault = [
                {id: 1, modelo: "Kwid", precio: 15000, cobertura: 3500000},
                {id: 2, modelo: "Sandero", precio: 20000, cobertura: 5000000},
                {id: 3, modelo: "MeganeRS", precio: 70000, cobertura: 11400000},
            ]
            
            let modelo = parseInt(prompt("Ingrese el modelo de su vehiculo (Kwid(1), Sandero(2), MeganeRS(3).)")); 
            
            let eleccion = modelosRenault.find(auto => auto.id === modelo);
            let mensaje = `
                           RENAULT
            ------------------------------------------------
            El modelo: ${eleccion.modelo} 
            Tiene un valor mensual de: $${eleccion.precio}
            y una cotizacion de: $${eleccion.cobertura}.
            ------------------------------------------------
            `;
            
            alert(mensaje);

            contrato();
        };

};

//funcion para averiguar la marca y el modelo de la moto.
function moto(){
    let marcaMoto = parseInt(prompt("Ingrese la marca de su Moto (Yamaha(1), Honda(2), Bajaj(3).)"));

    if(marcaMoto === 1){
        let modeloYamaha = [
            {id:1 , modelo:"FZ 250cc" , precio: 8000, cobertura:1800000 ,},
            {id:2 , modelo:"R3 300cc" , precio: 15000, cobertura: 2500000,},
            {id:3 , modelo:"R1 1000cc" , precio: 25000, cobertura: 9000000,},
        ];
        
        let modelo = parseInt(prompt("Ingrese el modelo de su moto: (FZ 250cc(1), R3 300cc(2), R1 1000cc(3).)"));

        let eleccion = modeloYamaha.find(moto => moto.id === modelo);
        let mensaje = `
                        YAMAHA
        ------------------------------------------------
        El modelo: ${eleccion.modelo}
        Tiene un valor mensual de: $${eleccion.precio}
        y una cotizacion de: $${eleccion.cobertura} 
        ------------------------------------------------           
        `;

        alert(mensaje);

        contrato();

    }else if(marcaMoto === 2){
        let modeloHonda = [
            {id:1 , modelo:"Twister 250cc" , precio: 9000, cobertura:1300000 ,},
            {id:2 , modelo:"CBR 300cc" , precio: 13000, cobertura: 2300000,},
            {id:3 , modelo:"CBR 1000cc" , precio: 23000, cobertura: 10000000,},
        ];
        
        let modelo = parseInt(prompt("Ingrese el modelo de su moto: (Twister 250cc(1), CBR 300cc(2), CBR 1000cc(3).)"));

        let eleccion = modeloHonda.find(moto => moto.id === modelo);
        let mensaje = `
                        HONDA
        ------------------------------------------------
        El modelo: ${eleccion.modelo}
        Tiene un valor mensual de: $${eleccion.precio}
        y una cotizacion de: $${eleccion.cobertura} 
        ------------------------------------------------           
        `;

        alert(mensaje);

        contrato();

    }else if(marcaMoto === 3){
        let modeloBajaj = [
            {id:1 , modelo:"Rouser 160cc" , precio: 5000, cobertura:700000 ,},
            {id:2 , modelo:"Dominar 250cc" , precio: 9000, cobertura: 1300000,},
            {id:3 , modelo:"Dominar 400cc" , precio: 11000, cobertura: 1600000,},
        ];
        
        let modelo = parseInt(prompt("Ingrese el modelo de su moto: (Rouser 160cc(1), Dominar 250cc(2), Dominar 400cc(3).)"));

        let eleccion = modeloBajaj.find(moto => moto.id === modelo);
        let mensaje = `
                        BAJAJ
        ------------------------------------------------
        El modelo: ${eleccion.modelo}
        Tiene un valor mensual de: $${eleccion.precio}
        y una cotizacion de: $${eleccion.cobertura} 
        ------------------------------------------------           
        `;

        alert(mensaje);

        contrato();
    };
};

//Funcion que agrega a la persona que contrata el seguro
function contrato(){
    let aceptarContrato = parseInt(prompt("¿Quiere contratar el seguro para su vehiculo? (Si(1) o No(2))"))

    if(aceptarContrato === 1){


        let personas = [
            {id:1 , nombre: "Alberto", apellido: "Marin", dni: 121321},
            {id:2 , nombre: "Luis", apellido: "Toledo", dni: 454545},
            {id:3 , nombre: "Marcelo", apellido: "Lopez", dni: 689579},
            {id:4 , nombre: "Mario", apellido: "Fernandez", dni: 235489},
            {id:5 , nombre: "Roberto", apellido: "Carlo", dni: 987651},
        ];

        let nombre = prompt("Ingre su nombre");
        let apellido = prompt("Ingrese su apellido");
        let dni = parseInt(prompt("Ingrese su DNI"));

        let agregarPersona = {
            id: personas.length + 1,
            nombre: nombre,
            apellido: apellido,
            dni: dni,
        };

        personas.push(agregarPersona);


        alert(`
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Felicidades ${nombre} ${apellido} usted ha contratado un seguro para su vehiculo.
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        `);
        inicio()
    }else{
        alert("Gracias por su consulta, lo estaremos esperando para asegurar su vehiculo.")
        inicio()
    }  
};

