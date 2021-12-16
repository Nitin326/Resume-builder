const addNewskillField = () => {

    let newNode = document.createElement("input");
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let skillObj = document.getElementById("skill");
    let skilleqBtnOb = document.getElementById("skillAddBtn");

    skillObj.insertBefore(newNode, skilleqBtnOb);

}

const addNewlangField = () => {

    let newNode = document.createElement("input");
    newNode.classList.add('form-control');
    newNode.classList.add('langField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let langObj = document.getElementById("lang");
    let langeqBtnOb = document.getElementById("langAddBtn");

    langObj.insertBefore(newNode, langeqBtnOb);

}

const addNewaqField = () => {

    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqObj = document.getElementById("Aq");
    let aqAddBtnOb = document.getElementById("aqAddBtn");

    aqObj.insertBefore(newNode, aqAddBtnOb)
}

const addNewprojectField = () => {

    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('projectField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let pjObj = document.getElementById("project");
    let pjAddBtnOb = document.getElementById("projectAddBtn");

    pjObj.insertBefore(newNode, pjAddBtnOb)

}

const addNewweField = () => {

    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('wexpField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weObj = document.getElementById("we");
    let weeqBtnOb = document.getElementById("weAddBtn");

    weObj.insertBefore(newNode, weeqBtnOb);

}

const submitDetail = () => {

    //passing name in template
    let nameField = document.getElementById('nameField').value;
    let tName = document.getElementById('tName');
    tName.innerHTML = nameField;

    // passing tag line
    document.getElementById('tLine').innerHTML = document.getElementById('tagField').value;

    // passing contact number
    document.getElementById('tContact').innerHTML = document.getElementById('contactnumField').value;

    // passing email
    document.getElementById('tEmail').innerHTML = document.getElementById('emailField').value;

    // passing Linkedkin
    document.getElementById('tLinked').innerHTML = document.getElementById('linkedField').value;

    // passing Address
    document.getElementById('tAddress').innerHTML = document.getElementById('addressField').value;

    // passing Image
    let image = document.getElementById('imageField').value;
    document.getElementById('tImage').src = `${image}`;

    //skill Adding
    let skill = document.getElementsByClassName('skillField')
    let str = "";

    for (let e of skill) {
        str = str + `<p>${e.value}</p>`
    }
    document.getElementById("tExp").innerHTML = str;

    // language adding 
    let lang = document.getElementsByClassName('langField')
    let langstr = "";

    for (let e of lang) {
        langstr = langstr + `<p>${e.value}</p>`
    }
    document.getElementById("tLang").innerHTML = langstr;

    // passing  Objective

    document.getElementById('tObjective').innerHTML = document.getElementById('objectiveField').value;

    // academic qualification adding 

    let acaDemic = document.getElementsByClassName('aqField')
    let aqstr = "";

    for (let e of acaDemic) {
        aqstr = aqstr + `<p>${e.value}</p>`
    }
    document.getElementById("tAcademic").innerHTML = aqstr;

    // Experience adding 
    let wq = document.getElementsByClassName('wexpField')
    let wqstr = "";

    for (let e of wq) {
        wqstr = wqstr + `<p>${e.value}</p>`
    }
    document.getElementById("tWorkexp").innerHTML = wqstr;

    // Project adding 

    let project = document.getElementsByClassName('projectField')
    let projectstr = "";

    for (let e of project) {
        projectstr = projectstr + `<p>${e.value}</p>`
    }

    document.getElementById("tProject").innerHTML = projectstr;

    // Hiding the form and showing Template
    document.getElementById('cvForm').style.display = 'none';
    document.getElementById('tCv').style.display = 'block';
}

const printCv = () => {
    document.getElementById('printBtn').style.display = 'none';
    window.print();
}