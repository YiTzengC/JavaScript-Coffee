// customer constructor
function order(name, drink, size, drizzle, whippedCream, sweetener, coldFoam, dairy){

    this.name = name;
    this.drink = drink;
    this.size = size;
    this.drizzle = drizzle;
    this.whippedCream = whippedCream;
    this.sweetener = sweetener;
    this.coldFoam = coldFoam;
    this.dairy = dairy;

    this.showInfo = function(){
        alert(`Customer: ${this.name}\nDrink: ${this.drink}\nSize: ${this.size}\n${this.drizzle==='Yes'?'Drizzle: Yes\n':''}${this.whippedCream==='Yes'?'Whipped Cream: Yes\n':''}${this.sweetener==='Yes'?'Sweetener: Yes\n':''}${this.coldFoam==='Yes'?'Cold Foam: Yes\n':''}Dairy: ${this.dairy}\n`);
    }
}
let orders = [];
const button = document.querySelector('button');
button.addEventListener('click', createOrder);
function createOrder(){
    // retrieve value on form
    const name = document.forms[0].name.value;
    const drink = document.forms[0].drink.value;
    const size = document.forms[0].size.value;
    const drizzle = document.forms[0].drizzle.value;
    const whippedCream = document.forms[0].whippedCream.value;
    const sweetener = document.forms[0].sweetener.value;
    const coldFoam = document.forms[0].coldFoam.value;
    const dairy = document.forms[0].dairy.value;
    if(Boolean(name)){
        orders.push(new order(name, drink, size, drizzle, whippedCream, sweetener, coldFoam, dairy));
        appendRecord(orders.length - 1);
        document.forms[0].reset();
    }
    else{
        alert("Please enter your name on the order.");
    }
}

function appendRecord(index){
    let table = document.querySelector('tbody');
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.scope = 'row';
    th.innerHTML = index + 1;
    tr.appendChild(th);
    let info = [orders[index].name, orders[index].drink, orders[index].size, orders[index].drizzle, orders[index].whippedCream, orders[index].sweetener, orders[index].coldFoam, orders[index].dairy];
    info.forEach(element => {
        let td = document.createElement('td');
        td.innerHTML = element;
        tr.appendChild(td);
    });
    let alertBtn = document.createElement('button');
    alertBtn.className = 'btn btn-outline-light';
    alertBtn.innerHTML = 'Show';
    alertBtn.id = index;
    alertBtn.onclick = alertOrder;
    let td = document.createElement('td');
    td.appendChild(alertBtn);
    tr.appendChild(td);
    table.appendChild(tr);
}

function alertOrder(event){
    orders[event.target.id].showInfo();
}