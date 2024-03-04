function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameField = document.getElementById("username");
    var passwordField = document.getElementById("password");
    var statusMessage = document.querySelector(".status-message");

    // Verifica las condiciones de validación, aquí puedes personalizar según tus necesidades.
    if (username === "") {
      setStatusMessage("error", "Por favor, ingresa tu nombre de usuario.");
      clearAndFocusField(usernameField);
    } else if (password === "") {
      setStatusMessage("error", "Por favor, ingresa tu contraseña.");
      clearAndFocusField(passwordField);
    } else {
      // Simulación de inicio de sesión exitoso
      setStatusMessage("success", "Inicio de sesión exitoso. Redirigiendo...");
      // Puedes redirigir a otra página o realizar otras acciones aquí
    }
  }

  function setStatusMessage(type, message) {
    var statusMessage = document.querySelector(".status-message");
    statusMessage.textContent = message;
    statusMessage.className = "status-message " + type;
    statusMessage.classList.remove("visually-hidden");
  }

  function clearAndFocusField(field) {
    field.value = "";
    field.focus();
  }
