let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");
let user = document.getElementById("user");


const userName = sessionStorage.getItem("userName");

if (userName != null && userName.length != 0) {
    user.innerHTML = "Hello " + userName;
    loginBtn.style.display = "none";
}
else {
    logoutBtn.style.display = "none";
    user.style.display = "none";
}

logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem("userName");
})