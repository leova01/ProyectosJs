let d = document

const $divReloj = d.querySelector('#reloj')

setInterval(() => {
    let $reloj = new Date().toLocaleTimeString()
    $divReloj.innerHTML =`<h6> <b>${$reloj} </b> </h6>`
}, 0);