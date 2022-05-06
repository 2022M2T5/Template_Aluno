var g = 10


function tempo(){
    var t = "" 
    v = document.getElementById("v0").value;
    t = v/g;

    var res = document.getElementById("resultado")

    res.innerHTML = `o resultado do tempo de subida é ${t}`

};

function altura(){
    var h =""
    v = document.getElementById("v0").value;
    h = (v**2)/(g*2);

    var res1 = document.getElementById("resultado1")

    res1.innerHTML = `o resultado da altura é ${h}`

};