const forma = document.querySelector("#form");
const input = document.querySelector("#input");
const son = document.querySelector("#userNumber");
const plusTugma = document.querySelector("#plus");
const minusTugma = document.querySelector("#minus");
const rangTanlash = document.querySelector("#colorPicker");

forma.addEventListener("submit", function(event) {
    event.preventDefault();
    const kiritilganSon = input.value;
    if (kiritilganSon !== "") {
        son.textContent = kiritilganSon;
    }
    else{
        alert("Son kiritmadizu brat")
    }
});

plusTugma.addEventListener("click", function() {
    let hozirgiSon = son.textContent;
    hozirgiSon = +hozirgiSon + 1;
    son.textContent = hozirgiSon;
});

minusTugma.addEventListener("click", function() {
    let hozirgiSon = son.textContent;
    hozirgiSon = +hozirgiSon - 1; 
    son.textContent = hozirgiSon;
});

rangTanlash.addEventListener("input", function() {
    son.style.color = rangTanlash.value;
});
