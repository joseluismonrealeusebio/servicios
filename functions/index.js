const functions = require('firebase-functions');

exports.recomienda = functions.https.onRequest(
  /** Código para la función recomienda.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      if (!request.query.nombre) {
        throw new Error("Falta el nombre ");
      } else if (!request.query.edad) {
        throw new Error("Falta la edad");
      }
        let sug="";
        const aux=request.query.edad;
      if(aux<12 && aux>6){
          sug=`los videjuegos recomendados para tu edad son\nCrash Bandicoot\nSpyro\nPokemon`;
      }else if(aux>=12 && aux<18){
          sug=`los videjuegos recomendados para tu edad son\nMedal off Honor\nDark Souls\nDragon Ball Xenoverse`;
      }else if(aux>=18){
          sug=`puedes jugar cualquier videojuego`;1
      }else{
          sug=`no tienes edad para los videojuegos :(`;
      } 
      const respuesta = `${sug}`;
      response.send(
        `hola ${request.query.nombre}\n  ${respuesta}`);
    } catch (e) {
      response.send(e.message);
    }
  });