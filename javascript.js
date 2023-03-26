// Función para añadir un número o operador al input
function addToScreen(value) {
    document.getElementById("screen").value += value;
  }
  
  // Función para limpiar el input
  function clearScreen() {
    document.getElementById("screen").value = "";
  }
  
  // Función para calcular el resultado
  function calculate() {
    const screenValue = document.getElementById("screen").value;
    const result = eval(screenValue);
    document.getElementById("screen").value = result;
  }
  