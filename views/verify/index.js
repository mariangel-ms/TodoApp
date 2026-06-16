//Selecciona el elemento HTML donde se mostrara el error o si se verifico
const textInfo = document.querySelector('#text-info');

(async () => {
  try {
    //Extrae el Token
    const token = window.location.pathname.split('/')[3];
    // Extrae el id
    const id = window.location.pathname.split('/')[2];
    // envia el token y el id a la ruta app.js y luego lo redirije a los controladores
      await axios.patch(`/api/users/${id}/${token}`);
      window.location.pathname = '/login/'; //Si esta verificado lo manda al login
  } catch (error) {
      textInfo.innerHTML = error.response.data.error;
  }
})();