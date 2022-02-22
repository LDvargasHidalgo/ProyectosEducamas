console.log("conectado")
const DO = new Audio("/xilofono-sounds/DO.mp3");
const RE = new Audio("/xilofono-sounds/RE.mp3");
const MI = new Audio("/xilofono-sounds/MI.mp3");;
const FA = new Audio("/xilofono-sounds/FA.mp3");
const SOL = new Audio("/xilofono-sounds/SOL.mp3");
const LA = new Audio("/xilofono-sounds/LA.mp3");
const SI = new Audio("/xilofono-sounds/SI.mp3");
const DOM = new Audio("/xilofono-sounds/DOM.mp3");


/* Función necesito reproducir los audios a medida que vayan  */
const reproducirNota = audio =>{
    const clone =audio.cloneNode(); /* Almacenar en una constante un clon de las notas */
    clone.play(); /* reproducir el clone */
    setTimeout(()=>(clone.volume = 0), 2000);/* la nota se reproduce por 2000ms*/
};

/* invoca en el momento que accciona la tecla */
    const tocarTecla = (idTecla, nota) => { /* traigo la clase de la tecla, y la nota que son las que definimos en el inicio */
        const tecla = document.querySelector(idTecla); /*  */
        reproducirNota(nota);
        tecla.classList.add("active");
        setTimeout(()=>tecla.classList.remove("active"), 100);
    };

    /* Crear un diccionario  de teclas */
const teclas = [
    {id : ".DO", nota: DO, key: 65},
    {id : ".RE", nota: RE, key: 83},
    {id : ".MI", nota: MI, key: 68},
    {id : ".FA", nota: FA, key: 70},
    {id : ".SOL", nota: SOL, key: 71},
    {id : ".LA", nota: LA, key: 72},
    {id : ".SI", nota: SI, key: 74},
    {id : ".DOM", nota: DOM, key: 75}
];

/* por cada tecla, va a recibir el id de mi9 tecla y su nota correspondiente  */
teclas.forEach(({ id, nota }) => {
    const tecla = document.querySelector(id);/* hago la solicitud de mi selector ṕor id  "por cada tecla solicita a nuestro archivo html el id" */
    tecla.addEventListener("click", () => tocarTecla(id, nota)); /*agragamos un evento que escuche un click y llame a la funcion tocar tecla  */
  });

  /* creamos un ciclo for each, creamos una constante llamada tecla  que nos traiga el id, y a nuestro objeto tecla los ponemos a escuchar el evento click */
  

  /* para interactuar con el teclado añado un evento a mi ventana */
  window.addEventListener("keydown", ({ keyCode }) => {  /* lo que escucho es un keydown que hace referencia a presionar una tecla */
    const teclaPresionada = teclas.filter(({ key }) => key === keyCode); /* verifica que la llave de mis teclas coincidan con la tecla presionada, filtramos las teclas para encontrar cual fue la letra que se presiono */
    if (teclaPresionada[0]) {
      const { id, nota } = teclaPresionada[0];
      tocarTecla(id, nota);
    }
  });



