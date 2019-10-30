    // var x = document.getElementById("foamOptions");
    // var i = x.selectedIndex;
    // document.getElementById("price1").innerHTML = "20x20in / Price:" + x.options[i].value;

var colorName; 
var pillows = [];
    

function selectChange() {
    var x = document.getElementById("foamOptions");
    var i = x.selectedIndex;
    document.getElementById("price1").textContent = "20x20in / Price:" + x.options[i].value;
  }



  function border(color) {
        console.log(color);
        console.log(color.id);

        document.getElementById("white").style.border = "";
        document.getElementById("yellow").style.border = "";
        document.getElementById("brown").style.border = "";
        document.getElementById("orange").style.border = "";
        document.getElementById(color.id).style.border = "thick solid #4A4A4A";
        document.getElementById("colorName").innerHTML = "Color: " + color.id;
        colorName = color.id;
  }


  class pillow {
    constructor(price, color, foam) {
        this.name = "the original";
        this.color = color;
        this.price = price
        this.foam = foam;
    }
}


function newPillow(){
    var foamItem = document.getElementById("foamOptions");
    var price = foamItem.options[foamItem.selectedIndex].value;
    var foam =  foamItem.options[foamItem.selectedIndex].text;

    var item = new pillow(price,colorName,foam);

    pillows.push(item);

    var cartText = String("Cart " + pillows.length)

    document.getElementById("cartLink").getElementsByTagName('a')[0].innerHTML = "Cart " + pillows.length
    console.log(cartLink)
    localStorage.setItem("savePillow",JSON.stringify(pillows))

}


function addPillow(){
    var newDiv = document.createElement("div"); 
}

for(var i = 0; i < v; i++){ 
    var row = document.createElement("div"); 
    row.className = "cart-container"; 
    for(var x = 1; x <= 4; x++){ 
        var cell = document.createElement("div"); 
        cell.className = "cart-item"; 
        cell.innerText = (i * v) + x;
        row.appendChild(cell); 
    } 
    e.appendChild(row); 
  } 
