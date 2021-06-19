import{
  getAuth,
  getFirestore
}
import{
  getString,
  muestraError
}
import{
  muestraClientes
}

const daoCliente = getFirestore().collection("Cliente");
const params = new URL (location.href).searchParams;
const id= params.get("id");
const forma= document["forma"];

getAuth().onAuthStateChanged(protege, muestraError);

async function busca() {
  try {
    const doc= await daoCliente.doc(id).get();
    if (doc.exists) {
      const data= doc.data();
      forma.nombre.value= data.nombre;
      forma.telefono.value= data.telefono || "";
      forma.orden.value= data.orden || "";
      forma.fecha.value= data.fecha || "";
      forma.addEventListener("submit", guarda);
      forma.eliminar.addEventListener("click", elimina);
    } else {
      throw new Error("No se encontró.");
    }
  } catch (e) {
    muestraError(e);
    muestraClientes();
  }
}

async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData= new FormData(forma);
    const nombre = getString(formData, "nombre").trim();
    const telefono = getString(formData, "telefono").trim();
    const orden = getString(formData, "orden").trim();
    const fecha = getString(formData, "fecha").trim();
    
    const modelo = {
      nombre,
      telefono,
      orden,
      fecha
    };
    await daoCliente.doc(id).set(modelo);
    muestraClientes();
  } catch (e) {
    muestraError(e);
  }
}

async function elimina() {
  try {
    if (confirm("Confirmar la " + "eliminación")){
      await daoCliente.doc(id).delete();
      muestraClientes();
    }
  } catch (e) {
    muestraError(e);
  }
}
