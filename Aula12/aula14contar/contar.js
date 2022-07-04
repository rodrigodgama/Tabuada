function contar() {
    let ini = document.querySelector(`#txti`);
    let fim = document.getElementById(`txtf`);
    let passo = document.getElementById(`txtp`);
    let res = document.getElementById(`res`)

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[Erro] Faltam dados!!!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        if (p <=0){
            alert('Passo Invalido!')
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
   
}

