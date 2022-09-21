var i = 0;
// var A = 0;
    var tag = document.getElementById("texto");
    var html = document.getElementById("texto").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("texto").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
        //console.log(document.getElementById("text").innerHTML);
    }

typeWriter();