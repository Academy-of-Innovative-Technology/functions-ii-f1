
function getNumber(id) {
  return parseFloat(document.getElementById(id).value) || 0;
}

function showResult(id, message) {
  document.getElementById(id).textContent = message;
}



