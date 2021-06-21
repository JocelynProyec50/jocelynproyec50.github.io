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


const storage = getStorage();
subeStorage (nombre, telefono, orden, fecha){
if (nombre instanceofString & & nombre.size > 0){
  await storage.ref(nombre).
  put(nombre);
 }
  if (telefono instanceofString & & telefono.size > 0){
  await storage.ref(telefono).
  put(telefono);
 }
  if (orden instanceofString & & orden.size > 0){
  await storage.ref(orden).
  put(orden);
 }
  if (fecha instanceofString & & fecha.size > 0){
  await storage.ref(fecha).
  put(fecha);
 }
}


/** @param {Event} evt */
function guarda(evt) {
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
    await daoCliente.
      add(modelo);
    muestraClientes();
  } catch (e) {
    muestraError(e);
  }
}
