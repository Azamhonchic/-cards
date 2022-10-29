import { postTo } from "./useHttp.js"

let form = document.forms.name


let user = JSON.parse(localStorage.getItem('user'))






form.onsubmit = (e) => {
    e.preventDefault()

    let newTransaction = {
        id: Math.random(),
        userid: user.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        newTransaction[key] = value
    })

    postTo('transactions', newTransaction) 
        .then(() => window.location = "../pages/allTransactions.html")
}