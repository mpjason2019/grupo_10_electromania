window.onload = function(){


    let formulario = document.querySelector(".form-register");





    formulario.addEventListener('submit', e =>{
        
        
        
    
        let errores= [];

        let nombre = document.querySelector ("#nombre");
        let apellido= document.querySelector ("#apellido");
        let email = document.querySelector ("#email");
        let password = document.querySelector ("#password");
        let celular = document.querySelector ("#celular");
        let avatar = document.querySelector("avatar")


        if (nombre.value == ""){

        errores.push("El campo nombre esta vacío")
        nombre.classList.add("is-invalid")

        } 
        else if(nombre.value.length < 2) {
          
            errores.push("El campo debe tener al menos 2 caracteres")
            nombre.classList.add("is-invalid")}
        
            
     else {
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
            formulario.nombre.focus();
        }
        

        if (apellido.value == ""){

            errores.push("El campo apellido esta vacío")
            apellido.classList.add("is-invalid")

    
    
            }  else if(apellido.value.length < 2) {
          
                errores.push("El campo debe tener al menos 2 caracteres")
                nombre.classList.add("is-invalid")}
            
            
            else {
                apellido.classList.add("is-valid");
                apellido.classList.remove("is-invalid");
                formulario.apellido.focus();
            }
    
        if (email.value == "" )
        {
            errores.push("El campo email esta vacío")
            nombre.classList.add("is-invalid")
      } 
        else {
                email.classList.add("is-valid");
                email.classList.remove("is-invalid");
                formulario.email.focus();
            }

            if (password.value == ""){
                errores.push("El campo password esta vacío")
                nombre.classList.add("is-invalid")    
          } 
          else if(password.value.length < 8) {
          
            errores.push("La contraseña debe tener al menos 8 caracteres")
            nombre.classList.add("is-invalid")}
            else {
                    password.classList.add("is-valid");
                    password.classList.remove("is-invalid");
                    formulario.celular.focus();
                }

                if  (celular.value == ""){

                    errores.push("El campo esta celular vacío")
                    celular.classList.add("is-invalid")     
                } else {
                       celular.classList.add("is-valid");
                       celular.classList.remove("is-invalid");
                    };

                    // if (avatar.value = !file) {
                    //     errores.push('Tienes que subir una imagen');
                    //     avatar.classList.add("is-invalid")   
                    // } else {
                    //     avatar.classList.add("is-valid");
                    //     avatar.classList.remove("is-invalid");
                        

                    //  }
            
                    



                  if(errores.length>0) {
                       e.preventDefault();
                    let ulErrors = document.querySelector(".errores");
                    console.log(ulErrors);
                    ulErrors.classList.add("alert-warning");
                    ulErrors.innerHTML = "";
                    for (let i = 0; i<errores.length;i++){
                        ulErrors.innerHTML += `<li> ${errores[i]} </li>`;
                    }}
                    else{
                        alert ("La validación fue exitosa")
                formulario.submit()};

                }

        
    )
}