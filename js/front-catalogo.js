const filtros = document.querySelector(".filtros")
const nuevos = document.getElementById('0kms')
const usados = document.getElementById('usados')
const marcas = document.querySelectorAll('[name="marcas"]')
const abrir_filtros = document.querySelector(".boton-abrir")
const cerrar_filtros = document.querySelector(".boton-cerrar")

abrir_filtros.addEventListener("click", () => {
  filtros.classList.add("filtros-show")
})

cerrar_filtros.addEventListener("click", () => {
  filtros.classList.remove("filtros-show")
})

nuevos.addEventListener("click", () => {
  filtros.classList.remove("filtros-show")
})
usados.addEventListener("click", () => {
  filtros.classList.remove("filtros-show")
})

marcas.forEach(input => {
  input.addEventListener("click", () => {
    filtros.classList.remove("filtros-show")
  })
  
});

