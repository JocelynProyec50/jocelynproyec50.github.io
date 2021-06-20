import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  cod,
  muestraError
} from "../lib/util.js";

const lista = document.querySelector("#lista");
const daoCliente = getFirestore().collection("CLIENTE");

getAuth().onAuthStateChanged(protege, muestraError);

function consulta() {
  daoCliente.orderBy("nombre").onSnapshot(htmlLista, errConsulta);
}
      
function htmlLista(snap) {
  let html = "";
  if (snap.size > 0) {
    snap.forEach(doc => html += htmlFila(doc));
  } else {
    html += /* html */
      `<li class="vacio"> -- No hay pasatiempos registrados. -- </li>`;
  }
  lista.innerHTML = html;
}

function htmlFila(doc) {
  
  const data = doc.data();
  const orden = cod(data.orden);
  const nombre = cod(data.nombre);
  var fsf = cod(data.fecha);
  var fecha= new Date(fsf);
  var espacio= "[     -     ]";
  var dformat= [fecha.getDate()+1, fecha.getMonth()+1, fecha.getFullYear()].join(' / ');
  const parámetros= new URLSearchParams();
  parámetros.append("id", doc.id);
  return (
    `<li>
    <a class="fila" href="cliente.html?${parámetros}">
    <strong class="primario">
      ${orden} ${nombre} ${dformat}
    </strong>
    </a>
  </li>`);
}

function errConsulta(e) {
  muestraError(e);
  consulta();
}
