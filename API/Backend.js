export function getAllItems (day) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/get_all_items'
              + '?day=' + day
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getSingleItem (item_id, day) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/get_single_item'
              + '?item_id=' + item_id
              + '&day=' + day
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function addItem (order, exercice_name, weight, day, ribtw, description) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/add_item'
              + '?order=' + order
              + '&exercice_name=' + exercice_name
              + '&weight=' + weight
              + '&day=' + day
              + '&ribtw=' + ribtw
              + '&description=' + description
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function updateItem (item_id, order, exercice_name, weight, day, ribtw, description) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/update_item'
              + '?item_id=' + item_id
              + '&order=' + order
              + '&exercice_name=' + exercice_name
              + '&weight=' + weight
              + '&day=' + day
              + '&ribtw=' + ribtw
              + '&description=' + description
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function deleteItem (item_id, day) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/delete_item'
              + '?item_id=' + item_id
              + '&day=' + day
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}