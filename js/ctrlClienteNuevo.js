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
      /** Conexión a la base de datos. */
      // @ts-ignore
      const firestore = firebase.firestore();
      /** Agrega un usuario a la base de datos. */
      function agrega() {
        /* "MENSAJE" es el nombre de la colección a la que se agregan los datos.
         * "USUARIO", "TEXTO" y "TIMESTAMP" son los nombres de los campos en el
         * documento.
         * El timestamp contiene la fecha y hora en que se agrega el registro.*/
        firestore.collection("CLIENTE").add({
          NOMBRE: nombre,
          // @ts-ignore
          ORDEN: orden.value.trim(),
          TELEFONO: telefono.value.trim(),
          // @ts-ignore
        });
      }
      /** Muestra los mensaje almacenados en la collection "MENSAJE". Se
       * actualiza automáticamente. */
      function muestraMensajes() {
        /* Consulta que se actualiza automáticamente. Pide todos los registros
         * de la colección "MENSAJE" ordenador por el campo "TIMESTAMP" de forma
         * descendiente. */
        firestore.collection("CLIENTE")
          .onSnapshot(
            /** Función que muestra los datos enviados por el servidor. Si los
             * datos cambian en el servidor, se vuelve a invocar esta función y
             * recibe los datos actualizados.
             * @param {Array} querySnapshot estructura parecida a un Array, que
             * contiene una copia de los datos en el servidor. */
            querySnapshot => {
              // Vacía la lista con los mensajes.
              // @ts-ignore
              lista.innerHTML = "";
              /* Revisa un por uno los registros de la consulta y los muestra.
               * El iterador "doc" es un registro de la base de datos. */
              querySnapshot.forEach(doc => {
                // recupera los datos almacenados en el registro.
                const data = doc.data();
                
                var d = data.toDate(),
                dformat = [d.getDate(), d.getMonth()+1, d.getFullYear()].join(':');
                /* Agrega un li con los datos del registro, que se codifican
                 * para evitar inyección de código. */
                // @ts-ignore
                lista.innerHTML += /* html */
                  `<li><u>${cod(data.NOMBRE)}</u> ${dformat}<br>${cod(data.ORDEN)}</li>`;
              })
            },
