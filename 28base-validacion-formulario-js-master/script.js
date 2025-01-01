const firebaseConfig = {
  apiKey: "AIzaSyBuERwYNFHSzwvhbqY8VgNJGJo3VJj3h6I",
  authDomain: "datos-de-formulario-1.firebaseapp.com",
  projectId: "datos-de-formulario-1",
  storageBucket: "datos-de-formulario-1.firebasestorage.app",
  messagingSenderId: "636674972215",
  appId: "1:636674972215:web:0aa1551daf05599136fdb2",
  measurementId: "G-XZNJ0ZZX1R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  // validar campo nombre
  let entradaNombre = document.getElementById("name");
  let errorNombre = document.getElementById("nameError");

  if (entradaNombre.value.trim() === "") {
    errorNombre.textContent = "Por favor, introducí tu nombre";
    errorNombre.classList.add("error-message");
  } else {
    errorNombre.textContent = "";
    errorNombre.classList.remove("error-message");
  }

  // validar correo electronico
  let emailEntrada = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patron de validación basico
  if (!emailPattern.test(emailEntrada.value)) {
    emailError.textContent = "Por favor, introducí tu mail valido";
    emailError.classList.add("error-message");
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-message");
  }

  // validar la contraseña
  let contrasenaEntrada = document.getElementById("password");
  let contrasenaError = document.getElementById("passwordError");
  let contrasenaPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

  if (!contrasenaPattern.test(contrasenaEntrada.value)) {
    contrasenaError.textContent =
      "La contraseña debe tener al menos 8 caractteres a 15, numeros, mayusculas y minusculas y caracteres especiales";
    contrasenaError.classList.add("error-message");
  } else {
    contrasenaError.textContent = "";
    contrasenaError.classList.remove("error-message");
  }

  // Si todos los campos son validos enviar formulario

  if (
    !errorNombre.textContent &&
    !emailError.textContent &&
    !contrasenaError.textContent
  ) {
    // BACKEND QUE RECIBA INFORMACION

    db.collection("users")
      .add({
        nombre: entradaNombre.value,
        email: emailEntrada.value,
        password: contrasenaEntrada.value,
      })
      .then((docRef) => {
        alert("El formulario se ha enviado con exito", docRef.id);
        document.getElementById("formulario").reset();
      })
      .catch((error) => {
        alert(error)
      });

  }
});
