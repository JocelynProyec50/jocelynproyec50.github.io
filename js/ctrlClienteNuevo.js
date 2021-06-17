import{
  getAuth,
  getFirestore
}
import{
  getString,
  muestraError
}
import{
  muestaOrdenes
}
const daoOrden=
 getFirestore().
  collection("Orden");
const forma=document("forma");
getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {Event} evt */
async funtion guarda (evt){
  try{
    evt.preventDefault();
    const formData=
      new FormData(forma);
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
    await daoOrden.
    add(modelo);
    muestraOrdenes ();
  } catch (e) {
    muestraError(e);
  }
}
