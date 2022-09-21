const botao = document.querySelector(".bnt__fixed");

window.addEventListener("scroll", function (event){

    if (window.scrollY == 0){

        botao.classList.remove("visible");

    } else {

        botao.classList.add("visible");

    }

});