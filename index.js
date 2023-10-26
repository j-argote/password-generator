const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let result1 = document.querySelector("#result1")
let result2 = document.querySelector("#result2")

function getRandomChar() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function newPassword() {
    let pass = ""
    for(let i = 0; i < 15; i++){
        pass += getRandomChar()
    }
    return pass
}

function populatePassBox() {
    let pass1 = newPassword()
    let pass2 = newPassword()
    result1.textContent = pass1
    result2.textContent = pass2
}

function copyText1(){
    let copiedText = result1.textContent
    navigator.clipboard.writeText(copiedText)
}

function copyText2(){
    let copiedText = result2.textContent
    navigator.clipboard.writeText(copiedText)
}

