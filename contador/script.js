function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById(`txtf`)
    let passo = document.getElementById(`txtp`)
    let res = document.getElementById(`res`)

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       res.innerHTML = `Impossivel Contar!`
        window.alert(`[ERRO] Faltam dados!`)
    } else {
        res.innerHTML = `contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
        }
              // Contagem crescente
        for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1f449}`
        } else {
            // contagem decrescente
            for(let c = i; c >=f; c-=p) {
                res.innerHTML+= ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += ``
    }
}
