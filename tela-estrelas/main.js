// Button
var btn = window.document.querySelector('button.btn')
btn.addEventListener('mouseenter', entrar)
btn.addEventListener('mouseout', sair)

function entrar() {
  btn.style.backgroundColor = 'white'
  btn.style.color = 'orange'
}

function sair() {
  btn.style.backgroundColor = 'orange'
  btn.style.color = 'white'
}

// Bolinhas

var section = window.document.getElementsByName('section')

var primeiro = window.document.getElementById('primeiro')
var segundo = window.document.getElementById('segundo')
var terceiro = window.document.getElementById('terceiro')
var quarto = window.document.getElementById('quarto')
var quinto = window.document.getElementById('quinto')

primeiro.addEventListener('mouseenter', entrar1)
segundo.addEventListener('mouseenter', entrar2)
terceiro.addEventListener('mouseenter', entrar3)
quarto.addEventListener('mouseenter', entrar4)
quinto.addEventListener('mouseenter', entrar5)

primeiro.addEventListener('mouseout', sair1)
segundo.addEventListener('mouseout', sair2)
terceiro.addEventListener('mouseout', sair3)
quarto.addEventListener('mouseout', sair4)
quinto.addEventListener('mouseout', sair5)

primeiro.addEventListener('click', selecionada1)
segundo.addEventListener('click', selecionada2)
terceiro.addEventListener('click', selecionada3)
quarto.addEventListener('click', selecionada4)
quinto.addEventListener('click', selecionada5)

// Bolinha Entrar

function entrar1() {
  primeiro.style.backgroundColor = 'orange'
}

function entrar2() {
  segundo.style.backgroundColor = 'orange'
}

function entrar3() {
  terceiro.style.backgroundColor = 'orange'
}

function entrar4() {
  quarto.style.backgroundColor = 'orange'
}

function entrar5() {
  quinto.style.backgroundColor = 'orange'
}

// Bolinha Sair

function sair1() {
  primeiro.style.backgroundColor = '#3d434b'
}

function sair2() {
  segundo.style.backgroundColor = '#3d434b'
}

function sair3() {
  terceiro.style.backgroundColor = '#3d434b'
}

function sair4() {
  quarto.style.backgroundColor = '#3d434b'
}

function sair5() {
  quinto.style.backgroundColor = '#3d434b'
}

// Bolinha Selecionada

switch (section) {
  case 0:
    
    break
}
