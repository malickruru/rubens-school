var username;
var password;

username = prompt("Entrez votre nom d'utilisateur!");
password = prompt("Entrez votre mot de pass!");

if (username == "admin" && password == "admin") {
  window.location.href = "/admin/dashboard.html";
} else {
  alert("identifiant incorrect!");
}
