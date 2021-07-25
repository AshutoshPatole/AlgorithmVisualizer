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
    }, 3000);
}
const authToast = (sub, message, isSuccess) => {
    isSuccess ? tata.success(sub, message, {
        duration: 5000,
        position: 'tr',
        animate: 'slide'
    }) :
        tata.error(sub, message, {
            duration: 10000,
            position: 'br',
            animate: 'slide'
        });
}

registerButton.addEventListener('click', async () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('regEmail').value;
    let pass = document.getElementById('regPass').value;


    const url = "https://visualisealgo.herokuapp.com/auth/signup";
    let obj = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
            "email": email,
            "name": name,
            "password": pass
        })
    };

    try {
        let response = await fetch(url, obj);
        let json;
        if (response.ok) {
            json = await response.json();
            localStorage.setItem("user", JSON.stringify(json));
            let userName = json['name'];
            sessionStorage.setItem("userName", userName);
            showLoading();
            authToast("Congrats", "Hang in we are transporting you..", true);

        } else {
            let temp = await response.json();
            authToast("Error", temp.message, false);

        }
    }
    catch (e) {
        authToast("Server Error", "Houston we have a problem", false);

    }
});

loading.style.display = "none";


loginButton.addEventListener('click', async () => {
    let email = document.getElementById('logEmail').value;
    let pass = document.getElementById('logPass').value;
    const url = "https://visualisealgo.herokuapp.com/auth/signin";
    let obj = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
            "email": email,
            "password": pass
        })
    };

    try {
        let response = await fetch(url, obj);
        let json;
        if (response.ok) {
            json = await response.json();
            localStorage.setItem("user", JSON.stringify(json));
            let userName = json['name'];
            sessionStorage.setItem("userName", userName);
            showLoading();
            authToast("Congrats", "Hang in we are transporting you..", true);
        } else {
            let temp = await response.json();
            console.error(temp.message);
            authToast("Error", temp.message, false);
        }
    }
    catch (e) {
        authToast("Server Error", "Houston we have a problem", false);
    }
});