function login(){

    let user, pass, container, p, request, y, message;
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    container = document.getElementById("container");

    p = document.createElement(p);
    var div = document.createElement("div");
    div.classList.add("message");

    request = fetch("http://168.194.207.98:8081/tp/login.php?user="+user+"&pass="+pass)
    .then(response => response.json())
    .then(data => {
        if(user == "" || pass == ""){
            div.classList.add("warningMessage")
            message = "Debe ingresar ambos parámetros"
        }else if(data.respuesta == "ERROR"){
            div.classList.add("errorMessage")
            message = data.mje
        }else{
            window.location.replace("lista.html")
        }
        y = document.createTextNode(message)
        p.appendChild(y);
        div.appendChild(p);
        container.appendChild(div);
    })
}