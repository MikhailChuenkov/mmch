var cellCart = document.createElement("div");
cellCart.id = "cell_cart";
cellCart.innerHTML = "Это корзина";
cellCart.style.color = "green";
cart.appendChild(cellCart);
    var cellBr = document.createElement("br");
//Заполняем корзину
function buyNokia() {
    var cellCartProdNokia = document.createElement("span");
    cellCartProdNokia.className = "cell_cart_name";
    var priceNokia = 200;
    var cellCartProdNameNokia = "Nokia " + priceNokia + " p";
    cellCartProdNokia.innerText = cellCartProdNameNokia;
    cart.appendChild(cellCartProdNokia);
    cellCartProdNokia.appendChild(cellBr);

    function sumNokia (n) {
        return  n = n + 1;
        }
    console.log(sumNokia(0));
}
function buySamsung() {
    var cellCartProdSamsung = document.createElement("span");
    cellCartProdSamsung.className = "cell_cart_name";
    var priceSamsung = 300;
    var cellCartProdNameSamsung = "Samsung " + priceSamsung + " p";
    cellCartProdSamsung.innerText = cellCartProdNameSamsung;
    cart.appendChild(cellCartProdSamsung);
    cellCartProdSamsung.appendChild(cellBr);
    var s = 1;
    s++;
    console.log(s);
}
function buyMotorola() {
    var cellCartProdMotorola = document.createElement("span");
    cellCartProdMotorola.className = "cell_cart_name";
    var priceMotorola = 400;
    var cellCartProdNameMotorola = "Motorola " + priceMotorola + " p";
    cellCartProdMotorola.innerText = cellCartProdNameMotorola;
    cart.appendChild(cellCartProdMotorola);
    cellCartProdMotorola.appendChild(cellBr);

    function sumMotorola (m) {
        return  m = m + 1;
        }
    console.log(sumMotorola(0));
}
function buyYotaPhon() {
    var cellCartProdYotaPhon = document.createElement("span");
    cellCartProdYotaPhon.className = "cell_cart_name";
    var priceYotaPhon = 500;
    var cellCartProdNameYotaPhon = "YotaPhon " + priceYotaPhon + " p";
    cellCartProdYotaPhon.innerText = cellCartProdNameYotaPhon;
    cart.appendChild(cellCartProdYotaPhon);
    cellCartProdYotaPhon.appendChild(cellBr);

    function sumYotaPhon (y) {
        return  y = y + 1;
        }
    console.log(sumYotaPhon(0));
}
function sumTotal() {
    var cellSumTotal = document.createElement("span");
    cellSumTotal.className = "cell_cart_name";

    var cellSumTotalRun = (priceNokia * n + priceSamsung * s + priceMotorola * m + priceYotaPhon * y);
    cellSumTotal.innerText = cellSumTotalRun;
    sum.appendChild(cellSumTotal);    
}


