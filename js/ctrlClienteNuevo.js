import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraClientes
} from "./nave.js";

const daoCliente = getFirestore().collection("Cliente");
/** @type {HTMLFormElement} */
const forma = document["forma"];
getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {Event} evt */
function guarda() {
  try {
    evt.preventDefault();
    const formData= new FormData(forma);
    const nombre=getString(formData,"nombre").trim();
    const telefono=getString(formData,"telefono").trim();
    const orden=getString(formData,"orden").trim();
    const fecha=getString(formData,"fecha").trim();
    
    const modelo = {
      nombre,
      telefono,
      orden,
      fecha
    };
    firestore.collection("Cliente").add({
    nombre:nombre,
    telefono:telefono,
      orden:orden,
      fecha:fecha
    
    });
    muestraClientes();
  } catch (e) {
    muestraError(e);
  }
}
