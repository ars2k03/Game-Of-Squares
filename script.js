let x = document.getElementById("shape1");
let y = document.getElementById("shape2");
let z = document.getElementById("shape3");
let p = document.getElementById("shape4");

let clr = "red";
x.addEventListener("mouseenter", function(){
    x.innerHTML =`<h1>${4}</h1>`;
    p.innerHTML =`<h1>${1}</h1>`;
    p.style.backgroundColor = "blanchedalmond";
    if(clr === "red"){
        x.style.backgroundColor = clr;
        clr = "green";
    }

    else if(clr === "green"){
        x.style.backgroundColor = clr;
        clr = "blue";
    }

    else{
        x.style.backgroundColor = clr;
        clr = "red";
    }
})

x.addEventListener("mouseleave", function(){
    x.innerHTML =`<h1>${1}</h1>`;
    p.innerHTML =`<h1>${4}</h1>`;
    x.style.backgroundColor = "blanchedalmond";
    p.style.backgroundColor = "white";
})

y.addEventListener("mouseenter", function(){
    y.style.backgroundColor = "white";
    x.style.backgroundColor = "red";
    z.style.backgroundColor = "blue";
    p.style.backgroundColor = "gray";
    let r = Math.floor(Math.random()*100);

    y.innerHTML = `<h1>${r}</h1>`;
})

y.addEventListener("mouseleave", function(){
    y.style.backgroundColor = "blanchedalmond";
    x.style.backgroundColor = "blanchedalmond";
    z.style.backgroundColor = "blanchedalmond";
    p.style.backgroundColor = "blanchedalmond";
    let r = Math.floor(Math.random()*100);
    y.innerHTML = `<h1>${2}</h1>`;
})

z.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*100);
    let s = Math.floor(Math.random()*100);
    let t = Math.floor(Math.random()*100);
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    x.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    y.style.backgroundColor = `rgb(${c}, ${a}, ${b})`;
    p.style.backgroundColor = `rgb(${b}, ${c}, ${a})`;
    x.innerHTML = `<h1>${r}</h1>`;
    y.innerHTML = `<h1>${s}</h1>`;
    p.innerHTML = `<h1>${t}</h1>`;
})

z.addEventListener("mouseleave", function(){
    x.style.backgroundColor = "blanchedalmond";
    y.style.backgroundColor = "blanchedalmond";
    p.style.backgroundColor = "blanchedalmond";
    x.innerHTML = `<h1>${1}</h1>`;
    y.innerHTML = `<h1>${2}</h1>`;
    p.innerHTML = `<h1>${4}</h1>`;
})

p.addEventListener("mousemove", function(){
    let r = Math.floor(Math.random()*100);
    let s = Math.floor(Math.random()*100);
    let t = Math.floor(Math.random()*100);
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    x.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    y.style.backgroundColor = `rgb(${c}, ${a}, ${b})`;
    z.style.backgroundColor = `rgb(${b}, ${c}, ${a})`;
    x.innerHTML = `<h1>${r}</h1>`;
    y.innerHTML = `<h1>${s}</h1>`;
    z.innerHTML = `<h1>${t}</h1>`;
    p.innerHTML = `<h1>${1}</h1>`;
})

p.addEventListener("mouseleave", function(){
    x.style.backgroundColor = "red";
    y.style.backgroundColor = "green";
    z.style.backgroundColor = "blue";
    p.style.backgroundColor = "yellow";
    x.innerHTML = `<h1>${1}</h1>`;
    y.innerHTML = `<h1>${2}</h1>`;
    z.innerHTML = `<h1>${3}</h1>`;
    p.innerHTML = `<h1>${4}</h1>`;
})