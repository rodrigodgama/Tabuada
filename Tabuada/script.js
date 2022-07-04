const numero = document.querySelector('#txtn');
const pesquisa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function codigo() {
    const res = document.querySelector('.resultado')
    if (numero.value === "") {
        alert(`[Erro] campo obrigatorio`)
    } else {
        for (let i = 0; i < pesquisa.length; i++) {
            res.innerHTML += (`${numero.value} * ${pesquisa[i]} =  ${numero.value * pesquisa[i] }  `)
           const pularLinha =  document.createElement('br')
           res.appendChild(pularLinha)
        }
    }
}


