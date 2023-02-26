let cl = console.log;

function animation(id) {
    return document.getElementById(id).innerHTML = [...jump.innerHTML.trim()].map(ele => `<span>${ele}</span>`).join("");
}
cl(animation("jump"))



/* let jump = document.getElementById("jump");
cl(jump)

let text = jump.innerText;
cl(text);
let arr = [...text];
cl(arr);
let spanEle = arr.map(ele=>{
    return `<span>${ele}</span>`
});
cl(spanEle);
jump.innerHTML = spanEle.join(""); */