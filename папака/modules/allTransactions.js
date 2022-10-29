import { fetchAll } from "./useHttp.js"
import { createHeader } from "./layout.js";
import { postTo } from "./useHttp.js"
createHeader()
import { reload } from "./transactions.js";
let user = JSON.parse(localStorage.getItem('user'))
fetchAll('transactions?userid=' + user.id)
    .then(res => reload(res, tbody))

let email = document.querySelector("a")
let tbody = document.querySelector('tbody')
let form = document.forms.name
console.log(form);
email.innerHTML = user.email

reload([1, 2, 3, 4], tbody)
let div = document.querySelector('.form')
let btn2 = document.querySelector('.add1')
let btn = document.querySelector('.addBtn')
btn.onclick = () => {
    window.location = "../pages/add.html"
}
console.log();