export function getAllItems () {
  const url = 'http://training-booklet-backend.herokuapp.com/api/get_all_items'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getSingleItem (item_id) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/get_single_item'
              + '?item_id=' + item_id
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function addItem (exercice_name, weight, ribtw, description) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/add_item'
              + '?exercice_name=' + exercice_name
              + '&weight=' + weight
              + '&ribtw=' + ribtw
              + '&description=' + description
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function updateItem (item_id, exercice_name, weight, ribtw, description) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/update_item'
              + '?item_id=' + item_id
              + '&exercice_name=' + exercice_name
              + '&weight=' + weight
              + '&ribtw=' + ribtw
              + '&description=' + description
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function deleteItem (item_id) {
  const url = 'http://training-booklet-backend.herokuapp.com/api/delete_item'
              + '?item_id=' + item_id
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}