document.querySelector("button").addEventListener("click", genelFonk)

function genelFonk(e){

let giris = document.querySelector("input");
input = giris.value;


while (input>0) {
    let dizi = [];
    let sayac = 0;

    while (sayac<7) {

    let nums = Math.floor(Math.random()*90+1);
    dizi.sort(function(a,b){return a-b}).push(nums);
    sayac++;
}

let num = Math.floor(Math.random()*90+1);
dizi.push(num);
console.log(dizi);


    let ul = document.querySelector("ul");
    let li = document.createElement("li");

    li.innerHTML = `
        <span class="span">${dizi.join("-")}</span>
    `
    ul.appendChild(li);
input--;
}
}
