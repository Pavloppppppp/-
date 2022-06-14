function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form_message");

  messageElement.textContent = message;
  messageElement.classList.remove("form_message_success", "form_message_error");
  messageElement.classList.add(`form_message_${type}`)
}

function setInputError(inputElement, message) {
  inputElement = document.getElementById("signupUsername");
  inputElement.classList.add("form_input_error");
  inputElement.parentElement.querySelector(".form_input_error_message").textContent = message;
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const CreateForm = document.querySelector("#createAcount");
  const loginContainer = document.querySelector("#login_container");
  const createContainer = document.querySelector("#create_container");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginContainer.classList.add("form_hidden");
    createContainer.classList.remove("form_hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginContainer.classList.remove("form_hidden");
    createContainer.classList.add("form_hidden");
  });

  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".input_section").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
      if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value < 10) {
        setInputError(inputElement, "Username must be at least 10 characters in length");
      }
    });
  });
});