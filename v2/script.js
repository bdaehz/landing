let contenedor = document.getElementById("main");
let contenedorTexto = document.createElement("div");
contenedorTexto.classList.add("texto");
contenedorTexto.id = "texto";

function animarLetrasTexto(texto, segundos) {
    contenedor.appendChild(contenedorTexto);
    return new Promise((resolve) => {
        let letras = texto.split("");
        // Creamos un nuevo div.reverse por cada texto
        let div = document.createElement("div");
        div.classList.add("reverse");

        // Agregamos este div.reverse al contenedor .texto ya existente
        contenedorTexto.appendChild(div);

        // Elemento para el cursor █
        let p = document.createElement("p");
        p.textContent = "█";
        div.appendChild(p);

        // Elemento h1 para las letras
        let h1 = document.createElement("h1");
        div.appendChild(h1);

        let contador = 0;
        letras.forEach((letra, i) => {
            setTimeout(() => {
                h1.textContent += letra;

                if(contador%2 == 0){
                    p.style.opacity = 1;
                }
                else{
                    p.style.opacity = 0;
                }
                
                // hago que titile cuando termine
                if (i === letras.length - 1) {
                    for(let x=0;x<=5;x++){
                        setTimeout(()=>{
                            if(x%2 == 0){
                                p.style.opacity = 1;
                            }
                            else{
                                p.style.opacity = 0;
                            }
                        }, x*400)
                    }
                    setTimeout(()=>{
                        resolve();
                        p.remove();
                    }, 5*400)
                    
                }
                contador++;
            }, segundos * 1000 * i);
        });
    });
}


function animarTexto(texto, segundos){
    return new Promise((resolve) => {
        let contenedor = document.getElementById("main");

        let h1 = document.createElement("h1");
        setTimeout(() => {
            h1.textContent += texto;
            contenedor.append(h1);
            resolve();
        }, segundos * 1000);
        
    });
}

function animarTextoCargando(texto, segundos, velocidad, cargar){
    return new Promise((resolve) => {
        let contenedor = document.getElementById("main");

        let h1 = document.createElement("h1");
        h1.textContent += texto;
        contenedor.appendChild(h1);
        for (let i = 0; i < segundos; i++) {
            setTimeout(() => {
                let span = document.createElement("span");
                span.textContent = cargar;
                h1.appendChild(span);
                resolve();
            }, segundos * velocidad * i);
        }
        
    });
}

function limpiarContenedor(contenedor){
    contenedor.innerHTML = "";
}

function desvanecerPantalla(){
    let contenedor = document.getElementById("main");
    contenedor.classList.add("desvanecer");
}

function mostrarProyectos(){

    let proyectos = document.createElement("div");
    proyectos.classList.add("contenedor");
    proyectos.classList.add("aparecer-suave");

    let menu = document.createElement("div");
    menu.classList.add("menu");

    let ruta = document.createElement("div");
    ruta.classList.add("carpeta");

    imgCarpeta = document.createElement("img");
    imgCarpeta.src = "./img/carpeta-pixelart.png";

    nombreRuta = document.createElement("h1");
    nombreRuta.textContent = "Proyectos";

    menu.append(ruta, imgCarpeta, nombreRuta);

    let cards = document.createElement("div");
    cards.classList.add("proyectos");

    let card = document.createElement("div");
    card.classList.add("card");

    let tituloCard = document.createElement("h1");
    tituloCard.textContent = "hola";

    let portadaCard = document.createElement("img");
    portadaCard.src = "./img/Portada tp 1 - cv.png";
    portadaCard.classList.add("portada");

    let descripcionCard = document.createElement("h2");
    descripcionCard.textContent = "Este es mi curriculum vitae, donde podras ver mis habilidades y conocimientos.";

    card.append(tituloCard, portadaCard, descripcionCard);
    cards.appendChild(card);

    proyectos.append(menu, cards);

    contenedor.appendChild(proyectos);
}

async function animacion(){
    if (!localStorage.getItem("yaVisito")) {
        localStorage.setItem("yaVisito", "true");

        // Animación inicial (solo la primera vez)
        await animarTexto('C:\\User > pip install https://github.com/bdaehz/landing.git', 1);
        await animarTexto('> Obteniendo ultima version de portafolio v0.1', 0.5);
        await animarTextoCargando('>  Cargando proyectos', 4, 200, ".");
        await animarTexto('> Proyectos cargados con exito!', 3);
        await animarTexto('> Portafolio a sido cargado con exito!', 0.5);
        await animarTexto('(c) Portafolio de Cristian Cabral. Todos los derechos reservados.', 0.5);

        await new Promise((resolve) => {
            setTimeout(() => {
                desvanecerPantalla();
                resolve();
            }, 1500);
        });

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }
    
    let main = document.getElementById("main")
    let body = document.getElementById("body");
    limpiarContenedor(main);
    main.classList.remove("desvanecer");
    main.classList.add("aparecer");
    main.classList.add("centrar");
    body.classList.add("centrar");
    body.classList.add("h-100")
    await animarLetrasTexto("hola bienvenido a mi portafolio!", 0.08);
    await animarLetrasTexto("Soy Cristian Cabral de 7mo 1ra", 0.08);
    contenedorTexto.classList.add("mover-arriba");
    body.classList.remove("h-100");
    body.classList.remove("centrar");
    setTimeout(() => {
        mostrarProyectos();
        contenedorTexto.classList.remove("mover-arriba");
    }, 2000);
    setTimeout(async () => {
    }, 3000);
}

animacion()
