const button = document.querySelector(".btn");
// console.log(button)
const inputtext = document.querySelector("#text");
const outputtext = document.querySelector("#output_data");
console.log(outputtext)
// console.log(txtInput)

let server_URL ="https://api.funtranslations.com/translate/minion.json"

function fetch_data(){
    console.log("fetch data start here : ")
    let url = "../data.json"
    console.log(inputtext.value)
    let full_url =  server_URL + "?" + "text=" + inputtext.value
    fetch(full_url).then((response) =>{
        return response.text()
    }).then((data) =>{
        all_data = JSON.parse(data)
        console.log(all_data)
        outputtext.innerText = all_data.contents.translated
    }).catch(errorHandler)
}

function errorHandler(){
    console.log("error occured");
    window.alert("something wrong with server! try again after some time")
}

button.addEventListener("click" , (e) =>{
    e.preventDefault()
    fetch_data()
})