const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const registerButton = document.getElementById('register');
const loginButton = document.getElementById("login");
const loading = document.getElementById('loading');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


function showLoading() {
    container.style.display = "none";
    loading.style.display = "block";
    setTimeout(() => {
        window.location = "index.html";
    }, 4500);
}
registerButton.addEventListener('click', async () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('regEmail').value;
    let pass = document.getElementById('regPass').value;


    const url = "http://localhost:5000/auth/signup";
    let obj = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
            "email": email,
            "name": name,
            "password": pass
        })
    };

    let response = await fetch(url, obj);
    let json;
    if (response.ok) {
        json = await response.json();
        localStorage.setItem("user", JSON.stringify(json));
        let userName = json['name'];
        sessionStorage.setItem("userName", userName);
        showLoading();
        tata.success("Congrats", "Hang in we are transporting you..", {
            duration: 5000,
            position: 'tr',
            animate: 'slide'
        });
    } else {
        let temp = await response.json();
        tata.error("Error", temp.message, {
            duration: 10000,
            position: 'br',
            animate: 'slide'
        });
    }
});

loading.style.display = "none";

loginButton.addEventListener('click', async () => {
    let email = document.getElementById('logEmail').value;
    let pass = document.getElementById('logPass').value;
    const url = "http://localhost:5000/auth/signin";
    let obj = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
            "email": email,
            "password": pass
        })
    };

    let response = await fetch(url, obj);
    let json;
    if (response.ok) {
        json = await response.json();
        localStorage.setItem("user", JSON.stringify(json));
        let userName = json['name'];
        sessionStorage.setItem("userName", userName);
        showLoading();
        tata.success("Congrats", "Hang in we are transporting you..", {
            duration: 5000,
            position: 'tr',
            animate: 'slide'
        });
    } else {
        let temp = await response.json();
        console.error(temp.message);
        tata.error("Error", temp.message, {
            duration: 10000,
            position: 'br',
            animate: 'slide'
        });
    }
});