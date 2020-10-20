function sumarUno(numero){
    var promesa = new Promise((resolve, reject) => {
        if(numero >= 7){
            reject("El numero es mas grande al permitido")
        }
        setTimeout(() => {
            resolve(numero + 1)
        }, 800)
    })
    return promesa
}

sumarUno(5)
    .then(nuevoNumero => sumarUno(nuevoNumero))
    .then(nuevoNumero => sumarUno(nuevoNumero))
    .then(nuevoNumero => {
        console.log(nuevoNumero)
        return sumarUno(nuevoNumero)
    })
    .catch( error => {
        console.log(error)
    })

// Puedes mandar todas las promesas que ocupes pero si falla alguna falla se detiene el proceso
// Se retorna la respuesta conforme agrupes las promesas

// Promise.all([sumarUno(), sumarUno])


// Puedes poner a competir las promesas que quieras
// Se retorna la respuesta mas rapida
// Si hay un error en otra respuesta que tarda mas lo ignorara
// Promise.race([sumarUno(), sumarUno()])