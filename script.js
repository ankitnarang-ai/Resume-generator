// Auth functions
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some(user => user.email === email)) {
        alert('User already exists!');
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Please login.');
    toggleForms();
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('cv-form').style.display = 'block';
    } else {
        alert('Invalid credentials!');
    }
}

// CV generation functions
function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('weField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.querySelector("#we .buttonContainer");
    
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('eqField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.querySelector("#aq .buttonContainer");
    
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById('contactField').value;
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    let wes = document.getElementsByClassName('weField');
    let str = "";
    for (let e of wes) {
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = str;

    let aqs = document.getElementsByClassName('eqField');
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

function printCV() {
    window.print();
}