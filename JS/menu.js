/*declaro la variable*/
let botonMenu;
/*la inicializo*/
botonMenu = document.querySelector(".hamburger");
console.log(botonMenu);

function mostrarMenu() {
    /*declaro y inicilizo la variable*/
    let navMenu = document.querySelector("primera");

    if(navMenu.style.display === "block"){
        /*si navMenu se muestra, cambia el valor a "none"*/
        navMenu.style.display = "none";

    } else{
      /*de no complirse la condicion de if(), pasa por else*/
      /*en else pedimpos que cambie su estado a "block", por tanto se muestra*/
      navMenu.style.diplay = "block";
    }
};
botonMenu.addEventListener("click", mostrarMenu);  /* click es un evento, mostrar menu la function*/

