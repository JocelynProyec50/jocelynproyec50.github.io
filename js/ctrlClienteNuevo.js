

const daoCliente= getFirestore().collection("Orden");
const forma= document["forma"];
getAuth().onAuthStateChanged(protege, muestraError);

/** @param {Event} evt */
async function guarda (evt) {
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
    await daoCliente.add(modelo);
    muestraClientes();
  } catch (e) {
    muestraError(e);
  }
}
