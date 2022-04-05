let btn, url, param, blockBtn;
btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    param = document.getElementById("param").value;
    url = "http://127.0.0.1:3000/employee/" + param;
    loadTable(url)
})

window.onload = function() {
    url = "http://127.0.0.1:3000/employee/";
    loadTable(url)
}

function loadTable(url) {
    let table,
        tr,
        th,
        text
    table = document.getElementById("table")
    clearTable(table)
    request = fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                window.alert("No se hallaron usuarios");
            } else {
                data.forEach(obj => {
                    tr = document.createElement("tr");
                    for (const property in obj) {
                        th = document.createElement("th");
                        text = document.createTextNode(obj[property])
                        th.appendChild(text)
                        tr.appendChild(th)
                        if (property === 'fecha_ingreso') {
                            for (let index = 0; index < 2; index++) {
                                th = document.createElement("th");
                                activeBtn = document.createElement("button");
                                activeBtn.classList.add("btn")
                                if (index === 0) {
                                    activeBtn.classList.add("greenBtn")
                                    activeBtn.setAttribute("onclick", `updateEmployee(${ JSON.stringify(obj) })`)
                                    tr.classList.add("greenTr")
                                    activeBtn.appendChild(document.createTextNode("Actualizar"))
                                } else {  
                                    activeBtn.classList.add("redBtn")
                                    activeBtn.setAttribute("onclick", `deleteEmployee(${ obj.legajo })`)
                                    tr.classList.add("redTr")
                                    activeBtn.appendChild(document.createTextNode("Borrar"))

                                }
                                th.appendChild(activeBtn)
                                tr.appendChild(th)
                            }    
                        }
                    }
                    table.appendChild(tr)
                });
            }
        })
}

function clearTable(table) {
    let childNum = table.children.length;
    while (childNum > 1) {
        table.removeChild(table.lastChild)
        childNum = table.children.length
    }
}

function createEmployee(){
    let data = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("dni").value,
        sector: document.getElementById("sector").value,
        fecha_ingreso: document.getElementById("fecha").value,
        activo: document.querySelector('input[name="activo"]:checked').value
        },
        url = "http://127.0.0.1:3000/insert",
        options = {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
          'Content-Type': 'application/json'
            }
        }

    fetch(url, options)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log(response)
        loadTable("http://127.0.0.1:3000/employee/")
    })
}

function updateEmployee(employee){
    console.log(employee)
}

function deleteEmployee(id){
    
    let option = {
        method: 'DELETE', 
        headers:{
          'Content-Type': 'application/json'
            }
        },
        url = `http://127.0.0.1:3000/delete/${id}`
    
    fetch(url, option)
    .then(res => res.json())
    .catch(error => console.log(error))
    .then(data => {
        console.log(data)
        loadTable("http://127.0.0.1:3000/employee/")
        }
    )
}