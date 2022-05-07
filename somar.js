function clicar() {


    var valor1 = document.querySelector(".valor1").value;
    var valor2 = document.querySelector(".valor2").value;
    if (valor1 > 0 && valor2 > 0) {
        if(valor1 !=null && valor2 !=null)
            var resultado = parseInt(valor1) + parseInt(valor2);
            document.querySelector(".resultado").innerHTML = resultado;
    }
    }