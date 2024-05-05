document.getElementById("boton").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.style.right = "0"; // Muestra el menú moviéndolo hacia la derecha
    } else {
      menu.classList.add("hidden");
      menu.style.right = "-220px"; // Oculta el menú moviéndolo hacia la izquierda
    }
  });
  
  
  