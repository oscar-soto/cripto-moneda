const url = 'https://api.coincap.io/v2';

// Importante hacer return para poder acceder a la promesa cuando sea exportado
function getAssest() {
   return fetch(`${url}/assets?limit=20`)
      .then(res => res.json())
      .then(sol => sol.data)
}

export default {
   getAssest
}