const botao = document.getElementById("button")
botao.addEventListener("click", () => {
    const min = document.getElementById("lowercase").checked
    const mai = document.getElementById("uppercase").checked
    const num = document.getElementById("numbers").checked
    const sim = document.getElementById("symbols").checked
    const length = document.getElementById("range").value

    const senha = gerarSenha(length, min, mai, num, sim)
    document.getElementById("pass").value = senha
});


function gerarSenha(length, min, mai, num, sim) {
    let caracteres = ""
    let obri = []

    if (min) {
        caracteres += "abcdefghijklmnopqrstuvwxyz"
        obri.push("abcdefghijklmnopqrstuvwxyz")
    }
    if (mai) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        obri.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if (num) {
        caracteres += "0123456789"
        obri.push("0123456789")
    }
    if (sim) {
        caracteres += "*$@+-!#~><?"
        obri.push("*$@+-!#~><?")
    }

    if (caracteres.length == 0) {
        return "Selecione pelo menos uma opção";
    }

    let password = ""
    obri.forEach(group => {
        const randomi = Math.floor(Math.random() * group.length)
        password += group[randomi]
    })

    for (let i = obri.length; i < length; i++) {
        const random = Math.floor(Math.random() * caracteres.length)
        password += caracteres[random]
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('')

    return password
}

let range = document.getElementById("range")
let value = document.getElementById("rangeValue")

range.addEventListener('input', () =>{
    rangeValue.textContent = range.value
})