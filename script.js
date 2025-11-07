
function getNumber(id) {
  return parseFloat(document.getElementById(id).value) || 0;
}
function showResult(id, result) { 
     document.getElementById(id).textContent = message;
}