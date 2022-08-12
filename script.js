const dispElement = document.getElementById('pwd-display')
const lenElement = document.getElementById('length')
const upperElement = document.getElementById('upper')
const lowerElement = document.getElementById('lower')
const numberElement = document.getElementById('number')
const symbolElement = document.getElementById('symbol')
const genBtnElement = document.getElementById('gen-btn')
const copyBtnElement = document.getElementById('copy-btn')
const alertElement = document.getElementById('alert')

function generatePassword() {
    const len = +lenElement.value;
    let generatedPassword = '';
    for(let i=0; i<len; i++){
        const password = generateRandom();
        generatedPassword+= password
    }

    dispElement.value = generatedPassword;

}

function generateRandom(){
    const passArray = [];
    if(upperElement.checked){
        passArray.push(getUpper())
    }
    if(lowerElement.checked){
        passArray.push(getLower())
    }
    if(numberElement.checked){
        passArray.push(getNumber())
    }
    if(symbolElement.checked){
        passArray.push(getSymbol())
    }

    if(passArray.length === 0) return "";

    return passArray[Math.floor(Math.random() * passArray.length)]
}


genBtnElement.addEventListener('click', generatePassword)


function getUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26 + 65));
}


function getLower(){
    return String.fromCharCode(Math.floor(Math.random()*26 + 97));
}


function getNumber(){
    return String.fromCharCode(Math.floor(Math.random()*9 + 48));
}


function getSymbol(){
    const symbols = '!@#$%^&*()={}[]<>/';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

copyBtnElement.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = dispElement.value;

    if(!password) return;
    
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    document.getElementById('alert-box').style.display='block';
})



