const url = 'https://api.coincap.io/v2';

// Importante hacer return para poder acceder a la promesa cuando sea exportado
function getAssests() {
   return fetch(`${url}/assets?limit=20`)
      .then(res => res.json())
      .then(sol => sol.data)
}

function getAssest(coin) {
   return fetch(`${url}/assets/${coin}`)
      .then(res => res.json())
      .then(sol => sol.data)
      
}

export default {
   getAssests,
   getAssest
}