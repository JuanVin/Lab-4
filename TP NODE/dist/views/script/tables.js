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
    let request,
        table,
        tr,
        th,
        text
    table = document.getElementById("table")
    clearTable(table)
    request = fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
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
                                blockBtn = document.createElement("button");
                                blockBtn.classList.add("btn")
                                if (index === 0) {
                                    blockBtn.classList.add("greenBtn")
                                    tr.classList.add("greenTr")
                                    blockBtn.appendChild(document.createTextNode("Actualizar"))
                                } else {  
                                    blockBtn.classList.add("redBtn")
                                    blockBtn.setAttribute("onclick", `deleteEmployee(${ obj.legajo })`)
                                    tr.classList.add("redTr")
                                    blockBtn.appendChild(document.createTextNode("Borrar"))

                                }
                                th.appendChild(blockBtn)
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

function changeStatus(id, status) {
    console.log(id, status)
    if (status === "Y") status = "N"
    else status = "Y"
    fetch(`http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${id}&estado=${status}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.respuesta)
            loadTable(url)
        })
}
function createEmployee(){

    let data = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("dni").value,
        sector: document.getElementById("sector").value,
        fecha_ingreso: document.getElementById("fecha").value,
        activo: document.getElementById("activo").value
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
function deleteEmployee(id){
    
    let option = {
        method: 'DELETE', 
        headers:{
          'Content-Type': 'application/json'
        }
      }
    
    fetch(`http://127.0.0.1:3000/delete/${id}`, option)
    .then(res => res.json())
    .catch(error => console.log(error))
    .then(data => {
        console.log(data)
        loadTable("http://127.0.0.1:3000/employee/")
        }
    )
}