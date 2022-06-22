const catalogo = document.getElementById("catalogo")
const input_nuevos = document.getElementById('0kms')
const input_usados = document.getElementById('usados')
const inputs_marcas = document.querySelectorAll('[name="marcas"]')
const buscador = document.querySelector(".buscador")

let todos_los_autos = []
let autos_filtrados = []

buscador.addEventListener("keyup", (e) => {
  if(autos_filtrados.length > 0)
  {
    let autos_buscar = autos_filtrados.filter(auto => auto.nombre.includes(e.target.value))
    mostrarAutos(autos_buscar)
  }
  else mostrarAutos(autos_filtrados)
})

const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')

const mostrarAutos = (autos) => {
  catalogo.innerHTML = ""
  if(autos.length > 0){
    autos.forEach(auto => {
        const card_auto = document.createElement("div")
        card_auto.setAttribute("class", "card card-auto")
        card_auto.innerHTML +=
          `<img src="../imgs/autos/${auto.imagen}" class="card-img-top" alt="imagen-auto">
          <div class="card-body">
            <h5 class="card-title">${capitalizeFirstLetter(auto.marca)} ${capitalizeFirstLetter(auto.nombre)}</h5>
            <p class="card-text">combustible: ${auto.combustible}</p>
            <p class="card-text">transmisión: ${auto.transmision}</p>
            <div class="botones-card">
              <button class="boton" data-bs-toggle="modal" data-bs-target="#modalContacto"><span class="boton-texto">Consultar</span></button>
              <button class="boton" data-bs-toggle="modal" data-bs-target="#modalTestDrive"><span class="boton-texto">Solicitar Test-drive</span></button>
            </div>
          </div>
          `
        catalogo.appendChild(card_auto)
    })
  }
  else {
    const sin_resultados = document.createElement("div")
    sin_resultados.innerHTML += '<p class="sin-resultados">Lo sentimos. No hay resultados para tu busqueda.</p>'
    catalogo.appendChild(sin_resultados)
  }
}

const getAutosNuevos = () => {
  fetch("../autos-0kms.json")
  .then(res => res.json())
  .then(res => {
    todos_los_autos = res
    autos_filtrados = res
    mostrarAutos(todos_los_autos)
    if(!inputs_marcas[0].checked){
      filtrarAutos(todos_los_autos)
    }
  });
}

const getAutosUsados = () => {
  fetch("../autos-usados.json")
  .then(res => res.json())
  .then(res => {
    todos_los_autos = res
    autos_filtrados = res
    mostrarAutos(todos_los_autos)
    if(!inputs_marcas[0].checked){
      filtrarAutos(todos_los_autos)
    }
  });
}

const filtrarAutos = (autos) => {
  autos_filtrados = []
  if(inputs_marcas[1].checked){
    autos_filtrados = autos.filter(auto => auto.marca === inputs_marcas[1].value)
  }
  if(inputs_marcas[2].checked){
    autos_filtrados = autos.filter(auto => auto.marca === inputs_marcas[2].value)
  }
  if(inputs_marcas[3].checked){
    autos_filtrados = autos.filter(auto => auto.marca === inputs_marcas[3].value)
  }
  if(inputs_marcas[4].checked){
    autos_filtrados = autos.filter(auto => auto.marca === inputs_marcas[4].value)
  }
  if(inputs_marcas[5].checked){
    autos_filtrados = autos.filter(auto => auto.marca === inputs_marcas[5].value)
  }
  mostrarAutos(autos_filtrados)
}

input_nuevos.addEventListener("click", getAutosNuevos)
input_usados.addEventListener("click", getAutosUsados)

inputs_marcas.forEach(input => {
  input.addEventListener("click",() => filtrarAutos(todos_los_autos))
})

inputs_marcas[0].addEventListener("click",() => mostrarAutos(todos_los_autos))

getAutosNuevos()
