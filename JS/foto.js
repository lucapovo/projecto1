window.onload = function () {

    /* variables */
  
    //almacenamo el nombre de las foto da cargar en src=""
    let fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];         // 0, 1, 2 //          
  //almacenamos la descripcion de cada foto da cargar en añt=""
    let descripcio = ["descripcion de foto1", "descripcion de foto2", "descripcion de foto3"]; 
  
    let posicionActual = 0;
    let descripcionActual = 0;
  
    let botonRetroceder = document.getElementById("retroceder");
    let botonAvanzar = document.getElementById("avanzar");
  
    //funciones//
    function passFoto(){
      if((posicionActual >= fotos.length - 1) && (descripcionActual >= descripcio.length -1)) {
  
        posicionActual = 0;
        descripcionActual = 0;
      } else {
        posicionActual++;
        descripcionActual++;
      }
      renderizarImagen();
    };
  
    //funcion que hace arrotreder en la array//
    function retrocederFoto() {
      if((posicionActual <=0) && (descripcionActual <=0)) {
        posicionActual = fotos.length -1;
        descripcionActual = descripcio.length -1;
      } else {
       posicionActual--;
       descripcionActual--;
      }
      renderizarImagen();
    };
  //pinta la imagen en el navigador//
    function renderizarImagen(){
      document.getElementById("imagen").innerHTML =                           //per pintar dentro texto//
    `<img src="img/${fotos[posicionActual]}" alt="${descripcio[descripcionActual]}">`;
    }
  
    // eventos//
    botonAvanzar.addEventListener("click", passFoto);
    botonRetroceder.addEventListener("click", retrocederFoto);
  
    //  inicializar el renderizado //
  
    renderizarImagen();
  }