function addNewWEField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute("rows", 3);
    let weOb = document.getElementById("we");

    let weAddButtonOB = document.getElementById("WeAddButton");

    weOb.insertBefore(newNode, weAddButtonOB);
}
function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.setAttribute("rows", 3);
    let aqOb = document.getElementById("aq");

    let eqAddButtonOB = document.getElementById("eqAddButton");

    aqOb.insertBefore(newNode, eqAddButtonOB);
}
//generating cv 
function generateCV() {
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    // contact
    document.getElementById("contactT").innerHTML = document.getElementById('contactField').value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    //facebook
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    //instagram
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
    //linkedin
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;
    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    //workexperience
    let wes = document.getElementsByClassName('weField');
    let str = "";
    for (let e of wes) {
        str = str + `<li>  ${e.value}  </li>`;
    }
    document.getElementById('weT').innerHTML = str;
    // Academic qualification
    let aqs = document.getElementsByClassName('eqField');
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li>  ${e.value}  </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

// Print CV
function printCV() {
    window.print();
}
