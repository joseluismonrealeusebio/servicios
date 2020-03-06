function Function() {
    var x = document.createElement("FOOTER");
    x.setAttribute("id", "myFooter");
    document.body.appendChild(x);
  
    var y = document.createElement("P"); 
    var t = document.createTextNode("Jose Luis Monreal Eusebio 191241050.");
    y.appendChild(t);
  
    document.getElementById("myFooter").appendChild(y);
  }