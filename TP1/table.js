let btn, url, param, blockBtn;
btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    param = document.getElementById("param").value;
    url = "http://168.194.207.98:8081/tp/lista.php?action=BUSCAR&usuario=" + param;
    loadTable(url)
})

window.onload = function() {
    url = "http://168.194.207.98:8081/tp/lista.php?action=BUSCAR";
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
                        if (property === 'nombre') {
                            th = document.createElement("th");
                            blockBtn = document.createElement("button");
                            blockBtn.classList.add("btn")
                            if (obj['bloqueado'] === "N") {
                                blockBtn.classList.add("redBtn")
                                tr.classList.add("greenTr")
                                blockBtn.appendChild(document.createTextNode("Bloquear"))
                            } else {
                                blockBtn.classList.add("greenBtn")
                                tr.classList.add("redTr")
                                blockBtn.appendChild(document.createTextNode("Desbloquear"))
                            }
                            blockBtn.setAttribute("onclick", `changeStatus(${obj['id']}, '${obj['bloqueado']}')`)
                            th.appendChild(blockBtn)
                            tr.appendChild(th)
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