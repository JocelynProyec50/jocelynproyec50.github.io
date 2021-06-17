funtion htmlLista(snap){
  let html="";
  if (snap.size > 0){
    snap.forEach(doc => html += htmlFila(doc));
  } else {
    html += ´<li class="vacio"> --- No hay registros. --- </li>´
  }
  lista.innerHTML=html;
}

function htmlFila(doc){
const data=doc.data();
const orden=cod(data.orden);
const nombre=cod(data.nombre);
var fsf=cod(data.fecha);
var fecha=new Date(fsf);
var espacio="[     -     ]";
var dformat=[fecha.getDate()+1, fecha.getMonth()+1, fecha.getFullYear()].join;
const parametros= new URLSearchParams();
parametros.append("id",doc.id);
return (
  ´<li>
    <a class="fila" href="cliente.html?${parametros}">
    <strong class="primario">
      ${orden} ${nombre} ${dformat}
    </strong>
  </li>´);
}
