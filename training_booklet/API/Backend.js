export function getBlocksData () {
  const url = 'http://localhost:5000/api/get_blocks'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}