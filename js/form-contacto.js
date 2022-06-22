const form = document.querySelector("#form-contacto")
const inputs = document.querySelectorAll("#form-contacto input")
const select = document.querySelector("#form-contacto select")
const warning_nombre = document.getElementById("warning-nombre")
const warning_email = document.getElementById("warning-email")
const warning_telefono = document.getElementById("warning-telefono")
const warning_horario = document.getElementById("warning-horario")

const regExp = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	number: /^[0-9]{10,10}$/, // 6 a 20 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

let valores = {
  nombre: false,
  email: false,
  telefono: false,
  horario: false,
}

const validarInput = (input) => {
  if(input.name === "nombre")
  {
    if(input.value.length < 2) 
    {
      input.classList.add("input-warning")
      warning_nombre.innerText = "Este campo debe ser mayor a 2 caracteres"
      valores.nombre = false
    }
    else
    {
      if(!regExp.name.test(input.value))
      {
        input.classList.add("input-warning")
        warning_nombre.innerText = "Este campo solo puede contener letras"
        valores.nombre = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_nombre.innerText = ""
        valores.nombre = true
      }
    }
  }
  if(input.name === "email")
  {
    if(input.value.length < 1) 
    {
      input.classList.add("input-warning")
      warning_email.innerText = "Este campo es obligatorio"
      valores.email = false
    }
    else
    {
      if(!regExp.email.test(input.value))
      {
        input.classList.add("input-warning")
        warning_email.innerText = "El valor ingresado no es un email"
        valores.email = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_email.innerText = ""
        valores.email = true
      }
    }
  }
  if(input.name === "telefono")
  {
    if(input.value.length < 1) 
    {
      input.classList.add("input-warning")
      warning_telefono.innerText = "Este campo es obligatorio"
      valores.telefono = false
    }
    else
    {
      if(!regExp.number.test(input.value))
      {
        input.classList.add("input-warning")
        warning_telefono.innerText = "Este campo no es un numero telefonico"
        valores.telefono = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_telefono.innerText = ""
        valores.telefono = true
      }
    }
  }
  
}
const validarSelect = (select) => {
  if(select.value <= 0)
  {
    select.classList.add("input-warning")
    warning_horario.innerText = "Seleccione un horario"
    valores.horario = false
  }
  else
  {
    select.classList.remove("input-warning")
    warning_horario.innerText = ""
    valores.horario = true
  }
}

inputs.forEach(input => {
  input.addEventListener("keyup", () => validarInput(input))
  input.addEventListener("blur", () => validarInput(input))
});
select.addEventListener("blur", () => validarSelect(select))
select.addEventListener("onclick", () => validarSelect(select))


form.addEventListener("submit" , (e) => {
  e.preventDefault()
  if(!valores.nombre || !valores.email || !valores.telefono || !valores.horario)
  {
    // Swal.fire(
    //   'Error',
    //   'Debe completar todos los campos',
    //   'error'
    // )
    Swal.fire({
      color: '#061A40',
      confirmButtonColor: '#0353A4',
      icon: 'error',
      title: 'Error',
      text: 'Debe completar todos los campos.'
    })
    e.stopPropagation()
  }
  else
  {
    Swal.fire({
      color: '#061A40',
      confirmButtonColor: '#0353A4',
      icon: 'success',
      title: 'Consulta enviada exitosamente',
      text: 'Será contactado durante el horario de disponibilidad registrado'
    })

    inputs.forEach(input => {
      input.value = ""
    });
  }
})