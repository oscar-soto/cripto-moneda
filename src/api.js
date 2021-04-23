const url = "https://api.coincap.io/v2";

// Importante hacer return para poder acceder a la promesa cuando sea exportado
function getAssests() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(sol => sol.data);
}

function getAssest(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(sol => sol.data);
}

function getAssestHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(sol => sol.data);
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(sol => sol.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(sol => sol.data);
}

export default {
  getAssests,
  getAssest,
  getAssestHistory,
  getMarkets,
  getExchange
};
