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
      firestore.collection("CLIENTE").add({
          NOMBRE: nombre.value.trim(),
          // @ts-ignore
          TELÉFONO: telefono.value.trim(),
          ORDEN: orden.value.trim(),
          // @ts-ignore
          FECHA: firebase.firestore.FieldValue.serverTimestamp()
        });
  try {
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
      update(modelo);
    muestraClientes();
  } catch (e) {
    muestraError(e);
  }
}
