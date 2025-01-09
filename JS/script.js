  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAPT_eT305D-CynfmVF8RBWkiv6ynyiiuE",
    authDomain: "portfolio-f59e1.firebaseapp.com",
    projectId: "portfolio-f59e1",
    storageBucket: "portfolio-f59e1.firebasestorage.app",
    messagingSenderId: "308227109320",
    appId: "1:308227109320:web:6216b3383d1743e5f4d0fd",
    measurementId: "G-KBX8HJ8D8R"
  };

  /* Firebase config */
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  let docid = "";

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  auth.signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
          sessionStorage.setItem("uid", userCredentials.user.uid)
          window.location.href = "./index.html"
      })
      .catch((error) => {
          console.error("Failed: " + error.message);
      })
}

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;

  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
          db.collection("users").doc(userCredentials.user.uid).set({
              email: email,
              fname: fname,
              lname: lname,
              userId: userCredentials.user.uid
          })
          .then(function () {
              window.location.href = "./index.html";
          })
  })

  .catch((err) => {
      alert(err.message)
      console.log(err.code);
      console.log(err.message);
  });
}

function checkUserStatus() {
  const user = auth.currentUser;
  const navDiv = document.querySelector(".nav"); // Select the div with class "nav"

  if (!navDiv) {
    console.error("Nav div not found.");
    return;
  }

  // Clear existing nav items to avoid duplication
  navDiv.innerHTML = "";

  if (user) {
    console.log("User logged in:", user);

    const logoutItem = document.createElement("li");
    const logoutLink = document.createElement("a");
    logoutLink.textContent = "Logg ut";
    logoutLink.setAttribute("onclick", "logout()");
    logoutItem.appendChild(logoutLink);

    navDiv.appendChild(logoutItem);
  } else {
    console.log("No user logged in.");

    const loginItem = document.createElement("li");
    const loginLink = document.createElement("a");
    loginLink.textContent = "Logg Inn";
    loginLink.setAttribute("onclick", "openLogInPage()");
    loginItem.appendChild(loginLink);

    navDiv.appendChild(loginItem);
  }
}

function logout() {
  auth.signOut()
    .then(() => {
      console.log("Logged out successfully.");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      console.error("Sign out error:", error);
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", checkUserStatus);

// Add event listeners for Enter key press
document.getElementById("login-email").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      login();
  }
});

document.getElementById("login-password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      login();
  }
});

document.getElementById("email").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      signUp();
  }
});

document.getElementById("password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      signUp();
  }
});

document.getElementById("fname").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      signUp();
  }
});

document.getElementById("lname").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      signUp();
  }
});

function closeAddModal() {
  const modal = document.getElementById('add-modal');
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll'); // Re-enable scrolling
  window.location.reload(); // Refresh the page
}

function openAddModal(){
  const addContent = document.getElementById('add-modal');
  addContent.style.display = 'block';
}

function closeLogInPage() {
  const modal = document.getElementById('main');
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll'); // Re-enable scrolling
  window.location.reload(); // Refresh the page
}

function openLogInPage() {
  const addContent = document.getElementById('main');
  addContent.style.display = 'block';
}