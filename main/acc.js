// const API = "http://localhost:8000/users";

// document.addEventListener("DOMContentLoaded", function () {
//   const signInButton = document.getElementById("signInButton");
//   const signUpButton = document.getElementById("signUpButton");

//   signInButton.addEventListener("click", function () {
//     const email = document.getElementById("signInEmail").value;
//     const password = document.getElementById("signInPassword").value;

//     authenticateUser(email, password);
//   });

//   signUpButton.addEventListener("click", function () {
//     const email = document.getElementById("signUpEmail").value;
//     const password = document.getElementById("signUpPassword").value;

//     registerUser(email, password);
//   });
// });

// function authenticateUser(email, password) {
//   fetch(API + "/authenticate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.success) {
//         closeModalAndRefresh("#signInModal");
//       } else {
//         alert("Authentication failed. Please check your credentials.");
//       }
//     })
//     .catch((error) => {
//       console.error("Authentication error:", error);
//     });
// }

// function registerUser(email, password) {
//   fetch(API + "/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.success) {
//         closeModalAndRefresh("#signUpModal");
//       } else {
//         alert("Registration failed. Email might already be in use.");
//       }
//     })
//     .catch((error) => {
//       console.error("Registration error:", error);
//     });
// }

// function closeModalAndRefresh(modalId) {
//   const modal = new bootstrap.Modal(document.querySelector(modalId));
//   modal.hide();
// }
