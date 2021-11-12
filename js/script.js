const d = document;


// const btnEnviar = d.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (e) {
//     console.log(e);
//     e.preventDefault();
//     console.log('Enviando formulario');
// });



//Eventos  de los Inputs y Textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}
const nombre = d.querySelector('#nombre');
const email = d.querySelector('#email');
const mensaje = d.querySelector('#mensaje');
const formulario = d.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// nombre.addEventListener('input', function (e){
//     console.log(e.target.value)
// });

function leerTexto (e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);

}
//El evento del Submit

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    //validar formulario 
    const {nombre, email, mensaje} = datos;
    if(nombre ==='' || email ==='' || mensaje ===''){
        mostrarError('Todos los campos son obligatorios');
        return; // corta la ejecucion del codigo
    }
    
    //Crear alerta de enviar correctamente
    mostrarMensaje('Mensaje enviado correctamente')
});

function mostrarMensaje(mensaje){
    const alerta = d.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

       //Desaparezca  despues de 5 segundos
   setTimeout(() =>{
    alerta.remove();
   }, 5000);


}

//Mostrar Error en pantalla 
function mostrarError(mensaje ) {
   const error = d.createElement('P');
   error.textContent = mensaje;
   error.classList.add('error')

   formulario.appendChild( error);

   //Desaparezca  despues de 5 segundos
   setTimeout(() =>{
    error.remove();
   }, 5000);

}