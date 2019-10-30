var colorName; 
    
//change price according to seleted foam option
function selectChange() {
    var x = document.getElementById("foamOptions");
    var i = x.selectedIndex;
    document.getElementById("price1").textContent = "20x20in / Price:" + x.options[i].value;
  }


// add border to selected colors 
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


// class for creating indiviudal items 
class pillow {
    constructor(price, color, foam,img) {
        this.name = "The Original";
        this.color = color;
        this.price = price
        this.foam = foam;
        this.img = img
    }
}


// add and store individual item, update cart number 
function newPillow(){

    var pillows = JSON.parse(localStorage.getItem('Pillow'));
    var foamItem = document.getElementById("foamOptions");
    var price = foamItem.options[foamItem.selectedIndex].value;
    var foam =  foamItem.options[foamItem.selectedIndex].text;
    var img = document.getElementById("imageLink").getAttribute("value");
    var item = new pillow(price,colorName,foam,img);
    pillows.push(item);
    localStorage.setItem("Pillow",JSON.stringify(pillows))
    updateCartNum();
 
}


// function for updating the cart numbers 
function updateCartNum(){
    var cartText = String("Cart " + JSON.parse(localStorage.getItem('Pillow')).length)
    document.getElementsByClassName('cartLink')[0].getElementsByTagName('a')[0].innerHTML = cartText

}


// update the display of the shopping cart 
function addPillow(){
    updateCartNum();

    var items = JSON.parse(localStorage.getItem('Pillow')) 
    //delete existing cart items every time 
    var paras = document.getElementsByClassName('cart-container');
    while(paras[0]){
    paras[0].parentNode.removeChild(paras[0]);}

   //looping throuugh the local storage items to add each section of the item
    for(var i = 0; i < items.length; i++){ 
        var row = document.createElement("div"); 
        var current = items[i];
        row.className = "cart-container";
    
        for(var x = 0; x <= 5; x++){ 
            var cell = document.createElement("div"); 
            var content = document.createElement("div"); 
            cell.className = "cart-item"; 
            content.className = "cartContent"
            if(x == 0){
                var name = current.name;
                cell.innerText = name;
                var url = current.img
                var image = document.createElement('img')
                image.src = url 
                content.appendChild(image)
            } else if (x == 1){
                var options = ["white","yellow","brown","orange"]
                var selected = current.color 
                var selectList = createSelector(options,selected) 
                content.appendChild(selectList)
            } else if (x==2) {

                var options = ['Duck Down','Memory Foam','Hypoallergenic Poly-blend']
                var selected = current.foam 
                var selectList = createSelector(options,selected) 
                content.appendChild(selectList)
            } else if (x==3) {

                var options = ['1','2','3','4']
                var selected = '1' 
                var selectList = createSelector(options,selected) 
                content.appendChild(selectList)
            } else if (x == 4) {

                content.innerText=current.price
                //cell.setAttribute("id", "priceBox");
                
            } else if (x== 5) {
                cell.className = "removeButton"
                var button = document.createElement("button")
                button.value = i;
                button.innerText = "remove"
                button.addEventListener('click', function(){
                    deleteSection(button.value)});
                content.appendChild(button)

                
            } 
            cell.appendChild(content);
            row.appendChild(cell); 
        }

        //insert section before total price section 
        var head = document.getElementById('cartheader')
        var price = document.getElementById('totalPrice')
        head.parentNode.insertBefore(row,price)


    } 
    //update total price
    calculatePrice()

}

//function to create a selector tag 
function createSelector(options,value){

    var options = options
    var selectList = document.createElement("select");

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        selectList.appendChild(option);
    }
    selectList.value = value; 

    return selectList
}

//function to delete a cart item according to index
function deleteSection(index){
    //var index = document.getElementsByTagName("button").value
    var items = JSON.parse(localStorage.getItem('Pillow'));
    console.log(index)
    console.log(JSON.parse(localStorage.getItem('Pillow')))
    items.splice(index-1,1);
    console.log(items)
    localStorage.clear();
    localStorage.setItem("Pillow",JSON.stringify(items));

    addPillow();

}


//function to calculate price 
function calculatePrice(){
    var total = 0; 

    var items = JSON.parse(localStorage.getItem('Pillow')) 
    for(var i = 0; i < items.length; i++){ 
        //console.log(items[i].price)
        var price = items[i].price.slice(1);  
        total += Number(price); 

    }

    document.getElementById('total').textContent = '$'+ total;

}



