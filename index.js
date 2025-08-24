import { traducirAingles } from "./lib/ingles/ingles.js";
import { traducirAespanol } from "./lib/espanol/espanol.js";


const opcionDonar=document.getElementById("donar");
const idioma=document.getElementById("idiomaAnchor");
let cambioIdioma=true;

opcionDonar.addEventListener("click", ()=>{
   console.log("realizo click en Donar)");
})

idioma.addEventListener("click", ()=>{
  cambioIdioma=!cambioIdioma;
  if (cambioIdioma) {
                      idioma.textContent="ES|EN";
                            traducirAespanol();                     

                    } else {
                           idioma.textContent="EN|ES";
                           traducirAingles();
                    }
})