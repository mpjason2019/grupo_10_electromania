window.onload = function(){


let formulario = document.querySelector("#form");






    formulario.addEventListener('submit', e =>{
      
     
        
        
        
    
        let errores= [];

        let nombre = document.querySelector ("#nombre");
        let descripcion= document.querySelector ("#description");
        let imagen = document.querySelector("#imagen")
        console.log(formulario,nombre,descripcion,imagen);


        if (nombre.value == ""){
            
        errores.push("El campo nombre esta vacío")
        nombre.classList.add("is-invalid")
        } 
        else if(nombre.value.length < 5) {
          
         errores.push("El campo debe tener al menos 5 caracteres")
         nombre.classList.add("is-invalid")}

        else{
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
            formulario.nombre.focus();
            console.log(nombre)
        }

        
        

        if (descripcion.value == ""){
            errores.push("El campo descripción esta vacío")
            descripcion.classList.add("is-invalid")}
    
         else if(descripcion.value.length < 20) {
            
            errores.push("El campo debe tener al menos 20 caracteres")
            nombre.classList.add("is-invalid")} 
            
            else {
                descripcion.classList.add("is-valid");
                descripcion.classList.remove("is-invalid");
                formulario.descripcion.focus();
            }

        
            // if (imagen.value == ""){console.log(imagen)
            //     errores.push("Tienes que subir una imagen")
            //     descripcion.classList.add("is-invalid")}
        
            //    else if(imagen =! ".png, .jpg, .gif") {
                
            //     errores.push("la imagen debe tener formato .png, .jpg, .gif")
            //     nombre.classList.add("is-invalid")} 
                
            //     else {
            //         descripcion.classList.add("is-valid");
            //         descripcion.classList.remove("is-invalid");
            //         formulario.imagen.focus();
            //     }



    
       


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