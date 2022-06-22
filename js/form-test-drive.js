const form_testdrive = document.querySelector("#form-test-drive")
const inputs_testdrive = document.querySelectorAll("#form-test-drive input")
const selects_testdrive = document.querySelectorAll("#form-test-drive select")
const checkbox_prefcontacto = document.querySelectorAll("#preferencia-contacto")

console.log(selects_testdrive)

const select_dia = document.querySelector("#dia-preferencia")
const select_horario = document.querySelector("#horario-preferencia")

const warning_nombre_testdrive = document.getElementById("warning-nombre-testdrive")
const warning_dni_testdrive = document.getElementById("warning-dni-testdrive")
const warning_email_testdrive = document.getElementById("warning-email-testdrive")
const warning_telefono_testdrive = document.getElementById("warning-telefono-testdrive")
const warning_horario_testdrive = document.getElementById("warning-horario-testdrive")
const warning_prefhorario_testdrive = document.getElementById("warning-prefhorario-testdrive")
const warning_prefdia_testdrive = document.getElementById("warning-prefdia-testdrive")

console.log(checkbox_prefcontacto[0].checked)

const regExp_testdrive = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	number: /^[0-9]{10,10}$/, // 6 a 20 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  dni: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/
}

let valores_testdrive = {
  nombre: false,
  email: false,
  telefono: false,
  dni: false,
  prefhorario: false,
  prefdia: false
}

const validarInputs_testdrive = (input) => {
  
  if(input.name === "nombre"){
    console.log("ENTRA")
    if(input.value.length < 2) 
    {
      input.classList.add("input-warning")
      warning_nombre_testdrive.innerText = "Este campo debe ser mayor a 2 caracteres"
      valores_testdrive.nombre = false
    }
    else
    {
      if(!regExp.name.test(input.value))
      {
        input.classList.add("input-warning")
        warning_nombre_testdrive.innerText = "Este campo solo puede contener letras"
        valores_testdrive.nombre = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_nombre_testdrive.innerText = ""
        valores_testdrive.nombre = true
      }
    }
  }

  if(input.name === "email")
  {
    if(input.value.length < 1) 
    {
      input.classList.add("input-warning")
      warning_email_testdrive.innerText = "Este campo es obligatorio"
      valores_testdrive.email = false
    }
    else
    {
      if(!regExp_testdrive.email.test(input.value))
      {
        input.classList.add("input-warning")
        warning_email_testdrive.innerText = "El valor ingresado no es un email"
        valores_testdrive.email = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_email_testdrive.innerText = ""
        valores_testdrive.email = true
      }
    }
  }
  if(input.name === "nrodni")
  {
    if(input.value.length < 1) 
    {
      input.classList.add("input-warning")
      warning_dni_testdrive.innerText = "Este campo es obligatorio"
      valores_testdrive.dni = false
    }
    else
    {
      if(!regExp_testdrive.dni.test(input.value))
      {
        input.classList.add("input-warning")
        warning_dni_testdrive.innerText = "El valor ingresado no es un dni"
        valores_testdrive.dni = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_dni_testdrive.innerText = ""
        valores_testdrive.dni = true
      }
    }
  }
  if(input.name === "telefono")
  {
    if(input.value.length < 1) 
    {
      input.classList.add("input-warning")
      warning_telefono_testdrive.innerText = "Este campo es obligatorio"
      valores_testdrive.telefono = false
    }
    else
    {
      if(!regExp_testdrive.number.test(input.value))
      {
        input.classList.add("input-warning")
        warning_telefono_testdrive.innerText = "Este campo no es un numero telefonico"
        valores_testdrive.telefono = false
      }
      else
      {
        input.classList.remove("input-warning")
        warning_telefono_testdrive.innerText = ""
        valores_testdrive.telefono = true
      }
    }
  }
}

const validarCheckbox_prefcontacto = () => {
  if( !checkbox_prefcontacto[0].checked &&
      !checkbox_prefcontacto[1].checked &&
      !checkbox_prefcontacto[2].checked) 
      {
        return false
      }
  else {
    return true
  }
}

const validarSelect_testdrive = (select) => {  
  
  console.log("entra")
  if(select.name === "dia-preferencia")
  {
    if(select.value <= 0)
    {
      select.classList.add("input-warning")
      warning_prefdia_testdrive.innerText = "Seleccione un dia de preferencia"
      valores_testdrive.prefdia = false
    }
    else
    {
      select.classList.remove("input-warning")
      warning_prefdia_testdrive.innerText = ""
      valores_testdrive.prefdia = true
    }
  }
  if(select.name === "horario-preferencia")
  {
    if(select.value <= 0)
    {
      select.classList.add("input-warning")
      warning_prefhorario_testdrive.innerText = "Seleccione un horario de preferencia"
      valores_testdrive.prefhorario = false
    }
    else
    {
      select.classList.remove("input-warning")
      warning_prefhorario_testdrive.innerText = ""
      valores_testdrive.prefhorario = true
    }
  }
}

inputs_testdrive.forEach(input => {
  input.addEventListener("keyup", () => validarInputs_testdrive(input))
  input.addEventListener("blur", () => validarInputs_testdrive(input))
});

selects_testdrive.forEach(select => {
  select.addEventListener("blur", () => validarSelect_testdrive(select))
  select.addEventListener("onclick", () => validarSelect_testdrive(select))
});




form_testdrive.addEventListener("submit" , (e) => {
  e.preventDefault()
  console.log(valores_testdrive)
  if(!valores_testdrive.nombre ||
     !valores_testdrive.email || 
     !valores_testdrive.telefono || 
     !valores_testdrive.dni ||
     !valores_testdrive.prefdia ||
     !valores_testdrive.prefhorario)
  {
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
    if(!validarCheckbox_prefcontacto())
      {
        Swal.fire({
          color: '#061A40',
          confirmButtonColor: '#0353A4',
          icon: 'error',
          title: 'Error',
          text: 'Debe seleccionar al menos una forma de contacto'
        })
        e.stopPropagation()
        return
      }
    Swal.fire({
      color: '#061A40',
      confirmButtonColor: '#0353A4',
      icon: 'success',
      title: 'Solicitud enviada exitosamente',
      text: 'Será contactado por medio de su preferencia de contacto seleccionada para confirmar su solicitud de Test-Drive'
    })

    inputs_testdrive.forEach(input => {
      input.value = ""
    });
  }
})